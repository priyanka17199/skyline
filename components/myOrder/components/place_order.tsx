import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cartHistoryApi } from "../../../store/slices/cart_page_slice/get_cart_history";
import MyOrderCard from "../../../cards/my_order_card";

const PlaceOrder = (cartHistory:any ,{ id }: any) => {
  // const cartHistory = props;
  console.log("cart history place",cartHistory)
  const [history, setHistory] = useState("last_days_30");
  
  
  // let cartHistory = useCartHistoryHook();
  let orderCount = 0;
  if (cartHistory) {
    orderCount = cartHistory.cartHistory.length;
  }
  
  console.log("cart history place",cartHistory.cartHistory)
  const dispatch = useDispatch();

  const handleHistoryDate = (e: any) => {
    setHistory(e.target.value);
  };

  useEffect(() => {
    dispatch(cartHistoryApi(history, ""));
    // setTimeout(() => {
    // }, 2000);
  }, [history]);

  return (
    <div
      role="tabpanel"
      aria-hidden="false"
     
      id={id}
    >
      <div className="row mt-3 mb-3">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-2 col-sm-4 col-6">
              <select
                className="form-select placeorder_detail fs-5 w-75"
                onChange={handleHistoryDate}
                value={history}
              >
                <option value="past_month_3">past 3 months</option>
                <option value="last_days_30">last 30 days</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
            </div>
            <div className="col text-end">
              <p className="mb-0" style={{ fontSize: "15px" }}>
                <span className="bold">{orderCount}</span> orders
              </p>
            </div>
          </div>
        </div>
      </div>

      {cartHistory && 
        cartHistory.cartHistory.map((data: any,i:any) => (
          <div className="row" key={i}>
            <div className="col-lg-12">
              <div className="order_card cart_table mb-3 card">
                <MyOrderCard data={data} />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PlaceOrder;
