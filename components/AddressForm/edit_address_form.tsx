import { Modal } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ShippingValidation } from "../../validation/ShippingValidation";
import { useDispatch } from "react-redux";
import { storeCustomerAddressApi } from "../../store/slices/customer_addresses_slice/store_address_slice";
import { CustomerShippingAddressAPi } from "../../store/slices/customer_addresses_slice/customer_shipping_address_slice";
import { CustomerBillingAddressAPi } from "../../store/slices/customer_addresses_slice/customer_billing_address_slice";
import { ProfilePageApi } from "../../store/slices/profile_page_slice/profilePage_slice";

const EditFormShippingAddress = ({
  show,
  toHide,
  address_type,
  detailData,
  billingCheckbox,
  handleChangeSameAsShipping
}: any) => {
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
    address_id: detailData.address_id,
    address_type: address_type,
  };
  return (
    <>
      <Modal show={show} onHide={toHide}>
        <Modal.Header closeButton>
          <Modal.Title className="bold">Customer Address Form</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Formik
            initialValues={detailData || initialValues}
            validationSchema={ShippingValidation}
            onSubmit={(values: any, action: any) => {
              console.log("form shipping/billing address form values", values);
              dispatch(storeCustomerAddressApi({ ...values }));
              setTimeout(() => {
                dispatch(CustomerShippingAddressAPi());
                dispatch(CustomerBillingAddressAPi());
                dispatch(ProfilePageApi())
              }, 1000);
              action.resetForm();
              toHide();
              handleChangeSameAsShipping(!billingCheckbox)
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
                            Customer address
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
                            <label className="form-Form.Label fs-4 text-dark">
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

                            <span className="error_message text-danger fs-5">
                              <ErrorMessage name="name" />
                            </span>

                            {/* <span className="red"></span> */}
                          </div>
                        </div>

                        <div>
                          <div className="form-group mt-3 fs-6">
                            <label className="form-Form.Label fs-4 text-dark">
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

                            <span className="error_message text-danger fs-5">
                              <ErrorMessage name="address_1" />
                            </span>

                            {/* <span className="red"></span> */}
                          </div>
                        </div>

                        <div>
                          <div className="form-group mt-3 fs-6">
                            <label className="form-Form.Label fs-4 text-dark">
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
                            <label className="form-Form.Label fs-4 text-dark">
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
                            <span className="error_message text-danger fs-5">
                              <ErrorMessage name="country" />
                            </span>
                          </div>
                        </div>

                        <div>
                          <div className="form-group mt-3 fs-6">
                            <label className="form-Form.Label fs-4 text-dark">
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

                            <span className="error_message text-danger fs-5">
                              <ErrorMessage name="state" />
                            </span>

                            {/* <span className="red"></span> */}
                          </div>
                        </div>

                        <div>
                          <div className="form-group mt-3 fs-6">
                            <label className="form-Form.Label fs-4 text-dark">
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

                            <span className="error_message text-danger fs-5">
                              <ErrorMessage name="city" />
                            </span>

                            {/* <span className="red"></span> */}
                          </div>
                        </div>

                        <div>
                          <div className="form-group mt-3 fs-6">
                            <label className="form-Form.Label fs-4 text-dark">
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

                            <span className="error_message text-danger fs-5">
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
                          <span className="fs-6 align-bottom mx-1 fs-5">
                            Set as default address
                          </span>
                        </div>

                        <div>
                          <div className="form-group  mt-3 fs-6">
                            <label className="form-Form.Label fs-4 text-dark">
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

                            <span className="error_message text-danger fs-5">
                              <ErrorMessage name="email" />
                            </span>

                            {/* <span className="red"></span> */}
                          </div>
                        </div>

                        <div>
                          <div className="form-gr2oup  mt-3 fs-6">
                            <label className="form-Form.Label fs-4 text-dark">
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

                            <span className="error_message text-danger fs-5">
                              <ErrorMessage name="contact" />
                            </span>

                            {/* <span className="red"></span> */}
                          </div>
                        </div>

                        <div className="text-center ">
                          <button
                            type="submit"
                            className="btn btn-warning mt-3 px-2 py-3 text-uppercase rounded-0 yellow_btn"
                            disabled={isSubmitting}
                          >
                            save the address
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
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditFormShippingAddress;
