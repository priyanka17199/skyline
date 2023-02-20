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
import { prodDetail } from "../../../datasets/prodDetail";
import { prodDetailUpdate } from "../../../datasets/prodDetailUpdate";
import ToastNotification from "../../ToastNotification";
import table from "../../../styles/test.module.css";
import { dealerAddCartApi } from "../../../store/slices/cart_page_slice/dealer_addto_cart_slice";
import Image from "next/image";
import * as ga from "../../../lib/ga";
import getproductPincode from "../../../services/api/product_detail_api/pincode_validate_api";

const Product_detail: FC<ProductDetailCardInterface> = (props: any) => {
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
    stockAvailability,
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

  console.log("detail", quantity);
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

  const handlePincode = (e: any) => {
    setPincode(e.target.value);
  };

  useEffect(() => {
    getproductPincode(Pincode).then((res: any) => {
      setMessage(res);
    });
  }, [Pincode]);

  console.log(Pincode, "Pincode");
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
    if (isDealer === "true") {
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
    } else {
      dispatch(AddCartApi(detail[0]?.name, quantity, initialSize, initialColor));
      console.log("add cart store", addtocart);
      setTimeout(() => {
        dispatch(CartListingApi());
      }, 5000);
      ga.event({
        action: "add_to_cart",
        params: {
          not_set: detail[0]?.name,
        },
      });
    }
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
      <div className="product_detail_block">
        {detail?.length > 0 &&
          detail?.map((item: any, index: number) => (
            <div key={index}>
              <div className="product-info">
                <h2 className="product_name">{item?.item_name}</h2>
                <b
                  className="grey"
                  style={{ fontSize: "14px", marginTop: "10px" }}
                >
                  Model No : {item?.id}
                </b>
                <br />
                <h3 className="p_price">
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
                <ul className="key_feature_list_ul">
                  {item?.features &&
                    item.features?.map((feat: any, index: number) => (
                      <>
                        <h6 className="product_feature_heading mt-2">
                          {feat?.name}
                        </h6>
                        {feat.values?.map((list: any, index: number) => (
                          <li key={index} className="feature_list">
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
                  className="btn sizechart_btn"
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

        <table
          className="mx-auto mb-0 inventory_table table table-sm"
          style={{ marginTop: "-10px" }}
        >
          <tbody>
            <div className="d-flex">
              <div className="pe-3 inventory" style={{ fontSize: "15px;" }}>
                <i className="fa fa-check-circle green green_mark">&nbsp;</i>
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

            {detail?.length > 0 &&
              detail?.map((item: any, index: number) => (
                <tr key={index}>
                  <td
                    style={{ paddingBottom: "12px" }}
                    className="b2bborder_bottom"
                  >
                    <div>
                      <div className="d-flex mb-1">
                        <div
                          className="pe-3 col-lg-5 col-md-4 col-sm-6 sku_code"
                          style={{ fontSize: "12px" }}
                        >
                          SKU Code: <span className="bold">{item.name}</span>
                        </div>
                      </div>
                      <div className="d-flex mb-1 align-items-center">
                        <div className="d-flex align-items-center product_quantity">
                          <div className="pe-3" style={{ fontSize: "12px" }}>
                            Quantity:
                          </div>
                          <div>
                            <div className="pe-3">
                              <input
                                type="number"
                                className="form-control varient_input"
                                min="0"
                                value={Quanties}
                                name={item.item_code}
                                onChange={(e) => {
                                  InputvalchangeHandler(e, item.item_code);
                                }}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="pe-3 quantity_avail">
                          {item.qty !== 0 ? (
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
              ))}
          </tbody>
        </table>
        <button
          type="button"
          className={`btn btn-warning mt-4 cart_btn_gtag yellow_btn`}
          onClick={handleAddCart}
        >
          ADD TO CART
        </button>

        <div className="stock-availability-link">
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#stockModal "
            className="stock_btn "
          >
            Check Future Stock Availability
          </button>
        </div>

        <div className="container ">
          <div className="modal" id="stockModal">
            <div className="modal-dialog modal-lg">
              <div className="modal-content " >
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
                      <tr>
                        <th>Warehouse name</th>
                        <th>Available Stock</th>
                        <th>Available On</th>
                        <th>Incoming Stock Qty</th>
                        <th>Additional Qty Available on</th>
                      </tr>

                      <tr>
                        {stockAvailability?.length > 0 &&
                          stockAvailability.map(
                            (stockData: any, index: number) => {
                              return (
                                <>
                                  <td>{stockData.warehouse}</td>
                                  <td>{stockData.qty}</td>
                                  <td>{stockData.date}</td>
                                  <td>{stockData.incoming_qty}</td>
                                  <td>{stockData.incoming_date}</td>
                                </>
                              );
                            }
                          )}
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product_detail;
