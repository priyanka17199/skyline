import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import { Form, FormLabel } from "react-bootstrap";
import Link from "next/link";
import { RegisterUserApi } from "../store/slices/auth_slice/registration_slice";
import { useRouter } from "next/router";
import Image from "next/image";
import Header from "./Head/Head";
import logo from "../public/assets/images/logo.png";
import ToastNotification from "./ToastNotification";
import { RegistrationValidation } from "../validation/RegistrationValidation";
import { RegistrationValidationNew } from "../validation/RegistrationValidationNew";
import { SpRegisterUserApi ,Sp_Register_User } from "../store/slices/auth_slice/sp_registration_slice";




const SpRegister = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const Sp_Register_state = useSelector((state: any) => state.SpRegistration);

  const [showToast, setshowToast] = useState(false);
  const [showToast1, setshowToast1] = useState(false);

  const handlesubmit = (values: any, action: any) => {
    console.log("form values", values);
    dispatch(SpRegisterUserApi(values));
    if (Sp_Register_state.error) {
      setshowToast1(true);
    } else if (Sp_Register_state.user) {
      setshowToast(true);
      action.resetForm();
    }
  };

  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     router.push("/");
  //   }
  // }, [Sp_Register_state]);

  console.log(Sp_Register_state, "////register");
  return (
    <>
      {/* <Header /> */}
      <ToastNotification
        setShow={setshowToast}
        show={showToast}
        content="Register Successfully"
      />

      <ToastNotification
        setShow={setshowToast1}
        show={showToast1}
        content="Incorrect Email ID or Password"
      />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="logo mt-4 h">
              <Link href="/">
                <a>
                <Image
                  src="/assets/images/ecommerce_theme/new_logo.png"
                  alt="logo"
                  width={270}
                  height={55}
                />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="registration_form">
          <div className="registr-heading text-center mb-2">
            <h1 className="text-uppercase registration_title">Register</h1>
          </div>
          <Formik
            initialValues={{
              name: "",
              designation:"",
              company_name:"",
              email: "",
              contact_number: "",
              address: "",
              gst_number: "",
              state: "",
              city: "",
              pincode:"",
              picked: "",
              buyfor:"",

            }}
            validationSchema={RegistrationValidationNew}
            onSubmit={(values, action) => {
              console.log("onSubmit values", values);
              handlesubmit(values, action);
              console.log("submit fn call");
            }}
          >
            {({ handleChange, handleBlur }) => (
              <FormikForm>
                <div className="form-wrapper registration">
                  <div className="mainfields-wrapper">
                    <div className="row justify-content-center">
                      <div className="col-10 main-column">
                        <div className="row mt-3">
                          <Form.Group controlId="formName">
                            <div className="row">
                              <div className="col-md-4">
                                <Form.Label className="registration_label">
                                  Name:
                                </Form.Label>
                              </div>

                              <div className="col-md-8">
                                <Field
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  type="text"
                                  name="name"
                                  className="form-control rounded-0"
                                />
                                <div className="error_message">
                                  <ErrorMessage
                                    className="error_message"
                                    name="name"
                                  />
                                </div>
                              </div>
                            </div>
                          </Form.Group>
                        </div>
                        <div className="row mt-3">
                          <Form.Group controlId="formDesignation">
                            <div className="row">
                              <div className="col-md-4">
                                <Form.Label className="Designation_label">
                                  Designation:
                                </Form.Label>
                              </div>

                              <div className="col-md-8">
                                <Field
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  type="text"
                                  name="designation"
                                  className="form-control rounded-0"
                                />
                                {/* <div className="error_message">
                                  <ErrorMessage name="designation" />
                                </div> */}
                              </div>
                            </div>
                          </Form.Group>
                        </div>
                        <div className="row mt-3">
                          <Form.Group controlId="formCompanyName">
                            <div className="row">
                              <div className="col-md-4">
                                <Form.Label className="CompanyName_label">
                                  Company Name:
                                </Form.Label>
                              </div>

                              <div className="col-md-8">
                                <Field
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                  type="text"
                                  name="company_name"
                                  className="form-control rounded-0"
                                />
                                {/* <div className="error_message">
                                  <ErrorMessage name="company_name" />
                                </div> */}
                              </div>
                            </div>
                          </Form.Group>
                        </div>
                        <div className="row mt-3">
                          <Form.Group controlId="formEmail">
                            <div className="row">
                              <div className="col-md-4">
                                <Form.Label className="registration_label">
                                  Email:
                                </Form.Label>
                              </div>

                              <div className="col-md-8">
                                <Field
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  type="email"
                                  name="email"
                                  className="form-control rounded-0"
                                />
                                <div className="error_message">
                                  <ErrorMessage name="email" />
                                </div>
                              </div>
                            </div>
                          </Form.Group>
                        </div>
                        <div className="row mt-3">
                          <Form.Group controlId="formName">
                            <div className="row">
                              <div className="col-md-4">
                                <Form.Label className="registration_label">
                                  Mobile No:
                                </Form.Label>
                              </div>

                              <div className="col-md-8">
                                <Field
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  type="text"
                                  name="contact_number"
                                  className="form-control rounded-0"
                                />
                                <div className="error_message">
                                  <ErrorMessage name="contact_number" />
                                </div>
                              </div>
                            </div>
                          </Form.Group>
                        </div>

                        <div className="row mt-3">
                          <Form.Group controlId="formName">
                            <div className="row">
                              <div className="col-md-4">
                                <Form.Label className="registration_label">
                                  Address:
                                </Form.Label>
                              </div>

                              <div className="col-md-8">
                                <Field
                                  as="textarea"
                                  name="address"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  style={{ height: "100px" }}
                                  className="form-control rounded-0"
                                />
                                <div className="error_message">
                                  <ErrorMessage name="address" />
                                </div>
                              </div>
                            </div>
                          </Form.Group>
                        </div>

                        <div className="row mt-3">
                          <Form.Group controlId="formGST">
                            <div className="row">
                              <div className="col-md-4">
                                <Form.Label className="registration_label">
                                  GST Number:
                                </Form.Label>
                              </div>

                              <div className="col-md-8">
                                <Field
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  type="text"
                                  name="gst_number"
                                  className="form-control rounded-0"
                                />
                                <div className="error_message">
                                  <ErrorMessage name="gst_number" />
                                </div>
                              </div>
                            </div>
                          </Form.Group>
                        </div>

                        <div className="row mt-3">
                          <Form.Group controlId="formCity">
                            <div className="row">
                              <div className="col-md-4">
                                <Form.Label className="registration_label">
                                  City:
                                </Form.Label>
                              </div>

                              <div className="col-md-8">
                                <Field
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  type="text"
                                  name="city"
                                  className="form-control rounded-0"
                                />
                                <div className="error_message">
                                  <ErrorMessage name="city" />
                                </div>
                              </div>
                            </div>
                          </Form.Group>
                        </div>
                        <div className="row mt-3">
                          <Form.Group controlId="formCity">
                            <div className="row">
                              <div className="col-md-4">
                                <Form.Label className="pincode_label">
                                  Pincode:
                                </Form.Label>
                              </div>

                              <div className="col-md-8">
                                <Field
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                  type="text"
                                  name="pincode"
                                  className="form-control rounded-0"
                                />
                                {/* <div className="error_message">
                                  <ErrorMessage name="pincode" />
                                </div> */}
                              </div>
                            </div>
                          </Form.Group>
                        </div>

                        <div className="row mt-3">
                          <Form.Group controlId="formState">
                            <div className="row">
                              <div className="col-md-4">
                                <Form.Label className="registration_label">
                                  State:
                                </Form.Label>
                              </div>

                              <div className="col-md-8">
                                <Field
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  type="text"
                                  name="state"
                                  className="form-control rounded-0"
                                />
                                <div className="error_message">
                                  <ErrorMessage name="state" />
                                </div>
                              </div>
                            </div>
                          </Form.Group>
                        </div>
                        <div className="row mt-3">
                          <Form.Group controlId="formRadio">
                            <div className="row">
                              <div className="col-md-8">
                                <Form.Label className="Radio_label">
                                  Are you an existing customer with Shanparts:
                                </Form.Label>
                              </div>
                              <div className="col-md-4">
                                <div role="group" aria-labelledby="my-radio-group">
                                  <label className="me-3">
                                    <Field
                                     onChange={handleChange}
                                     onBlur={handleBlur}
                                     type="radio" className="me-1" name="picked" value="1" />
                                    Yes
                                  </label>
                                  <label>
                                    <Field 
                                     onChange={handleChange}
                                     onBlur={handleBlur}
                                    type="radio" className="me-1" name="picked" value="0" />
                                    No
                                  </label>

                                </div>
                              </div>

                            </div>
                          </Form.Group>
                        </div>
                        <div className="row mt-3">
                          <Form.Group controlId="formRadio">
                            <div className="row">
                              <div className="col-md-4">
                                <Form.Label className="dropdown_label">
                                  You want to buy parts for:
                                </Form.Label>
                              </div>
                              <div className="col-md-8">
                                <Field as="select" name="buyfor"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                >
                                  <option value="Select">Select</option>
                                  <option value="My/Our own machines">My/Our own machines</option>
                                  <option value="Further reselling">Further reselling</option>
                                </Field>
                              </div>

                            </div>
                          </Form.Group>
                        </div>
                        <div className="row mt-2  d-flex justify-content-center text-center">
                          <div className="col-12">
                            <p
                              className="registration_note mt-2"
                              style={{ fontSize: "14px" }}
                            >
                              By registering with us you agree to our terms and
                              conditions
                            </p>
                          </div>

                          <div className="d-flex justify-content-center">
                            <div className="m-2">
                              <Link href="/login" style={{ color: "black" }}>
                                <button
                                  className={`btn bold text-uppercase border_btn`}
                                >
                                  Back
                                </button>
                              </Link>
                            </div>
                            <div className="m-2">
                              <button
                                type="submit"
                                className="btn btn-warning text-uppercase bold yellow_btn"
                              
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FormikForm>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default SpRegister;
