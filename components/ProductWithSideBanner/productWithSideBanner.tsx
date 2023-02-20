import Image from "next/image";
import { useState } from "react";
// import { prod_listing } from "../../datasets/sp_product_listing_with_banner";
import cart from "../public/assets/images/4-1.jpg";
// import { ProductCard } from "../cards/product_card";
import { MaximaProductCard } from "../../cards/maxima_product_card";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Link from "next/link";
import useHomeCategoriesWithListing from "../../hooks/home_page_hooks/home_categories_listing_hook";

const ProductWithSideBanner = () => {
  const [key, setKey] = useState<any>("home");
  const [sidx, setsIdx] = useState(0);

  const homeCategoriesWithListing = useHomeCategoriesWithListing();

  return (
    <div>
      <div className="container mt-3 mb-3">
        {homeCategoriesWithListing.length !== 0 &&
          homeCategoriesWithListing.map((item: any, index: number) => {
            return (
              <div
                className=" product-wrapper-1 appear-animate-shan-custom mb-5 "
                key={index}
              >
                <div className="title-link-wrapper pb-1 mb-4">
                  <h2 className="title ls-normal mb-0">
                    {item?.container?.container_name &&
                      item?.container?.container_name}
                  </h2>
                  <Link href={`pl/${item.container.slug}`}>
                    <a className="font-size-normal font-weight-bold ls-25 mb-0">
                      More Products<i className="w-icon-long-arrow-right"></i>
                    </a>
                  </Link>
                </div>

                <div className="row">
                  <div className="col-lg-3 col-sm-4">
                    {item?.container?.banner_img ? (
                      <div
                        className="banner h-100"
                        style={{
                          backgroundImage: `url(${item.container.banner_img})`,
                          // ${item.banner.banner_img}`url()`
                          backgroundColor: "#ebeced",
                        }}
                      ></div>
                    ) : null}
                    {/* <div
                      className="banner h-100"
                      style={{
                        backgroundImage:`url(${item.container.banner_img})` ,
                        // ${item.banner.banner_img}`url()`
                        backgroundColor: "#ebeced",
                      }}
                    >
                      
                    </div> */}
                  </div>
                  <div className="col-lg-9 col-sm-8">
                    <div className=" row cols-xl-4 cols-lg-3 cols-2">
                      {item?.product_list?.length !== 0 &&
                        item.product_list.map((product: any, index: number) => {
                          return (
                            <div
                              className="product-wrap product text-center "
                              key={index}
                            >
                              <figure>
                                <MaximaProductCard
                                  name={product.name}
                                  item_name={product.item_name}
                                  prod_slug={product.product_slug}
                                  price={product.price}
                                  mrp_price={product.mrp_price}
                                  img_url={product.image_url}
                                  in_stock_status={product.in_stock_status}
                                  url={product.url}
                                  brand={product.brand}
                                  brand_img={product.brand_img}
                                  display_tag={product.display_tag}
                                />
                              </figure>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default ProductWithSideBanner;
