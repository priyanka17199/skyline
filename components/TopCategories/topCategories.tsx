import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TopCatagories } from "../../datasets/top_categories";
import useUniverse from "../../hooks/home_page_hooks/home_categories_hooks";
import maximaCard from "../../public/assets/images/maximaCard.jpg";
import { CONSTANTS } from "../../services/config/api-config";

const TopCategories = () => {
  const categories = useUniverse();

  const myLoader = ({ src, width, quality }: any) => {
    return `${CONSTANTS.API_BASE_URL}${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <>
      {/* <h1>top categories</h1> */}
      <section className="category-section top-category bg-grey pt-3 pb-3 ">
        <div className="container pb-2">
          <h2 className="title justify-content-center pt-1 ls-normal mb-5">
            Top Categories Of The Month
          </h2>
          <div className="row d-flex justify-content-center">
            {categories.length > 0 &&
              categories.map((item: any, index: number) => {
                return (
                  <div className="col-lg-2 col-md-4 " key={index}>
                    <div className="category_card text-center  d-flex flex-column justify-content-between mb-3">
                      <div className="cat_img mt-2">
                        {item.product_img ? (
                          <Image
                            loader={myLoader}
                            src={item.product_img}
                            alt=""
                            height={143}
                            width={143}
                          />
                        ) : (
                          <Image
                            src={maximaCard}
                            alt=""
                            height={143}
                            width={143}
                          />
                        )}
                      </div>
                    </div>

                    <div className="cat_name">
                      <Link href={`${item.slug}`} className="text-dark">
                        <h6 className="category-name text-capitalize ">
                          {item.product_category}
                        </h6>
                      </Link>
                    </div>
                  </div>
                );
              })}

            {/* {TopCatagories.message.data.map((item: any, index: any) => {
              return (
                <div className="col-lg-2 col-md-4 col-6">
                  <div className="category_card text-center  d-flex flex-column justify-content-between mb-3">
                    <div className="cat_img mt-2">
                      <Image
                        src={item.image_url}
                        alt=""
                        height={143}
                        width={143}
                      />
                    </div>
                    <div className="cat_name"> 
                      <Link href={`${item.cat_link}`} className="text-dark">
                        <h6 className="category-name text-capitalize ">
                          {item.name}
                        </h6>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>
      </section>
    </>
  );
};

export default TopCategories;
