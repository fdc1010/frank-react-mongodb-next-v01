import clientPromise from "@utils/mongodb"

export default async function handler(req, res) {
  const matchBy = req.query.matchBy
  const filterBy = req.query.filterBy
  const orderBy = req.query.orderBy
  const client = await clientPromise
  const db = client.db()
  switch (req.method) {
    // case "POST":
    //   let bodyObject = JSON.parse(req.body)
    //   let myPost = await db.collection("cities").insertOne(bodyObject)
    //   res.json(myPost.ops[0])
    //   break
    case "GET":
      const pipeline = [
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
      ]
      const filterNumVal = +filterBy
      if(!!filterNumVal){
        // for(let i = pipeline.length; i > filterNumVal - 1; i--){
        //   pipeline[i] = pipeline[i-1]
        // }
        if(filterNumVal === 1){
          pipeline.splice(filterNumVal-1, 0, {
            '$match': {
              name: { '$regex': RegExp(matchBy, 'i') }
            }
          })
          pipeline.splice(filterNumVal, 0, {
            $sort:
              {
                name: +orderBy,
              },
          })
        }else{
          pipeline.splice(filterNumVal-1, 0, {
            '$match': {
              'factory.type.name': { '$regex': RegExp(matchBy, 'i') }
            }
          })
          pipeline.splice(filterNumVal, 0, {
            $sort:
              {
                'factory.type.name': +orderBy,
              },
          })
        }
      }
      const allRecs = await db.collection("cities")
            .aggregate(pipeline)
      const records = await allRecs.toArray()   
      res.json({ status: 200, data: records })
      break
  }
}
