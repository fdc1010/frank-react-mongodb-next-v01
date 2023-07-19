import React, { useEffect, useState } from "react"
import { CircularProgress } from "@chakra-ui/react"
import List from "@components/List"

export default function Home({allPosts}){
  const [lists, setLists] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/api/lists")
    .then(res => res.json())
    .then(data => {
      setLists(data);
    }).catch((e) => {console.log(e)});
  }, []);
  return lists.length > 0 ? <List lists={lists} /> : <CircularProgress isIndeterminate /> 
}

export async function getServerSideProps(context) {
  let res = await fetch("http://localhost:3000/api/lists", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let allPosts = await res.json();

  return {
    props: { allPosts },
  };
}
