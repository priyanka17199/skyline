import React from "react";
import Image from "next/image";
import img1 from "../../public/assets/images/7-1.jpg";
import img2 from "../../public/assets/images/7-2.jpg";
import img3 from "../../public/assets/images/7-3.jpg";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { recent_viewd } from "../../datasets/recentViews";
import { MaximaProductCard } from "../../cards/maxima_product_card";
const RecentViews = () => {
  return (
    <>
      <div className="container mt-3 mb-3">
        <div className="title-link-wrapper pb-1 mb-4">
          <h2 className="title ls-normal mb-0">Recent Viewed Products</h2>
          <Link href="/">
            <a className="font-size-normal font-weight-bold ls-25 mb-0">
              View More Products<i className="w-icon-long-arrow-right"></i>
            </a>
          </Link>
        </div>
        <div className="col-12">
          <div className="row">
            {recent_viewd.message.data.map((pro_vals: any, index: any) => {
              return (
                <>
                  <div className="col-lg-2 col-md-4 col-6 mb-2 ">
                    <MaximaProductCard
                     name={pro_vals.name}
                      item_name={pro_vals.item_name}
                      prod_slug={pro_vals.product_slug}
                      price={pro_vals.price}
                      mrp_price={pro_vals.mrp_price}
                      img_url={pro_vals.image_url}
                      in_stock_status={pro_vals.in_stock_status}
                      url={pro_vals.url}
                      brand={pro_vals.brand}
                      brand_img={pro_vals.brand_img}
                      display_tag={pro_vals.display_tag}
                    />
                  </div>
                </>
              );
            })}
          </div>
          {/* <Swiper
         
          modules={[Navigation, A11y]}
          spaceBetween={25}
          slidesPerView={8}
          navigation
          // loop={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            880: {
                slidesPerView: 7,
              },
            540: {
                width:540,
              slidesPerView: 2,
            },
            250:{
              slidesPerView: 1,

            }
          }}
        >
          {ourviews.map((value, index) => (
            <>
              <SwiperSlide key={index} className=" mx-auto">
                <div className="swiper-slide product-wrap mb-0 text-center" >
                  <div className="product text-center product-absolute ">
                    <figure className=" d-flex justify-content-center">
                      <Link href="">
                        <Image
                          src={value.img}
                          width={130}
                          height={146}
                          alt="Category image"
                     
                        />
                      </Link>
                    </figure>
                    <h4 className="product-name">
                      <Link href="">{value.content}</Link>
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper> */}
        </div>
      </div>
    </>
  );
};

export default RecentViews;
