import Image from 'next/image';
import { useRouter } from 'next/router';
import React ,{ useEffect, useState }from 'react'
import OrderDetail from '../orderDetail';
import * as ga from "../../lib/ga";
import SalesOrderFetch from '../../services/api/my_order_api/get_sales_order_id';

const ThankYou = ({sales_order_id}:any) => {

    const myLoader = ({ src, width, quality }:any) => {
        return `http://dealers-ssi.ascratech.com/static/media/${src}?w=${width}&q=${quality || 75}`
      }
      const router = useRouter();
      let thankyou = router.asPath.split('/')
      console.log(thankyou[2],"thanks");

    //   useEffect(()=>
    //   {
    //     SalesOrderFetch()
    //   },[])
      
      useEffect(() => {
        ga.event({
            action: "page_view",
            params: {
              not_set: thankyou[2]
            },
          });
        
      }, [])
      
    
    return (
        <div className="container mt-5" >
            <div className="row">
                <div className="text-center mx-auto col-md-12">
                    <Image 
                        loader={myLoader}
                        src="checked-big.9ab87535.png"
                        className="mb-1 success_thanku"
                        width={60}
                        height={60}
                        style={{minHeight:"92%", minWidth:"92%"}}
                        alt="success_img"
                        />
                    <h3 className="black bold">Thank You!</h3>
                    <h5 className="black">Your order has been received</h5>
                </div>
            </div>
            <OrderDetail /> 
        </div>
    )
}

export default ThankYou;