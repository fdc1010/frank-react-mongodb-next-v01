import React, { useCallback, useEffect, useState } from "react"
import { CircularProgress } from "@chakra-ui/react"
import List from "@components/List"
import { getAllList, getFilterList } from "@services/api"
import ListControl from "@components/ListControl"

export default function Home({ records }) {
  const catArr = [0, 1, 4]
  const [lists, setLists] = useState([])
  const [matchBy, setMatchBy] = useState("")
  const [filterBy, setFilterBy] = useState(0)
  const [orderBy, setOrderBy] = useState(false)
  useEffect(() => {
    if (!!records) setLists(records)
  }, [records])

  const onHandleBlur = async (e) => {
    setMatchBy(e)
    const params = { matchBy: e, filterBy, orderBy }
    if (!!e) {
      const rec1 = await getFilterList({ params })
        .then((res) => res)
        .then((rec) => rec.data)
        .catch((_) => [])
      if (rec1.length > 0) setLists(rec1)
    }
  }
  const onHandleSelect = async (e) => {
    const ind = e ?? 0
    setFilterBy(catArr[ind])
    const params = { matchBy, filterBy: catArr[ind], orderBy }
    const rec2 = await getFilterList({ params })
      .then((res) => res)
      .then((rec) => rec.data)
      .catch((_) => [])
    setLists(rec2)
  }
  const onHandleCheck = async (e) => {
    const ord = e ? 1 : -1
    setOrderBy(ord)
    const params = { matchBy, filterBy, orderBy: ord }
    const rec3 = await getFilterList({ params })
      .then((res) => res)
      .then((rec) => rec.data)
      .catch((_) => [])
    if (rec3.length > 0) setLists(rec3)
  }

  return (
    <>
      <ListControl
        onBlur={onHandleBlur}
        onSelect={onHandleSelect}
        onCheck={onHandleCheck}
      />
      {lists.length > 0 ? (
      <List lists={lists} />
      ) : (
      <CircularProgress isIndeterminate />)}
    </>
  )
}

export async function getServerSideProps(context) {
  const name = context.query.name
  const records = await getAllList()
    .then((res) => res)
    .then((rec) => rec.data)
    .catch((_) => [])
  return {
    props: { records },
  }
}
