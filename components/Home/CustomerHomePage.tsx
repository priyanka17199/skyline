import React from 'react'
import Brands from '../Brands/Brands'
import CarouselBanner from '../Carousel/carousel'
import HomeCategories from '../HomeCategories/HomeCategories'
import VideosSection from '../VideosSection/VideosSection'

const CustomerHomePage = () => {
  return (
    <div>
      <CarouselBanner/>
      <Brands/>
      <VideosSection/>
      <HomeCategories/>
    </div>
  )
}

export default CustomerHomePage
