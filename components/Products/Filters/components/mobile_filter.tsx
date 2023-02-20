import React from 'react'
import { useProductListing } from '../../../../hooks/product_listing_page_hooks/product_listing_hook';
import styled from "../../../../styles/Product_Listing.module.css";

const MobileFilter = ({ filtersData, handlePrice, handleChange }: any) => {

    return (
        <div className="container-fluid d-block d-lg-none">
            <div className={`row ${styled.sticky_btn_bar}`}>

                <a data-bs-toggle="modal" data-bs-target="#myFilterModal" className={`text-uppercase black ${styled.sticky_btn}`}>
                    <i className="fa fa-filter me-1" aria-hidden="true"></i>Filter</a>

                <a data-bs-toggle="modal" data-bs-target="#mySortByModal" className={`text-uppercase black ${styled.sticky_btn}`}>
                    <i className="fa fa-sort me-1" aria-hidden="true"></i> Sort by</a>
            </div>
            {/* <!-- The Filter Modal --> */}
            <div className="modal" id="myFilterModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        {/* <!-- Modal Header --> */}
                        <div className="modal-header">
                            <h4 className="modal-title">Filters</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div className="modal-body">
                            <div className="clear_filter mb-1">
                                <a href="#" style={{ textDecoration: 'underline' }}>Clear Filter</a>
                            </div>
                            <div className="filter_section">
                                <div className="filter_block">
                                    <div className="accordion accordion_custom" id="myAccordion">
                                        {/* key props added */}
                                        {filtersData && filtersData.length > 0 ? filtersData.map((item: any, index: any) => {
                                            return (
                                                <div className="accordion-item accordion_item_custom" key={index}>
                                                    <h2 className="accordion-header bold" id={"heading" + index}>
                                                        <button type="button" className="text-uppercase accordion-button bold accordion_btn_custom"
                                                            data-bs-toggle="collapse" data-bs-target={"#collapse" + index} aria-expanded={index === 0 ? "true" : "false"} aria-controls={"collapse" + index}>{item.section}</button>
                                                    </h2>
                                                    {/* <hr style={{margin:'10px 0 '}}/> */}

                                                    <div id={"collapse" + index} className={index === 0 ? "accordion-collapse collapse custom_collapse_css show " : "accordion-collapse custom_collapse_css collapsed"}
                                                        aria-labelledby={"heading" + index}>
                                                        <div className="card-body p-0">
                                                            {item.values.map((vals: any, index: any) => (
                                                                <div className="form_check_filter" key={index}>
                                                                    <input className="form_check_input" type="checkbox" value={vals}
                                                                        id="flexCheckDefault" onChange={(e) => handleChange(e, item.section, vals)} />
                                                                    <label className="form-check-label filter-label accordion-checkbox" htmlFor="flexCheckDefault">
                                                                        {vals}
                                                                    </label>
                                                                </div>
                                                            )
                                                            )}
                                                        </div>
                                                    </div>
                                                    <hr style={{ margin: '10px 0 ' }} />

                                                </div>
                                            )
                                        }) : "Sorry no filters available for this page"}


                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer justify-content-center">
                            <button type="submit" className="btn btn-warning text-center" data-bs-dismiss="modal">Submit</button>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!-- The Filter Modal End--> */}

            {/* <!-- The sort by Modal --> */}
            {/* <!-- The Modal --> */}
            <div className="modal" id="mySortByModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        {/* <!-- Modal Header --> */}
                        <div className="modal-header">
                            <h4 className="modal-title">Sort By Price</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div className="modal-body sort-by">

                            {/* <div className="text-center"><a className="black" data-bs-dismiss="modal"
                        href="#">Price : <span className="bold">Descending</span></a>
                    </div>
                    <hr className="mt-2 mb-2" />
                    <div className="text-center">
                        <a className="black" data-bs-dismiss="modal"
                            href="#">Price : <span className="bold">Ascending</span>
                        </a>
                    </div>
                    <hr className="mt-2 mb-2" /> */}
                            <div className="p-0 text-right d-flex align-items-center justify-content-end">
                                <p>Price:</p>
                                <select className="form-select border-0"
                                    aria-label="Default select example"
                                    onChange={(e: any) => handlePrice(e)}>
                                    <option value="low_to_high" selected>Low to High</option>
                                    <option value='high_to_low' >High to Low</option>
                                </select>
                            </div>

                        </div>



                    </div>
                </div>
            </div>
            {/* <!-- The sort by Modal End --> */}



        </div>

    )
}

export default MobileFilter