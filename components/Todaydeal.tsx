import React from 'react'
import {related_product} from "../datasets/Digitalshelf_dataset/relatedproduct"
import Tablet from "../public/assets/images/ecommerce_theme/tablet_img.png"
import Image from "next/image";
import Link from "next/link";
const Todaydeal = () => {

  return (
    <>
    <div className="container mt-4 mb-4">
                <div className="title-link-wrapper title-deals after-none">
                    <h2 className="title">Deals Hot of The Day</h2>
                   
                    <Link href="#">
                    <a className="font-size-normal font-weight-bold ls-25 mb-0">
                      More Products<i className="w-icon-long-arrow-right"></i>
                    </a>
                  </Link>
                </div>
                <div className="swiper-container swiper-theme product-deals-wrapper ">
               
                 <div className="swiper-wrapper row cols-lg-5 cols-md-4 cols-sm-3 cols-2">
                 {related_product.map((products:any,i:any)=>(
                        <div className="swiper-slide product-wrap" key={i}> 
                            <div className="product text-center">
                                <figure className="card_imgs">
                                
                                        <Image src={products.image_url} alt="Product" width={210} height={200} />
                                   
                                    
                                    <div className="product-action-horizontal">
                                    <Link href="#"><a className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></a></Link>
                                    <Link href="#"><a className="btn-product-icon btn-wishlist w-icon-heart" title="Wishlist"></a></Link>
                                    <Link href="#"><a className="btn-product-icon btn-quickview w-icon-search" title="Quick View"></a></Link>
                                    </div>
                                </figure>
                                <div className="product-details">
                                    <h4 className="product-name"><Link href={products.url}><a>{products.item_name}</a></Link></h4>
                                    <div className="product-price">
                                        <ins className="new-price">₹{products.price}</ins><del className="old-price">₹{products.mrp_price}</del>
                                    </div>
                                </div>
                            </div>
                        </div>))} 
                    </div>  
                </div>
                </div>
    
    </>
  )
}

export default Todaydeal