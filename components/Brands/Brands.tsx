import styles from "../../styles/Brands.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import logoimg from "../images/logo.png";
import useBrands from "../../hooks/home_page_hooks/brands_hook";
import Marquee from "react-fast-marquee";
import React from "react";
import { CONSTANTS } from "../../services/config/api-config";
import maximaCard from "../../public/assets/images/maximaCard.jpg";
// import maximaCard from "../public/assets/images/maximaCard.jpg";
const myLoader = ({ src, width, quality }: any) => {
  return `${CONSTANTS.API_BASE_URL}${src}?w=${width}`;
};

const Brands = () => {
  const brandItems = useBrands();
  console.log("brand items", brandItems);

  return (
    <div className="container">
      {/* <ul className="nav justify-content-center">
            {branddata.map((post:any) => (
              <>
                <li>{post.brand_name}</li>
                <li>{post.img_url}</li>
                <li className="ms-4 me-4">
                  <Image 
                  loader={myLoader} 
                  src={post.img_url} 
                  height="200px" 
                  width='150px' />
                </li>
              </>
            ))}
          </ul> */}
      <div id={styles.shop_by_brand} className="">
        <div className={styles.brands}>
          <div className="container  text-center  mb-4">
            <div className="brand-heading mb-1">
              <h2
                className="mb-2"
                style={{ fontWeight: "800", fontSize: "18px", color: "#000" }}
              >
                OUR BRANDS
              </h2>
              {/* <Link to='#'><img src={`http://scott-sports.8848digitalerp.com/${brands[0].img_url}`} alt={brands.brand_name} className="img-fluid" width="180px" /></Link> */}
            </div>

            <div className="row justify-content-center align-items-center">
              {brandItems?.length > 0 && (
                <Marquee speed={100} pauseOnHover={true}>
                  {brandItems?.map((item: any, index: number) => (
                    <>
                      {item?.img_url !== null ? (
                        <div key={index}>
                          <div className="ms-3 me-3">
                            <Link href="#">
                              <a id="">
                                <Image
                                  loader={myLoader}
                                  src={item.img_url}
                                  alt={item.brand_name}
                                  className={` ${styles.brand_img} img-fluid`}
                                  width={210}
                                  height={126}
                                />
                              </a>
                            </Link>
                          </div>
                       
                        </div>
                      ) : (
                        <div key={index}>
                          <div className="ms-3 me-3">

                            <Link href="#">
                              <a id="">
                                <Image
                                  src={maximaCard}
                                  // src={maximaCard}
                                  alt="product-detail"
                                  width={300}
                                  height={300}
                                  className="img-fluid"
                                />
                              </a>
                            </Link>
                          </div>
                          
                        </div>
                      )}
                    </>
                  ))}
                </Marquee>
              )}
              {/* <Marquee speed={150} pauseOnHover={true}>
                {brandItems.map((item: any, index: number) => (
                  <>
                  {item?.img_url !== null && <div key={index} className="col-md-2 col-6">
                      <div className="">
                        <Link href="#">
                          <a id="">
                            <Image
                              loader={myLoader}
                              src={item.img_url}
                              alt={item.brand_name}
                              className={` ${styles.brand_img} img-fluid`}
                              id="brand-imgs"
                              width={210}
                              height={126}
                            />
                          </a>
                        </Link>
                      </div>
                    </div> }
                    
                  </>
                ))}
              </Marquee> */}
            </div>
          </div>
        </div>
        <h3></h3>
      </div>
    </div>
  );
};

export default Brands;
