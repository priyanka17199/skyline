import React from 'react'
import { ForgotValidation } from "../validation/forgotValidation";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import logo from "../public/assets/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import resetpassword_link from "../services/api/auth_api/reset_password_link_api";
import Header from "../components/Head/Head";
import { useState, useEffect } from "react";

interface FormValues {
  email: any
}

const Forgotpasswordpage = () => {

    const initialValues: FormValues = {
        email: "",
      };
      const [message, setMessage] = useState("");
      const [isAlertVisible, setIsAlertVisible] = useState(false);
      useEffect(() => {
        if (message === "success" || message === "error") {
          setIsAlertVisible(true);
        }
      }, [message]);
  return (
    <>
        <Header/>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="logo-img">
              <Link href="/">
                <a> 
                <Image
                  src="/assets/images/ecommerce_theme/new_logo.png"
                  alt="logo"
                  width={260}
                  height={45}
                />
                </a></Link>
            </div>
          </div>
        </div>
        <div className={`col-lg-6 col-sm-9 col-12 mx-auto form_wrap`}>
          <div className="page_heading text-center">
            <h4 className="forgot_passwordh4">forgot your password</h4>
          </div>
          <p className="mt-4 forgotpassword_p">
            Please enter your email address associated with your account and we
            will email you instructions to reset your password.
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={ForgotValidation}
            onSubmit={(values: any,action: any) => {
            resetpassword_link(values).then((res: any) => {
              setMessage(res.data.message.msg);
            });
            setTimeout(() => {
             setIsAlertVisible(false);
             }, 5000);
             console.log(values);
             action.resetForm();
            }}
          >
            {({ handleChange, handleBlur }) => (
              <FormikForm className="">
                <div className=" text-center mt-2">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3 ">
                        <div className="label text-end">
                          <label htmlFor="" className="forgotpassword_label">
                            Email ID:
                          </label>
                        </div>
                      </div>
                      <div className="col-md-9">
                        <div className="email_block">
                          <Field
                            type="email"
                            className="email_field"
                            name="email"
                            onChange={handleChange}
                          />
                          <br />
                          <div className="error_message">
                            <ErrorMessage name="email" />
                          </div>
                        </div>
                        {isAlertVisible && (
                                    <div
                                      className={`alert ${
                                        message === "success"
                                          ? "alert-success"
                                          : "alert-danger"
                                      } otp_alertbox`}
                                      role="alert"
                                    >
                                      {message === "success"
                                        ? "Link is send sucessfully on registered email"
                                        : "Please enter valid or registered email"}
                                    </div>
                                  )}
                      </div>
                    
                    </div>
                     
                    <div className={`custom_btn mt-4`}>
                      <Link href="/login" style={{color:'#000000'}}>
                      <button type="button" className={`btn border_btn`}>
                        Back
                      </button>
                      </Link>
                      <button type="submit" className={`btn btn-warning yellow_btn`}>
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </div>
              </FormikForm>
            )}
          </Formik>
        </div>
      </div>
    </>
  )
}

export default Forgotpasswordpage