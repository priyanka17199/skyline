import React from "react";
import Link from "next/link"
import Image from "next/image";
import NoProducts from "../public/assets/images/No-product.png";

export const Norecord = ({ heading, content, img }: any) => {
  // const {heading, content, img} = props;
  return (
    <div className="container text-center" style={{ marginTop: "110px",marginBottom:"100px" }}>
      <div className="row">
        <div className="col-lg-12">
          <Image src={NoProducts} alt="" width={100} height={100}/>
          <h1 className="black bold fs-5">{heading}</h1>
          <p className="my-2">{content}</p>
        </div>
        <div>

          <button type='button' className="btn btn-warning mt-2 yellow_btn">
            <Link href="/">
           <a>Shop Now</a> 
            </Link>

          </button>


        </div>
      </div>
    </div>
  );
};