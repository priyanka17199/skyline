import useProductDetail from "../../hooks/product_detail_page_hooks/product_detail_hook";
import ProductImage from "./ProductImage/product_image";
import MaximaProductDetail from "./ProductDetail/Maximaproduct_detail";
import ProductSpecification from "./ProductSpecifications/product_specifications";
import BreadCrumbs from "../BreadCrumbs/breadCrumbs";
import { useAmp } from "next/amp"
import ProductDescription from "./ProductDetail/Product_description";
import SuggestedProduct from "./ProductDetail/Suggested_product";
import AletrnativeProduct from "./ProductDetail/Alternative_product";
import RelatedProduct from "./ProductDetail/Related_product";
import ToastNotification from "../../components/ToastNotification";

export const config = { amp: 'hybrid' };

const MaximaProductDetailMaster = () => {
  const {
    detail,
    variants,
    images,
    initialColor,
    setInitialColor,
    initialSize,
    setInitialSize,
    handleColor,
    handleSize,
    quantity,
    handleQuantity,
    handleQuantityDecre,
    handleQuantityIncre,
    suggestedDataState,
    alternativeDataState,
    stockAvailability,
    setWishlistToast,
    wishlistToast,
    setWishlistToastnew,
    WishlistToastnew,
    handleWishlist,
    content,
    setContents
  } = useProductDetail();
  const isAmp = useAmp();
  console.log("dealer variants", variants);
  console.log("master detail", detail);
  console.log("detail variants in master", variants);
  console.log("//images", images);

  let isDealer: any;
  console.log("wishlistToast", WishlistToastnew);
  if (typeof window !== "undefined") {
    isDealer = localStorage.getItem("isDealer");
  }

  console.log("*****data", isAmp)
  return (
    <>
  <ToastNotification
          setShow={setWishlistToast}
          show={wishlistToast}
          content={content}
        />
        <ToastNotification
          setShow={setWishlistToastnew}
          show={WishlistToastnew}
          content={content}/>
          
      <div className="">
        <div className="container" style={{ paddingBottom: "25px" }}>
          <div className="row">
            <div className="col-12 mt-4" style={{ marginBottom: "0.3rem" }} >
              <BreadCrumbs />
            </div>
            <div className="col-lg-6">
              {/* {
                images?.length > 0 &&  <ProductImage detail={detail} images={images} />
              } */}


              <ProductImage detail={detail} images={images} />

            </div>

            <div className="col-lg-6 mt-3">
              <MaximaProductDetail
                detail={detail}
                variants={variants}
                initialColor={initialColor}
                setInitialColor={setInitialColor}
                initialSize={initialSize}
                setInitialSize={setInitialSize}
                handleColor={handleColor}
                handleSize={handleSize}
                quantity={quantity}
                handleQuantity={handleQuantity}
                handleQuantityIncre={handleQuantityIncre}
                handleQuantityDecre={handleQuantityDecre}
                stockAvailability={stockAvailability}
              
              />
            </div>



          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mt-3">
              <ProductDescription detail={detail} />
              {/* {
          suggestedDataState.length !== 0 ? 
        <SuggestedProduct suggestedDataState={suggestedDataState}/>
          :""
        }  */}
              {suggestedDataState.length !== 0 ?
                <RelatedProduct suggestedDataState={suggestedDataState}
                
                setWishlistToast={setWishlistToast}
                wishlistToast={wishlistToast}
                setWishlistToastnew={setWishlistToastnew}
                WishlistToastnew={WishlistToastnew}
                content={content}
                setContents={setContents}
                handleWishlist={handleWishlist}/> : ""}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mt-3">
              {
                alternativeDataState.length !== 0 ?
                  <AletrnativeProduct alternativeDataState={alternativeDataState} />
                  : ""
              }
            </div>
          </div>
        </div>
        {/* <div className="col-lg-12 mt-3">
        <MaxmiaSpecification detail={detail} />
        </div>  */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <hr
                style={{
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  border: 0,
                  borderTop: "1px solid rgba(0,0,0,.1)",
                }}
              />
              <p
                className="text-center mb-4"
                style={{ color: "rgb(204, 204, 204)", fontSize: "11px" }}
              >
                We reserve the right to make changes to the product information
                contained on this site at any time without notice, including but
                not limited to equipment, specifications, models, colors and
                materials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MaximaProductDetailMaster;
