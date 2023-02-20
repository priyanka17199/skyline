import React, { useState } from "react";
import Link from "next/link";
import footerstyle from "../styles/Footer.module.css";
import Image from "next/image";

function Footer() {
  const [isActive, setIsActive] = useState(null);
  const accordionData = [
    {
      title: "WARRANTY",
      content: [
        {
          href: "/Warranty",
          name: "Warranty",
        },
        {
          href: "/returnpolicy",
          name: "Buyer Return Policy",
        },
      ],
      id: 1,
    },
    {
      title: "PRODUCTS",
      content: [
        {
          href: "/",
          name: "Manuals & Product Documentation",
        },
      ],
      id: 2,
    },
    {
      title: "LEGAl",
      content: [
        {
          href: "/privacypolicy",
          name: "Privacy Policy",
        },
        {
          href: "/warning",
          name: "Warning",
        },
        {
          href: "/nocostemi_tc",
          name: "No Cost EMI T&C",
        },
      ],
      id: 3,
    },
    {
      title: "BRANDS",
      content: [
        {
          href: "#",
          name: "Scott",
        },
        {
          href: "#",
          name: "Bergamont",
        },
        {
          href: "#",
          name: "Syncros",
        },
        {
          href: "#",
          name: "Probike",
        },
        {
          href: "#",
          name: "Avanti",
        },
      ],
      id: 4,
    },
  ];

  const handleClick = (i: any) => {
    if (isActive === i) {
      return setIsActive(null);
    }
    setIsActive(i);
    return false;
  };
  return (
    <>
      <div className={footerstyle.entirefooter}>
        <div className={`${footerstyle.dealerblock} mb-4 mt-4`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 mb-md-4 col-md-12">
                <div
                  className={`${footerstyle.find_dealer} ${footerstyle.find_block} text-center `}
                >
                  <h6>FIND A DEALER</h6>
                  <p className="mb-0">Like our gear?</p>
                  <p>
                    Check out our dealer locator to find the dealer nearest you!
                  </p>
                  <Link href="/findaDealer">
                    <a
                      type="button"
                      className={`btn btn-warning text-uppercase ${footerstyle.customer_connect}`}
                    >
                      Find a Dealer
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-7  mt-md-4 col-md-12">
                <div
                  className={`${footerstyle.cust_connect} ${footerstyle.find_block} ${footerstyle.border_left} text-center`}
                >
                  <h6 className="mb-3">CUSTOMER CONNECT</h6>
                  <div className="row">
                    <div className="col-6 text-end mb-3">
                      <Link href="https://customerconnect.sportnetwork.in/registrations/basic_informations">
                        <a
                          target="_blank"
                          className={`btn btn-warning text-uppercase ${footerstyle.customer_connect}`}
                        >
                          Bike Registration
                        </a>
                      </Link>
                    </div>
                    <div className="col-6 text-start mb-3">
                      <Link href="https://customerconnect.sportnetwork.in/warranties">
                        <a
                          target="_blank"
                          className={`btn btn-warning text-uppercase ${footerstyle.customer_connect}`}
                        >
                          File Your Warranty
                        </a>
                      </Link>
                    </div>
                    <div className="col-6 text-end">
                      <Link href="https://customerconnect.sportnetwork.in/bike_orders/basic_customer_details">
                        <a
                          target="_blank"
                          className={`btn btn-warning text-uppercase ${footerstyle.customer_connect}`}
                        >
                          Bike on order
                        </a>
                      </Link>
                    </div>
                    <div className="col-6 text-start">
                      <Link href="/contact_us">
                        <a
                          className={`btn btn-warning text-uppercase ${footerstyle.customer_connect}`}
                        >
                          Contact Us
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className={footerstyle.footer}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-sm-12 offset-md-3">
                <h5 className="news_header">Subscribe for latest update</h5>
                <div className="row">
                  <div className=" pe-0 col-md-9 col-sm-9 col-8">
                    <div className={`mb-2 ${footerstyle.search_bar} `}>
                      <input
                        type="text"
                        className="form-control input_tags"
                        id="Search"
                        placeholder="Enter Your Email Address Here"
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-4">
                    <button className="btn btn-warning text-white bold text-uppercase yellow_btn ">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-center my-3 col-sm-12">
                <Image
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAAsBAMAAADhpx2tAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAATwAAAE8BY4r91wAAABVQTFRFAAAAeGtgeGtheGtheGtheGtheGthArnF0gAAAAd0Uk5TABxmPJO/+dWWEyoAAAEnSURBVHic7dVLbsMgEAZgaC9gygUiQFkXuAHC3Vc1vkAK9z9CIX7ENlGUTWJF/T95vDASnhnbY0IAAAAAAAAAAAAAHu7jM5/oIgjXuyb0TMyqkNKBkON3jp8cJ0LeUoqdk2zv5B6KMitUm4svfglNcQ5yHK6mkLug92wDJU3DKBtwprW2E2mllGJBCeGc88pvtb5ri7DSp5UQLtGFtF3cyLvlTas7eaWUK5Z5iZxnTnZMWxd8rKjJ7qyec27zMTBWinXxrty4Krwqei4+xLjtQNGPEeulstL317cr7ahbIRZtMMJIaaoeUEYpfdrbVDeYGz8967j+BL7mT8ALaV90FNx6uS6oKTMwHsYheJqG4HkG3rfF63s31W+Q/pfaAQAAAAAAAGB3fxNmky0Os5S5AAAAAElFTkSuQmCC"
                  className="img-fluid"
                  alt="images"
                  width={512}
                  height={44}
                />
              </div>
            </div>

            <div className={`${footerstyle.footer_links} d-md-block d-none`}>
              <div className="row mt-2 ">
                <div className="col-md-2 mb-lg-4 col-6">
                  <div className={footerstyle.f_block}>
                    <h6 className="mb-2">WARRANTY</h6>
                    <ul className="mt-1">
                      <li>
                        <Link href="/warranty">Warranty</Link>
                      </li>
                      <li>
                        <Link href="/returnpolicy">Buyer Return Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-2 mb-lg-4 col-6">
                  <div
                    className={`${footerstyle.pro_block} ${footerstyle.f_block}`}
                  >
                    <h6 className="mb-2">PRODUCTS</h6>
                    <ul className="mt-1">
                      <li>
                        <Link href="/manuals">
                          Manuals & Product Documentation
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-2 mb-lg-4 col-6">
                  <div className={footerstyle.f_block}>
                    <h6 className="mb-2">LEGAL</h6>
                    <ul>
                      <li>
                        <Link href="/privacypolicy">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link href="/terms-condition">Terms & Condition</Link>
                      </li>
                      <li>
                        <Link href="/warning">Warning</Link>
                      </li>
                      <li>
                        <Link href="/nocostemi_tc">No Cost EMI T&C</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-2 mb-lg-4 col-6">
                  <div className={footerstyle.f_block}>
                    <h6 className="mb-2">BRANDS</h6>
                    <ul className={footerstyle.footer_brands}>
                      <li className={footerstyle.footer_brandsli}>
                        <Link href="">Scott</Link>
                      </li>
                      <li className={footerstyle.footer_brandsli}>
                        <Link href="">Bergamont</Link>
                      </li>
                      <li className={footerstyle.footer_brandsli}>
                        <Link href="">Syncros</Link>
                      </li>
                      <li className={footerstyle.footer_brandsli}>
                        <Link href="">Probike</Link>
                      </li>
                      <li className={footerstyle.footer_brandsli}>
                        <Link href="">Avanti</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 mb-lg-4 col-6">
                  <div className={footerstyle.f_block}>
                    <h6 className="mb-2">ABOUT US</h6>
                    <p>
                      At SPORTNETWORK we want to get everyone to take up a sport
                      and get outdoor.
                    </p>
                    <Link href="/about_us">More About Us</Link>
                    {/* <Linkddress>Panvelkar Sankul,
                                    Kharwai Naka,Badlapur East
                                </Linkddress>
                                <div className="contact-us">

                                    <p><Link href="tel:09876543210"><i className="fa fa-phone" aria-hidden="true"></i>+91 9876543210
                                    </Link></p>
                                    <p><Link href="mailto:shadab.ahmad207@gmail.com"><i className="fa fa-envelope-o"
                                        aria-hidden="true"></i>
                                        Email:example@mail.com</Link></p>
                                </div> */}
                  </div>
                </div>
              </div>
            </div>
            <section className="d-md-none d-block">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="footer-block-sm-device">
                      <div className="accordion">
                        {accordionData.map((item: any, i) => (
                          <div
                            className={footerstyle.accordion_item}
                            key={item.id}
                          >
                            <div
                              className={footerstyle.accordion_title}
                              onClick={() => handleClick(i)}
                              id={item.id}
                            >
                              <h2 className={footerstyle.accordionmobile_h2}>
                                {item.title}
                              </h2>
                              <div className={footerstyle.accordionmobile_icon}>
                                {isActive === i ? (
                                  <span>
                                    <i
                                      className="fa fa-minus"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                ) : (
                                  <span>
                                    <i
                                      className="fa fa-plus"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                )}
                              </div>
                            </div>
                            <div
                              id={item.id}
                              className={
                                isActive === i
                                  ? footerstyle.showcontents
                                  : footerstyle.hidecontents
                              }
                            >
                              {item.content.map((contents: any, index: any) => (
                                <div key={index}>
                                  <Link href={contents.href}>
                                    <a
                                      href={contents.href}
                                      className={footerstyle.accordion_links}
                                    >
                                      {contents.name}
                                    </a>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="f-block">
                        {/* <h6 className="mb-2">ABOUT US</h6> */}
                        <p style={{ color: "#999 !important" }}>
                          At SPORTNETWORK we want to get everyone to take up a
                          sport and get outdoor.
                        </p>
                        <Link
                          href="/about-us"
                          style={{ color: "#555555 !important" }}
                        >
                          More About Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <hr />

            <div className="row">
              <div className="col-12  mb-3">
                <div className={`${footerstyle.social_icon} text-center`}>
                  <h5
                    className={` ${footerstyle.dealerfooter_h5} text-uppercase mb-3 text-center`}
                  >
                    Follow Sport Network
                  </h5>
                  {/* < div className= "container">  
                 <div className="row">
                 <div className="col-md-1 col-sm-1 mx-auto">
                  <Link href="https://www.instagram.com/sportnetwork.in/" target="_blank"><FontAwesomeIcon  icon ={faInstagram} />
                  </Link>
                  
                  <Link href="https://www.facebook.com/sportnetwork.in" target="_blank"><FontAwesomeIcon icon={faFacebook} /></Link>
                  </div>
                  </div>
              </div> */}
                  <Link href="https://www.instagram.com/sportnetwork.in/">
                    <a
                      href="https://www.instagram.com/sportnetwork.in/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-instagram me-3"></i>
                    </a>
                  </Link>
                  <Link href="https://www.facebook.com/sportnetwork.in">
                    <a
                      href="https://www.facebook.com/sportnetwork.in"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-facebook-official"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="text-center py-3 col-12">
                <div className={footerstyle.payment_links}>
                  <span>
                    <Image
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAGFAAABhQFFWZ5CAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYBQTFRF////AP////8AAICAQIC/M5nMK4CqJJK2HI7GLou5K5W/JJK2Ipm7II+/HpbDHI64I5e5JJK/IpG7IJe/J5O5JJK9I5W/8cZcIpS8IJO5JZW7JJK8JJS+I5e5IZa8IZK+JZW6I5a+8MhfIZK9JZS+7sdfIZK8JJa6JJW9I5O9I5O8JJO9JJS7I5O8IpW9IpW8JJO8I5S878de179oI5W8IpS7I5W9IpO8JJS8I5W8I5S7IpW7JJS8I5O9I5O8I5S8I5W8I5S8PpqwI5O7IpO8JJS9I5S8I5S8JJS8IpW8JJS9I5S8I5W8JJS8I5S8I5S8LpW4I5S7I5S78MddI5S8I5W878ZfI5S8I5S9I5S8IpS7I5S8I5S8I5W8I5S8I5O9I5S81MBqJJS978deI5S8IpS8I5S8I5S86MVgI5S8I5O8I5S8I5S9I5S8I5S85sVjVqGk78heI5S8IpS8I5S8I5S8I5S8I5S8I5S8I5S8I5S8I5S8I5S8I5S8NJi078deQinrAgAAAH10Uk5TAAEBAgQFBgcJCwwODxAREhYcHiAhIyQkJigpKissLi8wMzM2Nzs9P0ZJUFVWV1lbXF9fYGdpbG9yc3V4eXuChYmKi5OVlpiZnaOlp6isrrCwsbW3vcLCw8TFyMvMztLT1tbX2dze4OHh5ebp6uzu7u/v8vT19vf4+fv8/f7Y3WjuAAAA+ElEQVQYGe3B5yJCAQCG4Y+MbMneW/aWvUVkZO/sXUZxjF7duk7uoV89jxLipm83Ermsl3SBL+WTOVl6dvxP2zVS1bURylBU011kS2qEoVIYlAtTheQFmmXaOH9N1gKh7DZoscGqvaw7VQXf4TDDMjl/n0vSAyxpHPKLwxwVKWqKAx8rMlXy0t8BDXLjl7xgjFqU9sjIPFeKeWB2kxPpmD3JOvMD0+qCwk7Ik8nN2TcDSgqyqKh2gxvtE+OQqRd4y5QdnNZJR25dgMNq/k3IZANcUis4ajB9tbr4yJE8rCvm1DBqpRGwlS+fvt+uNWQF8Uga414J8fIHTjJQ9uW5FX4AAAAASUVORK5CYII="
                      className={`img-fluid ${footerstyle.payment_icon}`}
                      alt="Visa_image"
                      width={32}
                      height={32}
                    />
                  </span>
                  <span>
                    <Image
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAGFAAABhQFFWZ5CAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAMlQTFRF/////wAA//8A/1VV/0BA/79A/8xm5VVO4FdL87RX87Zb87JZ9LVZ41ZM4VdN9bVb4ldM9LNZ9bVY41dN41ZM9bVY4VhM87Na9bRZ7IxU87RZ4ldM41dM9LNY75lV5mtP9LRZ87RZ4ldN4ldN9LRZ9LRa8qxY6XRR86pY87FY9LRZ4lZN9LRZ4llN9LRZ4ldM411N415M9LRZ64JS87NY4ldM4lhM4llM41pM41tN411N5GJO6HVQ6HdQ7IlT7pZV8qlX9LFZ9LRZsRiXGgAAADV0Uk5TAAEBAwQEBScpKSo/SEpMTHJyfH5/f4CAlbGxsrOzvL+/xsjLy83W2eLi5ebm5+r39/f3+vt16cRwAAAAz0lEQVQ4y92SZxKCMBCFY0HFhtgL2MCKFY1g19z/UCKTgd3kBPr9y7y3L8nuEvI/pMt1w3F6tVIqOGjt4WZltjQl1nMW5YyzhRHj2CqXE5Utjdj3WYSrJ0NDJZbpgyH0MB/Uf9ktQEZwS9qKNe/FBGyFlEGxfwmZAodGmsDwZBINYlCJATCYxAHKW05YIQNnjQzwipecYKJHcjrokfCbdzlBQ42inh8ww41Crb4J9a4qDut0vs7FYeFxH47yuPHC5CfSwggrlylWu0th5X6eDwozd2lcSptxAAAAAElFTkSuQmCC"
                      className={`img-fluid ${footerstyle.payment_icon}`}
                      alt="mastercard_image"
                      width={32}
                      height={32}
                    />
                  </span>
                  <span>
                    <Image
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA8AAAAPAB60vuAAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJTSURBVFiF7dJPSFRRFMfx73nvWWOlJQpRTY1hOpWbcGNlWUJQBC1aFFG7CoN21TKIB4Vgga0KHAiCFtWA0KaooF3/3ERF/iGrZbMwFaY/w8y8d39tyqCFC8HavM/u3MP5c7kXEolEIvGfGUD77nCZFy2uAXAz5e8jI2Hlny2Q3jZQu8QrTgOpX2cOGHr/jCMQuoVewFsaFFuBlFyMqiVULXmKyoc2bo87F3o4QIAsC4LKD1y5OJv4dvDQcZ7z4nfc1hXmgT1AVTA48Sy8MFfjpsHxHpkb+hV+MnHgy6nNhdl8bqwN9DBwKGsALpotjtLrPlfWplv/6rnVZOdl6jDY17YjvGmyHjN9jJxXNlyNYl77Qa1Qae+kizMW2DhOZzB7KU+bmnKjuxw2AyxzvvMttunARBagksl8cEtqqaxvDqJMphlx/ffkbFd/nSilZToGbJTZVZNeCuUlrvieuyfIGgxJpax51OBbhFiD2TXEO/BOC9UZBKBui7koMRYAWZnp2/5964DY0Cszbn3Rj8t/Ll/KAjHQZ74/hot3YkzUlVad+ZoqbHWyMc94I9M5IIqrbPHgvoNHJt1oKC96PZOqFoU6THRjpIW1AOMB0OpW1BeA1YLbU73tR/9+TydbiacnE0/DBwAt3ZciP47OFlOFxwYB0rAnpmNjQKLnw3BYbDx52Dd0Z6q3fXgKaMyN5Ay7izGJ8cREs5Nu09J9ae3KvucnGnOjahwcPT/Xx5pLW1eYb90R9s+vOi9/+fW3DeTlz3eBDZ1hPYTefOsTiUQi8d/8BMfi/+hlBQGrAAAAAElFTkSuQmCC"
                      alt="mastercard_image"
                      className={`img-fluid ${footerstyle.payment_icon}`}
                      width={32}
                      height={32}
                    />
                  </span>
                </div>
                <p className={footerstyle.copy_right}>
                  CopyRights © 2022 SCOTT NETWORK SOLUTIONS. All Rights
                  Reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
