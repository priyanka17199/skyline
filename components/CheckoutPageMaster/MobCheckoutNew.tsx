import React, { useEffect, useState } from "react";
import useCheckOutNewHook from "../../hooks/order_checkout_page_hooks/checkout_hook_new";
import ToastNotification from "../ToastNotification";
// import styled from "../../styles/MobCheckout.module.css";
import DeleteCouponCode from "../../services/api/checkout_page_api/delete_coupon_code";
import { getOrderSummary } from "../../store/slices/checkout_page_slice/order_summary";
import { useDispatch, useSelector } from "react-redux";
import CouponCodeFetch from "../../services/api/checkout_page_api/coupon_code_api";
import useCartListing from "../../hooks/cart_page_hooks/cart_hook";
import EditFormShippingAddress from "../AddressForm/edit_address_form";
import PlaceOrderApiNew from "../../services/api/checkout_page_api/place_order_api_new";
import Router from "next/router";
import { CartListingApi } from "../../store/slices/cart_page_slice/cart_slice";
import FormShippingAddress from "../AddressForm/shipping_address_form";
import OrderSummary from "../OrderSummary/OrderSummary";
import { CheckoutPageInterface } from "../../interfaces/checkout_page_interface";
import VisitorAddress from "../AddressForm/visitor_address_form";
import Link from "next/link";
import RedirectPayment from "../../services/api/checkout_page_api/redirect_payment_site_api";
import * as ga from '../../lib/ga'
import HandleOrderSection from "./HandleOrderSection";


