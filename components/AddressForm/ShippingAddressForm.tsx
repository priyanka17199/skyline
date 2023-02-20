import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ShippingValidation } from "../../validation/ShippingValidation";
import { useDispatch } from "react-redux";

import { AddressPageApi } from "../../store/slices/customer_addresses_slice/CustomerAddress_slice";
import { getCustomerAddressApi } from "../../store/slices/customer_addresses_slice/getCustomerAddress_slice";
import useProfilePage from "../../hooks/profile_page_hooks/profilePage_hook";
import Router from "next/router";
import useCheckoutHook from "../../hooks/order_checkout_page_hooks/Checkout_hook";

type PropType = {
  address_type?: any;
  address_id?: any;
  default_data?: any;
};

const ShippingAddressForm = ({
  address_type,
  address_id,
  default_data
}: PropType,) => {
  console.log("####add", default_data);

  let { getCustomerAddress }: any = useCheckoutHook;
  console.log("form getaddress", getCustomerAddress);

  const { shippingAddressItems } = useCheckoutHook();

  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    address_1: "",
    address_2: "",
    country: "",
    state: "",
    city: "",
    postal_code: "",
    email: "",
    contact: "",
    set_as_default: false,
  };

  // useEffect(() => {
  //   getCustomerAddressApi()
  // }, [shippingAddressItems]);

  return (
    <div>
      {/* <button
        type="button"
        className="btn btn-primary fs-3"
        style={{ background: "none", border: "none" }}
        data-bs-toggle="modal"
        data-bs-target="#addShipAdd"
      >
        <i className="fa fa-edit text-primary "></i>
      </button> */}

      <div
        className="modal fade"
        id="ShipAddress"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" >
          <div className="modal-content text-start">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Shipping Address Form
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body mt-0">
              <Formik
                initialValues={default_data || initialValues}
                validationSchema={ShippingValidation}
                onSubmit={(values: any, action: any) => {
                 
                  dispatch(
                    AddressPageApi({ ...values, address_type, address_id })
                  );
                  setTimeout(() => {
                    dispatch(getCustomerAddressApi());
                  }, 1000);
                  action.resetForm();
                }}
                enableReinitialize
              >
                {({ handleChange, isSubmitting, handleBlur }) => (
                  // <FormikForm>
                  <Form>
                    <div className="container mb-3 ">
                      <div className="billing-form form-wrap  border-dark  p-lg-2 p-md-3 p-2 ">
                        <div className="flex-lg-row row">
                          <div className="col-lg-12">
                            <div className="billing-add-heading">
                              <h4 className="mb-4 my-sm-2 mt-lg-0 fw-bold billing-header">
                                Customer Shipping address
                              </h4>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            {/* <div className="billing-add-heading">
                        <h5 className="mb-4 my-sm-2 mt-lg-0 fw-bold billing-header">
                          Shipping
                        </h5>
                      </div> */}
                          </div>
                          <div className="mt-3 mt-lg-0 col-lg-12 mt-3">
                            <div className="fields-group-md mb-4 fs-6">
                              <div className="form-group">
                                <label className="form-Form.Label">
                                  Name <span className="red">*</span>
                                </label>
                                <Field
                                  type="text"
                                  className="form-control rounded-0"
                                  id="name"
                                  name="name"
                                  // defaultValue={name}
                                  // value={name}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  autoComplete="off"
                                  // required
                                />

                                <span className="error_message text-danger">
                                  <ErrorMessage name="name" />
                                </span>

                                {/* <span className="red"></span> */}
                              </div>
                            </div>

                            <div>
                              <div className="form-group mt-3 fs-6">
                                <label className="form-Form.Label ">
                                  Address 1<span className="red">*</span>
                                </label>
                                <Field
                                  className="form-control rounded-0"
                                  id="address_1"
                                  name="address_1"
                                  // value={address_1}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />

                                <span className="error_message text-danger ">
                                  <ErrorMessage name="address_1" />
                                </span>

                                {/* <span className="red"></span> */}
                              </div>
                            </div>

                            <div>
                              <div className="form-group mt-3 fs-6">
                                <label className="form-Form.Label fs-6">
                                  Address 2<span className="red">*</span>
                                </label>
                                <Field
                                  as="textarea"
                                  className="form-control rounded-0"
                                  id="address_2"
                                  name="address_2"
                                  // value={address_2}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                ></Field>

                                {/* <span className="error_message">
                            <ErrorMessage name="address2" />
                          </span> */}
                                {/* <span className="red"></span> */}
                              </div>
                            </div>

                            <div>
                              <div className="form-group mt-3 fs-6">
                                <label className="form-Form.Label fs-6">
                                  Country <span className="red">*</span>
                                </label>
                                <Field
                                  component="select"
                                  id="billingCountry"
                                  className="form-control rounded-0"
                                  name="country"
                                  // value={country}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  // required
                                  autoComplete="off"
                                >
                                  <option>Please select a country.</option>
                                  <option>India</option>
                                </Field>
                                <span className="error_message text-danger">
                                  <ErrorMessage name="country" />
                                </span>
                              </div>
                            </div>

                            <div>
                              <div className="form-group mt-3 fs-6">
                                <label className="form-Form.Label fs-6">
                                  State/Province <span className="red">*</span>
                                </label>
                                <Field
                                  component="select"
                                  className="form-control rounded-0"
                                  id="state"
                                  name="state"
                                  // value={state}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  // required
                                >
                                  <option>
                                    Select Select a region, state or province
                                  </option>
                                  <option>Bihar</option>
                                  <option>Chandigarh</option>
                                  <option>Chhattisgarh</option>
                                  <option>Dadra and Nagar Haveli</option>
                                  <option>Daman and Diu</option>
                                  <option>Delhi</option>
                                  <option>Goa</option>
                                  <option>Gujarat</option>
                                  <option>Haryana</option>
                                  <option>Himachal Pradesh</option>
                                  <option>Jammu and Kashmir</option>
                                  <option>Jharkhand</option>
                                  <option>Karnataka</option>
                                  <option>Kenmore</option>
                                  <option>Kerala</option>
                                  <option>Lakshadweep</option>
                                  <option>Madhya Pradesh</option>
                                  <option>Maharashtra</option>
                                  <option>Manipur</option>
                                  <option>Meghalaya</option>
                                  <option>Mizoram</option>
                                  <option>Nagaland</option>
                                  <option>Odisha</option>
                                  <option>Pondicherry</option>
                                  <option>Punjab</option>
                                  <option>Rajasthan</option>
                                  <option>Tamil Nadu</option>
                                  <option>Telangana</option>
                                  <option>Uttar Pradesh</option>
                                  <option>Uttarakhand</option>
                                  <option>West Bengal</option>
                                  <option>Assam</option>
                                  <option>Andhra Pradesh</option>
                                  <option>Andaman and Nicobar Islands</option>
                                  <option>Puducherry</option>
                                  <option>Karnatka</option>
                                  <option>Arunachal Pradesh </option>
                                  <option>Sikkim</option>
                                  <option>Tripura</option>
                                </Field>

                                <span className="error_message text-danger">
                                  <ErrorMessage name="state" />
                                </span>

                                {/* <span className="red"></span> */}
                              </div>
                            </div>

                            <div>
                              <div className="form-group mt-3 fs-6">
                                <label className="form-Form.Label fs-6">
                                  City <span className="red">*</span>
                                </label>
                                <Field
                                  component="select"
                                  className="form-control rounded-0"
                                  id="city"
                                  name="city"
                                  // value={city}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                >
                                  <option>
                                    Please select a region, state, or province.
                                  </option>
                                  <option>Mumbai</option>
                                </Field>

                                <span className="error_message text-danger">
                                  <ErrorMessage name="city" />
                                </span>

                                {/* <span className="red"></span> */}
                              </div>
                            </div>

                            <div>
                              <div className="form-group mt-3 fs-6">
                                <label className="form-Form.Label fs-6">
                                  Zip/Postal Code <span className="red">*</span>
                                </label>
                                <Field
                                  type="text"
                                  className="form-control rounded-0"
                                  id="postal_code"
                                  name="postal_code"
                                  // value={postal_code}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  autoComplete="off"
                                  // required
                                />

                                <span className="error_message text-danger">
                                  <ErrorMessage name="postal_code" />
                                </span>
                              </div>
                            </div>

                            <div className=" mt-4">
                              <Field
                                className="form-check-Form.Control mt-1 rounded-0"
                                type="checkbox"
                                id="set_as_default"
                                name="set_as_default"
                                onChange={handleChange}

                                // aria-Form.Label="Checkbox for following text Form.Control"
                              />
                              <span className="fs-6 align-bottom mx-1">
                                Set as default address
                              </span>
                            </div>

                            <div>
                              <div className="form-group  mt-3 fs-6">
                                <label className="form-Form.Label fs-6">
                                  Email ID <span className="red">*</span>
                                </label>
                                <Field
                                  type="email"
                                  className="form-control rounded-0"
                                  id="email"
                                  name="email"
                                  // value={email_id}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  autoComplete="off"
                                  // required
                                />

                                <span className="error_message text-danger">
                                  <ErrorMessage name="email" />
                                </span>

                                {/* <span className="red"></span> */}
                              </div>
                            </div>

                            <div>
                              <div className="form-gr2oup  mt-3 fs-6">
                                <label className="form-Form.Label fs-6">
                                  Mobile No <span className="red">*</span>
                                </label>
                                <Field
                                  type="text"
                                  className="form-control rounded-0"
                                  id="contact"
                                  name="contact"
                                  // value={phone}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  autoComplete="off"
                                />

                                <span className="error_message text-danger">
                                  <ErrorMessage name="contact" />
                                </span>

                                {/* <span className="red"></span> */}
                              </div>
                            </div>

                            <div className="text-center ">
                              <button
                                type="submit"
                                className="btn btn-warning mt-3 px-2 py-1 text-uppercase rounded-0 "
                                disabled={isSubmitting}
                              >
                                Save the address
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form>
                  // </FormikForm>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingAddressForm;
