import React from "react";
import { useEffect, useState } from "react";
import useCartListing from "../hooks/cart_page_hooks/cart_hook"
// import styles from "../styles/cart.module.css"
import { useDispatch, useSelector } from "react-redux";
import { deleteCartApi } from "../store/slices/cart_page_slice/delete_from_slice";
import ToastNotification from "../components/ToastNotification";
import { AddCartApi } from "../store/slices/cart_page_slice/add_to_cart";
import { CartListingApi } from "../store/slices/cart_page_slice/cart_slice";
import { Norecord } from "../components/NoRecord";
import cartImg from "../public/assets/images/cart.png";
import loadingGif from "../public/assets/images/circle-loader.gif";
import { ClearCartApi } from "../store/slices/cart_page_slice/cart_slice"
import { useRouter } from "next/router";
// import AppState  from "../store/store";
import { RootState } from "../store/root_reducer";
import { CartCard } from "../cards/cart_card";
import Image from "next/image";
import Link from "next/link";
import Faviconheader from "../components/Faviconheader/Faviconheader";
import { CONSTANTS } from "../services/config/api-config";

const Cartlisting = () => {
  const router = useRouter();
  const { cartListingItems, cartCount, grandTotal } = useCartListing();
  console.log("cart listing", cartListingItems);
  const deleteProduct = useSelector((state: RootState) => state.deleteFromcart);
  console.log("Cart Listing - ", cartListingItems);
  console.log("grand t in cart", grandTotal);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [showToast, setshowToast] = useState(false);
  const [showToast1, setshowToast1] = useState(false);
  // const cart = useSelector((state: AppState) => state.cart);
  const [price, setPrice] = useState(0);

  const myLoader = ({ src, width, quality }: any) => {
    return `${CONSTANTS.API_BASE_URL}${src}?w=${width}&q=${quality || 75
      }`;
  };
  // useEffect(() => {
  //     AddCartApi()
  // }, [])

  const goToCheckout = () => {
    router.push("/checkout");
  };
  // let grand_total = localStorage.getItem("grand_total");

  console.log("Cart count ", cartCount);

  // const setProductQuantity = (value: number, operator: string, id:string) => {
  //     cartListingItems.map((item:any) => {
  //         if (item.id === id) {
  //             if
  //         }
  //     })
  // }

  console.log("Grand total - ", grandTotal);


  console.log("cart listing", cartListingItems);

  const ClearCartHandle = () => {
    console.log("clear cart handle test");
    dispatch(ClearCartApi(cartListingItems[0]?.id) as any);
  };
  if (typeof window !== "undefined") {
    localStorage.removeItem(`grand_total`);
  }

  const handleCartImages = (item: any) => {
    if (item.image_url !== "" && item.image_url !== null) {
      console.log("cart image in if")
      return (<Image
        loader={myLoader}
        src={`${item.image_url}`}
        className="product_item_img img-fluid addcart_item"
        alt="product images"
        width={200}
        height={200}
      />)
    } else {
      console.log("cart image in else")
      return (<Image
        src={loadingGif}
        className="product_item_img img-fluid"
        alt="product images"
        width={200}
        height={200}
      />)
    }
  }

  return (
    <>
      <Faviconheader />
      {cartListingItems.length > 0 ? (
        <div className="container py-5">

          <ToastNotification
            setShow={setshowToast}
            show={showToast}
            content="Delete Item Successfully"

          />
          <ToastNotification
            setShow={setshowToast1}
            show={showToast1}
            content="Cart Updated Successfully"
          />

          {/* <div className="container "> */}
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-sm-7 col-xs-6 ">
                <h3 className="text-uppercase my-1 bold text-dark addcart_heading pl-sm-0">
                  Shopping cart
                </h3>
              </div>
              <div className="col-md-5 col-sm-5 col-xs-6 ">
                <Link href="">
                  <a className="clear_cart" onClick={ClearCartHandle}>
                    Clear Cart
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className=" flex-sm-row row mx-lg-5 ">
            <div className="mt-4 mt-sm-0 col-lg-9 col-md-12 mb-md-2 col-sm-8">
              <div className="cart_table shadow-sm card">
                <div className="card-body">
                  <div className="cart_item ">
                    {cartListingItems &&
                      cartListingItems.map((item: any, index: number) => {
                        return (
                          <div className="row" key={index}>
                            <div className="col-4">
                              {handleCartImages(item)}
                            </div>

                            <div className="col-8">
                              <CartCard
                                item_code={item.item_code}
                                item_name={item.item_name}
                                prod_url={item.product_url}
                                details={item.details}
                                quantity={item.quantity}
                                showToast={showToast}
                                setshowToast={setshowToast}
                                showToast1={showToast1}
                                setshowToast1={setshowToast1}
                                in_stock_status={item.in_stock_status}
                              />

                              <div className="store_pickup_sec">
                                <p className="mb-0 text-dark fw-bold">
                                  Do you want store pickup for this product?
                                </p>
                                <div className="form-check mb-3">
                                  <input
                                    className="form-check-input input_checkbox mt-1"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label
                                    className="form-check-label grey"
                                    htmlFor="flexCheckDefault"
                                  >
                                    Check For Store Pickup
                                  </label>
                                </div>
                              </div>
                            </div>
                            <hr className="hr_line" />
                          </div>
                        );
                        // <p>{item.item_name}</p>
                      })}
                    {/* <p className="mt-3 mb-0 text-dark bold">Do you want store pickup for this product?</p>
                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label grey" htmlFor="flexCheckDefault" >
                                        Check For Pickup Store
                                    </label>
                                  </div> */}
                  </div>
                  {/* <hr className="hr_line" /> */}

                  <div className="sub-total-div text-end greycart">
                    <h5 className="mb-0 sub-total-h5">
                      Sub total ({cartCount} Items) :
                      <i
                        className="fa fa-inr pe-1 ps-1 pt-1"
                        aria-hidden="true"
                      ></i>{" "}
                      <span className="bold">{grandTotal}</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-">
              <div className="shadow-sm card ">
                <div className="card-body grey_card">
                  <h5 className="mb-4 sub-total-h5">
                    Sub total ({cartCount} Items) :
                    <i
                      className="fa fa-inr pe-1 ps-1 bold"
                      aria-hidden="true"
                    ></i>{" "}
                    <span className="bold">{grandTotal}</span>
                  </h5>
                  <Link href="/checkout">
                    <button
                      type="button"
                      className="w-100 text-white checkout_button mb-3 text-uppercase py-2 px-1 yellow_btn"
                      onClick={goToCheckout}
                    >
                      Proceed to Checkout
                    </button>
                  </Link>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        // </div>
      ) : (
        <Norecord
          heading="Your cart is empty!!"
          content="Items added to your cart will show up here"
          img={cartImg}
        />
      )}
    </>
  );
};

export default Cartlisting;
