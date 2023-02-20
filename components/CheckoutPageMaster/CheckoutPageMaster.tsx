import React, { useState, useEffect, useCallback } from "react";
import WebCheckout from "./WebCheckout";
import MobCheckoutNew from "./MobCheckoutNew";
import useCheckOutNewHook from "../../hooks/order_checkout_page_hooks/checkout_hook_new";
import VisitorAddress from "../AddressForm/visitor_address_form";
import Link from "next/link";
import OrderSummary from "../OrderSummary/OrderSummary";
const CheckoutMaster = () => {
  // const {shippingAddressItems, profileList} = useCheckoutHook();
  const {
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
    setBillingCheckbox,
  } = useCheckOutNewHook();

  const [shippingCheck, setShippingCheck] = useState(true);

  const useMediaQuery = (width: any) => {
    const [targetReached, setTargetReached] = useState(true);

    const updateTarget = useCallback((e: any) => {
      if (e.matches) {
        setTargetReached(false);
      } else {
        setTargetReached(true);
      }
    }, []);

    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);

      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(false);
      }

      return () => media.removeListener(updateTarget);
    }, []);

    return targetReached;
  };

  const isBreakpoint = useMediaQuery(600);

  const visitor_login: any = localStorage.getItem("isLoggedIn");

  return (
    <>
      {isBreakpoint ? (
        <div>
          <WebCheckout
            shippingAddresses={shippingAddresses}
            initialShippingAddress={initialShippingAddress}
            billingAddresses={billingAddresses}
            initialBillingAddress={initialBillingAddress}
            setinitialShippingAddress={setinitialShippingAddress}
            setinitialBillingAddress={setinitialBillingAddress}
            orderSummary={orderSummary}
            quotationId={quotationId}
            handleChangeSameAsShipping={handleChangeSameAsShipping}
            billingCheckbox={billingCheckbox}
            setBillingCheckbox={setBillingCheckbox}
          />
        </div>
      ) : (
        <div className="mt-5">
          {visitor_login != null ? (
            <>
              <MobCheckoutNew
                shippingAddresses={shippingAddresses}
                initialShippingAddress={initialShippingAddress}
                billingAddresses={billingAddresses}
                initialBillingAddress={initialBillingAddress}
                setinitialShippingAddress={setinitialShippingAddress}
                setinitialBillingAddress={setinitialBillingAddress}
                orderSummary={orderSummary}
                quotationId={quotationId}
                handleChangeSameAsShipping={handleChangeSameAsShipping}
                billingCheckbox={billingCheckbox}
                setBillingCheckbox={setBillingCheckbox}
              />
            </>
          ) : (
            <>
              <div className=" container row  mb-2 mx-auto">
                <div className="col-lg-8 ">
                  <h4 className="text-uppercase bold mt-3">checkout details</h4>
                  <div className="d-flex align-items-center">
                    <button className="btn btn-warning btn-sm rounded-0 bold yellow_btn">
                      <Link href={"/login"}>
                        <a style={{ color: "white" }}>LOGIN</a>
                      </Link>
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
                  <div className="border rounded-1 mt-2">
                    <h4 className="px-3 mt-3">Create new address</h4>
                    <h5 className="bold px-3 mb-0">Shipping</h5>
                    <VisitorAddress
                      address_type="Shipping"
                      isSameAsShipping={billingCheckbox}
                      shipping_check={shippingCheck}
                    />
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

                        onChange={(e: any) => {
                          setShippingCheck(e.target.checked);
                          handleChangeSameAsShipping(e.target.checked);
                        }}
                      />
                      <label
                        className="form-check-label px-2 fs-4 pb-2"
                        htmlFor="flexCheckDefault"
                      >
                        Same as Shipping Address
                      </label>
                    </div>
                    {billingCheckbox ? null : (
                      <VisitorAddress
                        address_type="Billing"
                        isSameAsShipping={billingCheckbox}
                      />
                    )}
                  </div>
                </div>
                <div
                  className={`col-lg-4 mx-auto mt-2 border rounded-1 `}
                  style={{ width: "95%" }}
                >
                  <h5 className="my-3  bold text-uppercase">Order Summary</h5>
                  <OrderSummary orderSummary={orderSummary} />
                </div>
              </div>
            </>
          )}

          {/* <MobCheckout shippingAddressItems={shippingAddressItems} billing_data={profileList && profileList.billing_address}  /> */}
        </div>
      )}
    </>
  );
};

export default CheckoutMaster;
