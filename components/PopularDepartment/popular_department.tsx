import Link from "next/link";
import React, { useState } from "react";
import { MaximaProductCard } from "../../cards/maxima_product_card";
import useHomePageDisplayTagProductListing from "../../hooks/home_page_hooks/display_tag_product_listing_hook";

const PopularDepartment = () => {
  const [sidx, setsIdx] = useState(0);

  const {
    homePageNewArrivalDisplayTagProductListing,
    homePageSpecialOfferDisplayTagProductListing,
  } = useHomePageDisplayTagProductListing();
  //   console.log("display tag in render file", homePageDisplayTagProductListing);

  return (
    <>
      <div className="container">
        {/* <h2 className="title justify-content-center ls-normal mb-4 mt-10 pt-1  ">Popular Departments
                </h2> */}
        <div className="tab tab-nav-boxed tab-nav-outline  ">
          <ul
            className="nav nav-tabs justify-content-center mb-3"
            role="tablist"
          >
            <h2 className="title justify-content-center ls-normal mt-2 pt-1  text-uppercase">
              New Arrival
            </h2>
            {/* {popularDepartments.message.data.map((item: any, index: any) => {
              return (
                <>
                  <h2 className="title justify-content-center ls-normal mt-2 pt-1  text-uppercase">
                    Best Seller
                  </h2>
                </>
              );
            })} */}
          </ul>
        </div>

        {/* tab content */}
        <div className="tab-content">
          <div className="row">
            {homePageNewArrivalDisplayTagProductListing?.length !== 0 &&
              homePageNewArrivalDisplayTagProductListing?.map(
                (vals: any, index: any) => {
                  return (
                    <>
                      <div
                        className="col-lg-3 col-md-4 col-6 mb-2 "
                        key={index}
                      >
                        <MaximaProductCard
                          id={vals.id}
                          prod_name={vals.prod_name}
                          prod_slug={vals.product_slug}
                          price={vals.price}
                          mrp_price={vals.mrp_price}
                          img_url={vals.image_url}
                          in_stock_status={vals.in_stock_status}
                          url={vals.url}
                          brand={vals.brand}
                          brand_img={vals.brand_img}
                          display_tag={vals.display_tag}
                        />
                      </div>
                      {/* </div> */}
                    </>
                  );
                }
              )}
          </div>
        </div>
      </div>

      <div className="container">
        {/* <h2 className="title justify-content-center ls-normal mb-4 mt-10 pt-1  ">Popular Departments
                </h2> */}
        <div className="tab tab-nav-boxed tab-nav-outline  ">
          <ul
            className="nav nav-tabs justify-content-center mb-3"
            role="tablist"
          >
            <h2 className="title justify-content-center ls-normal mt-2 pt-1  text-uppercase">
              Special Offer
            </h2>
            {/* {popularDepartments.message.data.map((item: any, index: any) => {
              return (
                <>
                  <h2 className="title justify-content-center ls-normal mt-2 pt-1  text-uppercase">
                    Best Seller
                  </h2>
                </>
              );
            })} */}
          </ul>
        </div>

        {/* tab content */}
        <div className="tab-content">
          <div className="row">
            {homePageSpecialOfferDisplayTagProductListing?.length !== 0 &&
              homePageSpecialOfferDisplayTagProductListing?.map(
                (vals: any, index: any) => {
                  return (
                    <>
                      <div
                        className="col-lg-3 col-md-4 col-6 mb-2 "
                        key={index}
                      >
                        <MaximaProductCard
                          id={vals.id}
                          prod_name={vals.prod_name}
                          prod_slug={vals.product_slug}
                          price={vals.price}
                          mrp_price={vals.mrp_price}
                          img_url={vals.image_url}
                          in_stock_status={vals.in_stock_status}
                          url={vals.url}
                          brand={vals.brand}
                          brand_img={vals.brand_img}
                          display_tag={vals.display_tag}
                        />
                      </div>
                      {/* </div> */}
                    </>
                  );
                }
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularDepartment;
