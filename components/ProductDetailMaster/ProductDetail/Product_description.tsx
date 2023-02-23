import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
// import { product_description } from "../../../datasets/Relatedproduct";
import bucketImg from "../../../public/assets/images/Bucket.jpg";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import maximaCard from "../../../public/assets/images/maximaCard.jpg";

const ProductDescription = (props: any) => {
  const { detail } = props;
  console.log("description detail", detail);

//   const [Data, setData] = useState(product_description);

//   const [wordData, setWordData] = useState(product_description[0]);
  const handleClick = (index: any) => {
    console.log(index);
    // const wordSlider = product_description[index];
    // setWordData(wordSlider);
  };
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);

  const myLoader = ({ src, width, quality }: any) => {
    return `https://digital-shelf.8848digitalerp.com${src}?w=${width}&q=${
      quality || 75
    }`;
  };
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
    mode: "free",
    slides: {
      perView: 1,
      spacing: 15,
    },
  });
  return (
    <div className="tab tab-nav-boxed tab-nav-underline product-tabs mt-3">
      {detail?.length > 0 &&
        detail?.map((item: any, index: any) => (
          <div key={index}>
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <Link href="#product-tab-description">
                  <a
                    href="#product-tab-description"
                    className="nav-link active border-0"
                  >
                    Description
                  </a>
                </Link>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane active" id="product-tab-description">
                <div className="row mb-4">
                  <div className="col-md-6 mb-5">
                    <h4 className="title tab-pane-title font-weight-bold mb-2">
                      Detail
                    </h4>
                 <p className="mt-4" dangerouslySetInnerHTML={{ __html:item.description }}/>
                  </div>
                  <div className="col-md-6 mb-5">
                    <div className="banner banner-video product-video br-xs text-center">
                      <div ref={sliderRef} className="keen-slider">
                        {detail.map((newdata:any, i:any) => (
                       newdata?.slide_img?.map((imgdata:any, index:any) => (
                          <div
                            className="keen-slider__slide number-slide1 product"
                            key={index}
                           
                          >
                            <figure className="banner-media">
                              <Image
                                src={imgdata}
                                alt="banner"
                                width={300}
                                height={300}
                                loader={myLoader}
                                // className={wordData.id == i ? "clicked" : ""}
                                style={{ backgroundColor: "#bebebe;" }}
                                onClick={() => handleClick(i)}
                              />
                              <Link href="" target="_blank">
                                <a
                                  className="btn-play-video btn-iframe"
                                  target="_blank"
                                >
                                  <i
                                    className="fa fa-play play_btn"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </Link>
                            </figure>
                          </div>
                          ))
                        ))}

                        {loaded && instanceRef.current && (
                          <>
                            <Arrow
                              left
                              onClick={(e: any) =>
                                e.stopPropagation() ||
                                instanceRef.current?.prev()
                              }
                              disabled={currentSlide === 0}
                            />

                            <Arrow
                              onClick={(e: any) =>
                                e.stopPropagation() ||
                                instanceRef?.current?.next()
                              }
                              disabled={
                                currentSlide ===
                                instanceRef?.current?.track?.details?.slides
                                  .length -
                                  1
                              }
                            />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row cols-md-3">
                  <div className="mb-3">
                    <h5 className="sub-title font-weight-bold">
                      <span className="mr-3">1.</span>Free Shipping &amp; Return
                    </h5>
                    <p className="detail pl-5">
                      We offer free shipping for products on orders above 50$
                      and offer free delivery for all orders in US.
                    </p>
                  </div>
                  <div className="mb-3">
                    <h5 className="sub-title font-weight-bold">
                      <span>2.</span>Free and Easy Returns
                    </h5>
                    <p className="detail pl-5">
                      We guarantee our products and you could get back all of
                      your money anytime you want in 30 days.
                    </p>
                  </div>
                  <div className="mb-3">
                    <h5 className="sub-title font-weight-bold">
                      <span>3.</span>Special Financing
                    </h5>
                    <p className="detail pl-5">
                      Get 20%-50% off items over 50$ for a month or over 250$
                      for a year with our special credit card.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
export default ProductDescription;
