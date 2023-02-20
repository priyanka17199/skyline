import React from "react";
import {top_categorys} from "../datasets/Digitalshelf_dataset/topcategory"
import Image from "next/image";
import Link from "next/link";
import useRecentlyBoughtItems from "../hooks/home_page_hooks/recently_bought_hooks"
const Recentviews = () => {
  const { recentlyBoughtItemsData } = useRecentlyBoughtItems();
  console.log(recentlyBoughtItemsData,"recentlyBoughtItemsData")

  const myLoader = ({ src, width, quality }: any) => {
    return `https://digital-shelf.8848digitalerp.com${src}?w=${width}&q=${
      quality || 75
    }`;
  };
  return (
    <>
      <div className="title-link-wrapper mb-4 container">
        <h2 className="title title-link title-viewed">Recently Bought</h2>
        <Link href="#"><a className="font-weight-bold font-size-normal ls-normal"
        >
          More Products<i className="w-icon-long-arrow-right"></i>
        </a></Link>
      </div>
      <div className="swiper-container swiper-theme shadow-swiper pb-4 mb-8 container">
        <div className="swiper-wrapper row cols-xl-5 cols-lg-6 cols-md-4 cols-2">
          {recentlyBoughtItemsData.map((items:any,i:any) => (
            <div className="swiper-slide product-wrap" key={i}>
              <div className="product text-center product-absolute">
                <figure className="">
                 <Link href="#"><a>
                     <Image  loader={myLoader} src={items.image_url===""||items.image_url===null?"":items.image_url} alt="Category Banner"
                                    width={300} height={300} style={{backgroundColor: "#423A37"}}/>
                  </a></Link> 
                </figure>
                <h4 className="product-name">
                <Link href={items.url}><a>{items.item_name}</a></Link>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Recentviews;
