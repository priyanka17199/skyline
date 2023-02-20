import styles from "../styles/cart.module.css";
import { CartInterface } from "../interfaces/cart_interface";
import React, { FunctionComponent as Component, useState } from "react";
import {
  deleteCartApi,
  deleteItemFromCart,
} from "../store/slices/cart_page_slice/delete_from_slice";
import { useDispatch, useSelector } from "react-redux";
import { CartListingApi } from "../store/slices/cart_page_slice/cart_slice";
import ToastNotification from "../components/ToastNotification";
import { useRouter } from "next/router";
// import { AppState } from "../store/store";
import useCartListing from "../hooks/cart_page_hooks/cart_hook";
import { AddCartApi } from "../store/slices/cart_page_slice/add_to_cart";
import Link from "next/link";
import * as ga from "../lib/ga";
export const CartCard: Component<CartInterface> = (props: any) => {
  const {
    item_name,
    prod_url,
    details,
    quantity,
    image,
    item_code,
    showToast,
    setshowToast,
    showToast1,
    setshowToast1,
    in_stock_status
  } = props;
  const router = useRouter();
  const { cartListingItems, cartCount, grandTotal } = useCartListing();
  console.log("cart listing", cartListingItems);
  console.log("Cart Listing - ", cartListingItems);
  console.log("grand t in cart", in_stock_status);
  // const navigate = useNavigate();
  // const [showToast, setshowToast] = useState(false);
  // const [showToast1, setshowToast1] = useState(false);
  // const cart = useSelector((state: AppState) => state.cart);

  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
  const handleSetDelete = (id: any) => {
    dispatch(deleteCartApi(id) as any);
    setTimeout(() => {
      dispatch(CartListingApi() as any);
    }, 2000);
    ga.event({
      action: "remove_from_cart",
      params: {
        not_set: id
      },
    });
    return setshowToast(true);
  
  };
  return (
    <>
      <div className="product_item_details">
        <div className="d-flex align-items-center">
          <div className="flex-fill w-50">
            <div className="d-flex justify-content-between ">
              <p className="fw-bold mb-0">
                <Link href={`/${prod_url}`}>
                  <a className="prod_name">{item_name}</a>
                </Link>
              </p>
            </div>
            <table className="mt-1 mb-0 table table-borderless">
              <tbody>
                {details.map((detail: any, index: number) => {
                  return (
                    <tr className="item_options myorder_tr" key={index}>
                      <td className="px-0 py-0 pb-0 cartlist_widthtd">
                        <p
                          className="text-capitalize mb-0 mt-0 p_class"
                        >
                          {detail.name}{" "}
                      
                        </p>
                      </td>
                      <td  className="px-0 py-0 pb-0 cartlist_width">
                        <p className="text-capitalize mb-0 p_class">
                          : {detail.name==="Price"? "₹"+detail.value:detail.value}
                        </p>
                      </td>
                    </tr>                  
                  );
                 
                })} 
              
              </tbody>
                 
              <p className="green" style={{fontSize:"13px",marginBottom: "-6px"}}>{in_stock_status===true?"In Stock":"Out Of Stock"}</p>
              
            </table>
            <div className="quantity_block">
              <div className="d-flex align-items-center">
                <h6 className="mb-1 qty_head">
                  Select Quantity:
                </h6>
                <div>
                  <div className="quantity_input_div mt-1">
                    <button
                      type="button"
                      className="quantity_btn"
                      onClick={() => {
                        dispatch(AddCartApi(item_code, quantity - 1));
                        setTimeout(() => {
                          dispatch(CartListingApi());
                        }, 2000);
                        return setshowToast1(true);
                      }}
                    >
                      <i
                        className="fa fa-minus me-2 plus_minus"
                        aria-hidden="true"
                      ></i>
                    </button>
                    <input
                      type="text"
                      className="quantity_input"
                      value={quantity}
                    />
                    <button
                      type="button"
                      className="custom_btn_css quantity_btn"
                      onClick={() => {
                        dispatch(AddCartApi(item_code, quantity + 1));
                        setTimeout(() => {
                          dispatch(CartListingApi());
                        }, 2000);
                        return setshowToast1(true);
                      }}
                    >
                      <i
                        className="fa fa-plus ms-2 plus_minus"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="item_action pb-0 d-flex">
              <div className="item_action_link mb-2">
                <button
                  className="astext"
                  onClick={() => handleSetDelete(item_code)}
                >
                  <Link href="">
                    <a>Delete</a>
                  </Link>
                </button>
              </div>
              {/* <span className="mx-2"> | </span>
                                  <div className="item_action_link mb-2">
                                    <button
                                      className="astext text-underline-hover"
                                    //   onClick={() =>
                                    //     handleSetDelete(item.item_code)
                                    //   }
                                    >
                                      <a href="">Compare</a>
                                    </button>
                                  </div> */}

              {/* <div className="item_action_link compare-pipe">
                                                                    <button className="astext">Compare</button>
                                                                </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
