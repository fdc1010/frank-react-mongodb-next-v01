import Head from "next/head"
import { ChakraProvider } from "@chakra-ui/react"
import Layout from "@layout/index"

export default function MyApp({ Component, pageProps }) {
  
  return (
      <>
        <Head>
          <title>Franklin React React with NextJS</title>
        </Head>
        <ChakraProvider>
          <Layout>
            <Component { ...pageProps } />
          </Layout>        
        </ChakraProvider>
      </>
  )
}
