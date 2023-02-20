import React from 'react';
import CancelOrder from '../../components/myOrder/components/cancelOrder';
import PlaceOrder from '../../components/myOrder/components/place_order';
import { useRouter } from 'next/router';
import useCartHistoryHook from '../../hooks/general_hooks/useCartHistory';

const MyOrderMaster = () => {
  const cartHistoryItems = useCartHistoryHook();
  console.log("cart history master",cartHistoryItems)


    // let token;
    // const router = useRouter();
    // if (typeof window !== 'undefined') {
    //     token = localStorage.getItem("token");
    // }

    // if(!token)
    // {   
    //     router.push('/login')
    // }
  return (
    <div className="container mt-3">
          <div className="mt-4 row">
                    <div className="col-md-6">
                        <div className="page_heading">
                            <h4 className=" bold text-uppercase mb-3" style={{fontSize: "19px"}}>Your Orders</h4>
                        </div>

                    </div>
                </div>
  <ul className="nav nav-tabs" role="tablist">
    <li className="nav-item">
      <a className="nav-link active" data-bs-toggle="tab"  href="#placed_order">Orders</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="tab" href="#can_order">Cancelled</a>
    </li>
  </ul>


  <div className="tab-content">
    <div id="placed_order" className="container tab-pane active show"><br/>
    <PlaceOrder cartHistory={cartHistoryItems} />
    </div>
    <div id="can_order"  className="container tab-pane fade"><br/>
    {/* <CancelOrder cartHistory={cartHistoryItems}/> */}
    </div>
  </div>
</div>
    
  )
}

export default MyOrderMaster