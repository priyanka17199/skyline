import React, { useEffect, useState } from "react";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import styles from "../styles/Login.module.css";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { LoginUserApi } from "../store/slices/auth_slice/login-slice";

function Googlelogin() {
const router = useRouter();
const REDIRECT_URI = "https://localhost:3000";
const dispatch = useDispatch();
 let [access_token, setAccesstoken] = useState<any>('');
 useEffect(()=>{
  if(access_token) {
    // router.push("/")
    dispatch(LoginUserApi(access_token, true))
  };
 },[access_token])

//  console.log("",access_token)

//  console.log("google token",acess_token);
  return (
    <>
      <LoginSocialGoogle
        client_id={
          "565248885864-dlja7r15ftab00nmrdvs0lqmislplhvq.apps.googleusercontent.com"
        }
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        redirect_uri="http://localhost:3000/login"
        typeResponse= 'accessToken'
        onResolve={({ provider, data }) => {
          console.log("google token",data);
          setAccesstoken(data)
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <GoogleLoginButton  className={styles.google_button}  />
      </LoginSocialGoogle>
    </>
  );
}

export default Googlelogin;
