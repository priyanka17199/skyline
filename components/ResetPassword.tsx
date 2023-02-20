import React from "react";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import Changepasswordstyle from "../styles/Change_password.module.css";
import Resetpassword_Validation from "../validation/reset_password_validation";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { ResetpasswordApi } from "../store/slices/auth_slice/forgot_password_slice";
import Header from "../components/Head/Head";
import { RootState } from "../store/root_reducer";
interface FormValues {
  email: any;
  newPassword: any;
  confirmPassword: any;
}

const ResetPassword = () => {
  const dispatch = useDispatch<any>();
  const passwordchange_val: any = useSelector(
    (state: RootState) => state.Resetpassword.error
  );
  const router = useRouter();
  const initialValues: FormValues = {
    email: "",
    newPassword: "",
    confirmPassword: "",
  };

  const handlesubmit = async (values: any, action: any) => {
    await dispatch(ResetpasswordApi(values));
    action.resetForm();
  };
  console.log(passwordchange_val);
  useEffect(() => {
    passwordchange_val === "success"
      ? router.push("/login")
      : router.push("/reset_password");
  }, [passwordchange_val]);

  return (
    <>
      <Header />
      <div className={`container ${Changepasswordstyle.change_pwd}`}>
        <div className="page_heading text-center">
          <h4 className={`text-uppercase ${Changepasswordstyle.change_pwdh4}`}>
            Reset Your Password
          </h4>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={Resetpassword_Validation}
          onSubmit={(values, action) => handlesubmit(values, action)}
        >
          {({ handleChange }) => (
            <FormikForm className="">
              <div className=" text-center mt-4">
                <div className="container">
                  <div className={`row mb-4 ${Changepasswordstyle.pwd_height}`}>
                    <div className="col-md-3 ">
                      <div className={`${Changepasswordstyle.label} text-end`}>
                        <label htmlFor="" className="">
                          Email ID:
                        </label>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className={Changepasswordstyle.password_block}>
                        <Field
                          type="email"
                          className={Changepasswordstyle.password_field}
                          name="email"
                          onChange={handleChange}
                        />
                        <br />
                        <div className={Changepasswordstyle.error_message}>
                          <ErrorMessage name="email" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`row mb-4 ${Changepasswordstyle.pwd_height}`}>
                    <div className="col-md-3 ">
                      <div className={`text-end ${Changepasswordstyle.label}`}>
                        <label htmlFor="" className="">
                          New Password:
                        </label>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className={Changepasswordstyle.password_block}>
                        <Field
                          type="password"
                          className={Changepasswordstyle.password_field}
                          name="newPassword"
                          onChange={handleChange}
                        />
                        <br />
                        <div className={Changepasswordstyle.error_message}>
                          <ErrorMessage name="newPassword" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`row mb-4 ${Changepasswordstyle.pwd_height}`}>
                    <div className="col-md-3 ">
                      <div className={`text-end ${Changepasswordstyle.label}`}>
                        <label htmlFor="" className="">
                          Confirm Password:
                        </label>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className={Changepasswordstyle.password_block}>
                        <Field
                          type="password"
                          className={Changepasswordstyle.password_field}
                          name="confirmPassword"
                          onChange={handleChange}
                        />
                        <br />
                        <div className={Changepasswordstyle.error_message}>
                          <ErrorMessage name="confirmPassword" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`${Changepasswordstyle.custom_btn} mt-4`}>
                    <Link href="/login" style={{ color: "#000000" }}>
                      <button
                        type="button"
                        className={`btn ${Changepasswordstyle.btn_back}`}
                        style={{ fontWeight: "600" }}
                      >
                        BACK
                      </button>
                    </Link>
                    <button
                      type="submit"
                      className={`btn btn-warning text-uppercase bold ${Changepasswordstyle.changepwd_btn}`}
                      style={{ fontWeight: "600" }}
                    >
                      RESET
                    </button>
                  </div>
                </div>
              </div>
            </FormikForm>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ResetPassword;
