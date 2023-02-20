import React from 'react'
import Head from 'next/head';

const Faviconheader = () => {
    let isDealer;
    if (typeof window !== 'undefined') {
        localStorage.removeItem(`grand_total`)
        isDealer = localStorage.getItem("isDealer");
      }
  return (
    <> 
    <Head>
    <link rel="icon" href="/favicon.ico" />       
   </Head></>
  )
}

export default Faviconheader