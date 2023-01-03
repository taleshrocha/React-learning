import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
{/*import Script from 'next/script'*/ }

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First post</title>
      </Head>
      {/*
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      */}
      <h1>First post!</h1>

      <h2>Go to <Link href="/">first page</Link></h2>
    </Layout>
  )
}
