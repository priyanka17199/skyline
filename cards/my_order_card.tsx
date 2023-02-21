import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CONSTANTS } from "../services/config/api-config";
import loadingGif from "../public/assets/images/circle-loader.gif";
// import styled from "../styles/orderDetail.module.css";
const index = ({ data }: any) => {
  console.log("my order data", data);
  const [year, month, day] = data.date.split("-");
  console.log(year);
  return (
    <div key={data.id}>
      <div className="card-header">
        <div className="row">
          <div
            className="mb-3 mb-sm-0 col-md-2 col-6"
            style={{ lineHeight: "18px" }}
          >
            <p className="text-uppercase gray mb-0 myorder_p">Order Placed</p>
            <p className="gray mb-0 myorder_p">{`${day}/${month}/${year}`}</p>
          </div>
          <div
            className="mb-3 mb-sm-0 text-right text-sm-left col-md-2 col-6"
            style={{ lineHeight: "18px" }}
          >
            <p className="text-uppercase gray mb-0 myorder_p">TOTAL price</p>
            <p className="gray mb-0 myorder_p">₹{data.total}</p>
          </div>
          <div className="col-md-2 col-4" style={{ lineHeight: "18px" }}>
            <p className="text-uppercase gray mb-0 myorder_p">ship to</p>
            {data &&
              data.addresses.map((personAddress: any, index: number) => (
                <div className="dropdown text-dark" key={index}>
                  {personAddress.name === "Shipping Address"
                    ? personAddress.values.map((addr: any) => (
                        <div key={addr.address_id}>
                          <a
                            className="dropdown-toggle p-0 bold text-dark"
                            role="button"
                            id="ship_to"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {personAddress.name}
                          </a>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="ship_to"
                          >
                            <li className="ps-1 pe-1 mb-0 ">
                              {addr.address_title}
                            </li>
                            <li className="ps-1 pe-1 mb-0 ">
                              {addr.address_1}
                            </li>
                            <li className="ps-1 pe-1 mb-0">{addr.address_2}</li>
                            <li className="ps-1 pe-1 mb-0">
                              {addr.city} - {addr.postal_code}
                            </li>
                            <li className="ps-1 pe-1 mb-0">{addr.country}</li>
                            <li className="ps-1 pe-1 mb-0">
                              Phone: {addr.contact}
                            </li>
                          </ul>
                        </div>
                      ))
                    : null}
                </div>
              ))}
          </div>
          <div
            className="text-end col-md-6 col-8"
            style={{ lineHeight: "18px" }}
          >
            <p className="mb-0 myorder_p">Order # {data.id}</p>

            <div className="d-flex justify-content-end align-items-center">
              <div className="flex-fill detail_link text-capitalize">
                <Link href={`myOrder/${data.id}`}>
                  <a href={`myOrder/${data.id}`} className="order_details">
                    order details
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {data.order_detail.map((detail: any) => (
        <div
          className="cart_item card-body order_cartdetails"
          key={detail.prod_id}
        >
          <div className="d-flex mb-2">
            <div className="flex-fill">
              <h6
                className="green text-capitalize bold mb-0 mt-2"
                style={{ fontSize: "15px" }}
              >
                approved
              </h6>
            </div>
            <div className="justify-content-end d-none d-sm-block align-items-end">
              {/* <img
                                    src={`${detail.img}`}
                                    className="product_img img-fluid" /> */}
            </div>
          </div>

          <div className="d-flex align-items-center row">
            <div className="mb-3 mb-sm-0 col-lg-2 col-md-2 col-4 mt-2">
              <div className="product-img">
                {detail.img === null || detail.img === "" ? (
                  <Image
                    src={loadingGif}
                    className="product_img img-fluid orderdetail_img"
                    alt="product-img"
                    width={200}
                    height={200}
                  />
                ) : (
                  <Image
                  loader={() => `${CONSTANTS.API_BASE_URL}${detail.img}`}
                    src={`${CONSTANTS.API_BASE_URL}${detail.img}`}
                    className="product_img img-fluid orderdetail_img"
                    alt="product-img"
                    width={200}
                    height={200}
                  />
                )}
              </div>
            </div>
            <div className="product_item_details col-lg-8 col-md-7 col-8">
              <div className="d-flex" style={{ height: "78%" }}>
                <div className="flex-fill">
                  <Link href="#">
                    <a className="product_item_name bold">{detail.prod_name}</a>
                  </Link>
                  <table width="100%" className="mt-2 table table-borderless">
                    <tbody>
                      {detail.prod_info.map((data: any, index: number) => (
                        <tr className="item_options myorder_tr" key={index}>
                          <td className="px-0 py-0 pb-0 myorder_td">
                            <p className="text-capitalize black mb-0 myorder_p">
                              {data.name}
                            </p>
                          </td>
                          <td
                            width="85%"
                            className="px-0 py-0 pb-0 myorder_width"
                          >
                            <p className="text-capitalize black mb-0 myorder_p">
                              :
                              {data.name === "Price"
                                ? "₹" + data.value
                                : data.value}
                            </p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="text-end col-lg-2 col-md-3 col-12">
              <button className=" order_links mb-2 d-block text-uppercase">
                <Link href={detail.product_url}>
                  <a href={detail.product_url} className="orderdetails_btn">
                    View Product
                  </a>
                </Link>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="mt-3 col-sm-12"></div>
          </div>
          <hr className="d-block hr_orderdetail" />
        </div>
      ))}
    </div>
  );
};

export default index;
