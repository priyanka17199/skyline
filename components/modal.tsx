import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddCartApi } from "../store/slices/cart_page_slice/add_to_cart";
import { Modal } from "react-bootstrap";
import { CartListingApi } from "../store/slices/cart_page_slice/cart_slice";
import { dealerAddCartApi } from "../store/slices/cart_page_slice/dealer_addto_cart_slice";
import ToastNotification from "./ToastNotification";
// import "../../pages/product-detail/details.css";
// import { AddCartApi } from "../../store/screens/add-to-cart";
// import { CartListingApi } from "../../store/screens/cart-listing";
// import styles from "../styles/Product_Detail.module.css"
const Modals = ({ show, toHide, name, id, prod_slug, showToast1, setshowToast1 }: any) => {
  let [data, setdata] = useState<any>([]);
  let [sizes, setsize] = useState<any>([]);
  let [colors, setColors] = useState<any>([]);
  const [selectedSize, setselectedSize] = useState<string>("");
  const [selectedColor, setselectedColor] = useState<string>("");
  let [quantity, setquantity] = useState<number>(1);
  const [newobject, setnewObject] = useState<any>([]);
  const [Quanties, setQuanties] = useState<any>();
  const [active, setActive] = useState<any>(false);
  const [coloractive, setcolorActive] = useState<any>(false);
  const [indexSize, setIndexsize] = useState<any>();
  const [indexColor, setIndexcolor] = useState<any>();
  
  let newarry: any;
  const dispatch = useDispatch();
  let newsize: any;
  const dealers = localStorage.getItem("isDealer");

  useEffect(() => {
    console.log(id);
    const getdetail = async (prod_id: any) => {
      await axios
        .get(
          `http://scott-sports-v14.8848digitalerp.com/api/method/sportnetwork.api.map.version_mapper?version=v1&method=get_variants&entity=product&item=${prod_slug}`
        )
        .then((res) => {
          console.log(res);
          setActive(true);
          setcolorActive(true);
          setdata((data = [res.data.message.data]));
          setsize(
            data[0]?.attributes.find(
              (vary_obj: any) => "size_values" in vary_obj
            )?.size_values[0]
          );
          setColors(
            data[0]?.attributes.find(
              (colorsval: any) => "colour_values" in colorsval
            )?.colour_values[0]
          );
          // setsize(size = [...data[0].size]);
          // console.log(size);
          // setselectedSize(size[0].name);
          // console.log(selectedSize);
          // console.log(size[0].name);

          // console.log(data[0].values);
        })
        .catch((err) => console.log(err));
      setActive(true);
      setcolorActive(true);
    };

    getdetail(id);
  }, []);
  const handleQuantity = (e: any) => {
    setquantity(e.target.value);
    console.log(quantity);
  };

  const handleQuantityIncre = () => {
    setquantity(quantity + 1);
  };
  const handleQuantityDecre = () => {
    if (quantity != 1) {
      setquantity(quantity - 1);
    } else {
      setquantity(1);
    }
  };

  const handleSize = (e: any, ids: any) => {
    e.preventDefault();
    setActive(false);
    setselectedSize(e.target.value);
    setIndexsize(ids);
    // if(item===e.target.value) {
    //   e.target.classList.toggle('modal_btn');

    //  }
    // else{
    //   e.target.classList.remove('modal_btn');
    // }
  };
  const handleColor = (e: any, id: any) => {
    e.preventDefault();
    setcolorActive(false);
    setselectedColor(e.target.value);
    setIndexcolor(id);
    // if(item===selectedColor) {
    //   e.target.classList.toggle('modal_btn');
    // }
    console.log("modal color", e.target.value);
  };

  console.log("modal color", data[0]);
  const handleAddCart = () => {
    if (dealers === "true") {
      dispatch(dealerAddCartApi(newobject));
      //  await getdealerAddCartList(Name, values).then((res)=>{
      //   console.log(res)
      //   })
      setTimeout(() => {
        dispatch(CartListingApi());
      }, 1500);
      toHide();
    } else {
      console.log(quantity);
      console.log(selectedSize);
      dispatch(
        AddCartApi(
          id,
          quantity,
          active === true ? sizes : selectedSize,
          coloractive === true ? colors : selectedColor
        )
      );
      // console.log(isItemAdded.item);
      // if (isItemAdded.item === "Item Added To Cart") {
      //     setshowToast(!showToast);
      // }
      // else {
      //     setshowToast(false);
      // }

      setTimeout(() => {
        dispatch(CartListingApi());
      }, 1500);
      toHide();
      setshowToast1(!showToast1)
    }
  };

  const InputvalchangeHandler = (e: any, variant_code: any) => {
    if (e.target.value !== "") {
      newarry = newobject.find((item: any) => {
        return item.item_code === variant_code;
      });
      // setInputqty({ ...Inputqty, [e.target.name]: e.target.value });
      // setProductcat((values:any)=>[[...values], Inputqty]);
      // setProduct((values: any) => [[...values], e.target.value]);
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

  return (
    <>
      <ToastNotification
        setShow={setshowToast1}
        show={showToast1}
        content="Added to Cart"
      />

      <Modal show={show} onHide={toHide}>
        <Modal.Header closeButton>
          <Modal.Title
            className="modals_title"
            style={{ fontWeight: 400, fontSize: "1.28rem", color: "#666" }}
          >
            {name}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {dealers === "true" ? (
            <>
              <table className="mx-auto mt-3 mb-0 inventory_table table table-sm">
                <tbody>
                  <div className="d-flex">
                    <div
                      className="pe-3 modal_available"
                      style={{ fontSize: "15px;" }}
                    >
                      <i className="fa fa-check-circle green">&nbsp;</i>
                      <span className="bold modal_text">Available</span>
                    </div>
                    <div
                      className="pe-3 modal_available"
                      style={{ fontSize: "15px;" }}
                    >
                      <i className="fa fa-clock-o yellow">&nbsp;</i>
                      <span className="bold modal_text">
                        Future availability
                      </span>
                    </div>
                    <div
                      className="pe-3 modal_available"
                      style={{ fontSize: "15px;" }}
                    >
                      <i className="fa fa-times-circle red">&nbsp;</i>
                      <span className="bold modal_text">Sold Out</span>
                    </div>
                  </div>
                  {data[0] &&
                    data[0]?.variants?.map((vary: any, index: number) => {
                      return (
                        <>
                          <tr key={index} className="variation_row">
                            <td className="variation_data">
                              <div className="d-flex mb-1">
                                <div
                                  className="pe-3 col-lg-5 col-md-4 col-sm-6 sku_code_modal"
                                  style={{ fontSize: "12px" }}
                                >
                                  SKU Code:{" "}
                                  <span className="bold">
                                    {vary.variant_code}
                                  </span>
                                </div>
                                <div
                                  className="pe-3 col-md-6 col-sm-6 modalvariation_code"
                                  style={{ fontSize: "12px" }}
                                >
                                  Variation:{" "}
                                  <span className="bold">
                                    {vary.size} {vary.color}
                                  </span>
                                </div>
                              </div>
                              <div className="d-flex mb-1 align-items-center">
                                <div className="d-flex align-items-center modalproduct_quantity">
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
                                        className="form-control varient_input"
                                        min="0"
                                        value={Quanties}
                                        name={vary.variant_code}
                                        style={{ width: "60px" }}
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
                                <div className="pe-3 modalquantity_avail">
                                  {vary.stock ? (
                                    <i
                                      className="fa fa-check-circle green"
                                      style={{ fontSize: "15px;" }}
                                    ></i>
                                  ) : (
                                    <i
                                      className="fa fa-times-circle red"
                                      style={{ fontSize: "15px;" }}
                                    >
                                      &nbsp;
                                    </i>
                                  )}
                                </div>
                              </div>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                </tbody>
              </table>
            </>
          ) : (
            <>
              <div className="size-block">
                <div className="size-btn-block">
                  <h6 className="product_feature_heading">
                    Select Size:{active === true ? sizes : selectedSize}
                  </h6>
                  {data[0] &&
                    data[0]?.attributes
                      .find((size_val: any) => "size_values" in size_val)
                      ?.size_values?.map((item: any, index: any) => (
                        // <button key={index} type="button" className=" me-3 btn-size "
                        //     onClick={handleSize}
                        //     value={item.size}>{item.size}
                        // </button>
                        <button
                          type="button"
                          className={`btn modalbtn_size ${
                            index == indexSize ? "modal_btn" : ""
                          } ${
                            sizes === item && active === true ? "modal_btn" : ""
                          }`}
                          value={item}
                          key={index}
                          id={index}
                          onClick={(e) => handleSize(e, index)}
                        >
                          {item}
                        </button>
                      ))}

                  {/* {data[0] && data[0].variants.length > 0 &&
                                data[0].variants.map((item: any, index: number) => {
                                    return item?.variants
                                        ? item.variants.map((vary: any) => {
                                            return (
                                                <button
                                                    type="button"
                                                    className={`btn ms-4 btn_size ${vary.size === selectedSize ? "active" : ""
                                                        }`}
                                                    onClick={handleSize}
                                                    value={vary.size}
                                                    key={index}
                                                >
                                                    {vary.size}
                                                </button>
                                            );
                                        })
                                        : "No Size Available";
                                })} */}
                </div>

                <div className="Product-color-block mt-2">
                  <h6 className="mt-3 product_feature_heading">
                    Select Color:{coloractive === true ? colors : selectedColor}
                  </h6>
                  {data[0] &&
                    data[0]?.attributes
                      .find((color_val: any) => "colour_values" in color_val)
                      .colour_values.map((item: any, index: any) => {
                        return (
                          <button
                            className={`btn btn_size ${
                              indexColor === index ? "modal_btn" : ""
                            } ${
                              colors === item && coloractive === true
                                ? "modal_btn"
                                : ""
                            }`}
                            onClick={(e) => handleColor(e, index)}
                            value={item}
                            key={index}
                          >
                            {item}
                          </button>
                        );
                      })}
                </div>
              </div>
              <div className="quantity_block">
                <div className="d-flex align-items-center">
                  <h6 className="product_feature_heading">Select Quantity:</h6>
                  <div>
                    <div className="quantity_input_div">
                      <button
                        type="button"
                        className="quantity_btn"
                        onClick={handleQuantityDecre}
                      >
                        <i
                          className="minus_btn fa fa-minus me-2 plus-minus"
                          aria-hidden="true"
                        ></i>
                      </button>

                      <input
                        type="text"
                        className="quantity_input"
                        value={quantity}
                        onChange={handleQuantity}
                      />

                      <button
                        type="button"
                        className="quantity_btn"
                        onClick={handleQuantityIncre}
                      >
                        <i
                          className="plus_minus fa fa-plus ms-2 plus-minus"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* <div className="quantity-block">
                        <div className="d-flex align-items-center">
                            <div>
                                <h6>Select Quantity:</h6>
                            </div>
                            <div>
                                <div className="quantity_input_div">
                                    <button type="button" className="quantity_btn" onClick={handleQuantityDecre}>
                                        <i className="fa fa-minus plus-minus" aria-hidden="true"></i>
                                    </button>
                                    <input type="text" className="quantity_input ms-3 me-3" value={quantity} />
                                    <button type="button" className="quantity_btn" onClick={handleQuantityIncre}>
                                        <i className="fa fa-plus plus-minus" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> */}
        </Modal.Body>

        <Modal.Footer>
          <button
            className="yellow_btn text-white add_tocart"
            onClick={handleAddCart}
          >
            ADD TO CART
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modals;
