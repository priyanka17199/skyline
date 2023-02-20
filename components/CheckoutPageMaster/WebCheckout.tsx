import useCheckOutNewHook from "../../hooks/order_checkout_page_hooks/checkout_hook_new";
import { useState } from "react";
import ShippingAddressCardNew from "../../cards/shipping_address_card_new";
import BillingAddressCardNew from "../../cards/billing_address_card_new";
import HandleOrderSection from "./HandleOrderSection";
import FormShippingAddress from "../AddressForm/shipping_address_form";
import { CheckoutPageInterface } from "../../interfaces/checkout_page_interface";
import OrderSummary from "../OrderSummary/OrderSummary";
import VisitorAddress from "../AddressForm/visitor_address_form";
import styles from "../../styles/checkout.module.css";
import Link from "next/link";

const WebCheckOut = ({
  shippingAddresses,
  billingAddresses,
  initialShippingAddress,
  setinitialShippingAddress,
  initialBillingAddress,
  setinitialBillingAddress,
  orderSummary,
  quotationId,
  handleChangeSameAsShipping,
  billingCheckbox,
}: CheckoutPageInterface) => {
  // const { shippingAddresses, billingAddresses, initialShippingAddress, setinitialShippingAddress, initialBillingAddress, setinitialBillingAddress, orderSummary, quotationId } = useCheckOutNewHook();
  console.log("checkout shipping address in render file", shippingAddresses);
  console.log(
    "##checkout billing address in render file",
    initialBillingAddress
  );

  console.log("bill", billingCheckbox)

  const [shippingCheck , setShippingCheck] = useState(true)
  const [show, setshow] = useState(false);
  const [type, setType] = useState("");

  const handleShow = (val: any) => {
    setshow(!show);
    setType(val);
  };
  const handleVisitorSameShipping = () =>
  {
    setShippingCheck(!shippingCheck)
  }
  const visitor_login:any = localStorage.getItem("isLoggedIn")
  // let visitor_login = true;
  return (
    <>
      <div className="container mt-4">
        <div>
          {visitor_login != null ? (
            <div className="row flex-lg-row flex-column-reverse ">
              <div className="col-lg-8 mt-3 mt-lg-0">
                <div className="row">
                  <ShippingAddressCardNew
                    shippingAddress={shippingAddresses}
                    initialShippingAddress={initialShippingAddress}
                    setinitialShippingAddress={setinitialShippingAddress}
                  />
                </div>

                <hr />

                <div className="row">
                  <BillingAddressCardNew
                    billingAddress={billingAddresses}
                    initialBillingAddress={initialBillingAddress}
                    setinitialBillingAddress={setinitialBillingAddress}
                    handleChangeSameAsShipping={handleChangeSameAsShipping}
                    billingCheckbox={billingCheckbox}
                  />
                </div>
              </div>

              <div className="col-lg-4">
                <HandleOrderSection
                  initialShippingAddress={initialShippingAddress}
                  initialBillingAddress={initialBillingAddress}
                  orderSummary={orderSummary}
                  quotationId={quotationId}
                />
              </div>
            </div>
          ) : (
            <>
              <div className=" container row mb-4 mx-auto">
                <div className="col-lg-12 ">
                  <h4 className="text-uppercase bold mt-3">checkout details</h4>
                  <div className="d-flex align-items-center">
                    <button className="btn btn-warning btn-sm rounded-0 bold yellow_btn">
                      <Link href={"/login"} ><a style={{color:"white"}}>LOGIN</a></Link>
                    </button>
                    <span className="text-muted px-2 fs-4">or</span>
                    <div className="d-flex align-items-center ">
                      <input
                        className="form-check-input fs-4"
                        type="checkbox"
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label px-2 fs-4 text-muted"
                        htmlFor="flexCheckDefault"
                      >
                        Login as Guest
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-8 ">
                    <div className="border rounded-1 mt-2">
                    <h4 className="px-3 mt-3">Create new address</h4>
                    <h5 className="bold px-3 mb-0">Shipping</h5>
                    <VisitorAddress address_type="Shipping" isSameAsShipping={billingCheckbox} shipping_check={shippingCheck}/>
                    <h6 className="bold px-3 mb-1">Billing</h6>
                    <div className="d-flex align-items-center px-3">
                      <input
                        className="form-check-input fs-4 bill_checkbox mb-2"
                        type="checkbox"
                        defaultChecked={true}
                        id="flexCheckDefault"
                        // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        //   handleChangeSameAsShipping(e.target.checked)
                        // }

                        onChange={(e:any)=> {
                          setShippingCheck(e.target.checked);
                          handleChangeSameAsShipping(e.target.checked)
                      }}
                      />
                      <label
                        className="form-check-label px-2 fs-4 pb-2"
                        htmlFor="flexCheckDefault"
                      >
                        Same as Shipping Address
                      </label>
                    </div>
                    {billingCheckbox ? (
                      null
                    ) : <VisitorAddress address_type="Billing" isSameAsShipping={billingCheckbox} />}
                  </div>
                    </div>
                    <div className="col-lg-4 mt-2 border">
                   
                  <h5 className=" bold text-uppercase">Order Summary</h5>
                  <OrderSummary orderSummary={orderSummary} />
               
                    </div>
                  </div>
                 
                </div>
                
              </div>
            </>
          )}
        </div>
      </div>

      {/* {show ? <FormShippingAddress show={show} toHide={handleShow} address_type={type}/> : null} */}
    </>
  );
};
export default WebCheckOut;
