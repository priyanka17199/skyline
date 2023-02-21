import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from '../../styles/checkout.module.css';
import { Cart_Listing } from "../../store/slices/cart_page_slice/cart_slice";
import Image from "next/image";
import { CONSTANTS } from "../../services/config/api-config";
import loadingGif from "../../public/assets/images/circle-loader.gif";

const OrderSummary = (props: any) => {
  const { orderSummary } = props;
  const [cartListingItems, setcartListingItems] = useState<any>([]);
  const cartProducts = useSelector(Cart_Listing);
  console.log("checkout summary id in summery", orderSummary);

  useEffect(()=>
  {
    setcartListingItems(cartProducts.item)  
  },[])
  const myLoader = ({ src, width, quality }:any) => {
    return `${CONSTANTS.API_BASE_URL}${src}?w=${width}&q=${quality || 75}`
  }
  return (
    <div>
      <div>
        {/* <h6 className="px-2 py-0 text-uppercase">Order Summary</h6> */}
        {!orderSummary ? null : (
          <div>
            {orderSummary.map((data: any, index: number) => (
              <div className="order-summery px-2 px-sm-0 px-xm-0" key={index}>
                <div className="row mb-1 ">
                  <div className="col-6">
                    {data.name === "Total" ? (
                      <strong className="mb-0 p-0">{data.name}</strong>
                    ) : (
                      <p className={`mb-0 p-0 ${styles.summary_p}`}>{data.name}</p>
                    )}
                  </div>
                  <div className="col-6 text-end">
                    <p className={`mb-0 ${styles.summary_p}`}>
                      {data.name === "Coupon Code" ? (
                        <div>
                          {/* <i className="fa fa-inr"></i> */}
                          <span > {data.value}</span>
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
      <div className="checkout-item">
        {
          // cart.item.map((data: any) => (
          cartListingItems.map((data: any, index: number) => (
            <div className="row border mx-2 my-1 " key={index}>
              <div className="col-4">
                <div className="checkout-img mt-3">
                {data.image_url > 0 || data.image_url !== null ? (
                           <Image
                           loader={myLoader}
                             src={`${data.image_url}`}
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
                 
                </div>
              </div>
              <div className="col-8 ">
                <div className="checkout_item_details " style={{marginTop:"10px"}}>
                  <h6 className="mb-0 product_item_name ">{data.item_name}</h6>
                  <table
                    width="100%"
                    className="mb-0 mt-1 table table-borderless"
                  >
                    <tbody>
                      {data.details.map((detail: any, index: number) => (
                        <tr className="item_options   " key={index} >
                          <td width="35%" className="px-0 py-0 pb-1 " >
                            <p className={`text-capitalize mb-0 ${styles.cart_p}`} >
                              {detail.name}
                            </p>
                          </td>
                          <td width="65%" className="px-0 py-0 pb-1">
                            <p className={`text-capitalize mb-0 ${styles.cart_p}`} >
                              :{" "}
                              {detail.name === "Model No"
                                ? detail.value.split("-")[0]
                                : detail.value}
                            </p>
                          </td>
                        </tr>
                      ))}
                      <tr className="item_options ">
                        <td width="35%" className="px-0 py-0 ">
                          <p className={`mb-0 ${styles.cart_p}`} >Qty</p>
                        </td>
                        <td width="65%" className="px-0 py-0 ">
                          <p className={`mb-0 ${styles.cart_p}`} >: {data.quantity}</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default OrderSummary;
