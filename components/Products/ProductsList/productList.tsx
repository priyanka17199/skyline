import { ProductCard } from "../../../cards/product_card";
import styles from "../../../styles/Product_Listing.module.css";
import { useSelector } from "react-redux";
import {product_state } from "../../../store/slices/product_listing_slice/product_listing_slice";
import { Norecord } from "../../NoRecord";
import { MaximaProductCard } from "../../../cards/maxima_product_card";
import { useEffect, useState } from "react";
import Link from "next/link";
import FormModal from "../../../components/formModal";
import ToastNotification from "../../../components/ToastNotification";

const ProductList = ({
  listItems,
  handlePagination,
  handlePrice,
  productCount,
  isLoadMore,
  wishlistToast,
  setWishlistToastnew,
  WishlistToastnew,
  handleWishlist,
  content,
  setWishlistToast,
  setContents
}: any) => {
  const product: any = useSelector(product_state);
  console.log("////product", product);
  console.log("////count", listItems);
  const [show, setShow] = useState<any>(false);

const handlemodalOpen = () => {
  setShow(true)
}
const handlemodalclose = () => {
  setShow(false)
}
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
          content={content}
        />
      <div className="col-lg-9">
        <div className={`${styles.sorting_bar} border-top border-bottom`}>
          <div className="">
            <div className={`${styles.total_result}`}>
              <p className="mb-0">{listItems?.length} Products</p>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div className="me-5">
              <Link href="#">
                <a  className="enquiry_link" onClick={handlemodalOpen}>
                  {" "}
                  Product Enquiry
                </a>
              </Link>
            </div>
            <div className="p-0 text-right d-flex align-items-center justify-content-end">
              Price :-
              <select
                className={`${styles.form_select}`}
                aria-label="Default select example"
                onChange={(e: any) => handlePrice(e)}
              >
                <option value="low_to_high" selected>
                  Low to High
                </option>
                <option value="high_to_low">High to Low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row ">
          {listItems && listItems.length > 0 ? (
            listItems.map((items: any, index: number) => (
              <div key={index} className="col-lg-3 col-6 p-0 mb-3 mt-3 ">
                <MaximaProductCard
                  name={items.name}
                  item_name={items.item_name}
                  prod_slug={items.product_slug}
                  price={items.price}
                  mrp_price={items.mrp_price}
                  img_url={items.image_url}
                  in_stock_status={items.in_stock_status}
                  url={items.url}
                  brand={items.brand}
                  brand_img={items.brand_img}
                  display_tag={items.display_tag}
                  wishlistToast={wishlistToast}
                  setWishlistToast={setWishlistToast}
                  WishlistToastnew={WishlistToastnew}
                  setWishlistToastnew={setWishlistToastnew}
                  content={content}
                 setContents={setContents}
                 handleWishlist={handleWishlist}
                />
              </div>
            ))
          ) : (
            <Norecord
              heading={"No Record Found"}
              content={"Selected Filters or Page Does't have Product"}
              img={"No-product.png"}
            />
          )}
        </div>

        {productCount.value <= 8 || product.total_count === undefined ? null : (
          <div className="mt-4 text-center">
            <button
              className="btn btn-warning yellow_btn text-uppercase "
              style={{ backgroundColor: "#336699", border: "none" }}
              onClick={() => {
                handlePagination();
                isLoadMore(productCount.value - 8);
              }}
            >
              Load More
            </button>
          </div>
        )}
        <FormModal 
        show={show}
        handlemodalclose={handlemodalclose}
        setShow={setShow}
        />
      </div>
    </>
  );
};

export default ProductList;
