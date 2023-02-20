import Layout from "../components/Layout";

import { persistor, store } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";

import "../styles/globals.scss";
import Head from "next/head";
import Script from "next/script";

// import "../styles/globals.css";
import type { AppProps } from "next/app";
// import { wrapper } from '../store/store';
import { SSRProvider } from "react-bootstrap";
// import "../styles/mobile_nav.css";
import { useAmp } from "next/amp";
import Scrolltop from '../components/Scrolltop'
import { useState, useLayoutEffect, useRef } from "react";
export const config = { amp: 'hybrid' }

function MyApp({ Component, pageProps }: AppProps) {
  // const { store, props } = wrapper.useWrappedStore(rest);
  // let dataLayer:any;
  // let push:any
  const isAmp = useAmp();
  const articleRef = useRef<null | HTMLParagraphElement>(null)

  return (
    <div>
      {isAmp ? "" : (
        <>

          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-RV10FWEBRM"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-RV10FWEBRM');
        `}
          </Script>


          {/* <!-- Google Tag Manager --> */}

          {/* <Script>
            {`
            (function(w,d,s,l,i)
            {w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })`}
            (window,document,'script','dataLayer','GTM-T8R5MCZ');
          </Script> */}
          {/* <!-- End Google Tag Manager --> */}


          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T8R5MCZ"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
          </noscript>

          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              {() => (
                <div ref={articleRef}>
                <Layout>
                  <Component {...pageProps} />
                  <Scrolltop articleRef={articleRef}/>
                </Layout>
                </div>
              )}
            </PersistGate>
          </Provider>



        </>
      )}
    </div>
  )
  // return (
  //   <>

  //       <Script
  //       src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
  //       integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
  //       crossOrigin="anonymous"
  //     />

  // <SSRProvider>
  //   <Provider store={store}>
  //     {/* <PersistGate loading={null}  > */}
  //       {/* <Layout>
  //         <Component {...pageProps} />
  //       </Layout> */}
  //       {/* {() => ( */}
  //       <Layout>
  //         <Component {...props.pageProps} />
  //       </Layout>
  //       {/* )} */}
  //     {/* </PersistGate> */}
  //   </Provider>
  // </SSRProvider>
  // </>
  // )
}

export default MyApp;
