import React from 'react'
import Image from "next/image";

const Ctabanner = () => {
  return (
    <>
      <div className="banner banner-fixed sale-on-banner br-sm">
                    <figure>
                        <Image src="/assets/images/ecommerce_theme/cta_banner.png" alt="Category Banner"
                            width={1583} height={229} style={{backgroundColor:"#2F3237;"}} />
                    </figure>   
                    <div className="banner-content text-center x-50 y-50 mt-1">
                        <h3 className="banner-title text-white font-secondary font-weight-normal mb-2 ctabanner_h4">Sale on This Friday</h3>
                        <h4 className="banner-price-info justify-content-center text-white text-uppercase ls-25 d-flex mb-2 ctabanner_h4">
                            70% Off
                        </h4>
                    </div>
                </div> 
    
    
    </>
  )
}

export default Ctabanner