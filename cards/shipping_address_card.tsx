import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useCheckoutHook from "../hooks/order_checkout_page_hooks/Checkout_hook";
import { AddressPageApi } from "../store/slices/customer_addresses_slice/CustomerAddress_slice";
import {
  getCustomerAddressApi,
  getCustomer_Address,
} from "../store/slices/customer_addresses_slice/getCustomerAddress_slice";
import ShippingAddressForm from "../components/AddressForm/ShippingAddressForm";




const ShippingAddressCard = () => {

  const { shippingAddressItems } = useCheckoutHook();
  console.log("/////Checkout Item tsx- ", shippingAddressItems);

  let [editId, setEditId] = useState();
  let [ defaultData , setDefaultData ] = useState();



  const dispatch = useDispatch();

  const handleDefaultChange = async (address: any) => {
    let updated_address = {
      ...address,
      set_as_default: !address.set_as_default
    };

    dispatch(AddressPageApi(updated_address));
    setTimeout(() => {
      dispatch(getCustomerAddressApi());
    }, 1000)
  };




  return (
    <>
      {shippingAddressItems &&
        shippingAddressItems.map((detail: any, index: any) => (
          <div className="mt-3 mb-3 mb-lg-0 col-sm-4" key={index}>
            <div className="h-100">
              <div className="border p-2 h-100" key={detail.contact_info}>
                <div>
                  <p className="mb-0 ">{detail.name}</p>
                  <p className="mb-0">{detail.phone}</p>
                  <p className="mb-0">{detail.address_1}</p>
                  <p className="mb-0">{detail.address_2}</p>
                  <p className="mb-0">{detail.city}</p>
                  <p className="mb-0">{detail.postal_code}</p>
                  <p className="mb-0">{detail.state}</p>
                  <p className="mb-0">{detail.country}</p>
                  <p className="mb-0">
                    <a href={`mailto:${detail.email}`} target="_blank" rel="noreferrer">
                      {detail.email_id}
                    </a>
                  </p>
                  <p className="mb-0">
                    <a href={`tel:${detail.phone}`} target="_blank" rel="noreferrer">
                      {detail.phone}
                    </a>
                  </p>
                </div>
                <div className="">
                  <button
                    type="button"
                    onClick={() => handleDefaultChange(detail)}
                    className={
                      shippingAddressItems &&
                        shippingAddressItems[index].set_as_default &&
                        shippingAddressItems[index].address_id ===
                        detail.address_id
                        ? "btn btn-sm d-block w-100 h-100 mt-2 btn btn-success disabled"
                        : "btn btn-sm d-block w-100 h-100 mt-2 btn btn-warning"
                    }
                  >
                    {shippingAddressItems &&
                      shippingAddressItems[index].set_as_default &&
                      shippingAddressItems[index].address_id === detail.address_id
                      ? "Address Selected"
                      : "Deliver to this address"}
                  </button>
                  <div className="mt-2 text-center ">

                    <ShippingAddressForm address_type="Shipping" address_id={editId} default_data={defaultData}/>

                    <button
                      type="button"
                      style={{ background: "none", border: "none" }}
                      onClick={() => {
                        setEditId(shippingAddressItems[index].address_id)
                        setDefaultData(shippingAddressItems[index])
                      }}
                      className="text-decoration-underline"
                      data-bs-toggle="modal"
                      data-bs-target="#ShipAddress"
                    >
                      Edit

                    </button>




                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}


    </>
  );
};

export default ShippingAddressCard;
