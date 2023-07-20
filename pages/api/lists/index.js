import clientPromise from "@utils/mongodb"

export default async function handler(req, res) {
  const client = await clientPromise
  const db = client.db()
  switch (req.method) {
    // case "POST":
    //   let bodyObject = JSON.parse(req.body)
    //   let myPost = await db.collection("cities").insertOne(bodyObject)
    //   res.json(myPost.ops[0])
    //   break
    case "GET":
      const allRecs = await db.collection("cities")
            .aggregate([
              {
                $lookup: {
                  from: 'factories',
                  localField: '_id',
                  foreignField: 'city',
                  as: 'factory'
                }
              },
              {
                $unwind: {
                  path: '$factory',
                  preserveNullAndEmptyArrays: true
                }
              },
              {
                $lookup: {
                  from: 'factorytypes',
                  localField: 'factory.type',
                  foreignField: '_id',
                  as: 'factory.type'
                }
              },
              {
                $group: {
                  _id: '$_id',
                  name: { $first: '$name' },
                  factory: { $push: '$factory' },
                  created_at: { $first: '$created_at' },
                  updated_at: { $first: '$updated_at' }
                }
              }
            ])
      const records = await allRecs.toArray()      
      res.json({ status: 200, data: records })
      break
  }
}
