import { FC } from "react";
import { ProductDetailCardInterface } from "../../../interfaces/product_detail_card_interface";
// import { CONSTANTS } from "../../../services/config/api-config";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Link from "next/link";
import scottlogo from "../../../public/scott.png";
import { CONSTANTS } from "../../../services/config/api-config";
const ProductImage: FC<ProductDetailCardInterface> = (props: any) => {
  const { detail, images } = props;
  console.log("product details images", images);
  console.log("product details", detail);

  const myLoader = ({ src, width, quality }: any) => {
    return `${CONSTANTS.API_BASE_URL}${src}?w=${width}&q=${quality || 75
      }`;
  };
  // const img = [
  //   {
  //     original: 'http://scott-sports.8848digitalerp.com/files/aiBDtXCyLcYZJElR.jpg',
  //     thumbnail: 'http://scott-sports.8848digitalerp.com/files/aiBDtXCyLcYZJElR.jpg',
  //   },
  //   {
  //     original: 'http://scott-sports.8848digitalerp.com/files/aiBDtXCyLcYZJElR.jpg',
  //     thumbnail: 'http://scott-sports.8848digitalerp.com/files/aiBDtXCyLcYZJElR.jpg',
  //   },
  //   {
  //     original: 'http://scott-sports.8848digitalerp.com/files/aiBDtXCyLcYZJElR.jpg',
  //     thumbnail: 'http://scott-sports.8848digitalerp.com/files/aiBDtXCyLcYZJElR.jpg',
  //   },
  // ];

  const handleBrandImage = (brand_image?: any) => {
    console.log("brand image", brand_image);
    if (brand_image) {
      return <Image
        loader={myLoader}
        src={
          brand_image === null
            ? ""
            : brand_image
        }
        // src={images?.brand_img}
        width={100}
        height={30}
        alt="website logo"
        className="sns-logo"

      />
    }
  }

  const handleSlideShowImages = () => {
    if (typeof window !== "undefined") {
      if (images.length > 0) {
        return <ImageGallery items={images} />
      }
    }
    else {
      return
    }
  }
  return (
    <>
      {/* {detail?.length > 0 && (<div className="product_details_crousel">
        <Carousel>

          {detail?.map((item:any, index:number)=>
          {
            return(
              item?.slide_img?.map((img:any, index:number)=>
              {
                return(
                  <div key={index}>
                    <img
                    src={`http://scott-sports.8848digitalerp.com/${img}`}
                    className="img-fluid"
                  />
                  </div>
                )
              })
            )
          })}
        </Carousel>
      </div> )} */}

      {/* {images?.length > 0 ?
       <div className="product_details_crousel">

          {images?.length > 0 &&
            images?.map((item: any, index: number) =>
          item.map((img: any, index: number) => (
                <div key={index}>
                  <img
                    src={`http://scott-sports.8848digitalerp.com/${img}`}
                    className="img-fluid"
                  />
                </div>
              ))
            )}
       
      </div> : "Loading"} */}
      <div className="product_logo" style={{ marginTop: "-10px" }}>
        {detail.map((item: any, index: any) => (
          <div key={index} className="mt-2">
            <>
              {handleBrandImage(item?.brand_img)}
            </>
          </div>
        ))}
      </div>
      {<>
        {handleSlideShowImages()}
      </>}
      {/* {typeof window !== "undefined" ? <ImageGallery items={images} /> : null} */}

    </>
  );
};
export default ProductImage;
