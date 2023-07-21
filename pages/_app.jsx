import Head from "next/head"
import { ChakraProvider } from "@chakra-ui/react"
import Layout from "@layout/index"
import useSWR from 'swr'
import { SWRProvider } from '@pages/swr-provider'
import { getAllList } from "@services/api"

export default function MyApp({ Component, pageProps, fallback }) {
  
  return (
      <SWRProvider value={{ fallback }}>
        <Head>
          <title>Franklin React React with NextJS</title>
        </Head>
        <ChakraProvider>
          <Layout>
            <Component { ...pageProps } />
          </Layout>        
        </ChakraProvider>
      </SWRProvider>
  )
}

export async function getStaticProps () {
  // `getStaticProps` is executed on the server side.
  const records = await getAllList()
  return {
    props: {
      fallback: {
        'api/lists': records
      }
    }
  }
}