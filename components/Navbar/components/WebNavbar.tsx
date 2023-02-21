import useNavbar from "../../../hooks/home_page_hooks/navbar_hook";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../../public/assets/images/logo.png"
import logo1 from '../../../public/assets/images/sml.gif';
import MobileNavbar from "../components/mobile/mobileNavbar";
import { useRouter } from 'next/router';
import { LogoutUserApi } from "../../../store/slices/auth_slice/login-slice";
import { navbarData } from "../../../datasets/Digitalshelf_dataset/navbar";
import { useProductListing } from "../../../hooks/product_listing_page_hooks/product_listing_hook";
import useWishlist from "../../../hooks/general_hooks/wishlist_hook";

const WebNavbar = ({ navMenuclick }: any) => {

  const dispatch = useDispatch();
  
  const { navData, cartCount } = useNavbar();
  // const { wishlistCount } = useWishlist();
  const [scrolls, setScrolls] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [isId, setId] = useState();
  const { wishlistCount } = useWishlist();
  const { search, setSearch, globalSearch, setGlobalSearch, handleSearch } = useProductListing();

  console.log(globalSearch,"globalSearch")
    let scroll = 0;
    const handleHover = (id: any) => {
      setId(id);
      setIsShown(true);
    };
    const handleLeave = (id: any) => {
      setId(id);
      setIsShown(false);
    };
  // const handleMouseEnter = () => {
  //   setClicks(false);
  //   setmainLink(true);
  // };
  const handleLogout = (e: any) => {
    dispatch(LogoutUserApi());
    localStorage.removeItem("isLoggedIn");
    // window.location.href = "/";
    
  };
  useEffect(() => {
    window.onscroll = () => {
      console.log(scroll,"scrollss")
        setScrolls(true)
        if(scroll<15) {
          setScrolls(false)
        }
        scroll = window.scrollY
       
    }
  }, [])

  let isLoggedIn:any;
  if (typeof window !== "undefined") {
    isLoggedIn = localStorage.getItem("isLoggedIn");
  }


  const router = useRouter();

  console.log(navData, "navData");
  return (
    <>
      <header className="header">
        <div className="header-top">
      {isLoggedIn?  <div className="container">
            <div className="header-right">
                <Link href="/myOrder">
              <a  className="d-lg-show">
              My Order
              </a>
              </Link>
              <Link href="/profile">
              <a  className="d-lg-show">
                My Account
              </a>
              </Link>
              <Link href="">
              <a 
              onClick={handleLogout}
                className="d-lg-show login sign-in"
              >
                <i className="w-icon-account"></i>Logout
              </a>
              </Link>
            </div>
          </div>:<div className="container">
            <div className="header-right">
              <Link href="/login">
              <a 
                className="d-lg-show login sign-in"
              >
                <i className="w-icon-account"></i>Sign In
              </a>
              </Link>
              <span className="delimiter d-lg-show">/</span>
              <Link href="/register">
              <a
                className="ml-0 ls-50 d-lg-show login register"
              >
                Register
              </a>
              </Link>
            </div>
          </div>}
        </div>

        <div className="header-middle">
          <div className="container">
            <div className="header-left mr-md-4">
            <Link href="#"><a className="mobile-menu-toggle w-icon-hamburger"></a></Link>
            <Link href="/"><a className="logo ml-lg-0">
                <Image
                  src="/assets/images/ecommerce_theme/logo.png"
                  alt="logo"
                  width={240}
                  height={55}
                />
              </a>
              </Link>
              <form
                method="get"
                action="#"
                className="input-wrapper header-search hs-expanded hs-round bg-white br-xs d-md-flex"
              >
                <input
                  type="text"
                  className="form-control bg-white"
                  name="search"
                  id="search"
                  value={globalSearch}
                  onChange={(e:any)=> setGlobalSearch(e.target.value)}
                  placeholder="Search in..."
                  required
                />
                <button className="btn btn-search"  onClick={handleSearch}>
                  <i className="w-icon-search"></i>
                </button>
              </form>
            </div>
            <div className="header-right ml-4">
              <div className="dropdown cart-dropdown cart-offcanvas text-white" style={{marginRight:'30px'}}>
                <div className="cart-overlay"></div>
                <Link href="/wishlist">
                <a  className=" cart-toggle label-down link">
                  <i className="w-icon-heart">
                    <span className="cart-count text-white">{wishlistCount}</span>
                  </i>
                  <span className="wishlist-label d-lg-show">Wishlist</span>
                </a>
                </Link>
              </div>
              <div className="dropdown cart-dropdown cart-offcanvas mr-0 mr-lg-2 text-white">
                <div className="cart-overlay"></div>
                <Link href="/cart">
                <a  className="cart-toggle label-down link">
                  <i className="w-icon-cart">
                    <span className="cart-count text-white">{cartCount}</span>
                  </i>
                  <span className="cart-label">Cart</span>
                </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="header-bottom sticky-content fix-top sticky-header has-dropdown">
          <div className="container">
            <div className="inner-wrap">
              <div className="header-left">
                <div className="dropdown category-dropdown">
                <Link href="#">
                  <a
                    className="category-toggle text-white bg-primary text-capitalize"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                    data-display="static"
                    title="Browse Categories"
                  >
                    <i className="w-icon-category"></i>
                    <span>Browse Categories</span>
                  </a>
                  </Link>

                  <div className="dropdown-box text-default">
                    <ul className="menu vertical-menu category-menu">
                      {navData.map((items: any) => (
                        <li>
                          <a>
                            <i className="w-icon-tshirt2"></i>
                            {items.name}
                          </a>
                          <ul className="megamenu">
                            {items.values.map((items_val: any,i:any) => (
                              <li key={i}>
                              <Link href={items_val.url}><a><h4 className="menu-title">{items_val.name}</h4></a></Link>  
                                <hr className="divider" />
                                <ul>
                                  {items_val.values.map((new_val: any) => (
                                    <li>
                                     <Link href={new_val.url}><a>{new_val.name}</a></Link>  
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            ))}
                      
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <nav className="main-nav">
                  <ul className="menu active-underline">
                    {navData.map((items: any, i: any) => (
                      <li
                        className={`${isId === i && isShown ? "active" : ""}`}
                        onMouseEnter={(i) => handleHover(i)}
                        onMouseLeave={(i) => handleLeave(i)}
                        key={i}
                      >
                      <a>{items.name}</a>  
                        <ul className="megamenu">
                          {items.values.map((items_val: any,index:any) => (
                            <li key={index}>
                            <Link href={items_val.url}><a><h4 className="menu-title">{items_val.name}</h4></a></Link>  
                              <ul>
                                {items_val.values.map((new_val: any,i:any) => (
                                  <li className="menu_list" key={i}>
                                    <Link href={new_val.url}>
                                    <a>{new_val.name}</a></Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                     
                        </ul>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              {/* <div className="header-right">
                            <a href="#" className="d-xl-show"><i className="w-icon-map-marker mr-1 mt-0"></i>Track Order</a>
                            <a href="#"><i className="w-icon-sale"></i>Daily Deals</a>
                        </div> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default WebNavbar;
