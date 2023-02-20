// import React from "react";
import * as React from "react";
import { useState, useEffect } from "react";
// import { related_product } from "../../../datasets/Relatedproduct";
// import "./styles.css"
import { useKeenSlider } from "keen-slider/react";
import { MaximaProductCard } from "../../../cards/maxima_product_card";
import "keen-slider/keen-slider.min.css";
export default function RelatedProduct(props: any) {
//   const { suggestedDataState } = props;
//   const myLoader = ({ src, width, quality }: any) => {
//     return `http://scott-sports-v14.8848digitalerp.com${src}?w=${width}&q=${
//       quality || 75
//     }`;
//   };

//   const [Data, setData] = useState(related_product);
//   const [currentSlide, setCurrentSlide] = React.useState(0);
//   const [loaded, setLoaded] = useState(false);

//   const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
//     initial: 0,
//     slideChanged(slider) {
//       setCurrentSlide(slider.track.details.rel);
//     },
//     created() {
//       setLoaded(true);
//     },
//     loop: true,
//     mode: "free",
//     slides: {
//       perView: 4,
//       spacing: 15,
//     },
//   });
//   return (
//     <div className="navigation-wrapper">
//       <div className="title-link-wrapper mb-4">
//         <h4 className="title">Related Products</h4>
//         <a
//           href="#"
//           className="btn btn-dark btn-link btn-slide-right btn-icon-right"
//         >
//           More Products<i className="w-icon-long-arrow-right"></i>
//         </a>
//       </div>

//       <div ref={sliderRef} className="keen-slider">
//         {suggestedDataState?.length > 0 &&
//           suggestedDataState?.map((newdata: any, i: any) => (
//             <div className="keen-slider__slide number-slide1 product" key={i}>
//               <MaximaProductCard
//                 name={newdata.name}
//                 item_name={newdata.item_name}
//                 prod_slug={newdata.product_slug}
//                 price={newdata.price}
//                 mrp_price={newdata.mrp_price}
//                 img_url={newdata.image_url}
//                 in_stock_status={newdata.in_stock_status}
//                 url={newdata.url}
//               />
//             </div>
//           ))}
//       </div>

//       {suggestedDataState?.length > 4 ? loaded && instanceRef.current && (
//         <>
//           <Arrow
//             left
//             onClick={(e: any) =>
//               e.stopPropagation() || instanceRef.current?.prev()
//             }
//             disabled={currentSlide === 0}
//           />

//           <Arrow
//             onClick={(e: any) =>
//               e.stopPropagation() || instanceRef.current?.next()
//             }
//             disabled={
//               currentSlide ===
//               instanceRef.current.track.details.slides.length - 1
//             }
//           />
//         </>
//       ):""}
//     </div>
//   );
// }

// function Arrow(props: {
//   disabled: boolean;
//   left?: boolean;
//   onClick: (e: any) => void;
// }) {
//   const disabeld = props.disabled ? " arrow--disabled" : "";
//   return (
//     <svg
//       onClick={props.onClick}
//       className={`arrow ${
//         props.left ? "arrow--left" : "arrow--right"
//       } ${disabeld}`}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//     >
//       {props.left && (
//         <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
//       )}
//       {!props.left && (
//         <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
//       )}
//     </svg>
//   );
}
