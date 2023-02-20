import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";
import Header from "../components/Head/Head";
import MetaTag from "../services/api/general_api/metaTag_api";
import PreHeaderStrip from "../components/NoCost/PreHeaderStrip";
import CarouselBanner from "../components/Carousel/carousel";
import Brands from "../components/Brands/Brands";
import VideosSection from "../components/VideosSection/VideosSection";
import HomeCategories from "../components/HomeCategories/HomeCategories";
import { CONSTANTS } from "../services/config/api-config";
import Cart from "./cart";
import DealerHomeAccounts from "../components/DealerHomePage/DealerHomeAccounts";
import DealerHomePage from "../components/Home/DealerHomePage";
import CustomerHomePage from "../components/Home/CustomerHomePage";
import Link from "next/link";
import styles from "../styles/sideRibbon.module.css";
import { useAmp } from "next/amp";
import HomeMaster from "../components/HomeMaster/HomeMaster";
import Scrolltop from '../components/Scrolltop'

export const config = { amp: "hybrid" };

const Home: NextPage = ({ meta_data }: any) => {
  const isAmp = useAmp();
  let isDealer;
  console.log("++++meta-data", meta_data);
  const router = useRouter();
  console.log(router.pathname);
  if (typeof window !== "undefined") {
    isDealer = localStorage.getItem("isDealer");
  }

  console.log(isDealer);
  console.log(typeof isDealer);
 
  return (
    <div>
      {/* <Head>
      {
isDealer === "true" ? <link rel="icon" href="/b2b_scott_favicon.ico" />: <link rel="icon" href="/sns_favicon.ico" />
               }
      </Head> */}
      {/* <Header meta_data={meta_data} /> */}
      {/* {isDealer === "true" ? <DealerHomeAccounts /> : <CarouselBanner />}
      {isDealer === "true" ? null : <Brands />}
      {isDealer === "true" ? null : <VideosSection />}
      {isDealer === "true" ? <HomeCategories /> : <HomeCategories />}
      {isDealer === "true" ? null : (
        <div className={styles.sideRibbon2}>
          <Link href="/NewsLetter">
            <a className={styles.media_a}>
              {" "}
              <p className={styles.media_para}>Media and Press</p>
            </a>
          </Link>
        </div>
      )}
      {isDealer === "true" ? <Brands /> : null} */}

{/* sp parts */}
<HomeMaster />

{/* end sp parts */}
      {/* {
                isAmp ? " " : <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"></Script>

               } */}

      {/* <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />  */}
      {/* <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></Script> */}
      {/* <Script id="zsiqchat">
        {`var $zoho = $zoho || {}; $zoho.salesiq = $zoho.salesiq || { widgetcode: "3e8e0c2e5b7f0adce80da7cd631292c2b2bee7223f67f69705af76b639c2f941fcbc687e73ea96b264f2a56cb2b1daf3", values: {}, ready: function () { } }; var d = document; s = d.createElement("script"); s.type = "text/javascript"; s.id = "zsiqscript"; s.defer = true; s.src = "https://salesiq.zoho.in/widget"; t = d.getElementsByTagName("script")[0]; t.parentNode.insertBefore(s, t)`}
      </Script>

      <Script src="https://cdn.razorpay.com/widgets/affordability/affordability.js" id="">
         
      </Script> */}
    </div>
  );
};
// export async function getServerSideProps(context: any) {
//   let meta_data = await MetaTag(
//     `${CONSTANTS.META_TAG_URL}${context.resolvedUrl}`
//   );
//   return { props: { meta_data } };
// }
export default Home;
