import Head from "next/head"
import { ChakraProvider } from "@chakra-ui/react"
import Layout from "@layout/index"
import React from "react"
import ErrorBoundary from "@components/ErrorBoundary"

export default function MyApp({ Component, ...rest }) {
  
  return (
      <ErrorBoundary>
        <Head>
          <title>Franklin React React with NextJS</title>
        </Head>
        <ChakraProvider>
          <Layout>
            <Component {...rest.pageProps} />
          </Layout>        
        </ChakraProvider>
      </ErrorBoundary>
  )
}
