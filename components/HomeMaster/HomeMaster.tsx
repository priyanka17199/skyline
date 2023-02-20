import React from 'react'
import CarouselBanner from '../Carousel/carousel'
import PopularDepartment from '../PopularDepartment/popular_department'
import ShanPartsHome from '../ProductWithSideBanner/productWithSideBanner'
import RecentViews from '../RecentViews/RecentViews'
import ShanpartsFooter from '../SpFooter/shanparts_footer'
import FillerOne from '../SpHomeFillers/FillerOne'
import FillerTwo from '../SpHomeFillers/FillerTwo'
import TopCategories from '../TopCategories/topCategories'
import OurClients from '../OurClients/OurClients'
import Brands from '../Brands/Brands'
import RelatedProduct from '../ProductDetailMaster/ProductDetail/Related_product'
import Topcategory from "../Topcategory";
import Calltoaction from "../../components/Calltoaction"
import Recentproductview from "../Recentproductview"
import Ctabanner from "../Ctabanner"
import TodayDeal from "../Todaydeal"
const HomeMaster = () => {

  // const testString = <div><p>some string</p></div>
 
  return (
    <>
   
      <CarouselBanner/> 
      <TodayDeal />
      <Topcategory />
      <Ctabanner/>
      <Calltoaction />
      <Recentproductview />
    </>
  )
}
export default HomeMaster