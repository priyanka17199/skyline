import Link from "next/link";
import styles from "../../../styles/ProductSpecification.module.css";
import { useState, useEffect } from "react";

const ProductSpecification = (props: any) => {
  const { detail } = props;

  console.log("detail geotech", detail);
  return (
    <div className={`${styles.specification_section}`}>
      <div className="container mt-2">
        <div className="row">
          <div className="col-lg-12" style={{marginBottom:"1.4rem"}}>
            <ul
              className={`nav nav_tabs justify-content-center `}
              role="tablist"
            >
              {detail?.length > 0
                ? detail?.map((item: any) => {
                    return (
                      <>
                        {item?.prod_specifications?.map(
                          (vals: any, index: any) => {
                            return (
                              <>
                                <li
                                  className="nav-item"
                                  role="presentation"
                                  key={index}
                                >
                                  <Link
                                    className={`nav-link bold product_spec ${
                                      vals.name === "Specifications"
                                        ? "active"
                                        : ""
                                    }`}
                                    href={`#${vals.name}`}
                                    data-bs-toggle="tab"
                                    aria-selected="false"
                                    role="tab"
                                    tabIndex={-1}
                                  >
                                    {vals.name}
                                  </Link>
                                </li>
                              </>
                            );
                          }
                        )}
                      </>
                    );
                  })
                : null}
            </ul>
          </div>

          {/* <div className="tab-content">
            {detail?.length > 0 ? detail?.map((vals:any)=>
            {
              return(
                vals?.prod_specifications?.map((test:any)=>
                {
                  {test.name === "Specifications" ? (
                    <>
                      <div
                        className="specifications_details mb-3 tab-pane fade active show"
                        id={test?.name}
                        role="tabpanel"
                      >
                        <div className="col-12 mt-2">
                                <div className="row">
                                  {test?.values?.length > 0
                                    ? test?.values?.map((data: any) => {
                                        return (
                                          <>
                                            <div className="col-md-6 mb-1 border-bottom">
                                              <div className="row">
                                                <div className="col-6 text-start">
                                                  <p
                                                    style={{
                                                      textTransform:
                                                        "uppercase",
                                                      color: "#212529",
                                                    }}
                                                  >
                                                    {data.name}
                                                  </p>
                                                </div>
                                                <div className="col-6 text-start">
                                                  <p
                                                    className="bold"
                                                    style={{ color: "#000" }}
                                                  >
                                                    {data.values}
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </>
                                        );
                                      })
                                    : null}
                                </div>
                              </div>
                      </div>
                    </>
                  ) : test.name === "Geometry" ? <> <div
                  className="specifications_details mb-3 tab-pane fade"
                  id={test?.name}
                  role="tabpanel"
                ><h4>geometry</h4>
                  </div></> : test.name === "Technology" ? <> <div
                  className="specifications_details mb-3 tab-pane fade"
                  id={test?.name}
                  role="tabpanel"
                ><h4>technology</h4>
                  </div></>: null}
                })
              )
            }) : null }
          </div> */}

          <div className="tab-content">
            {detail?.length > 0
              ? detail?.map((vals: any) => {
                  return (
                    <>
                      {vals?.prod_specifications?.map(
                        (test: any, index: any) => {
                          return (
                            <>
                              <div
                                className={`specifications_details mb-3 tab-pane fade ${
                                  test?.name === "Specifications"
                                    ? "active show"
                                    : ""
                                } `}
                                id={test?.name}
                                role="tabpanel"
                                key={index}
                              >
                                {/* IMPORTANT */}
                                {test.name === "Specifications" ? (
                                  <div className="col-12 mt-2">
                                    <div className="row">
                                      {test?.values?.length > 0
                                        ? test?.values?.map((data: any) => {
                                            return (
                                              <>
                                                <div className="col-md-6 mb-1 border-top" style={{paddingTop: "4px"}}>
                                                  <div className="row">
                                                    <div className={`col-4 text-start ${styles.specification_line}`}>
                                                      <p
                                                       className={styles.specification_text}
                                                      >
                                                        {data.name}
                                                      </p>
                                                    </div>
                                                    <div className={`col-7 text-start ${styles.specification_line}`}>
                                                      <p
                                                        className={`bold ${styles.specification_tables}`}
                                                        style={{
                                                          color: "#212529",
                                                        }}
                                                      >
                                                        {data.values}
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </>
                                            );
                                          })
                                        : null}
                                    </div>
                                  </div>
                                ) : test.name === "Geometry" ? (
                                  <div>
                                    <div className="container">
                                      <div className="row">
                                        <div className="center col-lg-12">
                                          <h5 style={{fontSize:"1.1rem", color:"#666",fontWeight:300}} className={`text-center ${styles.geometry_heading}`}>
                                            To view geometry
                                             <Link
                                              href="http://staging-sportnetwork.ascratech.com/uploads/product_details/product_pdfs/original/UIKShlc72NqugfOL.pdf"
                                              target="_blank" rel="noreferrer"
                                            >
                                              <a className={styles.geometry} >

                                               Click here
                                              </a>
                                            </Link>
                                          </h5>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ) : test.name === "Technology"?<div><h4>Technology</h4></div>:null}

                                {/* NOT IMPORTANT */}
                                {/* <div className="col-12 mt-2">
                                <div className="row">
                                  {test?.values?.length > 0
                                    ? test?.values?.map((data: any) => {
                                        return (
                                          <>
                                            <div className="col-md-6 mb-1 border-bottom">
                                              <div className="row">
                                                <div className="col-6 text-start">
                                                  <p
                                                    style={{
                                                      textTransform:
                                                        "uppercase",
                                                      color: "#212529",
                                                    }}
                                                  >
                                                    {data.name}
                                                  </p>
                                                </div>
                                                <div className="col-6 text-start">
                                                  <p
                                                    className="bold"
                                                    style={{ color: "#000" }}
                                                  >
                                                    {data.values}
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </>
                                        );
                                      })
                                    : null}
                                </div>
                              </div> */}
                              </div>
                            </>
                          );
                        }
                      )}
                    </>
                  );
                })
              : null}
          </div>

          {/* <div className="tab-content">
            {detail?.length > 0 && <div
              className="specifications_details mb-3 tab-pane fade active show"
              id="spicify"
              role="tabpanel">
              <div className="col-12 mt-2">
                <div className="row">
                  {detail?.length > 0
                    ? detail?.map((item: any) => {
                        return (
                          <>
                            {item?.prod_specifications[0]?.values > 0 &&
                              item?.prod_specifications[0]?.values.map(
                                (vals: any) => {
                                  return (
                                    <>
                                      <div className="col-md-6 mb-1 border-bottom">
                                        <div className="row">
                                          <div className="col-6 text-start">
                                            <p
                                              style={{
                                                textTransform: "uppercase",
                                                color: "#212529",
                                              }}
                                            >
                                              {vals.name}
                                            </p>
                                          </div>
                                          <div className="col-6 text-end">
                                            <p
                                              className="bold"
                                              style={{ color: "#000" }}
                                            >
                                              {vals.values}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  );
                                }
                              )}
                          </>
                        );
                      })
                    : null}
                </div>
              </div>
            </div> }
            

          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductSpecification;
