import React from "react";
import { Norecord } from "../../NoRecord";
import NoOrder from "../../../public/assets/images/No-orders.png";
import Image from "next/image";
import Link from "next/link";

const CancelOrder = (cartHistory: any, { id }: any) => {
  // let cartHistory = useCartHistoryHook();

  const myLoadernew = ({ src, width, quality }: any) => {
    return `http://staging-sportnetwork.ascratech.com/uploads/brands/original/${src}?w=${width}&q=${
      quality || 75
    }`;
  };
  const myLoader = ({ src, width, quality }: any) => {
    return `http://staging-sportnetwork.ascratech.com/uploads/products/images/medium/${src}?w=${width}&q=${
      quality || 75
    }`;
  };
  return (
    <div
      role="tabpanel"
      aria-hidden="false"
      id={id}
    >
      <div className="row mt-3 mb-3">
        <div className="col-lg-12">
          <h5>Below data is static</h5>
          <div className="row">
            <div className="col-lg-2 col-sm-4 col-6">
              <select className="form-select placeorder_detail fs-5 w-75">
                <option value="month-3">past 3 months</option>
                <option value="days-30">last 30 days</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
            </div>
            <div className="col text-end">
              <p className="mb-0">
                <span className="bold">16</span> orders
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {cartHistory !== undefined ? (
          <div className="col-lg-12">
            <div className="order_card cart_table mb-3 card">
              <div className="card-header">
                <div className="row">
                  <div className="mb-3 mb-sm-0 col-md-2 col-6">
                    <p className="text-uppercase gray mb-0">Order Placed</p>
                    <p className="gray mb-0">20-07-2022</p>
                  </div>
                  <div className="mb-3 mb-sm-0 text-right text-sm-left col-md-2 col-6">
                    <p className="text-uppercase gray mb-0">TOTAL price</p>
                    <p className="gray mb-0">
                      <i className="fal fa-rupee-sign"></i> 9990
                    </p>
                  </div>
                  <div className="col-md-2 col-6">
                    <p className="text-uppercase gray mb-0">ship to</p>
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle p-0 bold"
                        role="button"
                        id="ship_to"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        John Wick
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="ship_to">
                        <li className="ps-1 pe-1 mb-0">John Wick</li>
                        <li className="ps-1 pe-1 mb-0">209/E1</li>
                        <li className="ps-1 pe-1 mb-0">Mumbai - 410206</li>
                        <li className="ps-1 pe-1 mb-0">India</li>
                        <li className="ps-1 pe-1 mb-0">Phone: 9876543210</li>
                      </ul>
                    </div>
                  </div>
                  <div className="text-end col-md-6 col-6">
                    <p className="mb-0">Order # 820</p>
                    <div className="d-flex justify-content-end align-items-center">
                      <div className="flex-fill detail_link text-capitalize">
                        <a href="/order-detail/817">order details</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart_item card-body">
                <div className="d-flex mb-2">
                  <div className="flex-fill">
                    <h6 className="green text-capitalize bold mb-0">
                      Cancelled
                    </h6>
                  </div>
                  <div className="justify-content-end d-none d-sm-block align-items-end">
                    {/* image component of next js added */}
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
                    <div className="product-img">
                      <Image
                        loader={myLoader}
                        src="IN0r53vZnHbBiCWF.jpg"
                        alt="product_img"
                        width={130}
                        height={130}
                      />
                    </div>
                  </div>
                  <div className="product_item_details col-lg-8 col-md-7 col-8">
                    <div className="d-flex" style={{ height: "78%" }}>
                      <div className="flex-fill">
                        <a className="product_item_name bold" href="#">
                          SCOTT PLASMA TANK{" "}
                        </a>
                        <table
                          width="100%"
                          className="mt-2 table table-borderless"
                        >
                          <tbody>
                            <tr className="item_options">
                              <td width="15%" className="px-0 py-0 pb-0">
                                <p className="text-capitalize black mb-0">
                                  Model No
                                </p>
                              </td>
                              <td width="85%" className="px-0 py-0 pb-0">
                                <p className="text-capitalize black mb-0">
                                  : 241852
                                </p>
                              </td>
                            </tr>
                            <tr className="item_options">
                              <td width="15%" className="px-0 py-0 pb-0">
                                <p className="text-capitalize black mb-0">
                                  price
                                </p>
                              </td>
                              <td width="85%" className="px-0 py-0 pb-0">
                                <p className="text-capitalize black mb-0">
                                  : <i className="fal fa-rupee-sign"></i> 9990
                                </p>
                              </td>
                            </tr>
                            <tr className="item_options">
                              <td width="15%" className="px-0 py-0 pb-0">
                                <p className="text-capitalize mb-0">Size</p>
                              </td>
                              <td width="85%" className="px-0 py-0 pb-0">
                                <p className="text-capitalize mb-0">: S </p>
                              </td>
                            </tr>
                            <tr className="item_options">
                              <td width="15%" className="px-0 py-0 pb-0">
                                <p className="text-capitalize mb-0">Color</p>
                              </td>
                              <td width="85%" className="px-0 py-0 pb-0">
                                <p className="text-capitalize mb-0">
                                  : Black/Neon Yellow{" "}
                                </p>
                              </td>
                            </tr>
                            <tr className="item_options">
                              <td width="15%" className="px-0 py-0 pb-0">
                                <p className="text-capitalize black mb-0">
                                  Qty :
                                </p>
                              </td>
                              <td width="85%" className="px-0 py-0 pb-0">
                                <p className="text-capitalize black mb-0">
                                  : 1
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="text-end col-lg-2 col-md-3 col-12">
                    <Link href="#">
                      <a className="btn order_links btn-primary mb-2 ">
                        View Product
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <div className="mt-3 col-sm-12"></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Norecord
            heading="There is no order found!"
            content="Explore more and find products to purchase now"
            img={NoOrder}
          />
        )}
      </div>
    </div>
  );
};

export default CancelOrder;
