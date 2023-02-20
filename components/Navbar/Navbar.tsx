import styles from "../../styles/Navbar.module.css";
import WebNavbar from "../Navbar/components/WebNavbar";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import logoimg from "../../images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, FormControl } from "react-bootstrap";
import { LogoutApi } from "../../store/slices/auth_slice/logout_slice";
import useNavbar from "../../hooks/home_page_hooks/navbar_hook";
import scottlogo from "../../public/scott.png";
import PreHeaderStrip from "../NoCost/PreHeaderStrip";
import { useCallback, useEffect, useState } from "react";
import MobileNavbar from "./components/mobile/mobileNavbar";
import { useProductListing } from "../../hooks/product_listing_page_hooks/product_listing_hook";
import { LogoutUserApi } from "../../store/slices/auth_slice/login-slice";

const NavBar = () => {
  const [clicks, setClicks] = useState(false);

 

  // const dispatch = useDispatch();
  // const router = useRouter();
  // const { cartCount } = useNavbar();
  // const handleLogout = (e: any) => {
  //   dispatch(LogoutUserApi());
  //   localStorage.removeItem("isLoggedIn");
  //   localStorage.removeItem("isDealer");
  //   localStorage.removeItem("guest");
  //   localStorage.removeItem("guestId");
  //   localStorage.removeItem("guestLogin");
  //   router.push("/");
  // };

  // let isDealer;
  // if (typeof window !== "undefined") {
  //   isDealer = localStorage.getItem("isDealer");
  // }

  // console.log(isDealer);
  // console.log(typeof isDealer);
  // console.log("cart count ", cartCount);

  // const openSearch = (e: any) => {
  //   // e.perventDefault();
  //   setSearch(!search);
  // };
  // console.log(isDealer);
  // console.log(typeof isDealer);
  // console.log("cart count ", cartCount);

  // const useMediaQuery = (width: any) => {
  //   const [targetReached, setTargetReached] = useState(true);

  //   const updateTarget = useCallback((e: any) => {
  //     if (e.matches) {
  //       setTargetReached(false);
  //     } else {
  //       setTargetReached(true);
  //     }
  //   }, []);

  //   useEffect(() => {
  //     const media = window.matchMedia(`(max-width: ${width}px)`);
  //     media.addListener(updateTarget);

  //     // Check on mount (callback is not called until a change occurs)
  //     if (media.matches) {
  //       setTargetReached(false);
  //     }

  //     return () => media.removeListener(updateTarget);
  //   }, []);

  //   return targetReached;
  // };
  // const isBreakpoint = useMediaQuery(991);

  // ${!isBreakpoint ? "d-none space-between": "d-block"}

  const navMenuclick = (e:any) => {
    e.preventDefault()
  setClicks(!clicks);
  }
  return (
   <>
   <div className={clicks?"mmenu-active":""}>
   <WebNavbar clicks={clicks} setClicks={setClicks} navMenuclick={navMenuclick} />
   {/* <MobileNavbar navMenuclick={navMenuclick}/> */}
   </div>
   </>
  );
};

// export async function getServerSideProps() {
//   console.log("test");
//   const res = await fetch(
//     `http://scott-sports.8848digitalerp.com/api/method/sportnetwork.api.map.version_mapper?version=v1&method=get&entity=mega_menu`
//   );

//   const data = await res.json();
//   console.log(data);
//   const navData = data.message.data;
//   console.log(data.message.data);
//   return { props: { navData } };
// }

export default NavBar;
