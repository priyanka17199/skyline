import { useState, FC, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ProductDetailApi } from "../store/slices/product_detail_slice/product_detail_slice";
import { ProductVariantsApi } from "../store/slices/product_detail_slice/product_variant_slice";
import { ProductCardInterface } from "../interfaces/product_card_interface";
import { CONSTANTS } from "../services/config/api-config";
// import { DEFAULT_API_CONFIG } from "../services/config/api-config";
// import Modals from "../modal/modal";
// import styles from "../styles/Product_Listing.module.css";
import Modals from "../components/modal";
import useProductDetail from "../hooks/product_detail_page_hooks/product_detail_hook";
import ProductDetailList from "../services/api/product_detail_api/product_detail_api";
import catImg from "../public/assets/images/product_img.jpg"
// import bucketImg from "../public/assets/images/Bucket.jpg";
import maximaCard from "../public/assets/images/maximaCard.jpg";
import {
  AddWishlist,
  DeleteWishlist,
  GetWishlist,
} from "../store/slices/general_slice/wishlist_slice";

import useWishlist from "../hooks/general_hooks/wishlist_hook";
// import UseWishProduct from "../hooks/wish_products_hook";
import loadingGif from "../public/assets/images/circle-loader.gif";

export const MaximaProductCard: FC<ProductCardInterface> = (props: any) => {
  const {
    name,
    item_name,
    prod_slug,
    price,
    img_url,
    in_stock_status,
    mrp_price,
    url,
    brand,
    brand_img,
    display_tag,
    setWishlistToast,
    wishlistToast,
    setWishlistToastnew,
    WishlistToastnew

  } = props;
  console.log(props,"props")

  const dispatch = useDispatch();
  const [showToast, setshowToast] = useState(false);

  const [productss, setProducts] = useState<any>([]);
 


  const wishlist_state = useSelector((state: any) => state.wishlist);
  

  let wishproducts: any;

  const myLoader = ({ src, width, quality }: any) => {
    return `${CONSTANTS.API_BASE_URL}${src}?w=${width}&q=${quality || 75}`;
  };

  console.log("product", productss);
  // const params = useParams();
  // console.log();

  const [show, setshow] = useState(false);

  const handleShow = () => {
    setshow(!show);
    // console.log(e.target.parentElement)
  };
  console.log("url", url);

  const handleProdShow = async (id: any) => {
    console.log("redirect to detail");
    console.log("detail prod id", id);
    console.log("detail prod name", prod_slug);
    const slug = url.split("/");
    // dispatch(ProductDetailApi(slug));
    // dispatch(ProductVariantsApi(slug));
    // dispatch(ProductVariantsApi(id));

    // Trial and error to mitigate use of redux store
    // const getDetails = await ProductDetailList(id)
    // setdetail(getDetails)
    // console.log("detail in card", detail);
    // console.log(slug);
    // if (params.sub_sub_category) {
    //     dispatch(ProductDetailApi(id));
    // }
    // else {
    //     dispatch(ProductDetailApi(id));
    //     dispatch(ProductVariantsApi(id));
    // }
  };

  console.log("brand img", brand_img);

  const handleRenderingOfImages = () => {
    if (img_url !== null) {
      return (
        <Image
          loader={myLoader}
          src={img_url}
          // src={maximaCard}
          alt="product-detail"
          width={300}
          height={300}
          className="img-fluid"
        />
      );
    } else if (brand_img !== null) {
      return (
        <Image
          loader={myLoader}
          src={brand_img}
          // src={maximaCard}
          alt="product-detail"
          width={300}
          height={300}
          className="img-fluid"
        />
      );
    } else {
      return (
        <Image
          src={maximaCard}
          // src={maximaCard}
          alt="product-detail"
          width={300}
          height={300}
          className="img-fluid"
        />
      );
    }
  };

  return (
    <>
      <div className="product_card product-wrap product text-center p-2 my-0">
      
    
        <div className="stock_wishlistcl  ">
          {/* <div className={!in_stock_status ? "out_of_stock" : "in_stocks"}>
            {<p className="out_of_stock_text mb-0">Out of stock</p>}
          </div> */}

          <div className="d-flex justify-content-end">
            {wishlist_state.wishProduct.find((items: any) => {
              if (items === name) {
                wishproducts = items;
              }
            })}
            {!wishproducts ? (
              <a
                href="#"
                // className="btn-product-icon btn-wishlist w-icon-heart mt-0"
                onClick={() => {
                  dispatch(AddWishlist(name));
                  if (wishlist_state?.item?.msg === "success") {
                    setWishlistToast(true);
                  }
                  setTimeout(() => {
                    dispatch(GetWishlist());
                  }, 500);
                }}
              >
                <i
                  className="fa fa-heart-o text-danger fs-1 "
                  aria-hidden="true"
                ></i>
              </a>
            ) : (
              <a
                href="#"
                onClick={() => {
                  console.log("clicked");
                  dispatch(DeleteWishlist(name));

                  setTimeout(() => {
                    dispatch(GetWishlist());
                    setWishlistToastnew(true);
                  }, 500);
                }}
              >
                <i
                  className="fa fa-heart text-danger fs-1 "
                  aria-hidden="true"
                ></i>
              </a>
            )}
          </div>
        </div>

        <div className="img_card">
          <Link href={url} className="">
            {/* <a onClick={() => handleProdShow(id)}> */}

            {/* {handleRenderingOfImages()} */}

             {img_url !== null ? (
              <Image
         
                loader={myLoader}
                src={img_url}
                // src={maximaCard}
                alt="product-detail"
                width={300}
                height={300}
                className="img-fluid"
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

            {/* </a> */}
          </Link>
        </div>
        {/* <figure className="product-media">
          <Link href={url} className="">
            <a onClick={() => handleProdShow(id)}>
              <Image
                loader={() => `${CONSTANTS.API_BASE_URL}${img_url}`}
                src={`${CONSTANTS.API_BASE_URL}${img_url}`}
                alt="product-detail"
                width={143}
                height={143}
                className="img-fluid"
              />
            </a>
          </Link>
        </figure> */}
        {/* <div className="row mt-3">
          <p style={{ lineHeight: "1px" }} className="mb-2 fs-5 ">
            {id}
          </p>
          <div className="col-lg-9 col-md-8 col-8">
            <p className="product-name">
              <a
                href={url}
                className="fs-4 "
                style={{ fontSize: "12px", lineHeight: "2px" }}
              >
                {prod_name}
              </a>
            </p>
            <p style={{ lineHeight: "2px" }} className="fs-4">
              brand
            </p>
            <i className="fa fa-inr fs-4" aria-hidden="true"></i>
            <ins
              className="new-price fs-3 text-decoration-none"
              style={{ lineHeight: "1px" }}
            >
              {price}
            </ins>
            <del className="old-price fs-3 pl-1" style={{ lineHeight: "1px" }}>
              {mrp_price}
            </del>
          </div>

          <div className="cart ps-2 col-lg-3 col-md-4 col-4">
            <a
              className="prodCart my-0"
              style={{ cursor: "pointer" }}
              onClick={handleShow}
            >
              <span className="material-symbols-outlined" id="shopping_cart">
                shopping_cart
              </span>
            </a>
          </div>
        </div> */}
        <div>
          {/* <p style={{ lineHeight: "1px" }} className="mb-2 fs-4 mt-2">
            {name}
          </p> */}
          <p className="product-name">
            <a href={url} className="fs-4 " style={{ fontSize: "12px" }}>
              {item_name}
            </a>
          </p>
          <p style={{ lineHeight: "2px" }} className="fs-4">
            {brand}
          </p>
        </div>
        <div className="row">
          <div className="col-lg-9 col-9">
            <i className="fa fa-inr fs-4" aria-hidden="true"></i>
            <ins className="new-price fs-2 text-decoration-none">{price}</ins>
            <del className="old-price fs-3 pl-1">{mrp_price}</del>
          </div>
          <div className="col-lg-3 col-3">
            <a
              className="prodCart my-0"
              style={{ cursor: "pointer" }}
              onClick={handleShow}
            >
              <span
                className="material-symbols-outlined text-dark"
                id="shopping_cart"
              >
                shopping_cart
              </span>
            </a>
          </div>
        </div>
        {/* <div className="product-details py-0">
          <div className="product-price">
            <i className="fa fa-inr fs-4" aria-hidden="true"></i>
            <ins className="new-price fs-2">{price}</ins>
            <del className="old-price fs-2">{mrp_price}</del>
          </div>
        </div> */}
      </div>

      {/* <Modals name={prod_name}/> */}

      {show ? (
        <Modals
          show={show}
          toHide={handleShow}
          name={item_name}
          id={name}
          prod_slug={prod_slug}
          showToast1={wishlistToast}
          setshowToast1={setWishlistToast}
        />
      ) : null}
    </>
  );
};
