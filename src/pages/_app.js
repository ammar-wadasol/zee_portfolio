import '../styles/globals.css'
import Head from 'next/head'
import Layout from '@/components/layout/main'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Portfoliio</title>
      <meta name="description" content="Portfolio App using nextjs" key="title" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
