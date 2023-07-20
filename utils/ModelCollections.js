import clientPromise from "@utils/mongodb"
export default async function setModelCollections(){
  const client = await clientPromise
  const db = client.db()

  const City = db.cities
  const FactoryType = db.factorytypes
  const Factory = db.factories
  const MachineClass = db.machineclasses
  const Machine = db.machines
  const Part = db.parts

  return { db, City, Factory, FactoryType, MachineClass, Machine, Part }
}

