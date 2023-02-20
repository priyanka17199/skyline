import { useState, FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductDetailCardInterface } from "../../../interfaces/product_detail_card_interface";
import {
  AddCartApi,
  ResetAddCart,
  addcart,
} from "../../../store/slices/cart_page_slice/add_to_cart";
// import ResetAddCart from "../../../store/slices/add_to_cart";
import { CartListingApi } from "../../../store/slices/cart_page_slice/cart_slice";
import ToastNotification from "../../ToastNotification";
import styles from "../../../styles/Product_Detail.module.css";
import table from "../../../styles/test.module.css";
import { dealerAddCartApi } from "../../../store/slices/cart_page_slice/dealer_addto_cart_slice";
import Image from "next/image";
import * as ga from "../../../lib/ga";
import getproductPincode from "../../../services/api/product_detail_api/pincode_validate_api"

const ProductDetail: FC<ProductDetailCardInterface> = (props: any) => {
  const {
    detail,
    variants,
    initialColor,
    setInitialColor,
    initialSize,
    setInitialSize,
    handleColor,
    handleSize,
    quantity,
    handleQuantity,
    handleQuantityDecre,
    handleQuantityIncre,
  } = props;
  const dispatch = useDispatch();
  const addtocart = useSelector(addcart);
  

  const [detailData, setdetailData] = useState<any>([]);
  const testArr: any = [];
  const testObj: any = {};

  const handleDetailData = (variant_code: any, quantity: any) => {
    console.log("");
    console.log("", quantity);
  };

  console.log("detail", detail);
  console.log("detail variants", variants);
  console.log("detail initial size", initialSize);
  const [showToast, setshowToast] = useState(false);
  const [showErrorToast, setshowErrorToast] = useState(false);
  const [userExist, setuserExist] = useState(false);
  const [Inputqty, setInputqty] = useState<any>([]);
  const [Quanties, setQuanties] = useState<any>();
  const [Message, setMessage] = useState<any>();
  const [values, setValues] = useState<any>();
  const [productCat, setProductcat] = useState<any>([]);

  
  const [newobject, setnewObject] = useState<any>([]);
  const [Pincode, setPincode] = useState<any>();
  let isDealer: any;
  let isLoggedInUser: any;
  let val: any;
  let newproduct_Code: any;

  let newarry: any;
  let newobj: any = {};
  if (typeof window !== "undefined") {
    isDealer = localStorage.getItem("isDealer");
    isLoggedInUser = localStorage.getItem("token");
  }
  console.log(isDealer);

  const myLoader = ({ src, width, quality }: any) => {
    return `http://scott-sports-v14.8848digitalerp.com${src}?w=${width}&q=${
      quality || 75
    }`;
  };

  const InputvalchangeHandler = (e: any, variant_code: any) => {
    if (e.target.value !== "") {
      newarry = newobject.find((item: any) => {
        return item.item_code === variant_code;
      });
      console.log(newarry);
      if (newarry) {
        setnewObject(
          newobject.map((item: any) => {
            if (item.item_code === variant_code) {
              return { item_code: variant_code, quantity: e.target.value };
            } else {
              return item;
            }
          })
        );
      } else {
        let obj: any = { item_code: variant_code, quantity: e.target.value };
        setnewObject([...newobject, obj]);
      }
    }
  };

  const handlePincode = (e:any) => {
    setPincode ( e.target.value); 
}

useEffect(() => {
  getproductPincode(Pincode).then((res: any) => {
    setMessage(res);
    });
},[Pincode])
 
  console.log (Pincode,"Pincode")
  console.log(newobj);
  console.log(newarry);
  val = Object.values(Inputqty);
  newproduct_Code = Object.keys(Inputqty);
  console.log(productCat);
  console.log(newobject);
  //  useEffect(() => {
  //   newproduct_Code.map((code:any)=>{
  //     setName(code)
  //   })
  // }, [newproduct_Code])

  useEffect(() => {
    val.map((newval: any) => {
      setValues(newval);
    });
  }, [val]);

  const handleAddCart = async () => {
    // console.log("check login", isLoggedInUser);
    if(isDealer === "true")
    {
      dispatch(dealerAddCartApi(newobject));
      setshowToast(!showToast);
      setTimeout(() => {
        dispatch(CartListingApi());
      }, 5000);
      ga.event({
        action: "add_to_cart",
        params: {
          not_set: JSON.stringify(newobject),
        },
      });
    }
    else
    {
      dispatch(
        AddCartApi(detail[0]?.id, quantity, initialSize, initialColor)
      );
      console.log("add cart store", addtocart);
      setTimeout(() => {
        dispatch(CartListingApi());
      }, 5000);
      ga.event({
        action: "add_to_cart",
        params: {
          not_set: detail[0]?.id
        },
      });
    }
    // if (!isLoggedInUser) {
    //   setuserExist(!userExist);
    // } else {
    //   if (isDealer === "true") {
        // dispatch(dealerAddCartApi(newobject));
        // setshowToast(!showToast);
        // setTimeout(() => {
        //   dispatch(CartListingApi());
        // }, 2000);
        // ga.event({
        //   action: "add_to_cart",
        //   params: {
        //     not_set: JSON.stringify(newobject),
        //   },
        // });
    //   } else {
    //     dispatch(
    //       AddCartApi(detail[0]?.id, quantity, initialSize, initialColor)
    //     );
    //     console.log("add cart store", addtocart);
    //     setTimeout(() => {
    //       dispatch(CartListingApi());
    //     }, 2000);
    //     ga.event({
    //       action: "add_to_cart",
    //       params: {
    //         not_set: detail[0]?.id
    //       },
    //     });
    //   }
    // }
   
 
  };

  useEffect(() => {
    if (addtocart.msg === "error") {
      setshowErrorToast(!showErrorToast);
      dispatch(ResetAddCart());
    }
    if (addtocart.msg === "success") {
      setshowToast(!showToast);
      dispatch(ResetAddCart());
    }
  }, [addtocart]);
  return (
    <>
      <ToastNotification
        setShow={setshowToast}
        show={showToast}
        content="Added to Cart"
      />
      <ToastNotification
        setShow={setshowErrorToast}
        show={showErrorToast}
        content="Item is Out of Stock"
      />
      <ToastNotification
        setShow={setuserExist}
        show={userExist}
        content="Please Login"
      />
      {/* {detail.length} */}
      <div className={styles.product_detail_block}>
        {detail?.length > 0 &&
          detail?.map((item: any, index: number) => (
            <div key={index}>
              <div className="product-info">
                <h2 className={styles.product_name}>{item?.name}</h2>
                <b
                  className="grey"
                  style={{ fontSize: "14px", marginTop: "10px" }}
                >
                  Model No : {item?.id}
                </b>
                <br />
                <h3 className={styles.p_price}>
                  <i
                    className="fa fa-inr"
                    aria-hidden="true"
                    style={{ fontWeight: 300 }}
                  ></i>
                  <span style={{ marginRight: "10px", fontWeight: 400 }}>
                    {item?.price}
                  </span>
                  <s style={{ fontWeight: 400 }}>{item?.mrp_price}</s>
                </h3>
              </div>
              <div className="product-feature">
                <ul className={styles.key_feature_list_ul}>
                  {item?.features &&
                    item.features?.map((feat: any, index: number) => (
                      <>
                        <h6
                          className={` ${styles.product_feature_heading} mt-2`}
                        >
                          {feat?.name}
                        </h6>
                        {feat.values?.map((list: any, index: number) => (
                          <li key={index} className={`${styles.feature_list}`}>
                            {list}
                          </li>
                        ))}
                      </>
                    ))}
                </ul>
              </div>
              <div className="size-chart-link">
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                  className={`btn ${styles.sizechart_btn}`}
                  style={{}}
                >
                  Size chart
                </button>
              </div>

              <div className="container">
                <div className="modal" id="myModal">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                        ></button>
                      </div>

                      <div className="modal-body">
                        <div className="size-chart">
                          {/* image component of next js added */}
                          <Image
                            loader={myLoader}
                            src={
                              item?.size_chart === null
                                ? "/files/1hmvo6bAd3qNtjEL.png"
                                : item?.size_chart
                            }
                            alt="size_chart"
                            className="img-fluid"
                            width={600}
                            height={600}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {isDealer === "true" ? (
          <table
            className="mx-auto mb-0 inventory_table table table-sm"
            style={{ marginTop: "-10px" }}
          >
            <tbody>
              <div className="d-flex">
                <div
                  className={`pe-3 ${styles.inventory}`}
                  style={{ fontSize: "15px;" }}
                >
                  <i
                    className={`fa fa-check-circle green ${styles.green_mark}`}
                  >
                    &nbsp;
                  </i>
                  <span className="bold">Available</span>
                </div>
                <div className="pe-3" style={{ fontSize: "15px;" }}>
                  <i className="fa fa-clock-o yellow">&nbsp;</i>
                  <span className="bold">Future availability</span>
                </div>
                <div className="pe-3" style={{ fontSize: "15px;" }}>
                  <i className="fa fa-times-circle red">&nbsp;</i>
                  <span className="bold">Sold Out</span>
                </div>
              </div>

              {variants.length > 0 &&
                variants.map((item: any, index: number) => {
                  return item?.variants
                    ? item.variants.map((vary: any) => {
                        return (
                          <tr key={index}>
                            <td
                              style={{ paddingBottom: "12px" }}
                              className={styles.b2bborder_bottom}
                            >
                              <div>
                                <div className="d-flex mb-1">
                                  <div
                                    className={`pe-3 col-lg-5 col-md-4 col-sm-6 ${styles.sku_code}`}
                                    style={{ fontSize: "12px" }}
                                  >
                                    SKU Code:{" "}
                                    <span className="bold">
                                      {vary.variant_code}
                                    </span>
                                  </div>
                                  <div
                                    className={`pe-3 col-md-6 col-sm-6 ${styles.variation_code}`}
                                    style={{ fontSize: "12px" }}
                                  >
                                    Variation:{" "}
                                    <span className="bold">
                                      {vary.size} {vary.color}
                                    </span>
                                  </div>
                                </div>
                                <div className="d-flex mb-1 align-items-center">
                                  <div
                                    className={`d-flex align-items-center ${styles.product_quantity}`}
                                  >
                                    <div
                                      className="pe-3"
                                      style={{ fontSize: "12px" }}
                                    >
                                      Quantity:
                                    </div>
                                    <div>
                                      <div className="pe-3">
                                        <input
                                          type="number"
                                          className={`form-control ${styles.varient_input}`}
                                          min="0"
                                          value={Quanties}
                                          name={vary.variant_code}
                                          onChange={(e) => {
                                            InputvalchangeHandler(
                                              e,
                                              vary.variant_code
                                            );
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div
                                    className={`pe-3 ${styles.quantity_avail}`}
                                  >
                                    {vary.stock ? (
                                      <i
                                        className="fa fa-check-circle green"
                                        style={{ fontSize: "15px;" }}
                                      ></i>
                                    ) : (
                                      <i
                                        className="fa fa-times-circle red"
                                        style={{ fontSize: "15px;" }}
                                      ></i>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    : "No variants available";
                })}
            </tbody>
          </table>
        ) : (
          <div className="size_btn_block">
            <>
              <h6
                className={styles.product_feature_heading}
                style={{ marginTop: "-18px" }}
              >
                Select Size:{" "}
                <span style={{ fontWeight: 400 }}>{initialSize}</span>{" "}
              </h6>
              <div className="d-flex"></div>

              {variants?.length > 0 &&
                variants?.map((item: any, index: number) => {
                  return item?.attributes
                    ?.find((size_vals: any) => "size_values" in size_vals)
                    .size_values.map((val: any) => {
                      return (
                        <button
                          type="button"
                          className={`btn mb-3 btn_size ${
                            val === initialSize ? "active" : ""
                          }`}
                          onClick={(e: any) => handleSize(e.target.value)}
                          value={val}
                          key={index}
                        >
                          {val}
                        </button>
                      );
                    });
                })}

              {/* {variants?.length > 0 &&
                variants?.map((item: any, index: number) => {
                  return item?.attributes
                    ? item?.attributes[3]?.size_values?.map((vary: any) => {
                        return (
                          <button
                            type="button"
                            className={`btn btn_size button_size ${
                              vary === initialSize ? "active" : ""
                            }`}
                          onClick={(e: any) => handleSize(e.target.value)}
                          value={vary}
                          key={index}
                        >
                          {vary}
                        </button>
                      );
                    })
                    : "No Size Available";
                })} */}
            </>
          </div>
        )}

        {isDealer === "true" ? null : (
          <>
            <div className="size_btn_block">
              <>
                <h6 className={styles.product_feature_heading}>
                  Select Colour:{" "}
                  <span style={{ fontWeight: 400 }}>{initialColor}</span>{" "}
                </h6>
                <div className="d-flex">
                  {variants?.length > 0 &&
                    variants?.map((item: any, index: number) => {
                      return item?.attributes
                        ?.find(
                          (color_vals: any) => "colour_values" in color_vals
                        )
                        .colour_values.map((val: any) => {
                          return (
                            <button
                              type="button"
                              className={`btn btn_size ${
                                val === initialColor ? "active" : ""
                              }`}
                              onClick={(e: any) => handleColor(e.target.value)}
                              value={val}
                              key={index}
                            >
                              {val}
                            </button>
                          );
                        });
                    })}
                  {/* {variants?.length > 0 &&
                    variants?.map((item: any, index: number) => {
                      return item?.attributes
                        ? item?.attributes[4]?.colour_values?.map(
                            (colour: any) => {
                              return (
                                <button
                                  type="button"
                                  className={`btn btn_size button_size ${
                                    colour === initialColor ? "active" : ""
                                  }`}
                                onClick={(e: any) =>
                                  handleColor(e.target.value)
                                }
                                value={colour}
                                key={index}
                              >
                                {colour}
                              </button>
                            );
                          }
                        )
                        : "No Colour Available";
                    })} */}
                </div>
              </>
            </div>
          </>
        )}

        {isDealer === "true" ? null : (
          <div className={`${styles.quantity_block}`}>
            <div className="d-flex align-items-center">
              <h6 className={styles.product_feature_heading}>
                Select Quantity:
              </h6>
              <div>
                <div className={`${styles.quantity_input_div}`}>
                  <button
                    type="button"
                    className={`${styles.quantity_btn}`}
                    onClick={handleQuantityDecre}
                  >
                    <i
                      className={` ${styles.minus_btn} fa fa-minus me-2 plus-minus`}
                      aria-hidden="true"
                    ></i>
                  </button>

                  <input
                    type="text"
                    className={`${styles.quantity_input}`}
                    value={quantity}
                    onChange={(e: any) => handleQuantity(e.target.value)}
                    disabled
                  />

                  <button
                    type="button"
                    className={`${styles.quantity_btn}`}
                    onClick={handleQuantityIncre}
                  >
                    <i
                      className={` ${styles.plus_minus} fa fa-plus ms-2 plus-minus`}
                      aria-hidden="true"
                    ></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Below code is to show-hide check stock availability modal */}
        {isDealer === "true" ? null : (
          <>
            <div className="stock-availability-link">
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#stockModal"
                className={`btn ${styles.stock_btn}`}
              >
                Check Stock Availability
              </button>
            </div>
            <div className="container">
              <div className="modal" id="stockModal">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                      ></button>
                    </div>

                    <div className="modal-body">
                      <div className="order_detail_table">
                        <table className={table.tablee}>
                          <tbody>
                            <tr>
                              {detail?.length > 0 &&
                                detail?.map((item: any, index: number) => {
                                  return (
                                    <>
                                      {item?.variation?.length > 0 ? (
                                        item?.variation?.map(
                                          (
                                            variant_label: any,
                                            index: number
                                          ) => {
                                            return (
                                              <>
                                                <th key={index}>
                                                  {variant_label?.name}
                                                </th>
                                              </>
                                            );
                                          }
                                        )
                                      ) : (
                                        <th>
                                          variant attributes not available
                                        </th>
                                      )}
                                      {/* <th>{}</th> */}
                                    </>
                                  );
                                })}
                              <th>Stock</th>
                            </tr>

                            {variants?.length > 0 &&
                              variants?.map((item: any, index: number) => {
                                return (
                                  item?.variants?.length > 0 &&
                                  item?.variants?.map(
                                    (values: any, index: number) => {
                                      return (
                                        <tr key={index}>
                                          <td>{values?.size}</td>
                                          <td>{values?.colour}</td>
                                          <td>
                                            {values.stock ? (
                                              <i
                                                className="fa fa-check"
                                                aria-hidden="true"
                                                style={{ color: "green" }}
                                              ></i>
                                            ) : (
                                              <i
                                                className="fa fa-times"
                                                aria-hidden="true"
                                                style={{ color: "red" }}
                                              ></i>
                                            )}
                                          </td>
                                        </tr>
                                      );
                                    }
                                  )
                                );
                              })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {isDealer === "true" ? null : (
          <div
            className="delivery-preferences-block"
            style={{ marginTop: "20px" }}
          >
            <h6 className={`${styles.delivery_prefrences_block_heading}`}>
              Delivery Preferences
            </h6>
            <ul className={styles.key_feature_list_ul}>
              <li
                className={`${styles.key_feature_list_pref} ${styles.feature_list}`}
              >
                {detail[0]?.home_delivery_available ? (
                  <i className={`fa fa-check-circle ${styles.fa_yestick}`}>
                    &nbsp;
                  </i>
                ) : (
                  <i
                    className="fa fa-times"
                    aria-hidden="true"
                    style={{ color: "red" }}
                  ></i>
                )}
                home delivery available
              </li>
              <li
                className={`${styles.key_feature_list_pref} ${styles.feature_list}`}
              >
                {detail[0]?.store_pick_up_available ? (
                  <i className={`fa fa-check-circle ${styles.fa_yestick}`}>
                    &nbsp;
                  </i>
                ) : (
                  <i
                    className="fa fa-times"
                    aria-hidden="true"
                    style={{ color: "red" }}
                  ></i>
                )}
                store pickup available
              </li>
            </ul>
          </div>
        )}
        {isDealer === "true" ? null : (
          <div className={`${styles.pincode_block}`}>
            <span className={styles.pincode_txt}>
              Home delivery available for this product,please enter your area
              pincode to check
            </span>
            <input
              placeholder="Enter area pincode"
              type="text"
              className={`form-control ${styles.pin_field}`}
              onChange={(e: any) => handlePincode(e)}
              value={Pincode}
            />
             <span className={styles.pincode_txt} style={{color:Message===true?"#2ab551":"red"}}>
            {Pincode && Message===true? "*Delivery is Available for this Pincode": Pincode &&Message===false? "*Delivery is Unavailable for this Pincode":""}
            </span>
          </div>
        )}

        <button
          type="button"
          className={`btn btn-warning mt-4 cart_btn_gtag yellow_btn`}
          onClick={handleAddCart}
        >
          ADD TO CART
        </button>
      </div>
    </>
  );
};

export default ProductDetail;