const MobCheckoutNew = ({
  shippingAddresses,
  billingAddresses,
  initialShippingAddress,
  setinitialShippingAddress,
  initialBillingAddress,
  setinitialBillingAddress,
  orderSummary,
  quotationId,
  handleChangeSameAsShipping,
  billingCheckbox,
}: CheckoutPageInterface) => {
  // const [billingCheckbox, setBillingCheckbox] = useState<boolean>(true);

  console.log("mob checkout billing address in render file", billingAddresses);
  console.log("mob checkout billing address in render file", billingAddresses);
  console.log(
    "##mob checkout billing address in initial",
    initialBillingAddress
  );

  console.log(
    "mob checkout shipping address in initial",
    initialShippingAddress
  );

  const { cartListingItems } = useCartListing();
  const cart: any = useCartListing();

  const [deleteCoupon, setdeleteCoupon] = useState<boolean>(false);
  const [couponCode, setCouponCode] = useState("");
  const [showEditModal, setshowEditModal] = useState(false);
  const [detailData, setdetailData] = useState();
  const [showToast, setshowToast] = useState(false);
  const [show, setshow] = useState(false);
  const [type, setType] = useState("");

  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log("###billing checkbox",billingCheckbox)
  //   if (billingCheckbox) {
  //     setinitialBillingAddress(
  //       customerShippingAddresses.initialShippingAddressID
  //     );

  //   } else {
  //     console.log("###else",billingCheckbox)
  //     setinitialBillingAddress(
  //       customerBillingAddresses.initialBillingAddressID);
  //   }
  // }, [customerBillingAddresses.data,billingCheckbox]);

  // console.log("###mob initialbill",initialBillingAddress)

  const handleShow = (val: any) => {
    setshow(!show);
    setType(val);
  };

  const handleEditModal = (cardData: any) => {
    console.log("form edit data", cardData);
    setshowEditModal(!showEditModal);
    setdetailData(cardData);
    console.log("cardData", cardData);
  };

  let response: any;
  // const handlePlaceOrder = async () => {
  //   let res = await PlaceOrderApiNew(
  //     cartListingItems[0]?.id,
  //     initialShippingAddress,
  //     initialBillingAddress
  //   );
  //   console.log("checkout order succes place res", res);
  //   if (res.data.message.msg !== "error") {
  //     response = res.data.message.data;
  //     setshowToast(true);
  //     Router.push(`/thankyou/${response}`);
  //   }
  //   dispatch(CartListingApi());
  // };

  const handlePlaceOrder = async () => {
    let res = await RedirectPayment(cartListingItems[0]?.id,  orderSummary[5]?.value )
    window.location.href=`${res}`
    dispatch(CartListingApi());
    ga.event({
      action: "begin_checkout",
      params : {
      not_set: JSON.stringify(cartListingItems) 
        // not_set: cartListingItems[0]?.id
      }
    })

  }

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

  let isDealer: any = localStorage.getItem("isDealer");
  if (isDealer === "false") {
    isDealer = false;
  } else {
    isDealer = true;
  }

  let visitor_login = false;

  return (
    <>
      {/* <span style={{ marginTop: "370px" }}> */}
        {/* <ToastNotification
        
          setShow={setshowToast}
          show={showToast}
          content="Placed Order Successfully"
        /> */}
      {/* </span> */}

      <div className="">
        <div className="mt-0">
      <button
        type="button"
        onClick={handlePlaceOrder}
        className=" d-block w-100 mx-auto yellow_btn p-3 text-white  bold rounded  place_order_button"
      >
        {deleteCoupon}
        Place Order
      </button>
      </div>
        <div className="container ">
          <div className="row">
            {/* Place order */}
      

            {isDealer ? null : (
              <>
                {!visitor_login ? (
                  <div>
                   
                    <div className="col-lg-12 mb-5 w-100">
                      <ul className="nav nav-tabs justify-content-center ">
                        <li className="nav-item ">
                          <a
                            className="nav-link active bold px-0"
                            href="#coupon"
                            data-bs-toggle="tab"
                            aria-selected="false"
                            role="tab"
                            tabIndex={-1}
                          >
                            <span className="bold" style={{ fontSize: "15px" }}>
                              Apply Coupon Code
                            </span>
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            className="nav-link bold px-0"
                            href="#store"
                            data-bs-toggle="tab"
                            aria-selected="false"
                            role="tab"
                            tabIndex={-1}
                          >
                            <span className="bold" style={{ fontSize: "15px" }}>
                              Use Store Credits
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="tab-content">
                      <div
                        className="specifications_details mb-3 tab-pane fade active show "
                        id="coupon"
                        role="tabpanel"
                      >
                        <div className="col-12 ">
                          <div className="row">
                            <div
                              id="collapseOne"
                              className="accordion-collapse collapse show"
                              aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body py-0">
                                <form
                                  // onSubmit={onFormSubmit}
                                  className="pt-3 fields-group-md"
                                >
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      className="form-control w-75 mx-auto coupon_input"
                                      id="couponCode"
                                      name="couponCode"
                                      value={couponCode}
                                      onChange={(e: any) =>
                                        setCouponCode(e.target.value)
                                      }
                                    />
                                    <span className="red"></span>
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
                                        onClick={(e: any) =>
                                          handleApplyCouponCode(e)
                                        }
                                      >
                                        Apply Coupon
                                      </button>
                                    </div>
                                  )}
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="tech_details mb-3 tab-pane fade"
                        id="store"
                        role="tabpanel"
                      >
                        <div className="row container">
                          <form
                            className="fields-group-md store_balance"
                          >
                            <span>Store credit balance: 0</span>
                            <div className="form-group pt-3">
                              <input
                                placeholder="Enter credit amount"
                                type="text"
                                className="form-control "
                              />
                              <span className="red"></span>
                            </div>
                          </form>
                          <button
                            type="button"
                            className="btn btn-sm transparent custom-btn d-block w-75 mx-auto btn btn-primary mt-2 "
                          >
                            Use store credit
                          </button>
                        </div>
                      </div>
                    </div>

                    <hr className="mt-0" />

                    <div
                      className="container order_summary_section"
                    >
                      <h5 className="bold">Order Summary</h5>
                      {!orderSummary ? (
                        <div>Loading...</div>
                      ) : (
                        <div>
                          {orderSummary.map((data: any, index: number) => (
                            <div className="order-summery" key={index}>
                              <div className="row mb-1">
                                <div className="col-6">
                                  {data.name === "Total" ? (
                                    <strong className="mb-0">
                                      {data.name}
                                    </strong>
                                  ) : (
                                    <p className="mb-0">{data.name}</p>
                                  )}
                                </div>
                                <div className="col-6 text-end">
                                  <p className="mb-0">
                                    {data.name === "Coupon Code" ? (
                                      <div>
                                        <span> {data.value}</span>
                                      </div>
                                    ) : (
                                      <div>
                                        <i className="fa fa-inr"></i>
                                        <span> {data.value}</span>
                                      </div>
                                    )}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <hr />

                    <OrderSummary />
                    {/* Billing address And shipping Address */}

                    <div className="container px-0 my-0">
                      <div className="row">
                        <h5>{initialShippingAddress}</h5>
                        <div className="col-lg-12 mb-2 w-100">
                          <ul
                            className="nav nav-tabs justify-content-center address_header"
                          >
                            <li className="nav-item">
                              <a
                                className="nav-link active bold px-0"
                                href="#shipping"
                                data-bs-toggle="tab"
                                aria-selected="false"
                                role="tab"
                                tabIndex={-1}
                              >
                                <span
                                  className="bold"
                                  // style={{ fontSize: "18px" }}
                                >
                                  Shipping Address
                                </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link bold px-0"
                                href="#billing"
                                data-bs-toggle="tab"
                                aria-selected="false"
                                role="tab"
                                tabIndex={-1}
                              >
                                <span
                                  className="bold"
                                  // style={{ fontSize: "18px" }}
                                >
                                  Billing Address
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="tab-content ">
                          <div
                            className="address_details mb-3 tab-pane fade active show"
                            id="shipping"
                            role="tabpanel"
                          >
                            <div className="col-12 mt-2">
                              {initialShippingAddress}
                              {shippingAddresses &&
                                shippingAddresses.map(
                                  (detail: any, index: any) => (
                                    <div className="container " key={index}>
                                      <div className="row ">
                                        <div className="col-1 pb-4">
                                          {shippingAddresses &&
                                          initialShippingAddress ===
                                            detail.address_id ? (
                                            <input
                                              type="radio"
                                              className="fs-4"
                                              onClick={() =>
                                                setinitialShippingAddress(
                                                  detail.address_id
                                                )
                                              }
                                              checked={true}
                                              id="shipping"
                                              name="shipping"
                                              value="shipping"
                                            />
                                          ) : (
                                            <input
                                              type="radio"
                                              className="fs-4"
                                              onClick={() =>
                                                setinitialShippingAddress(
                                                  detail.address_id
                                                )
                                              }
                                              id="shipping"
                                              name="shipping"
                                              value="shipping"
                                            />
                                          )}
                                        </div>
                                        <label className="col-6">
                                          Shipping Address
                                        </label>
                                        <div
                                          className="col text-end edit_button"
                                        >
                                          <button
                                            type="button"
                                            style={{
                                              background: "none",
                                              border: "none",
                                            }}
                                            onClick={() => {
                                              handleEditModal(detail);
                                              // setEditId(shippingAddress[index].address_id)
                                              // setDefaultData(shippingAddress[index])
                                            }}
                                            className="text-decoration-underline"
                                          >
                                            Edit
                                          </button>
                                        </div>
                                      </div>

                                      <div className="row">
                                        <div className="col-6">
                                          <div className="d-flex ">
                                            <p className="">{detail.name}</p>
                                          </div>
                                        </div>
                                        <div className="col-6">
                                          <div className="d-flex">
                                            <p className="  "></p>
                                          </div>
                                        </div>
                                        <div className="col-6">
                                          <div className="d-flex ">
                                            <p className="">
                                              {detail.address_1}
                                            </p>
                                          </div>
                                        </div>
                                        <div className="col-6 d-flex ">
                                          <p className="">{detail.address_2}</p>
                                        </div>
                                        <div className="col-6 d-flex ">
                                          <p className="">{detail.country}</p>
                                        </div>
                                        <div className="col-6 d-flex ">
                                          <p className="">{detail.state}</p>
                                        </div>
                                        <div className="col-6 d-flex ">
                                          <p className="">{detail.city}</p>
                                        </div>
                                        <div className="col-6 d-flex">
                                          <p className="">
                                            {detail.postal_code}
                                          </p>
                                        </div>
                                        <div className="col-6 d-flex ">
                                          {/* <p className="">{detail.email}</p> */}
                                          <a
                                            href={`mailto:${detail.email}`}
                                            target="_blank"
                                            rel="noreferrer"
                                          >
                                            {detail.email}
                                          </a>
                                        </div>
                                        <div className="col-6 d-flex ">
                                          {/* <p className="">{detail.contact}</p> */}
                                          <a
                                            href={`tel:${detail.contact}`}
                                            target="_blank"
                                            rel="noreferrer"
                                          >
                                            {detail.contact}
                                          </a>
                                        </div>
                                      </div>
                                      <hr />
                                    </div>
                                  )
                                )}
                            </div>
                            <span className="d-flex align-items-center mt-2 px-4">
                              <button
                                onClick={() => handleShow("Shipping")}
                                className="fs-2 address_icon"
                              >
                                <i className="fa fa-edit text-primary "></i>
                              </button>
                              {/* style={{ background: "none", border: "none" }} */}
                              <div className="fs-3 mx-2 mb-1">
                                Create New Address
                              </div>
                            </span>
                          </div>

                          <div
                            className="tech_details mb-3 tab-pane fade"
                            id="billing"
                            role="tabpanel"
                          >
                            <div className="col-12 mt-2">
                              {initialBillingAddress}

                              <div className="container ">
                                <div className="row px-2">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input fs-5 bill_checkbox"
                                      type="checkbox"
                                      defaultChecked={true}
                                      id="flexCheckDefault"
                                      onChange={(e: any) =>
                                        handleChangeSameAsShipping(
                                          e.target.checked
                                        )
                                      }
                                    />
                                    <label
                                      className="form-check-label fs-3"
                                      htmlFor="flexCheckDefault"
                                    >
                                      Same as Shipping Address
                                    </label>
                                  </div>
                                </div>
                                <h5>{initialBillingAddress}</h5>

                                {!billingCheckbox ? (
                                  <>
                                    <div className="d-flex justify-content-between "></div>
                                    <div className="col-12 mt-2">
                                      {billingAddresses &&
                                        billingAddresses.map(
                                          (detail: any, index: any) => (
                                            // <div className="container ">
                                            <div className="row " key={index}>
                                              <div className="col-1 pb-4">
                                                {billingAddresses &&
                                                initialBillingAddress ===
                                                  detail.address_id ? (
                                                  <input
                                                    type="radio"
                                                    className="fs-4"
                                                    onClick={() =>
                                                      setinitialBillingAddress(
                                                        detail.address_id
                                                      )
                                                    }
                                                    id="billing"
                                                    name="billing"
                                                    value="billing"
                                                    checked={true}
                                                  />
                                                ) : (
                                                  <input
                                                    type="radio"
                                                    className="fs-4"
                                                    onClick={() =>
                                                      setinitialBillingAddress(
                                                        detail.address_id
                                                      )
                                                    }
                                                    id="billing"
                                                    name="billing"
                                                    value="billing"
                                                  />
                                                )}
                                              </div>
                                              <label className="col-6">
                                                Billing Address
                                              </label>
                                              <div
                                                className="col text-end edit_button"
                                              >
                                                <button
                                                  type="button"
                                                  style={{
                                                    background: "none",
                                                    border: "none",
                                                  }}
                                                  onClick={() => {
                                                    handleEditModal(detail);
                                                  }}
                                                  className="text-decoration-underline"
                                                >
                                                  Edit
                                                </button>
                                              </div>
                                              {/* </div> */}

                                              <div className="row">
                                                <div className="col-6">
                                                  <div className="d-flex ">
                                                    <p className="">
                                                      {detail.name}
                                                    </p>
                                                  </div>
                                                </div>
                                                <div className="col-6">
                                                  <div className="d-flex">
                                                    <p className="  "></p>
                                                  </div>
                                                </div>
                                                <div className="col-6">
                                                  <div className="d-flex ">
                                                    <p className="">
                                                      {detail.address_1}
                                                    </p>
                                                  </div>
                                                </div>
                                                <div className="col-6 d-flex ">
                                                  <p className="">
                                                    {detail.address_2}
                                                  </p>
                                                </div>
                                                <div className="col-6 d-flex ">
                                                  <p className="">
                                                    {detail.country}
                                                  </p>
                                                </div>
                                                <div className="col-6 d-flex ">
                                                  <p className="">
                                                    {detail.state}
                                                  </p>
                                                </div>
                                                <div className="col-6 d-flex ">
                                                  <p className="">
                                                    {detail.city}
                                                  </p>
                                                </div>
                                                <div className="col-6 d-flex">
                                                  <p className="">
                                                    {detail.postal_code}
                                                  </p>
                                                </div>
                                                <div className="col-6 d-flex ">
                                                  <a
                                                    href={`mailto:${detail.email}`}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                  >
                                                    {detail.email}
                                                  </a>
                                                </div>
                                                <div className="col-6 d-flex ">
                                                  <a
                                                    href={`tel:${detail.contact}`}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                  >
                                                    {detail.contact}
                                                  </a>
                                                </div>
                                              </div>
                                              <hr />
                                            </div>
                                          )
                                        )}
                                    </div>

                                    <span className="d-flex align-items-center mt-2 ">
                                      <button
                                        onClick={() => handleShow("Billing")}
                                        className="fs-2 address_icon"
                                      >
                                        <i className="fa fa-edit text-primary "></i>
                                      </button>
                                      <div className="fs-3 mx-2 mb-1">
                                        Create New Billing Address
                                      </div>
                                    </span>
                                  </>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className=" container row ">
                      <div className="col-lg-8 ">
                        <h3 className="text-uppercase bold">
                          checkout details
                        </h3>
                        <div className="d-flex align-items-center">
                          <button className="btn btn-warning btn-sm rounded-0 bold">
                            <Link href={"/login"}>LOGIN</Link>
                          </button>
                          <span className="text-muted px-2 fs-6">or</span>
                          <div className="d-flex align-items-center ">
                            <input
                              className="form-check-input fs-6"
                              type="checkbox"
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label px-2 fs-6 text-muted"
                              htmlFor="flexCheckDefault"
                            >
                              Login as Guest
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-4 border rounded-1 mt-3" >
                          <h5 className="my-3 bold text-uppercase px-1">
                            Order Summary
                          </h5>
                          <OrderSummary orderSummary={orderSummary} />
                        </div>

                        <div className="border rounded-1 mt-2">
                          <h5 className="px-3">Create new address</h5>
                          <h6 className="bold px-3 mb-0">Shipping</h6>
                          <VisitorAddress
                            address_type="Shipping"
                            isSameAsShipping={billingCheckbox}
                          />
                          <h6 className="bold px-3">Billing</h6>
                          <div className="d-flex align-items-center px-3">
                            <input
                              className={`form-check-input fs-6 `}
                              type="checkbox"
                              defaultChecked={false}
                              id="flexCheckDefault"
                              onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                              ) => handleChangeSameAsShipping(e.target.checked)}
                            />
                            <label
                              className="form-check-label px-2 fs-6"
                              htmlFor="flexCheckDefault"
                            >
                              Same as Shipping Address
                            </label>
                          </div>
                          {billingCheckbox ? (
                            <VisitorAddress
                              address_type="Billing"
                              isSameAsShipping={billingCheckbox}
                            />
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Order Summary section*/}

      {/* CART SECTION */}

      {/* <div className="checkout-item">
        {
          cart.cartListingItems.map((data: any, index: number) => (
            <div className="row mx-2 my-1" key={index}>
              <div className="col-4">
                <div className="checkout-img mt-3">
                  <Image
                  loader={myLoader}
                    src={`${data.image_url}`}
                    className="product_img img-fluid"
                    alt="product image"
                    width={120}
                    height={120}
                  />
                </div>
              </div>
              <div className="col-8">
                <div className="checkout_item_details">
                  <h6 className="mb-0 product_item_name">{data.item_name}</h6>
                  <table
                    width="100%"
                    className="mb-0 mt-2 table table-borderless"
                  >
                    <tbody>
                      {data.details.map((detail: any, index: number) => (
                        <tr className="item_options" key={index}>
                          <td width="35%" className="px-0 py-0 pb-1">
                            <p className="text-capitalize  mb-0">
                              {detail.name}
                            </p>
                          </td>
                          <td width="65%" className="px-0 py-0 pb-1">
                            <p className="text-capitalize  mb-0">
                              :{" "}
                              {detail.name === "Model No"
                                ? detail.value.split("-")[0]
                                : detail.value}
                            </p>
                          </td>
                        </tr>
                      ))}
                     
                      <tr className="item_options">
                        <td width="35%" className="px-0 py-0 pb-1">
                          <p className="">Qty</p>
                        </td>
                        <td width="65%" className="px-0 py-0 pb-1">
                          <p className="">: {data.quantity}</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))
        }
      </div> */}
      <hr />

      
      {show ? (
        <FormShippingAddress
          show={show}
          toHide={handleShow}
          address_type={type}
        />
      ) : null}

      {showEditModal ? (
        <EditFormShippingAddress
          show={showEditModal}
          toHide={handleEditModal}
          detailData={detailData}
          address_type={type}
        />
      ) : null}
    </>
  );
};

export default MobCheckoutNew;
