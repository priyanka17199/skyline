import Link from "next/link";
import React from "react";
import styled from "../../styles/DealerHomeAccounts.module.css";
import SCOTT from "../../public/img/SCOTT.jpg";
import ACCESSORIES from "../../public/img/ACCESSORIES.jpg";
import BERGAMONT from "../../public/img/BERGAMONT.jpg";
import Image from "next/image";
import Accounts from "./Components/Accounts";
const dealerproduct = () => {
  return (
    <>
      <div className={`container ${styled.dealerAccountsMainDiv}`}>
        <Accounts />
        <hr />
        <Link href="/avantipdf">
          <a
            style={{ textDecoration: "none", cursor: "pointer" }}
            className={styled.manual_Styled}
          >
            <div
              className={`alert alert-info ${styled.trainingManual}`}
              role="alert"
              style={{ fontSize: "14px", fontFamily: "Ubuntu, sans-serif" }}
            >
              Training and Manual
              <i className="fa fa-download ps-2" aria-hidden="true"></i>
            </div>
          </a>
        </Link>
      </div>

      <div className={`container ${styled.midSection} mt-5`}>
        <div className="row">
          <div className="col-sm-12">
            <div className="sports_ride d-flex align-items-center justify-content-center row">
              <div className="mb-3 mb-sm-5 col-sm-5">
                <div className="catalog_img">
                  <Image src={SCOTT} alt="scott" width={385} height={350} />
                </div>
              </div>
              <div className="mb-5 col-sm-7">
                <div className="catalog_text">
                  <h2 className="bold black">SCOTT</h2>
                  <hr />
                  <p className="mb-0 black">
                    SCOTT Sports is a leader in developing and manufacturing
                    high-end performance products for cycling, motosports,
                    running, and winter sports. INNOVATION - TECHNOLOGY – DESIGN
                    is the essence behind all SCOTT products and the vision of
                    our engineers and designers. Mountain bikes, road bikes,
                    electric bikes, gravel or cyclocross bikes, city bikes and
                    trekking bikes. We cover pretty much everything you can
                    dream of when we speak about cycling. Just pick your riding
                    discipline and find the perfect bicycle.
                  </p>
                  <Link href="/view">
                    <a className="mt-3 btn btn-warning btn-sm yellow_btn">
                      View
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="sports_ride d-flex align-items-center justify-content-center row">
              <div className="mb-5 col-sm-7">
                <div className="catalog_text">
                  <h2 className="bold black">BERGAMONT</h2>
                  <hr />
                  <p className="mb-0 black">
                    #StraightFromStPauli and the world is our home. We love what
                    we do, and we do it with great passion: Cutting edge bikes.
                    We believe that the future of mobility is human-powered. We
                    are part of the change in mobility, and we help to shape it.
                    Every time someone decides to take the bike instead of the
                    car is a victory for the individual, and we are all for it.
                    Take a look at our stunning bikes here.
                  </p>
                  <Link href="/view">
                    <a className="mt-3 btn btn-warning btn-sm yellow_btn">
                      View
                    </a>
                  </Link>
                </div>
              </div>
              <div className="mb-3 mb-sm-5 col-sm-5">
                <div className="catalog_img" style={{ float: "right" }}>
                  <Image src={BERGAMONT} alt="scott" width={385} height={350} />
                </div>
              </div>
            </div>

            <div className="sports_ride d-flex align-items-center justify-content-center row">
              <div className="mb-3 mb-sm-5 col-sm-5">
                <div className="catalog_img">
                  <Image
                    src={ACCESSORIES}
                    alt="scott"
                    width={385}
                    height={350}
                  />
                </div>
              </div>
              <div className="mb-5 col-sm-7">
                <div className="catalog_text">
                  <h2 className="bold black">PARTS & ACCESSORIES</h2>
                  <hr />
                  <p className="mb-0 black">
                    We bring the best when it comes to bike components and
                    accessories. A wide range of equipment is available with us
                    from Syncros, Probike and SCOTT. Every piece is built to
                    deliver optimal, high performance under the most brutal of
                    conditions.
                  </p>
                  <Link href="/view">
                    <a className="mt-3 btn btn-warning btn-sm yellow_btn">
                      View
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default dealerproduct;
