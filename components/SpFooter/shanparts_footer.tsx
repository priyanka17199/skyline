import React from 'react'
import useNavbar from '../../hooks/home_page_hooks/navbar_hook';
import Image from "next/image";
import logo from "../../public/assets/images/logo.png"
import Link from "next/link";
import {navbarData} from "../../datasets/Digitalshelf_dataset/navbar"
const ShanpartsFooter = () => {
    const { navData } = useNavbar();
  return (
    <>
      {/* <h1 className='mb-5'>Footer page</h1> */}
      <footer className="footer footer-dark" >
            <div className="container">
                <div className="footer-newsletter">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-3 col-lg-2">
                            <Link href="#"><a  className="logo-footer">
                                <Image src="/assets/images/ecommerce_theme/logo.png" alt="logo-footer" 
                                  width={240}
                                  height={55}/>
                            </a></Link>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="icon-box icon-box-side text-dark">
                                <div className="icon-box-icon d-inline-flex">
                                    <i className="w-icon-envelop3 text-white"></i>
                                </div>
                                <div className="icon-box-content">
                                    <h4 className="icon-box-title text-uppercase font-weight-bold text-white">Subscribe To Our
                                        Newsletter</h4>
                                    <p className="text-light">Get all the latest information on Events, Sales and Offers.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-9 mt-4 mt-lg-0 ">
                            <form action="#" method="get"
                                className="input-wrapper input-wrapper-inline input-wrapper-rounded">
                                <input type="email" className="form-control mr-2 bg-white text-default" name="email"
                                    id="email" placeholder="Your E-mail Address" required/>
                                <button className="btn btn-primary btn-rounded" type="submit">Subscribe<i
                                        className="w-icon-long-arrow-right"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer-top">
                    <div className="row mt-1">
                        <div className="col-lg-5 col-sm-6">
                            <div className="widget widget-about mt-0">
                                <div className="widget-body">
                                    <p className="widget-about-title lh-1 font-size-md ls-normal mb-3">Got Question? Call us 24/7</p>
                                    <Link href="tel:18005707777"><a  className="widget-about-call mb-4">1-800-570-7777</a></Link>
                                    <p className="widget-about-desc ls-normal mb-3">Facilisi nullam vehicula ipsum a arcu cursus vitae
                                        congue. Pretium quam,
                                        elit ut aliquam purus sit. Porttitor rhoncus dolor purus non enim.
                                    </p>
                                
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <div className="widget">
                                <h3 className="widget-title">Company</h3>
                                <ul className="widget-body">
                                    <li><Link href="#"><a>About Us</a></Link></li>
                                    <li><Link href="#"><a>Contact Us</a></Link></li>
                                    <li><Link href="#"><a>Order History</a></Link></li>
                                </ul>
                            </div>
                            <label className="label-social d-block text-light">Social Media</label>
                                    <div className="social-icons social-icons-colored">
                                    <Link href="#"><a  className="social-icon social-facebook w-icon-facebook"></a></Link>
                                    <Link href="#"><a  className="social-icon social-twitter w-icon-twitter"></a></Link>
                                    <Link href="#"><a  className="social-icon social-instagram w-icon-instagram"></a></Link>
                                    <Link href="#"><a  className="social-icon social-youtube w-icon-youtube"></a></Link>
                                    </div>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <div className="widget">
                                <h4 className="widget-title">My Account</h4>
                                <ul className="widget-body">
                                    <li><Link href="#"><a href="cart.html">View Cart</a></Link></li>
                                    <li><Link href="#"><a href="login.html">Sign In</a></Link></li>
                                    <li><Link href="#"><a href="#">Privacy Policy</a></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <div className="widget">
                                <h4 className="widget-title">Customer Service</h4>
                                <ul className="widget-body">
                                    <li><Link href="#"><a>Payment Methods</a></Link></li>
                                    <li><Link href="#"><a>Product Returns</a></Link></li>
                                    <li><Link href="#"><a>Term and Conditions</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-middle">
                    <div className="widget widget-category">
                    {navData.map((items:any,i:any)=>(  
                        items.values.map((items_name:any)=> ( 
                    <div className="category-box" key={i}>
                            <h6 className="category-name">{items_name.name}:</h6>
                            {items_name.values.map((names:any,index:any)=>(
                             <Link href={names.url}><a key={index}>{names.name}</a></Link>
                              ))}  
                        </div>
                    ))  ))}
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-left">
                        <p className="copyright">Copyright © 2021 DigitalShelf. All Rights Reserved.</p>
                    </div>
                    <div className="footer-right">
                        <span className="payment-label mr-lg-8">We're using safe payment for</span>
                        <figure className="payment">
                            <Image src="/assets/images/payment.png" alt="payment" width={159} height={25} />
                        </figure>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default ShanpartsFooter
