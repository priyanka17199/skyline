import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FillerOne = () => {
  const list1 = [
    {
      id: 1,
      icon: <i className="fa fa-truck"></i>,
      title: "Free Shipping & Returns",
      description: "For all orders over $99",
    },

    {
      id: 2,
      icon: <i className="fa fa-money"></i>,
      title: "Secure Payment",
      description: "We insure Secure payment",
    },

    {
      id: 3,
      icon: <i className="fa fa-user"></i>,
      title: "Money Bank Guarantee",
      description: "Any back within 30 days",
    },
    {
      id: 4,
      icon: <i className="fa fa-phone"></i>,
      title: "Customer Support",
      description: "Call or email us 24/7",
    },
    {
      id: 5,
      icon: <i className="fa fa-phone"></i>,
      title: "Customer ",
      description: "Call 24/7",
    },
  ];

  return (
    <>
      {/* <div className="container mt-2 mb-3 py-2" >
        <Swiper
          modules={[Navigation, A11y]}
          // spaceBetween={15}
          slidesPerView={4}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            900: {
              width: 900,
              slidesPerView: 3,
            },
            400: {
              width: 400,
              slidesPerView: 1,
            },
            250: {
              width: 250,
              slidesPerView: 1,
            }
          }}
        >
          {list1.map((value: any, index: any) => (
            <>
              <SwiperSlide key={index} className="text-center  ">
                <div className="row ">
                  <div className="d-flex justify-content-center ml-3 " key={index}>
                    <div
                      className="my-auto text-primary"
                      style={{ fontSize: "27px" }}
                    >
                      {value.icon}
                    </div>
                    <div className="px-4">
                      <h5
                        style={{ lineHeight: "17px" }}
                        className="bold text-start"
                      >
                        {value.title}
                      </h5>
                      <div 
                      style={{ lineHeight: "17px" }} 
                      className="text-start ">
                        {value.description}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div> */}
      {/* <div className="container">
        <div className="short_desc mt-3">

        <div className="row">
          <div className="col-lg-3 col-6 mb-2">
            <div className="row">
              <div className="col-4">
              <span className="icon-box-icon icon-shipping">
                                <i className="w-icon-truck"></i>
                            </span>
              </div>
              <div className="col-8">
                <h5 className="mb-0">Since 1947</h5>
                <p className="mb-0" >Serving the Industry.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6 mb-2">
            <div className="row">
              <div className="col-4">
              <span className="icon-box-icon icon-payment">
                                <i className="w-icon-bag"></i>
                            </span>
              </div>
              <div className="col-8">
                <h5 className="mb-0">Trust</h5>
                <p className="mb-0">Parts you can trust to keep your equipment Working </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3  col-6 mb-2">
            <div className="row">
              <div className="col-4">
              <span className="icon-box-icon icon-money">
                                <i className="w-icon-money"></i>
                            </span>
              </div>
              <div className="col-8">
                <h5 className="mb-0">Integrity</h5>
                <p className="mb-0">Integrity in everything we do</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6 mb-2">
            <div className="row">
              <div className="col-4"> <span className="icon-box-icon icon-chat">
                                <i className="w-icon-chat"></i>
                            </span></div>
              <div className="col-8">
                <h5 className="mb-0">All in One</h5>
                <p className="mb-0">Distributing some of the world's finest brands of spares under one roof</p>
              </div>
            </div>
          </div>

        </div>
        </div>
      </div> */}
<div className="container">

<div className="swiper-container icon-box-wrapper br-sm mt-2 mb-3 ps-2 pe-2">
                    <div className="swiper-wrapper row cols-md-4 cols-sm-3 cols-1">
                        <div className="swiper-slide icon-box icon-box-side icon-box-primary">
                            <span className="icon-box-icon icon-shipping">
                                <i className="w-icon-truck"></i>
                            </span>
                            <div className="icon-box-content">
                                <h4 className="icon-box-title font-weight-bold mb-1">Since 1947</h4>
                                <p className="text-default">Parts you can trust to keep your equipment Working </p>
                            </div>
                        </div>
                        <div className="swiper-slide icon-box icon-box-side icon-box-primary">
                            <span className="icon-box-icon icon-payment">
                                <i className="w-icon-bag"></i>
                            </span>
                            <div className="icon-box-content">
                                <h4 className="icon-box-title font-weight-bold mb-1">Trust</h4>
                                <p className="text-default">Parts you can trust to keep your equipment Working </p>
                            </div>
                        </div>
                        <div className="swiper-slide icon-box icon-box-side icon-box-primary icon-box-money">
                            <span className="icon-box-icon icon-money">
                                <i className="w-icon-money"></i>
                            </span>
                            <div className="icon-box-content">
                                <h4 className="icon-box-title font-weight-bold mb-1">Integrity</h4>
                                <p className="text-default">Integrity in everything we do</p>
                            </div>
                        </div>
                        <div className="swiper-slide icon-box icon-box-side icon-box-primary icon-box-chat">
                            <span className="icon-box-icon icon-chat">
                                <i className="w-icon-chat"></i>
                            </span>
                            <div className="icon-box-content">
                                <h4 className="icon-box-title font-weight-bold mb-1">All in One</h4>
                                <p className="text-default">Distributing some of the world's finest brands of spares under one roof</p>
                            </div>
                        </div>
                    </div>
                </div>
</div>
     
    </>
  );
};

export default FillerOne;
