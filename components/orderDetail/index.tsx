import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadingGif from "../../public/assets/images/circle-loader.gif";
import { ReturnReplacement } from "../../services/api/my_order_api/return_and_replacement";
// import styled from "../../styles/orderDetail.module.css";
import ToastNotification from "../ToastNotification";
import Image from "next/image";
import useThankYou from "../../hooks/order_listing_page_hooks/order_list_hook";
import { EmptyStoreReplacementImagesAPI, StoreReplacementImagesAPI } from "../../store/slices/my_order_slice/store_replacement_images_slice";
import { storedReturnReplacementImages } from "../../store/slices/my_order_slice/store_replacement_images_slice";
import SendReturnReplacementAPI from "../../services/api/my_order_api/send_replacement_images_api";
import { CONSTANTS } from "../../services/config/api-config";

type PropsType = {
  id?: any;
};

const Index = ({ sales_order_id }: any) => {
  let { id, detail }: any = useThankYou();
  console.log("detail",detail)
  const dispatch = useDispatch();
  const getReturnReplacementImages = useSelector(storedReturnReplacementImages);
  console.log("Return",getReturnReplacementImages )

  let convertReturnReplacement = getReturnReplacementImages

  // let detail = useOrderDetails(id);
  const [typeOf, setTypeOf] = useState("Replacement");
  const [text, setText] = useState("");
  const [productId, setProductId] = useState("");
  const [showToast, setshowToast] = useState(false);
  const [fileName1, setfileName1] = useState();
  const [fileName2, setfileName2] = useState();
  const [fileName3, setfileName3] = useState();
  const [handleFile1, setHandleFle1] = useState("");
  const [handleFile2, setHandleFile2] = useState("");
  const [handleFile3, setHandleFile3] = useState("");
  const [newData, setData] = useState<any>();
  let years: any;
  // const month:any;
  // const days:any
  const router = useRouter();
  // image properties
  const myLoader = ({ src, width, quality }: any) => {
    return `${CONSTANTS.API_BASE_URL}${src}?w=${width}&q=${
      quality || 75
    }`;
  };
  const myLoadernew = ({ src, width, quality }: any) => {
    return `${CONSTANTS.API_BASE_URL}/${src}?w=${width}&q=${
      quality || 75
    }`;
  };
  let thankyou = router.asPath.split("/")[1];

  console.log("my orders get order detail data in order detail file", detail);

  // const [detail, setDetail] = useState([]);
  // let orderId: any;

  const handleTypeChange = (e: any) => {
    setTypeOf(e.target.value);
  };

  const handleTextChange = (e: any) => {
    setText(e.target.value);
  };

  const handleFileChange1 = (e: any, isReset?: boolean) => {
    // console.log("my orders", e.target.files.length);
    if (
      e.target.files.length > 0
    ) {
      // setfileName1(
      //  e.target.files[0]
      // );
      dispatch(
        StoreReplacementImagesAPI(
          e.target.files[0]
        )
      );
    }
    // if(e.target.files.length !== 0){
    //   console.log("my orders", window.URL.createObjectURL(e.target.files[0]))
    // }
    // console.log("my orders ",e.target.files.length)
    // console.log("my orders ",isReset)
    // if (!isReset) {
    //   setHandleFile1(e.target.value);
    // } else {
    //   e.target.value = null;
    // }
  };

  const handleFileChange2 = (e: any, isReset?: boolean) => {
    if (
      e.target.files.length > 0
    ) {
      // setfileName1(
      //  e.target.files[0]
      // );
      dispatch(
        StoreReplacementImagesAPI(
          e.target.files[0]
        )
      );
    }
  };

  const handleFileChange3 = (e: any, isReset?: boolean) => {
    if (
      e.target.files.length > 0
    ) {
      // setfileName1(
      //  e.target.files[0]
      // );
      dispatch(
        StoreReplacementImagesAPI(
          e.target.files[0]
        )
      );
    }
  };

  const handleSubmitReturnReplacementRequest = async (
    sales_order_id: string,
    prod_name: string
  ) => {
    console.log(
      "my orders get return replacement images",
      getReturnReplacementImages
    );

    var object = getReturnReplacementImages.reduce((obj, item) => ({...obj, [item.name]: item.file_url}) ,{});
    const getResponseReturnReplacementAPI = await SendReturnReplacementAPI(
      typeOf,
      text,
      sales_order_id,
      productId,
      object
    );

    if(getResponseReturnReplacementAPI === "success")
    {
      setshowToast(!showToast);
    }

    // console.log("my orders send images successful res jsx", getResponseReturnReplacementAPI);
  };

  // useEffect(()=>
  // {
  //     getCartHistoryApi("", sales_order_id).then((res: any) => {
  //         console.log("get sales data", res)
  //     });
  // },[])

  // useEffect(() => {
  //     if (router.isReady) {
  //         const { id } = router.query;
  //         // if (!id) return null

  //         orderId = id;
  //         getCartHistoryApi("", id).then((res: any) => setDetail(res));

  //     }

  // }, [router.isReady]);

  // if (!orderId) {
  //     const { id } = router.query;
  //     orderId = id;
  // }

  console.log("Detail data ", detail);
  useEffect(() => {
    detail.map((data: any) => setData(data.date));
  }, [detail]);

  const handleSubmit = async (e: any) => {
    console.log("+++++++handle submit function");
    e.preventDefault();
    const res = await ReturnReplacement({
      typeOf,
      text,
      productId,
      handleFile1,
      handleFile2,
      handleFile3,
    });
    console.log("------response data", res);
    setProductId("");
    setTypeOf("");
    setText("");
    dispatch(EmptyStoreReplacementImagesAPI());
    // handleFileChange1(e, true);
    // handleFileChange2(e, true);
    // handleFileChange3(e, true);
  };
  // const [year, month, day] = newData?.split('-')
  console.log("+++++text", newData);
  // console.log("order detail id ", id, "if id undefined ", ifIdUndefine);
  return (
    <div>
      <ToastNotification
        setShow={setshowToast}
        show={showToast}
        content={`Order Placed Successfully for ${typeOf}`}
      />
      {detail.map((data: any) => (
        <div className="container" key={data.id}>
          <div className="row"></div>
          <div className="row">
            <div className="col-md-6">
              <div className="page_heading">
                <h5
                  className="bold text-uppercase black mb-2 mt-4"
                  style={{fontSize: "19px" }}
                >
                  order details
                </h5>
              </div>
            </div>
          </div>
          <div className="order_detail_head row">
            <div className="col-8">
              <div className="item_action d-flex ">
                <div className="item_action_link">
                  <span>
                    {(new Date(data.date.toLocaleString()).getDate() < 10
                      ? "0"
                      : "") + new Date(data.date.toLocaleString()).getDate()}
                    /{new Date(data.date.toLocaleString()).getMonth() + 1}/
                    {new Date(data.date.toLocaleString()).getFullYear()}|&nbsp;
                  </span>
                </div>
                <div className="item_action_link order-pipe">
                  <span> Order # {data.id}</span>
                </div>
              </div>
            </div>
          </div>
          <div id="printableArea" className="row">
            <div className="col-lg-12">
              <div className="order_card mb-3 card">
                <div className="card-body">
                  {/* key prop added */}
                  <div className="row">
                    {data.addresses.map((addr: any, index: any) => (
                      <div className="mb-3 mb-sm-0 col-md-4" key={index}>
                        <div>
                          <h5 className="data_heading mb-1">
                            {addr.name}
                          </h5>
                          {addr.values &&
                            addr.values.map((addrValue: any, i: any) => (
                              <div className="myorders" key={i}>
                                <p className="mb-0 address_tiitles">
                                  {addrValue.address_title}
                                </p>
                                <p className="mb-0">{addrValue.address_1}</p>
                                <p className="mb-0">{addrValue.postal_code}</p>
                                <p className="mb-0">
                                  {addrValue.city}, {addrValue.state}
                                </p>
                                <p className="mb-0">{addrValue.country}</p>
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                    <div className="col-md-4 myorders">
                      <h5 className="data_heading mb-1">
                        Order Summary
                      </h5>
                      <div className="mb-1 row">
                        <div className="col-6">
                          <p className="mb-0 order_summary_p">Sub total (Excl. Tax)</p>
                        </div>
                        <div className="text-right col-6">
                          <p className="mb-0 order_summary_p">
                            <i
                              className="fa fa-inr pe-1"
                              aria-hidden="true"
                            ></i>
                            <span>{data.subtotal_exclude_tax}</span>
                          </p>
                        </div>
                      </div>
                      <div className="mb-1 row">
                        <div className="col-6">
                          <p className="mb-0 order_summary_p">Tax</p>
                        </div>
                        <div className="text-right col-6">
                          <p className="mb-0 order_summary_p">
                            <i
                              className="fa fa-inr pe-1"
                              aria-hidden="true"
                            ></i>
                            <span>{data.tax_amount}</span>
                          </p>
                        </div>
                      </div>
                      <div className="mb-1 row">
                        <div className="col-6">
                          <p className="mb-0 order_summary_p" >Coupon Code</p>
                        </div>
                        <div className="text-right col-6">
                          <p className="mb-0 order_summary_p">
                            <i
                              className="fa fa-inr pe-1"
                              aria-hidden="true"
                            ></i>
                            <span>{data.coupon_code}</span>
                          </p>
                        </div>
                      </div>
                      <div className="mb-1 row">
                        <div className="col-6">
                          <p className="mb-0 order_summary_p">Coupon Amount</p>
                        </div>
                        <div className="text-right col-6">
                          <p className="mb-0 order_summary_p">
                            <i
                              className="fa fa-inr pe-1"
                              aria-hidden="true"
                            ></i>
                            <span>{data.coupon_amount}</span>
                          </p>
                        </div>
                      </div>
                      
                      <div className="mb-1 row">
                        <div className="col-6">
                          <p className="mb-0 order_summary_p">Store Credit</p>
                        </div>
                        <div className="text-right col-6">
                          <p className="mb-0 order_summary_p">
                            <i
                              className="fa fa-inr pe-1"
                              aria-hidden="true"
                            ></i>
                            <span>{data.store_credit}</span>
                          </p>
                        </div>
                      </div>
                      <div className="mb-1 row">
                        <div className="col-6">
                          <p className="mb-0 order_summary_p">Round off</p>
                        </div>
                        <div className="text-right col-6">
                          <p className="mb-0 order_summary_p">
                            <i
                              className="fa fa-inr pe-1"
                              aria-hidden="true"
                            ></i>
                            <span>{data.round_off}</span>
                          </p>
                        </div>
                      </div>
                      <div className="mb-1 row">
                        <div className="col-6">
                          <p className="mb-0 order_summary_p">Sub total (Incl. Tax)</p>
                        </div>
                        <div className="text-right col-6">
                          <p className="mb-0 order_summary_p">
                            <i
                              className="fa fa-inr pe-1"
                              aria-hidden="true"
                            ></i>
                            <span>{data.subtotal_include_tax}</span>
                          </p>
                        </div>
                      </div>
                      <hr className="mt-1 mb-1" />
                      <div className="row">
                        <div className="col-6">
                          <p className="mb-0 bold order_summary_p">Order Total</p>
                        </div>
                        <div className="text-right col-6">
                          <p className="mb-0 bold order_summary_p">
                            <i
                              className="fa fa-inr pe-1"
                              aria-hidden="true"
                            ></i>
                            <span>{data.total}</span>
                          </p>
                        </div>
                      </div>
                      <hr className="mt-1 mb-1" />
                      <div className="row">
                        <div className="col-6">
                          <p className="mb-0 bold order_summary_p">TOTAL</p>
                        </div>
                        <div className="text-right col-6">
                          <p className="mb-0 bold order_summary_p">
                            <i
                              className="fa fa-inr pe-1"
                              aria-hidden="true"
                            ></i>
                            <span>{data.total}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order_card cart_table mb-3 card">
                {/* key prop added */}
                {data.order_detail.map((oDetail: any, index: any) => (
                  <div
                    className="cart_item card-body border-bottom"
                    key={index}
                  >
                    <div className="d-flex mb-2">
                      <div className="flex-fill">
                        <h6
                          className="green text-capitalize bold mb-0 status"
                        >
                          pending
                        </h6>
                      </div>
                      <div className="justify-content-end d-none d-sm-block align-items-end">
                        {/* next js image tag added */}
                        <Image
                          loader={myLoadernew}
                          src="t37eUXG24dmzcxZV.png"
                          alt="product_brand_img"
                          width={100}
                          height={30}
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center row">
                      <div className="mb-3 mb-sm-0 col-lg-2 col-md-2 col-4">
                        <div className="product-image">
                          {/* next js image tag added */}
                          {oDetail?.img?.length > 0 ? (
                            <Image
                              loader={myLoader}
                              src={
                                oDetail.img === null
                                  ? " "
                                  : oDetail.img
                              }
                              alt="product_img"
                              className="img-fluid orderdetail_img"
                              width={130}
                              height={130}
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
                      <div className="product_item_details col-lg-8 col-md-7 col-8">
                        <div className="d-flex" style={{ height: "78%" }}>
                          <div className="flex-fill">
                            <Link href={oDetail.product_url}>
                            
                            <a
                              className="product_item_name"
                              style={{ fontWeight: 600 }}
                              
                            >
                              {oDetail.prod_name}
                            </a>
                              </Link>
                            <table
                              width="100%"
                              className="mt-2 table table-borderless"
                            >
                              <tbody>
                                {/* key prop added */}
                                {oDetail.prod_info.map((info: any, i: any) => (
                                  <tr
                                    className="item_options myorders"
                                    key={i}
                                  >
                                    <td
                                      className="px-0 py-0 pb-0 myorder_td"
                                    >
                                      <p className="text-capitalize black mb-0">
                                        {info.name}
                                      </p>
                                    </td>
                                    <td
                                      className="px-0 py-0 pb-0 myorder_width"
                                    >
                                      <p className="text-capitalize black mb-0">
                                        :{" "}
                                        {info.name === "Price"
                                          ? "₹" + info.value
                                          : info.value}
                                      </p>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                            {/* <div className="pr-2 mt-3"><label className="form-label mb-0">Seller :</label>
                                                                    <div className="border p-2 mb-2">
                                                                        <p className="mb-0 bold" style={{ fontSize: "14px" }}>Everest Cycling Culture
                                                                            (SCOTT Technology Centre)</p>
                                                                        <p className="mb-0" style={{ fontSize: "14px" }}>"8-13, Shiv Centre, Sector
                                                                            17, Vashi
                                                                            Navi Mumbai, Maharashtra, 400703
                                                                            India"
                                                                        </p>
                                                                    </div><a href="#" target="_blank" className="text-underline">View Invoice</a>
                                                                </div> */}
                          </div>
                        </div>
                      </div>
                      <div className="text-right col-lg-2 col-md-3 col-12">
                        <button
                          className=" order_links mb-2 d-block text-uppercase"
                        >
                          <Link href={oDetail.product_url}>
                            <a
                              href={oDetail.product_url}
                              className="order_linkshover text-dark"
                            >
                              View Product
                            </a>
                          </Link>
                        </button>
                        {thankyou !== "thankyou" ? (
                          <button
                            className="order_links mb-2 d-block text-uppercase text-dark"
                            data-bs-toggle="modal"
                            data-bs-target="#myModal"
                            onClick={() => setProductId(oDetail.prod_id)}
                          >
                            Return or replace
                          </button>
                        ) : null}
                      </div>
                      <div
                        role="dialog"
                        aria-modal="true"
                        className="fade modal"
                        tabIndex={-1}
                        id="myModal"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <div className="modal-title h4">
                                Return/Replacement
                              </div>
                              <a className="action_icon">
                                <i
                                  className="btn-close btn_close_custom"
                                  data-bs-dismiss="modal"
                                ></i>
                              </a>
                            </div>
                            <div className="modal-body">
                              <div
                                id="email_faq"
                                aria-labelledby="email_faq_tab"
                              >
                                <div>
                                  <div className="Toastify"></div>
                                </div>
                                <div className="card">
                                  <div className="card-body">
                                    <h6 className="black bold text-center text-uppercase mb-4 pl-3">
                                      Return/Replacement Request
                                    </h6>
                                    <div className="row">
                                      <div className="col">
                                        <form
                                          id="returnReplacement"
                                          className="fields-group-md"
                                          onSubmit={handleSubmit}
                                        >
                                          <div className="form-group mb-2">
                                            <label className="form-label">
                                              Return/Replacement
                                            </label>
                                            <select
                                              name="refund_requests[request_for]"
                                              className="form-control input_tags"
                                              onChange={handleTypeChange}
                                              value={typeOf}
                                            >
                                              <option value="Replacement">
                                                Replacement
                                              </option>
                                              <option value="Return">
                                                Return
                                              </option>
                                            </select>
                                            <span className="red"></span>
                                          </div>
                                          <div className="form-group">
                                            <label className="form-label">
                                              Reason for Return/Replacement?
                                            </label>
                                            <textarea
                                              onChange={handleTextChange}
                                              name="refund_requests[refund_reason]"
                                              className="mb-1 form-control input_tags"
                                              value={text}
                                              required
                                            ></textarea>
                                            <span className="red"></span>
                                          </div>
                                          <div className="form-group mb-2">
                                            <label className="form-label">
                                              Select image 1
                                            </label>
                                            <div className="form-file">
                                              <input
                                                name="refund_request_images[0][image]"
                                                type="file"
                                                className="form-control-file"
                                                onChange={(e: any) => 
                                                  handleFileChange1(e)
                                                //   {
                                                  // if (
                                                  //   e.target.files.length > 0
                                                  // ) {
                                                    
                                                  //   setfileName1(
                                                  //    e.target.files[0]
                                                  //   );
                                                  //   dispatch(
                                                  //     StoreReplacementImagesAPI(
                                                  //       fileName1
                                                  //     )
                                                  //   );
                                                  // } else {
                                                  //   setfileName1(
                                                  //       undefined
                                                  //     );
                                                  // }
                                                // }
                                              }
                                                required
                                              />
                                            </div>
                                            <span className="red"></span>
                                          </div>
                                          <div className="form-group mb-2">
                                            <label className="form-label">
                                              Select image 2
                                            </label>
                                            <div className="form-file">
                                              <input
                                                name="refund_request_images[1][image]"
                                                type="file"
                                                className="form-control-file"
                                                onChange={(e: any) => handleFileChange2(e)
                                                  // {
                                                  //   if (
                                                  //     e.target.files.length > 0
                                                  //   ) {
                                                      
                                                  //     setfileName2(
                                                  //      e.target.files[0]
                                                  //     );
                                                  //     dispatch(
                                                  //       StoreReplacementImagesAPI(
                                                  //         fileName2
                                                  //       )
                                                  //     );
                                                  //   } else {
                                                  //     setfileName2(
                                                  //         undefined
                                                  //       );
                                                  //   }
                                                  // }
                                                }
                                                required
                                              />
                                            </div>
                                            <span className="red"></span>
                                          </div>
                                          <div className="form-group mb-2">
                                            <label className="form-label">
                                              Select image 3
                                            </label>
                                            <div className="form-file">
                                              <input
                                                name="refund_request_images[2][image]"
                                                type="file"
                                                className="form-control-file"
                                                onChange={(e: any) => handleFileChange3(e)
                                                  // {
                                                  //   if (
                                                  //     e.target.files.length > 0
                                                  //   ) {
                                                      
                                                  //     setfileName3(
                                                  //      e.target.files[0]
                                                  //     );
                                                  //     dispatch(
                                                  //       StoreReplacementImagesAPI(
                                                  //         fileName3
                                                  //       )
                                                  //     );
                                                  //   } else {
                                                  //     setfileName3(
                                                  //         undefined
                                                  //       );
                                                  //   }
                                                  // }
                                                }
                                                required
                                              />
                                            </div>
                                            <span className="red"></span>
                                          </div>
                                          <div className="text-center mt-3">
                                            <button
                                              type="submit"
                                              className="btn btn-warning yellow_btn"
                                              data-bs-toggle="modal"
                                              onClick={()=>handleSubmitReturnReplacementRequest(data.id, oDetail.prod_name)}
                                            >
                                              {" "}
                                              Submit Request
                                            </button>
                                          </div>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="container"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Index;
