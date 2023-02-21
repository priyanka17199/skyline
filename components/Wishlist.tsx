import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "../cards/product_card";
import useWishlist from "../hooks/general_hooks/wishlist_hook";
import { DeleteWishlist, GetWishlist } from "../store/slices/general_slice/wishlist_slice";
import Image from "next/image";
import { CONSTANTS } from "../services/config/api-config";
import { useEffect, useState } from "react";
import ToastNotification from "../components/ToastNotification";
import Link from "next/link";
import useProductDetail from "../hooks/product_detail_page_hooks/product_detail_hook";
import { CartListingApi } from "../store/slices/cart_page_slice/cart_slice";
import { AddCartApi, ResetAddCart, addcart } from "../store/slices/cart_page_slice/add_to_cart";
import * as ga from "../lib/ga";
import { Norecord } from "../components/NoRecord";
import {wishlist_state} from "../store/slices/general_slice/wishlist_slice"
import loadingGif from "../public/assets/images/circle-loader.gif"
const Wishlistcom = () => {
  const { quantity } = useProductDetail();
  const dispatch = useDispatch();
  const addtocart = useSelector(addcart);
  console.log("addtocart", addtocart);
  const wishlistDetails = useSelector(wishlist_state)
  const [showToast, setshowToast] = useState(false);
  const [showToast1, setshowToast1] = useState(false);
  const [showErrorToast, setshowErrorToast] = useState(false);

  const wishlistData = useWishlist();
  console.log("wishlist response in render file", wishlistData.wishlistData);

  //   const wishlist_state = useSelector((state: any) => state.wishlist);
  //   console.log("wishlist tsx",wishlist_state)

  const myLoader = ({ src, width, quality }: any) => {
    return `${CONSTANTS.API_BASE_URL}${src}?w=${width}&q=${quality || 75}`;
  };

  const handleAddCart = (id: any, in_stock_status: any) => {
    console.log("add to cart id", in_stock_status);
    // dispatch(AddCartApi(detail[0]?.id, quantity));
    dispatch(AddCartApi(id, quantity));
    //   console.log("add cart store", addtocart);
    if (in_stock_status === false) {
      setshowErrorToast(!showErrorToast);
    } else {
      setshowToast1(!showToast1);
    }
    setTimeout(() => {
      dispatch(CartListingApi());
    }, 5000);
    ga.event({
      action: "add_to_cart",
      params: {
        not_set: id,
      },
    });
  };

  //   useEffect(() => {
  //     if (addtocart.msg === "error") {
  //       setshowErrorToast(!showErrorToast);
  //       dispatch(ResetAddCart());
  //     }
  //     if (addtocart.msg === "success") {
  //       setshowToast(!showToast);
  //       dispatch(ResetAddCart());
  //     }
  //   }, [addtocart]);
  return (
    <>
      <div className="container mt-5">
        <ToastNotification
          setShow={setshowToast}
          show={showToast}
          content="Item removed Successfully"
        />
        <ToastNotification
          setShow={setshowToast1}
          show={showToast1}
          content="Added to Cart"
        />
        <ToastNotification
          setShow={setshowErrorToast}
          show={showErrorToast}
          content="Item is Out of Stock"
        />
        <div className="page-content">
          <div className="container">
            {wishlistData?.wishlistCount > 0 ? (
              <>
                <h3 className="wishlist-title">My wishlist</h3>
                <table className="shop-table wishlist-table">
                  <thead>
                    <tr>
                      <th className="product-name">
                        <span>Product</span>
                      </th>
                      <th></th>
                      <th className="product-price">
                        <span>Price</span>
                      </th>
                      <th className="product-stock-status">
                        <span>Stock Status</span>
                      </th>
                      <th className="wishlist-action text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    { wishlistDetails?.item?.data.map((item: any, index: any) => (
                      <tr key={index}>
                        <td className="product-thumbnail">
                          <div className="p-relative">
                            <a href="product-default.html">
                              <figure>
                            

{item.image_url==="" || item.image_url !== null ? (
                           <Image
                           loader={myLoader}
                             src={`${item?.image_url}`}
                             className="product_img img-fluid"
                             alt="product image"
                             width={120}
                             height={120}
                           />
                          ) : (
                            <Image
                              src={loadingGif}
                              className="product_item_img img-fluid border orderdetail_img"
                              alt="product_img"
                              width={130}
                              height={130}
                            />
                          )}
                              </figure>
                            </a>
                            <button
                              type="submit"
                              className="btn btn-close"
                              onClick={() => {
                                dispatch(DeleteWishlist(item.id));
                                setTimeout(() => {
                                  dispatch(GetWishlist());
                                  setshowToast(!showToast);
                                }, 500);
                                // if(wishlist_state.item.msg === "success") {
                                //     console.log("success")
                                //     setshowToast(!showToast)
                                // }
                                console.log("idd", item.id);
                              }}
                            >
                              <i className="fa fa-times"></i>
                            </button>
                          </div>
                        </td>
                        <td className="product-name px-5">
                          <a href="product-default.html">{item.prod_name}</a>
                        </td>
                        <td className="product-price">
                          <ins className="new-price fs-3">{item.price}</ins>
                          <del className="old-price fs-3 px-3">
                            {item.mrp_price}
                          </del>
                        </td>
                        <td className="product-stock-status">
                          <div
                          // className={
                          //     !item.in_stock_status
                          //         ? "out_of_stock"
                          //         : "in_stocks"
                          // }
                          >
                            <span className="wishlist-in-stock ">
                              {item.in_stock_status === false ? (
                                <span className="text-dark bold">
                                  Out of stock
                                </span>
                              ) : (
                                <span className="text-success bold">
                                  In stock
                                </span>
                              )}
                            </span>
                          </div>
                        </td>
                        <td className="wishlist-action">
                          <div className="d-lg-flex">
                            <button className="text-white yellow_btn px-4 mx-4">
                              <Link
                                // href={item.url+"/"+item.product_slug}
                                href={item.url}
                                className=" btn-rounded btn-sm ml-lg-2 "
                              >
                                Quick View
                              </Link>
                            </button>
                            <button
                              className="text-white btn btn-dark px-4"
                              onClick={(id) =>
                                handleAddCart(item.id, item.in_stock_status)
                              }
                            >
                              Add to cart
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            ) : (
              <Norecord
                heading="Your Wishlist is empty!!"
                content="Items added to your Wishlist will show up here"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlistcom;
