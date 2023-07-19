import React, { useEffect } from "react"
import { CircularProgress } from "@chakra-ui/react"
import UserList from "@components/UserList"

export default function Home(){
  const ids = []
  
  useEffect(()=>{
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return ids.length === 0 ? <CircularProgress isIndeterminate /> : <UserList userIds={ids} />
}