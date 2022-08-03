import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div style={{maxWidth: '1200px', height:'inherit',  margin:'0 auto', background: 'white', position: 'relative', paddingTop: '64px'}}>
      <Component {...pageProps} />
    </div>
    </>
}

export default MyApp
