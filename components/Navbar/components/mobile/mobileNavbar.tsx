import Link from "next/link";
import React from "react";
import { slide as Menu } from "react-burger-menu";
import useNavbar from "../../../../hooks/home_page_hooks/navbar_hook";
import Accordion from "react-bootstrap/Accordion";
import styled from '../../../../styles/Mobile.module.css';
import { useCallback, useEffect, useState } from "react";

const MobileNavbar = ({navMenuclick}:any) => {
  const { navData } = useNavbar();
  const [arrowIndex, setarrowIndex] = useState(null);
  const [indexVal, setindexVal] = useState(null)
  const setmainLink = () => {
    let element: HTMLElement = document.getElementsByClassName(
      "bm-overlay"
    )[0] as HTMLElement;
    element.click();
  };
  // let isDealer;
  // if (typeof window !== "undefined") {
  //   isDealer = localStorage.getItem("isDealer");
  // }
  const mobileHandle = (i:any) =>{
    // setmobileClicks(!mobileClicks);
    if (indexVal === i) {
      return setindexVal(null);
    }
    setindexVal(i)
    return false;
   
  }

  const arrowHandle = (index:any) =>{
    // setmobileClicks(!mobileClicks);
    if (arrowIndex === index) {
      return setarrowIndex(null);
    }
    setarrowIndex(index)
    return false;
   
  }
  console.log(indexVal,"indexVal");
  return (
    <>
    <div className="mobile-menu-wrapper">
    <div className="mobile-menu-overlay"></div>
   <Link href="#"><a className="mobile-menu-close" onClick={navMenuclick}><i className="close-icon"></i></a></Link>
    <div className="mobile-menu-container scrollable">
        <form action="#" method="get" className="input-wrapper">
            <input type="text" className="form-control" name="search" autocomplete="off" placeholder="Search"
                required />
            <button className="btn btn-search" type="submit">
                <i className="w-icon-search"></i>
            </button>
        </form>
    
        <div className="tab">
            <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                    <a href="#categories" className={`nav-link active ${styled.categories_tab}`}>Categories</a>
                </li>     
            </ul>
        </div>
        <div className="tab-content">      
            <div className="tab-pane active" id="categories">
         {navData.map((navbardata:any, i:any)=>( 
           <ul className="mobile-menu" key={i}>
                    <li>
                        <a href="#">
                        <i className="fa fa-anchor" aria-hidden="true"></i>{navbardata.name}
                            <span className="toggle-btn" onClick={()=>mobileHandle(i)}></span>
                        </a>
                        <ul style={{display:indexVal === i ?'block':'none'}}> 
                        {navbardata?.values?.map((navbarVal:any,index:any)=>(           
                        <li key={index}>
                           
                          <Link href={navbarVal.url}><a>{navbarVal.name}<span className="toggle-btn" onClick={()=>arrowHandle(index)}></span></a></Link>
                                <ul style={{display:arrowIndex === index ?'block':'none'}}>
                                 {navbarVal?.values?.map((navbarlist:any,i:any)=>(
                                 <li key={i}><Link href={navbarlist.url}>{navbarlist.name}</Link></li>))}
                                </ul>
                            </li>))}
                        </ul>
                    </li>           
                    {/* <li>
                        <a href="shop-banner-sidebar.html"
                            className="font-weight-bold text-primary text-uppercase ls-25">
                            View All Categories<i className="w-icon-angle-right"></i>
                        </a>
                    </li> */}
                </ul>)) }
            </div>
        </div>
    </div>
</div>
</>
  );
};

export default MobileNavbar;
