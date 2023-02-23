import React from 'react'
import BreadCrumb from "../BreadCrumbs/breadCrumbs";
import styled from '../../styles/Product_Listing.module.css';
import ProductList from './ProductsList/productList';
import Filters from './Filters/components/filters';
import MobileFilter from './Filters/components/mobile_filter';
import { useProductListing } from '../../hooks/product_listing_page_hooks/product_listing_hook';
import useProductDetail from "../../hooks/product_detail_page_hooks/product_detail_hook";


const Index = () => {
    let {
        filtersData,
        handleChange,
        listItems,
        handlePagination,
        handlePrice,
        product_count,
        price,
        filters,
        productCount,
        setProductCount,
        isLoadMore,
        handleClearFilter
    }: any = useProductListing();
    let { wishlistToast,
        setWishlistToastnew,
        WishlistToastnew,
        handleWishlist,
        content,
        setWishlistToast,
        setContents
      }:any = useProductDetail();
    // console.log("Product listing ", productList)
    return (
        <div>
            <section className="listing-page mb-3">
                <div className={`container ${styled.outer_div}`}>
                    <div className="row">
                        <BreadCrumb />


                        <div className="col-lg-3 col-12">
                            <h6 className="product_heading bold text-uppercase">Products</h6>

                        </div>
                        <div className="gcse-search"></div>
                    </div>

                    <div className="row mt-2">
                        {/* <BreadCrumb/> */}
                        <Filters
                            filtersData={filtersData}
                            handleChange={handleChange}
                            handleClearFilter={handleClearFilter}
                        />
                        <ProductList
                            listItems={listItems}
                            handlePagination={handlePagination}
                            handlePrice={handlePrice}
                            productCount={productCount}
                            isLoadMore={isLoadMore}
                            setWishlistToast={setWishlistToast}
                            wishlistToast={wishlistToast}
                            setWishlistToastnew={setWishlistToastnew}
                            WishlistToastnew={WishlistToastnew}
                            content={content}
                            setContents={setContents}
                            handleWishlist={handleWishlist}
                        />
                    </div>


                </div>

                {/* <!-- small device filter --> */}
                <MobileFilter 
                    filtersData={filtersData} 
                    handlePrice={handlePrice} 
                    handleChange={handleChange} 
                />

            </section>
            </div>
        
        
    )
}

export default Index
