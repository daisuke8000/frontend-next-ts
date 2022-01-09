import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from 'next/app'
import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import {Header} from "../components/Layout/Header";

const theme: ThemeConfig = extendTheme({
    styles: {
        global:{
            "html, body":{
                bg: 'pink.50',
            },
        },
    },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider theme={theme}>
          <Header/>
        <Component {...pageProps}/>
      </ChakraProvider>
  )
}

export default MyApp
