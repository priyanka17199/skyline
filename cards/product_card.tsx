import { useState, FC } from "react";
import Link from "next/link";
import Image from "next/image";
// import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ProductDetailApi } from "../store/slices/product_detail_slice/product_detail_slice";
import { ProductVariantsApi } from "../store/slices/product_detail_slice/product_variant_slice";
import { ProductCardInterface } from "../interfaces/product_card_interface";
import { CONSTANTS } from "../services/config/api-config";
// import { DEFAULT_API_CONFIG } from "../services/config/api-config";
// import Modals from "../modal/modal";
// import styles from "../styles/Product_Listing.module.css";
import Modals from "../components/modal";
import useProductDetail from "../hooks/product_detail_page_hooks/product_detail_hook";
import ProductDetailList from "../services/api/product_detail_api/product_detail_api";

export const ProductCard: FC<ProductCardInterface> = (props: any) => {

    const { id, item_name, prod_slug, price, img_url, in_stock_status, mrp_price, url } = props;

    const dispatch = useDispatch();

    // const params = useParams();
    // console.log(params);
    console.log(url);
    const [show, setshow] = useState(false);

    const handleShow = () => {
        setshow(!show);
        // console.log(e.target.parentElement)
    }



    const handleProdShow = async (id: any) => {
        console.log('redirect to detail');
        console.log("detail prod id", id);
        console.log("detail prod name", prod_slug);
        const slug = url.split('/');
        // dispatch(ProductDetailApi(slug));
        // dispatch(ProductVariantsApi(slug));
        // dispatch(ProductVariantsApi(id));

        // Trial and error to mitigate use of redux store
        // const getDetails = await ProductDetailList(id)
        // setdetail(getDetails)
        // console.log("detail in card", detail);
        // console.log(slug);
        // if (params.sub_sub_category) {
        //     dispatch(ProductDetailApi(id));
        // }
        // else {
        //     dispatch(ProductDetailApi(id));
        //     dispatch(ProductVariantsApi(id));
        // }
    }

    return (
        <>

            <div className="product_card">
                <div className={!in_stock_status?"out_of_stock":"in_stocks"}>
                    {<p className="out_of_stock_text mb-0">Out of stock</p> }
                    
                </div>
                <div className="card_inner">
                    <div className="card_img">
                        <Link href={url} className="">
                            {/* <Image loader={() => `${CONSTANTS.API_BASE_URL}${img_url}`} src={`${CONSTANTS.API_BASE_URL}${img_url}`} alt="product-detail" width={100} height={100} /> */}
                            <a onClick={() => handleProdShow(id)}>
                                <Image loader={() => `${CONSTANTS.API_BASE_URL}${img_url}`} src={`${CONSTANTS.API_BASE_URL}${img_url}`} alt="product-detail" width={142} height={142} className="img-fluid" />
                            </a>
                        </Link>
                    </div>

                    {/* <img src={`${CONSTANTS.API_BASE_URL}${img_url}`} alt={prod_name}
                        className="img-fluid" onClick={handleProdShow} /> */}


                    <div className="row mt-3">
                        <div className="col-12 d-flex justify-content-between">
                            <div >
                                <p className="product_name mb-0">
                                    {/* <a href={url}>{prod_name}</a> */}
                                    <Link href={url}>
                                        <a onClick={() => handleProdShow(id)} style={{fontSize:"13px"}}>{item_name}</a>
                                    </Link>
                                </p>
                            </div>
                            <div className="cart ps-2">
                                {/* <Link href={url} onClick={handleShow}> */}
                                <a className="prodCart" style={{cursor:"pointer"}} onClick={handleShow}>
                                    <span className="material-symbols-outlined" id="shopping_cart">
                                        shopping_cart
                                    </span>
                                </a>
                                {/* </Link> */}

                            </div>
                        </div>

                    </div>

                    <div className="product-price">
                        <p className="mb-0 price_p">
                            <i className="fa fa-inr" aria-hidden="true"></i>
                            <span className="price pe-2 ">{price}</span>
                            <span className="price"><s>{mrp_price}</s></span>
                        </p>
                    </div>

                    <div className="item_action mt-0 pb-0">
                        <div className="item_action_link">

                        </div>
                        {/* <div className="compare_feat">
                                <a className="text-underline" href="#">Compare</a>
                            </div> */}
                    </div>
                </div>
            </div>

            {/* Modal Box after clicking on Cart Icon  */}
            {/* <div className="modal" id="addtocart">
                <div className="modal-dialog">
                    <div className="modal-content">
                        
                        <div className="modal-header">
                            <h4 className="modal-title">{prod_name}</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                       
                        <div className="modal-body">

                            <div className="size-block">
                                <div className="size-chart-link">
                                    <a href="#">Size chart</a>
                                </div>
                                <div className="size-btn-block">
                                    <h6>Select Size:L</h6>
                                    <button type="button" className=" btn btn-size btn-warning disable-variation"><text>S</text></button>
                                    <button type="button" className=" btn btn-size btn-warning disable-variation"><text>M</text></button>
                                    <button type="button" className=" btn btn-size btn-warning disable-variation"><text>L</text></button>
                                </div>
                            </div>

                            <div className="Product-color-block mt-2">
                                <h6 className="mt-3">
                                    Select Color:<span className="bold">Black/Yellow</span>
                                </h6>
                                <button className="size_btn mb-1 mt-1 bg-white" style={{ border: "2px solid rgb(255, 199, 0)" }}><img
                                    width="50" height="50"
                                    src="http://staging-sportnetwork.ascratech.com/uploads//products/images/thumb/1iTP9CuX23UrIjfh.jpg" /></button>
                            </div>

                            <div className="quantity-block">
                                <div className="d-flex align-items-center">
                                    <h6>Select Quantity:</h6>
                                    <div>
                                        <div className="quantity_input_div">
                                            <button type="button" className="quantity_btn"><i className="fa fa-minus"
                                                aria-hidden="true"></i></button>
                                            <input type="text" className="quantity_input" value="1" />
                                            <button type="button" className="quantity_btn"><i className="fa fa-plus"
                                                aria-hidden="true"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="mt-2 mb-2" />
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <Modals name={prod_name}/> */}

            {show ? <Modals show={show} toHide={handleShow} name={item_name} id={id} prod_slug={prod_slug} /> : null}


        </>
    )
}