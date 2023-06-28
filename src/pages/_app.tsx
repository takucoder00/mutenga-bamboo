
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { MantineProvider } from '@mantine/core';
import Header from '@/components/header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >

      <Header/>
      <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}

export default MyApp
