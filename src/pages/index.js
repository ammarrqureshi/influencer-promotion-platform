import Head from 'next/head'
import { Inter } from 'next/font/google'
import Test from '@/components/Test'


export default function Home() {
  return (
    <>
    <Test></Test>
      <Head>
        <title>PostDost</title>
        <meta name="description" content="Owned by PostDost" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
    </>
  )
}
