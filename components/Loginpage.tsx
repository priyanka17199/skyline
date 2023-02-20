import React from 'react'
import { useEffect, useState } from "react";
import { LoginValidation } from "../validation/loginValidation";
import {
  Formik,
  Form as FormikForm,
  ErrorMessage,
  useFormikContext,
} from "formik";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import HomeCategories from "../components/HomeCategories/HomeCategories";
import logo from "../public/assets/images/logo.png";
import { LoginUserApi } from "../store/slices/auth_slice/login-slice";
import Link from "next/link";
import Image from "next/image";
import { login_state } from "../store/slices/auth_slice/login-slice";
// import { RootState } from "../store/root_reducer";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import getOtpFetchApi from "../services/api/auth_api/get_otp_api";
import Header from "../components/Head/Head";
import ToastNotification from "./ToastNotification";

const Googlelogin = dynamic(() => import("../components/Googlelogin"), {
  ssr: false,
});

const Loginpage = () => {

    const dispatch = useDispatch();
    const router = useRouter();
  
    let user = false;
    let getToken;
  
    const [message, setMessage] = useState("");
    const [loginToken, setloginToken] = useState(null);
    var login = useSelector(login_state);
    console.log("Login file", login);
    const [newValue, setnewValue] = useState<any>("");
    const [alerts, setAlerts] = useState(false);
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [loginAlert, setloginAlert] = useState(false);

    const [err, setErr] = useState(false);
    const [error, setError] = useState(false);
    const [showToast, setshowToast] = useState(false);
    const [showErrorToast, setshowErrorToast] = useState(false);
    const handlesubmit = async (values: any) => {
      // let isVisitor = localStorage.getItem("isLoggedIn");
      // console.log("login check", isVisitor)
      await dispatch(LoginUserApi(values, false));
      if(login.error === "Invalid login credentials") {
        setloginAlert(true);
        setTimeout(() => {
          setloginAlert(false);
        }, 5000);
      
       
      }
      
      
      // if(isVisitor === null)
      // {
      //   console.log("login check", true)
      // }
      // else
      // {
      //   await dispatch(LoginUserApi(values, false,false));
      // }
    };
    // to get onchange values of formik
  
    const FormObserver: React.FC = () => {
      const { values } = useFormikContext();
      useEffect(() => {
        setnewValue(values);
      }, [values]);
      return null;
    };
  
    const emailval = newValue.email;
  
    const otpSubmit = async (e: any) => {
      e.preventDefault();
      await getOtpFetchApi(emailval).then((res: any) => {
        setMessage(res.data.message.msg);
      });
      setTimeout(() => {
        setIsAlertVisible(false);
      }, 5000);
    };
  
    useEffect(() => {
      if (message === "success" || message === "error") {
        setIsAlertVisible(true);
      }
    }, [message]);
  
    // console.log(alerts);
    // if (typeof window !== 'undefined') {
    //   // Perform localStorage action
    //   const item = localStorage.getItem('key')
    // }
  
    // useEffect(()=>
    // {
    //   getToken = localStorage.getItem("token");
    // },[])
  
    // if (getToken) {
    //   user = true;
    // }
  
    // if(user)
    // {
    //   let tokenData = login.user.access_token;
    //   tokenData = tokenData.split(" ");
    //   console.log("login check", tokenData[1]);
    // }
  
    // let tokenData = login.user.access_token;
    // tokenData = tokenData.split(" ");
    // console.log("login check", tokenData[1]);
    // useEffect(() => {
    // let tokenData = login.user.access_token;
    // tokenData = tokenData.split(" ");
    // console.log("login check", tokenData[1]);
    // setloginToken(login.user);
    // router.push("/");
    // localStorage.setItem("token",tokenData[1]);
    // }, [login]);
  
    // console.log("login token here",typeof loginToken);
    // if(typeof window !== 'undefined')
    // {
    //   if(!loginToken)
    //   {
    //     router.push("/");
    //   }
  
    useEffect(() => {
      console.log("login jsx file",login)
      if(login.user === "LoggedIn") {
        setshowToast(true)
        setError(false);
          router.push("/");
      }
      if(login.error === "Invalid login credentials") {
        setshowErrorToast(true)
        setErr(!err)
      }
      // if (Object.keys(login.user).length !== 0) {
      //   // console.log("login check",loginToken)
      // }
    }, [login]);
  
    console.log("login token", loginAlert);
    // const getToken = localStorage.getItem("token");
    // console.log("Login Token",getToken);



  return (
    <>
     <ToastNotification
      setShow={setshowToast}
      show={showToast}
      content="Your are Sucessfully Login"
      // error={error}
    />
   
      <div className="container">
        <div className="logo mt-4">
          <Link href="/" className="navbar-brand">
          <a href="/"> 
          <Image
                  src="/assets/images/ecommerce_theme/new_logo.png"
                  alt="logo"
                  width={260}
                  height={55}
                />
             </a> 
          </Link>
          {/* <a href="/" className="navbar-brand">
            <Image src={logo} alt="Logo-img" />
          </a> */}
        </div>

        <div>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={LoginValidation}
            onSubmit={(values) => {
              handlesubmit(values);
            }}
          >
            {({ handleChange, handleBlur }) => (
              <FormikForm>
                <div className="login-form-wrapper" style={{marginTop:"50px"}}>
                  <div className="mainFields-wrapper">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-6" style={{marginLeft:"-6px"}}>
                          <h2 className="login_heading mt-3">
                            Login
                            {/* {loginToken} */}
                          </h2>
                          <Form.Group controlId="formName">
                            <div className="row mt-3">
                              <div className="col-md-4">
                                <Form.Label className="login-label">
                                  Mobile No / Email ID:
                                </Form.Label>
                              </div>

                              <div className="col-md-8">
                                <Form.Control
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  type="text"
                                  name="email"
                                  className="login_inputs"
                                />
                                <div className="row">
                                  <div className="col-8">
                                    <div className="error_message">
                                      <ErrorMessage name="email" />
                                    </div>
                                  </div>
                                  <div className="col-4 text-end">
                                    <div className="get-otp">
                                      <Link
                                        className=" text-end d-block"
                                        href="#"
                                        style={{ fontSize: "0.95rem" }}
                                      >
                                        <a
                                          className="text-underline blue"
                                          onClick={(e) => otpSubmit(e)}
                                        >
                                          Get OTP
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                              
                                </div>
                              </div>
                            </div>
                          </Form.Group>

                          <Form.Group controlId="formPassword">
                            <div className="row mt-3">
                              <div className="col-md-4">
                                <Form.Label className="login-label">
                                  Password / OTP:
                                </Form.Label>
                              </div>

                              <div className="col-md-8">
                                <Form.Control
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  type="password"
                                  name="password"
                                  className="login_inputs"
                                />
                                <div className="row">
                                  <div className="col-6">
                                    <div className="error_message">
                                      <ErrorMessage name="password" />
                                    </div>
                                    { loginAlert && <div
                                      className="alert alert-danger login_alertbox"
                                      role="alert"
                                    >
                                      {login.error === "Invalid login credentials"
                                        ? "Invalid login credentials"
                                        : ""}
                                    </div>} 
                                  </div>
                                  <div className="col-6 text-end">
                                    <div className="forgot-pwd">
                                      <Link
                                        className=" text-end d-block"
                                        href="/forgot_password"
                                        style={{ fontSize: "0.95rem" }}
                                      >
                                        <a className="text-underline blue">
                                          Forgot Password ?
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Form.Group>
                       
                          <div className={`${isAlertVisible===true ? 'login_btn':""} mt-2 login_submitbtn`}>
                            <button type="submit" className={` btn btn-warning yellow_btn`}>
                              Submit
                            </button>
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
                                        ? "OTP send sucessfully on registered email"
                                        : "Please enter valid or registered email"}
                                    </div>
                                  )}                 
                          </div>
                        </div>

                        <div className="col-lg-6 google_btn">
                          <div className="row">
                            <div className="col-12 text-lg-start text-center">
                              <div className="login-with-google mt-2">
                                <Googlelogin />
                                {/* </button> */}
                              </div>
                            </div>

                            <div className={`col-12 text-lg-start register_account`}>
                              <div
                                className="register ms-2"
                                style={{ marginTop: "33px" }}
                              >
                                <span className="not_an_account">
                                  Not an account?{" "}
                                  <Link
                                    className="text-underline"
                                    href="/register"
                                  >
                                    <a className="text-underline blue ">
                                      Register
                                    </a>
                                  </Link>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <FormObserver />
              </FormikForm>
            )}
          </Formik>
        </div>
        <hr></hr>
      </div>
    </>
  )
}

export default Loginpage