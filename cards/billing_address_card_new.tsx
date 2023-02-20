import React, { ReactHTMLElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditFormShippingAddress from "../components/AddressForm/edit_address_form";
import FormShippingAddress from "../components/AddressForm/shipping_address_form";
import styles from "../styles/checkout.module.css";

const BillingAddressCardNew = (props: any) => {
  const {
    billingAddress,
    setinitialBillingAddress,
    initialBillingAddress,
    handleChangeSameAsShipping,
    billingCheckbox,
    setBillingCheckbox,
  } = props;

  const [showEditModal, setshowEditModal] = useState(false);
  const [detailData, setdetailData] = useState();
  const [show, setshow] = useState(false);
  const [type, setType] = useState("");

  const handleEditModal = (cardData: any) => {
    // console.log("form edit data", cardData);
    setshowEditModal(!showEditModal);
    setdetailData(cardData);
  };

  const handleShow = (val: any) => {
    setshow(!show);
    setType(val);
  };

  console.log("same as shipping in billing card", billingCheckbox)

  return (
    <>
      <h4 className="mb-2">Billing Addresses</h4>

      <div className="d-flex align-items-center ">
        <input
          className="form-check-input fs-5 bill_checkbox"
          type="checkbox"
          defaultChecked={true}
          checked={billingCheckbox}
          id="flexCheckDefault"
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChangeSameAsShipping(e.target.checked)}
        />
        <label
          className="form-check-label px-2 fs-4 "
          htmlFor="flexCheckDefault"
        >
          Same as Shipping Address
        </label>
      </div>

      {/* <h5> by default -{initialShippingAddress}</h5> */}

      <h5>{initialBillingAddress}</h5>

      {!billingCheckbox ? (
        <>
          {billingAddress &&
            billingAddress.map((detail: any, index: any) => (
              <div className="mt-2 mb-3 mb-lg-0 col-sm-4" key={index}>
                <div className="h-97">
                  <div className="border px-1 h-100" key={detail.contact_info}>
                    <div className="">
                      {/* <p>{detail.address_id}</p> */}
                      <p className={`mb-0`} style={{ fontSize: "13px" }}>
                        {detail.name}
                      </p>
                      {/* <p className="mb-0">{detail.phone}</p> */}
                      <p className="mb-0 card_p">
                        {detail.address_1}
                      </p>
                      <p className="mb-0 card_p">
                        {detail.address_2}
                      </p>
                      <p className="mb-0 card_p">{detail.city}</p>
                      <p className="mb-0 card_p">
                        {detail.postal_code}
                      </p>
                      <p className="mb-0 card_p">{detail.state}</p>
                      <p className="mb-0 card_p">
                        {detail.country}
                      </p>
                      <p className="mb-0 card_p">
                        <a
                          href={`mailto:${detail.email}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {detail.email}
                        </a>
                      </p>
                      <p className="mb-0 card_p">
                        <a
                          href={`tel:${detail.phone}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {detail.contact}
                        </a>
                      </p>
                    </div>
                    <div className="">
                      <button
                        type="button"
                        onClick={() =>
                          setinitialBillingAddress(detail.address_id)
                        }
                        className={
                          billingAddress &&
                          initialBillingAddress === detail.address_id
                            ? "btn btn-sm d-block w-100 h-100 mt-1  selected_address_button"
                            : "btn btn-sm d-block w-100 h-100 mt-1 address_button"
                        }
                      >
                        {billingAddress &&
                        initialBillingAddress === detail.address_id
                          ? "Address Selected"
                          : "Bill to this address"}
                      </button>
                      <div className="mt-2 text-center ">

                        <button
                          type="button"
                          style={{ background: "none", border: "none" }}
                          onClick={() => {
                            handleEditModal(detail);
                            // setEditId(shippingAddress[index].address_id)
                            // setDefaultData(shippingAddress[index])
                          }}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          <div className="mt-2 mb-3 mb-lg-0 col-sm-4">
            <div className="h-100">
              <div className="border p-3 py-5 text-center"  style={{ height: "253px" }}>
                
                  <button
                    className="address_icon"
                    onClick={() => handleShow("Billing")}
                  >
                    <i
                      className="fa fa-edit text-primary fs-2 bill_edit"
                    ></i>
                  </button>

                  <div
                    className="fs-3 px-5 bill_heading"
                    onClick={() => handleShow("Billing")}
                  >
                    Create New Billing Address
                  </div>
      
              </div>
            </div>
          </div>
        </>
      ) : null}

      {show ? (
        <FormShippingAddress
          show={show}
          toHide={handleShow}
          address_type={type}
        />
      ) : null}

      {showEditModal ? (
        <EditFormShippingAddress
          show={showEditModal}
          toHide={handleEditModal}
          detailData={detailData}
          address_type="Billing"
          billingCheckbox={billingCheckbox}
          handleChangeSameAsShipping={handleChangeSameAsShipping}
        />
      ) : null}
    </>
  );
};

export default BillingAddressCardNew;
