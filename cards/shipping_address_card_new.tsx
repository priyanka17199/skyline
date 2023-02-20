import React, { useEffect, useState } from "react";
import EditFormShippingAddress from "../components/AddressForm/edit_address_form";
// import styles from '../styles/checkout.module.css';
import FormShippingAddress from "../components/AddressForm/shipping_address_form";

const ShippingAddressCardNew = (props: any) => {
  const { shippingAddress, initialShippingAddress, setinitialShippingAddress,setinitialBillingAddress } =
    props;

    console.log("ship initial ",initialShippingAddress)

  const [showEditModal, setshowEditModal] = useState(false);
  const [detailData, setdetailData] = useState();

  const handleEditModal = (cardData: any) => {
    // console.log("form edit data", cardData);
    setshowEditModal(!showEditModal);
    setdetailData(cardData);
  };

  const [show, setshow] = useState(false);
  const [type, setType] = useState("");

  const handleShow = (val: any) => {
    setshow(!show);
    setType(val);
  };

  return (
    <>
      <h4 className="mb-1">Shipping Addresses</h4>
      <h5>{initialShippingAddress}</h5>
      {shippingAddress &&
        shippingAddress.map((detail: any, index: any) => (
          <div className="mt-2 mb-3 mb-lg-0 col-sm-4" key={index}>
            <div className="h-97">
              <div className="border px-1 h-100" key={detail.contact_info}>
                <div className="">
                  {/* <p>{detail.address_id}</p> */}
                  <p className={`mb-0`} style={{fontSize:"13px"}}>{detail.name}</p>
                  {/* <p className="mb-0">{detail.phone}</p> */}
                  <p className="mb-0 card_p" >{detail.address_1}</p>
                  <p className="mb-0 card_p" >{detail.address_2}</p>
                  <p className="mb-0 card_p" >{detail.city}</p>
                  <p className="mb-0 card_p" >{detail.postal_code}</p>
                  <p className="mb-0 card_p" >{detail.state}</p>
                  <p className="mb-0 card_p" >{detail.country}</p>
                  <p className="mb-0 card_p" >
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
                    onChange={()=>
                      setinitialBillingAddress(detail.address_id)
                    
                    }
                    onClick={() => 
                      setinitialShippingAddress(detail.address_id)
                    }
                    className={
                      shippingAddress &&
                      initialShippingAddress === detail.address_id
                        ? "btn btn-sm d-block w-100 h-100 mt-1  selected_address_button "
                        : "btn btn-sm d-block w-100 h-100 mt-1 address_button "
                    }
                  >
                    {shippingAddress &&
                    initialShippingAddress === detail.address_id
                      ? "Address Selected"
                      : "Deliver to this address"}
                  </button>
                  <div className="mt-2 text-center ">
                    {/* <ShippingAddressForm address_type="Shipping" address_id={editId} default_data={defaultData}/> */}

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
          <div className="border p-2 py-5 text-center" style={{ height: "253px" }}>
              <button
                className="address_icon"
                onClick={() => handleShow("Shipping")}
              >
                <i
                  className="fa fa-edit text-primary fs-2 ship_edit"
                ></i>
              </button>

              <div className="fs-3 px-5 ship_heading" onClick={() => handleShow("Shipping")}>
                Create New Shipping Address
              </div>
          
          </div>
        </div>
      </div>

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
          address_type="Shipping"
        />
      ) : null}
    </>
  );
};

export default ShippingAddressCardNew;
