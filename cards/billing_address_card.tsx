import React, { useEffect, useState } from "react";
import BillingAddressForm from "../components/AddressForm/BillingAddressForm";


const BillingAddressCard = ({ billing_data }: any) => {
  const [showToast, setshowToast] = useState(false);
  let [pickedAddress, setPickedAddress] = useState<any>();

  console.log("//billing address card billing", billing_data);

  let [editId, setEditId] = useState();
  let [billingDefaultData, setBillingDefaultData] = useState();

  let default_address_id: any;
  const handleDefaultChange = async (id: any) => {
    console.log("Checkout id - ", id);
    default_address_id = id;
    // shippingAddressItems.map((data: any) => {
    if (id === billing_data.address_id) {
      setPickedAddress({
        ...billing_data,
        set_as_default: true,
        address_type: "Billing",
        version: "v1",
        method: "put",
        entity: "customer_address",
      });
    }
    // });

    // await updateAddress(pickedAddress);
  };

  //   if (billing_data) {
  //     setPickedAddress(billing_data);
  //   }
  return (
    <>
      <h4 className="mb-2">Billing Addresses</h4>

      <div className="mt-3 mb-3 mb-lg-0 col-sm-4 h-100">
        <div
          className="border p-2 h-100"
          key={billing_data && billing_data.contact_info}
        >
          <div>
            <p className="mb-0 ">{billing_data && billing_data.name}</p>
            <p className="mb-0">{billing_data && billing_data.phone}</p>
            <p className="mb-0">{billing_data && billing_data.address_1}</p>
            <p className="mb-0">{billing_data && billing_data.address_2}</p>
            <p className="mb-0">{billing_data && billing_data.city}</p>
            <p className="mb-0">{billing_data && billing_data.postal_code}</p>
            <p className="mb-0">{billing_data && billing_data.state}</p>
            <p className="mb-0">{billing_data && billing_data.country}</p>
            <p className="mb-0">
              <a
                href={`mailto:${billing_data && billing_data.email_id}`}
                target="_blank"
              >
                {billing_data && billing_data.email_id}
              </a>
            </p>
            <p className="mb-0">
              <a
                href={`tel:${billing_data && billing_data.phone}`}
                target="_blank"
              >
                {billing_data && billing_data.phone}
              </a>
            </p>
          </div>
          <div>
            <button
              type="button"
              onClick={() =>
                handleDefaultChange(billing_data && billing_data.address_id)
              }
              className="btn btn-sm d-block w-100 mt-2 btn btn-success"
              // className={
              //   pickedAddress &&
              //   pickedAddress.set_as_default &&
              //   pickedAddress.address_id === billing_data.address_id
              //     ? "btn btn-sm d-block w-100 mt-2 btn btn-success"
              //     : "btn btn-sm d-block w-100 mt-2 btn btn-warning"
              // }
            >
              {/* {pickedAddress &&
              pickedAddress.set_as_default &&
              pickedAddress.address_id === billing_data.address_id
                ? "Address Selected"
                : "Deliver to this address"} */}
              Address Selected
            </button>
            <div className="mt-2 text-center text-decoration-underline">
              {/* {billing_data &&
                billing_data.map((data: any, index: any) => (
                  <> */}
              {/* <EditAddressCard
                      address_id={editId}
                      address_type="Billing"
                      default_data={billingDefaultData}
                    /> */}

              <BillingAddressForm
                address_id={editId}
                address_type="Billing"
                default_data={billingDefaultData}
              />

              <button
                type="button"
                style={{ background: "none", border: "none" }}
                onClick={() => {
                  if (billing_data) {
                    setEditId(billing_data.address_id);
                    setBillingDefaultData(billing_data);
                  }
                }}
                className="text-decoration-underline"
                data-bs-toggle="modal"
                data-bs-target="#BillAddress"
              >
                Edit
              </button>
              {/* </>
                ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillingAddressCard;
