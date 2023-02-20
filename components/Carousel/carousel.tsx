import useCarousel from "../../hooks/home_page_hooks/carousel_hook";
import React, { useState } from "react";
import styles from "../../styles/Banner.module.css";
import Carousel from "react-bootstrap/Carousel";
import CarouselCaption from "react-bootstrap/CarouselCaption";
import CarouselItem from "react-bootstrap/CarouselItem";
import Image from "next/image";
import bannerImg1 from "../../public/assets/images/Banner_images/Banner-1.jpg";
import bannerImg2 from "../../public/assets/images/Banner_images/Banner-2.jpg";
import bannerImg3 from "../../public/assets/images/Banner_images/Banner-3.jpg";
import bannerImg4 from "../../public/assets/images/Banner_images/Banner-4.jpg";
import { CONSTANTS } from "../../services/config/api-config";
import { banner_items } from "../../datasets/Digitalshelf_dataset/calltoaction";
import Link from "next/link";

const CarouselBanner = () => {
  const bannerItems = useCarousel();
  // made changes in url
  const myLoader = ({ src, width, quality }: any) => {
    return `${CONSTANTS.API_BASE_URL}/${src}?w=${width}&q=${quality || 75}`;
  };

  console.log(bannerItems);

  // const handleBannerImages = (banner_image?: any) => {
  //     if (banner_image) {
  //         return <Image loader={myLoader} className="d-block w-100" src={banner_image} alt="Banner Images" width={1400} height={380} />
  //     }
  //     else {
  //         return <Image loader={myLoader} className="d-block w-100" src={'/files/logo68b653f.jpg'} alt="Banner Images" width={1400} height={380} />
  //     }
  // }
  return (
    <div className="intro-section banner_section mb-2">
      <div className="row">
        <div className="intro-slide-wrapper col-lg-9">
          <div className="swiper-container swiper-theme  pg-inner pg-xxl-hide pg-show pg-white nav-xxl-show nav-hide">
            <div className="swiper-wrapper gutter-no row cols-1">
              <div
                className="swiper-slide banner banner-fixed intro-slide intro-slide1 br-sm text-center"
                style={{
                  backgroundImage:
                    "url(/assets/images/ecommerce_theme/banner_ecom.png)",
                  backgroundColor: "#5B98B7;",
                }}
              >
                <div className="banner-content y-50">
                  <h3 className="banner-title text-capitalize text-white font-secondary font-weight-normal ls-0 ">
                    City Light
                  </h3>
                  <h4 className="banner-subtitle text-uppercase text-white font-weight-normal ls-0 ">
                    New Trends This Season
                  </h4>
                  <Link href="#">
                    <a className="btn btn-white btn-outline btn-rounded btn-icon-right br-xs discover_btn">
                      Discover Now<i className="w-icon-long-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="intro-banner-wrapper col-lg-3 mt-4">
          {banner_items.map((items, i) => (
            <div
              className="banner banner-fixed intro-banner col-lg-12 col-sm-6 br-sm mb-4"
              key={i}
            >
              <figure className="overlay_banner">
                <Image
                  src={items.image_url}
                  alt="Category Banner"
                  width={365}
                  height={235}
                  style={{ backgroundColor: "#E4E7EC;" }}
                />
              </figure>
              <div className="banner-content">
                <h4 className="banner-subtitle text-capitalize text-default font-secondary font-weight-normal category_colors">
                  {items.h4_title}
                </h4>
                <h3 className="banner-title text-dark text-uppercase ls-25 category_colors">
                  {items.h3_title}
                </h3>
                <Link href={items.url}>
                  <a className="btn btn-dark btn-link btn-underline btn-icon-right category_colors">
                    Shop Now<i className="w-icon-long-arrow-right"></i>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselBanner;
