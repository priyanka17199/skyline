import React, { useEffect, useState } from "react";
import PlaceOrderApiNew from "../../services/api/checkout_page_api/place_order_api_new";
import { CartListingApi, Cart_Listing } from "../../store/slices/cart_page_slice/cart_slice";
import OrderSummary from "../OrderSummary/OrderSummary";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import CouponCodeFetch from "../../services/api/checkout_page_api/coupon_code_api";
import { getOrderSummary } from "../../store/slices/checkout_page_slice/order_summary";
import DeleteCouponCode from "../../services/api/checkout_page_api/delete_coupon_code";
import useCheckOutNewHook from "../../hooks/order_checkout_page_hooks/checkout_hook_new";
import * as ga from "../../lib/ga";
import RedirectPayment from "../../services/api/checkout_page_api/redirect_payment_site_api";
import StoreCreditPostApi from "../../services/api/checkout_page_api/store_credit_api";
import { CONSTANTS } from "../../services/config/api-config";

const HandleOrderSection = (props: any) => {
  const {
    initialShippingAddress,
    orderSummary,
    quotationId,
    initialBillingAddress,
  } = props;

  const [cartListingItems, setcartListingItems] = useState<any>([]);
  const cartProducts = useSelector(Cart_Listing);
  // const { initialBillingAddress } = useCheckOutNewHook();
  // const { cartListingItems } = useCartListing();
  const [deleteCoupon, setdeleteCoupon] = useState<boolean>(false);
  const [couponCode, setCouponCode] = useState("");
  const [storeCredit, setStoreCredit] = useState<any>(0);
  const dispatch = useDispatch();
  let response: any;
  // console.log("checkout summary in handleordersection", orderSummary[5]?.value);
  console.log("quotationn id", cartProducts);
  console.log("###billing checkbox placeorder", initialBillingAddress);

  useEffect(() => {
    setcartListingItems(cartProducts.item);
  }, []);

  // const customerBillingAddresses: any = useSelector(customer_billing_address);
  // const customerShippingAddresses: any = useSelector(customer_shipping_address);

  // useEffect(()=>{
  //   console.log("inside use",initialBillingAddress)
  //   setfinitialBillingAddress(initialBillingAddress)
  // },[customerBillingAddresses.data,customerShippingAddresses.data])

  // console.log("###final bill add",finitialBillingAddress)
  const handlePlaceOrder = async () => {
    console.log("###in placeorder", initialBillingAddress);
    // console.log("checkout ", orderSummary[5]?.value);
    // console.log("checkout cart", cartListingItems[0]?.id);
    // console.log("checkout initial shipping address", initialShippingAddress);
    // console.log("checkout initial billing address", initialBillingAddress);
    let res = await PlaceOrderApiNew(
      cartListingItems[0]?.id,
      initialShippingAddress,
      initialBillingAddress
    );
    console.log("handle order", res);
    // let res = await RedirectPayment(cartListingItems[0]?.id,  orderSummary[5]?.value )
    // console.log("payment checkout order succes place res", res);
    // window.open(`${res}`);
    // window.location.href=`${res}`
    if (res.data.message !== "error") {
      response = res.data.message;
      // setshowToast(true);
      // Router.push(`/thankyou`);
      Router.push(`/thankyou/${response}`);
    }
    dispatch(CartListingApi());
    ga.event({
      action: "begin_checkout",
      params: {
        not_set: JSON.stringify(cartListingItems),
        // not_set: cartListingItems[0]?.id
      },
    });
  };
  const handleApplyCouponCode = async (e: any) => {
    e.preventDefault();
    console.log("coupon code", couponCode);
    console.log("coupon code bool", deleteCoupon);
    let res = await CouponCodeFetch(quotationId, couponCode);
    console.log(" coupon code res", res);
    if (res.data.message.msg !== "error") {
      setCouponCode("");
      setdeleteCoupon(!deleteCoupon);
      dispatch(getOrderSummary(quotationId));
    }
  };

  const handleDeleteCouponCode = async () => {
    let res = await DeleteCouponCode(quotationId);
    if (res.data.message.msg !== "error") {
      setdeleteCoupon(false);
      dispatch(getOrderSummary(quotationId));
    }
  };
  console.log(cartListingItems, "#####");
  let isDealer = JSON.parse(localStorage.getItem("isDealer") as any);
  // console.log("********is dealer ", typeof isDealer);
  // if (isDealer === "false") {
  //   isDealer = false;
  // }else{
  //   isDealer = true;
  // }

  const handleStoreCredit = async (e: any) => {
    e.preventDefault();
    console.log("store Credit", storeCredit);
    let res = await StoreCreditPostApi(parseInt(storeCredit));
    console.log("store response", res);
    if (res.data.message.msg !== "error") {
      dispatch(getOrderSummary(quotationId));
    }
  };
  return (
    <div>
      <div className="text-center mb-3">
        <button
          type="button"
          onClick={handlePlaceOrder}
          className="btn btn-md d-block w-100 btn btn-warning bold btn_place_order yellow_btn"
        >
          {deleteCoupon}
          Place Order
        </button>
      </div>

      <div className="shadow-sm card">
        <div className="card-body py-0 px-1">
          {isDealer ? null : (
            <div className="accordion" id="accordionExample">
              {CONSTANTS.ENABLE_APPLY_COUPON_CODE ?(<><div className="accordion-item border-0">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed pt-3 pb-1 fs-4"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Apply Coupon Code
                  </button>
                </h2>

                <div
                  id="collapseOne"
                  className="accordion-collapse collapse "
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body py-0 pt-2">
                    <form
                      // onSubmit={onFormSubmit}
                      className=" fields-group-md"
                    >
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="couponCode"
                          name="couponCode"
                          value={couponCode}
                          onChange={(e: any) => setCouponCode(e.target.value)}
                        />
                        <span className="red"></span>
                        <div></div>
                      </div>

                      {deleteCoupon ? (
                        <div>
                          <button
                            type="button"
                            className="btn btn-sm custom-btn transparent d-block w-100 btn btn-danger mt-2"
                            onClick={() => handleDeleteCouponCode()}
                          >
                            Delete Coupon
                          </button>
                        </div>
                      ) : (
                        <div>
                          <button
                            type="button"
                            className="btn btn-sm custom-btn transparent d-block w-100 btn btn-primary mt-2"
                            onClick={(e: any) => handleApplyCouponCode(e)}
                          >
                            Apply Coupon
                          </button>
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div></>) : null}

              {CONSTANTS.ENABLE_APPLY_COUPON_CODE ?(<> <div className="border-bottom py-2"></div></>): null}
              
             
              {CONSTANTS.ENABLE_STORE_CREDIT ? (
                <>
                  <div className="accordion-item border-0">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed pt-2 fs-4"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Use store credit
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body pt-1 pb-0">
                        <form className=" fields-group-md">
                          {/* <span>Store credit balance: {}</span> */}
                          <div className="form-group">
                            <input
                              placeholder="Enter credit amount"
                              type="text"
                              className="form-control"
                              value={storeCredit}
                              onChange={(e: any) =>
                                setStoreCredit(e.target.value)
                              }
                            />
                            <span className="red"></span>
                          </div>
                        </form>
                        <button
                          type="button"
                          className="btn btn-sm transparent custom-btn d-block w-100 btn btn-primary mt-2"
                          onClick={(e: any) => handleStoreCredit(e)}
                        >
                          Use store credit
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}

              {/* <hr className="mt-3 mb-3" /> */}
              <div className="border-bottom py-2"></div>
            </div>
          )}
          {/* put order summary */}
          <h5 className="px-2 pt-2 text-uppercase">Order Summary</h5>

          <OrderSummary orderSummary={orderSummary} />
        </div>
      </div>
    </div>
  );
};

export default HandleOrderSection;
