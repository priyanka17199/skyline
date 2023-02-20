import React from "react";
import { top_categorys } from "../datasets/Digitalshelf_dataset/topcategory";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import * as ga from "../lib/ga";
import { AddCartApi } from "../store/slices/cart_page_slice/add_to_cart";
import useProductDetail from "../hooks/product_detail_page_hooks/product_detail_hook";
import useHomeCategoriesWithListing from "../hooks/home_page_hooks/home_categories_listing_hook";
import { CartListingApi } from "../store/slices/cart_page_slice/cart_slice";
import loadingGif from "../public/assets/images/circle-loader.gif";
const TopCategories = () => {
  const { detail, quantity } = useProductDetail();
  let prod_name: any;
  const dispatch = useDispatch();
  const topcategory = useHomeCategoriesWithListing();
  const myLoader = ({ src, width, quality }: any) => {
    return `https://digital-shelf.8848digitalerp.com${src}?w=${width}&q=${
      quality || 75
    }`;
  };
  const handleAddCart = async (prod_name: any) => {
    console.log("prod_name", prod_name);
    dispatch(AddCartApi(prod_name, quantity));
    setTimeout(() => {
      dispatch(CartListingApi());
    }, 5000);
    ga.event({
      action: "add_to_cart",
      params: {
        not_set: detail[0]?.name,
      },
    });
  };
  console.log(topcategory, "topcategory");
  return (
    <>
      <div className="category_color">
        <div className="container" style={{ marginTop: "20px" }}>
          <div className="title-link-wrapper mb-4">
            <h2 className="title">Top Categories</h2>
            <Link href="#">
              <a className="text-capitalize font-weight-bold">
                More Products<i className="w-icon-long-arrow-right"></i>
              </a>
            </Link>
          </div>
          <div className="row mb-7 category-products-wrapper">
            <div className="col-xl-3 col-lg-4 col-md-5">
              <div className="banner-fixed menu-banner menu-banner2 mt-4">
                <figure>
                  <Image
                    src="/assets/images/ecommerce_theme/sell_banner.png"
                    alt="Menu Banner"
                    width={235}
                    height={647}
                  />
                </figure>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7">
              <div className="swiper-container swiper-theme ">
                <div className=" row cols-xl-4 cols-lg-4 cols-md-3 cols-2">
                  {topcategory?.map((products: any, i: any) =>
                    products.product_list.map((items: any, index: any) => (
                      <>
                        <div className="swiper-slide product-col" key={index}>
                          <div className="product product-slideup-content">
                            <figure className="card_images">
                              <Link href="#">
                                <a>
                                  {items.image_url !== null ? (
                                    <Image
                                      loader={myLoader}
                                      src={items.image_url}
                                      alt="Product"
                                      width={380}
                                      height={400}
                                    />
                                  ) : (
                                    <Image
                                      // loader={() => `${CONSTANTS.API_BASE_URL}${img_url}`}
                                      src={loadingGif}
                                      // src={maximaCard}
                                      alt="product-detail"
                                      width={300}
                                      height={300}
                                      className="img-fluid"
                                    />
                                  )}
                                </a>
                              </Link>
                            </figure>
                            <div className="product-details">
                              <h3 className="product-name">
                                <Link href={items.url}>
                                  <a href="product-default.html">
                                    {(prod_name = items.item_name)}
                                  </a>
                                </Link>
                              </h3>
                              <div className="product-price">
                                <ins className="new-price">₹{items.price}</ins>
                                <del className="old-price">
                                  ₹{items.mrp_price}
                                </del>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCategories;