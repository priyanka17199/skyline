import React from "react";
import img from "../../public/assets/images/client.png";
import node from "../../public/assets/images/node.png";
import Image from "next/image";
import img3 from "../../public/assets/images/7-3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Grid } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import "swiper/swiper-bundle.css";

const OurClients = () => {
  const client = [
    img,
    node,
    img,
    node,
    node,
    node,
    img,
    node,
    img,
    node,
    img,
    node,
    img,
  ];

  // const myLoader = ({ src, width, quality }: any) => {
  //   return `http://staging-sportnetwork.ascratech.com/uploads/home_banners/original/${src}?w=${width}&q=${
  //     quality || 75
  //   }`;
  // };

  return (
    <>
      <div className="container ">
        <h3 className="border-bottom pb-3">Our Brands</h3>

        {/* <Swiper
          modules={[Navigation, A11y, Grid]}
          
          slidesPerView={6}
         
          // slidesPerGroup={12}
          grid={{
            rows: 2,
            fill: "row",
          }}

          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            880: {
                slidesPerView: 6,
              },
            500: {
                width:500,
              slidesPerView: 2
            },
            250:{
              slidesPerView: 1,

            }
          }}
        >
          <div className="row gutter-no " >
          {client.map((images, index) => (
            <>
              
                <SwiperSlide className="mx-auto border" key={index}>
                  <Image src={images} alt="Brand" width={410} height={186} />
          
                </SwiperSlide>
            </>
          ))}
          </div> 
        </Swiper> */}

        <Swiper
          modules={[Navigation, A11y, Grid]}
          // spaceBetween={15}
          slidesPerView={6}
          slidesPerGroup={12}
          grid={{
            rows: 2,
            fill: "row",
          }}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            768: {
              // width: 1000,
              slidesPerView: 6,
            },
            400: {
              width: 400,
              slidesPerView: 2,
            },
            250: {
              width: 250,
              slidesPerView: 1,
            },
          }}
        >
          {client.map((images: any, index: any) => (
            <>
              <SwiperSlide key={index} className="text-center ">
                <div className="border">
                  <Image
                    src={images}
                    width={410}
                    height={186}
                    alt="client images"
                  />
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default OurClients;
