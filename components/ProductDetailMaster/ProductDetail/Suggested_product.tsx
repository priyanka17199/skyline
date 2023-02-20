import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
// import { related_product } from "../../../datasets/Relatedproduct";
import { MaximaProductCard } from "../../../cards/maxima_product_card";
import { Navigation, Pagination, Scrollbar, A11y, Controller } from 'swiper';
import {  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useSelector } from "react-redux";


const SuggestedProduct = (props: any) => {
  const {
    suggestedDataState,
  } = props;

  console.log("suggested data in render file", suggestedDataState);
  // const [Data, setData] = useState(related_product)

  let items = document.querySelectorAll('.carousel .carousel-item')
// console.log(items,)
// items.forEach((el) => {
//     const minPerSlide = 4
//     let next = el.nextElementSibling
//     console.log(next,"next");
//     for (var i=1; i<minPerSlide; i++) {
//         if (!next) {
//             // wrap carousel by using first child
//         	next = items[0]
//       	}
//         let cloneChild = next.cloneNode(true)
//         el.appendChild(cloneChild.children[0])
//         next = next.nextElementSibling
//     }
// })
  return (

    <>
      <section className="related-product-section">
        <div className="title-link-wrapper mb-4">
          <h4 className="title">Suggested Products</h4>
          <a
            href="#"
            className="btn btn-dark btn-link btn-slide-right btn-icon-right"
          >
            More Products<i className="w-icon-long-arrow-right"></i>
          </a>
        </div>
     

        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        > 
     
      {suggestedDataState?.length > 0 && suggestedDataState?.map((newdata: any, i: any) => (<SwiperSlide key={i} >
            <div className="swiper-slide product" key={i}>
              <MaximaProductCard
               name={newdata.name}
               item_name={newdata.item_name}
               prod_slug={newdata.product_slug}
               price={newdata.price}
               mrp_price={newdata.mrp_price}
               img_url={newdata.image_url}
               in_stock_status={newdata.in_stock_status}
               url={newdata.url}
              
              />
            </div>
            </SwiperSlide>))}
        </Swiper>
      </section>


{/* <div className="container text-center my-3">
  
    <div className="row mx-auto my-auto justify-content-center">
        <div id="recipeCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner" role="listbox">
            {suggestedDataState?.length > 0 && suggestedDataState?.map((newdata: any, i: any) => (  
              <div className="carousel-item active">
              <div className="col-md-3">  
           <MaximaProductCard
           name={newdata.name}
           item_name={newdata.item_name}
           prod_slug={newdata.product_slug}
           price={newdata.price}
           mrp_price={newdata.mrp_price}
           img_url={newdata.image_url}
           in_stock_status={newdata.in_stock_status}
           url={newdata.url}
          
          />
           </div>
           </div>
                ))}
            </div>
            <a className="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a className="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
        </div>
    </div>
</div> */}


    
    </>
  );
};

export default SuggestedProduct;
