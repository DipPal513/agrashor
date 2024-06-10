import Head from 'next/head'
import React from 'react'

const MetaData = ({TITLE}) => {
  return (
    <Head>
    <title>NOTICE DETAILS::{TITLE}</title>
    <meta name="description" content={TITLE} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.jpeg" />
  </Head>
  )
}

export default MetaData