import { Formik, Form, Field, ErrorMessage } from "formik";
import { ShippingValidation } from "../../validation/ShippingValidation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeVisitorCustomerAddressApi } from "../../store/slices/customer_addresses_slice/visitor_store_customer_address_slice";
import { CustomerShippingAddressAPi } from "../../store/slices/customer_addresses_slice/customer_shipping_address_slice";
import { CustomerBillingAddressAPi } from "../../store/slices/../../store/slices/customer_addresses_slice/customer_billing_address_slice";
import axios from "axios";
import { client } from "../../services/api/general_api/cookie_instance";
import { Customer_address } from "../../store/slices/../../store/slices/customer_addresses_slice/visitor_store_customer_address_slice";

const VisitorAddress = ({ address_type, isSameAsShipping, shipping_check }: any) => {
  const dispatch = useDispatch();

  const storeAddressStore = useSelector(Customer_address);

  let duplicate_shipping:any;

  useEffect(()=>
  {
    console.log("store Address Store");
    // localStorage.setItem("guestid",storeAddressStore.data.customer_id);
    dispatch(CustomerShippingAddressAPi());
    dispatch(CustomerBillingAddressAPi());
  },[storeAddressStore])


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
    address_type: address_type,
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={ShippingValidation}
        onSubmit={async (values: any, action: any) => {
          // if (!isSameAsShipping) {
          //   console.log("isSameAsShipping",isSameAsShipping)
          //   console.log("create new Shipping address",address_type="Shipping");
          //   console.log("bill address as same as shipping",address_type="Billing");
          //   console.log("checking address", values)
          //   initialValues.address_type = "billing"
          //   console.log("checking address", values)
          //   // shipapi
          //   // billapi
          // } else {
          //   console.log("here we have to val 3 api");
          //   console.log("condn in which user create Shipping add",values,address_type);
          //   console.log("condn in which user create Billing add",values,address_type);
          // }

          if(shipping_check)
          {
            console.log("checking address", values)
            dispatch(storeVisitorCustomerAddressApi({ ...values }, true));

            const config = {
              headers: {
                Accept: 'application/json'
              },
              withCredentials:true
            };
            // setTimeout(()=>
            // {

            // },)

            // await client.get(`http://scott-sports-v14.8848digitalerp.com/api/method/sportnetwork.utils.sync_guest_user?email=${values.email}`, config).then(res=>console.log(res)).catch(err=>
            // console.log(err))
            // duplicate_shipping={...values};
            // duplicate_shipping.address_type= "Billing"
            //   dispatch(storeCustomerAddressApi({ ...duplicate_shipping }));
            // console.log("checking address - d", duplicate_shipping);
            // setTimeout(()=>
            // {
            // },10000)
            localStorage.setItem("guestLogin", "true");
            localStorage.setItem("isLoggedIn", "true");
            // setTimeout(()=>
            // {
            //   dispatch(CustomerShippingAddressAPi());
            //   dispatch(CustomerBillingAddressAPi());
            // },15000)
            // setTimeout(()=>
            // {
            //   values.address_type = "billing"
            //   console.log("checking address 2", values)
            // },2000)
          }
          else
          {
            console.log("checking address else")
          }
          // setTimeout(() => {
          // }, 1000);
          // action.resetForm();
        }}
      >
        {({ handleChange, isSubmitting, handleBlur }) => (
          // <FormikForm>
          <Form>
            <div className="container mb-3 ">
              <div className="billing-form form-wrap  border-dark  p-lg-2 p-md-3 p-2 ">
                <div className="flex-lg-row row">
                  <div className="col-lg-12">
                    <div className="billing-add-heading">
                      {/* <h5 className="mb-4 my-sm-2 mt-lg-0 fw-bold billing-header">
                            Customer address
                          </h5> */}
                    </div>
                  </div>
                  <div className="col-lg-12"></div>
                  <div className="mt-3 mt-lg-0 col-lg-12 mt-3">
                    <div className="fields-group-md mb-4 fs-4">
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
                      <div className="form-group mt-3 fs-4">
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
                      <div className="form-group mt-3 fs-4">
                        <label className="form-Form.Label fs-4">
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
                      <div className="form-group mt-3 fs-4">
                        <label className="form-Form.Label fs-4">
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
                      <div className="form-group mt-3 fs-4">
                        <label className="form-Form.Label fs-4">
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
                      <div className="form-group mt-3 fs-4">
                        <label className="form-Form.Label fs-4">
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
                      <div className="form-group mt-3 fs-4">
                        <label className="form-Form.Label fs-4">
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
                      <span className="fs-4 align-bottom mx-1">
                        Set as default address
                      </span>
                    </div>

                    <div>
                      <div className="form-group  mt-3 fs-4">
                        <label className="form-Form.Label fs-4">
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
                      <div className="form-gr2oup  mt-3 fs-4">
                        <label className="form-Form.Label fs-4">
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
                        className="btn btn-warning mt-3 px-4 py-3 text-uppercase rounded-0 yellow_btn"
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
    </>
  );
};

export default VisitorAddress;
