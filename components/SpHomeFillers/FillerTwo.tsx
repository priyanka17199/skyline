import React from "react";
import fillerImg1 from "../../public/assets/images/1-1.jpg";
import fillerImg2 from "../../public/assets/images/1-2.jpg";
import Image from "next/image";

const FillerTwo = () => {
  const myLoader = ({ src, width, quality }: any) => {
    return `http://scott-sports.8848digitalerp.com${src}?w=${width}&q=${
      quality || 75
    }`;
  };

  return (
    <div className="container mt-3 mb-3">
      <div className="row category-banner-wrapper">
        <div className="col-md-6">
          <div className="banner banner-fixed br-xs">
            <Image
              // loader={myLoader}
              src={fillerImg1}
              alt=""
              width={610}
              height={200}
            />

            {/* <div className="banner-content y-50 mt-0 p-5">
              <h4 className="banner-subtitle font-weight-normal text-dark">
                Get up to{" "}
                <span className="text-secondary font-weight-bolder text-uppercase ls-25">
                  20% Off
                </span>
              </h4>
              <h3 className="banner-title text-uppercase bold" style={{fontSize:"26px"}}> 
                Sports Outfits
                <br />
                <span className="font-weight-normal  text-capitalize">
                  Collection
                </span>
              </h3>
              <div className="banner-price-info font-weight-normal fs-4">
                Starting at{" "}
                <span className="text-secondary  font-weight-bolder">
                  $170.00
                </span>
              </div>
            </div> */}
          </div>
        </div>
        <div className="col-md-6">
          <div className="banner banner-fixed br-xs">
            <figure>
              <Image
                src={fillerImg2}
                alt="Category Banner"
                width={610}
                height={200}
                style={{ backgroundColor: "#636363" }}
              />
            </figure>
            {/* <div className="banner-content y-50 mt-0 p-5">
              <h4 className="banner-subtitle font-weight-normal text-capitalize text-light">
                New Arrivals
              </h4>
              <h3 className="banner-title text-white text-uppercase bold" style={{fontSize:"26px"}}>
                Accessories
                <br />
                <span className="font-weight-normal text-capitalize">
                  Collection
                </span>
              </h3>
              <div className="banner-price-info text-white fs-4 font-weight-normal text-capitalize">
                Only From
                <span className="text-secondary font-weight-bolder">
                  $90.00
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FillerTwo;
