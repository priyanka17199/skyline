import React from 'react'
import {callToaction} from "../datasets/Digitalshelf_dataset/calltoaction"
import Image from "next/image";
import Link from "next/link";
const Calltoaction = () => {


  return (
    <>
     <div className="swiper-container swiper-theme category-banner-wrapper pg-inner  pb-2 mb-10 container"
                  >
                    <div className="swiper-wrapper row cols-md-3 cols-sm-2 cols-1">
                         
                     {callToaction.map((items:any,i:any)=>(<div className="swiper-slide banner banner-fixed overlay-dark br-sm mt-2" key={i}>
                            <figure>
                                <Image src={items.image_url} alt="Category Banner"
                                    width={680} height={180} style={{backgroundColor: "#423A37"}}/>
                            </figure>   
                            <div className="banner-content y-50">
                                <h4 className="banner-subtitle text-white text-capitalize font-secondary font-weight-normal mb-1">{items.subtitle}</h4>
                                <h3 className="banner-title text-white text-uppercase ls-25">{items.Title}</h3>
                               <Link href={items.url}><a 
                                    className="btn btn-white btn-link btn-underline btn-icon-right">
                                    Shop Now<i className="w-icon-long-arrow-right"></i>
                                </a></Link> 
                            </div>
                        </div>))}
                    </div>
                </div> 
    
    </>
  )
}

export default Calltoaction