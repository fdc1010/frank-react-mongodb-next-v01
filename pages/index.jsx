import React, { useEffect, useState } from "react"
import { CircularProgress } from "@chakra-ui/react"
import List from "@components/List"
import { getAllList } from "@services/api"
import ListControl from "@components/ListControl"

export default function Home({ records }) {
  const [lists, setLists] = useState([])
  useEffect(() => {
    if (!!records) setLists(records)
  }, [lists])
  return lists.length > 0 ? (
    <>
      <ListControl />
      <List lists={lists} />
    </>
  ) : (
    <CircularProgress isIndeterminate />
  )
}

export async function getServerSideProps() {
  const records = await getAllList()
    .then((rec) => rec.data)
    .catch(() => [])
  return {
    props: { records },
  }
}
