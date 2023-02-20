import useUniverse from "../../hooks/home_page_hooks/home_categories_hooks";
import styles from "../../styles/ChooseUniverse.module.css";
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from "next/image";

const HomeCategories = () => {

    const categories = useUniverse();
    console.log("home categories jsx",categories);

    const router = useRouter()

    // if(categories.length === 0 )
    // {
    //     // console.log("home cats does not exists");
    //     localStorage.removeItem("token");
    //     localStorage.removeItem("isDealer");
    //     // router.push('/');
    // }
    const myLoader = ({ src, width, quality }:any) => {
        return `http://scott-sports.8848digitalerp.com/${src}?w=${width}&q=${quality||75}`
      }

    return (
        <div className='mt-5'>
            <div className="container">
                <h2 className={`${styles.sec_heading} text-center text-uppercase`} style={{ fontWeight: '800', fontSize: '18px' }}>Shop By Category</h2>
                <p className="text-center  mb-3">Check out what&apos;s new in the world of SCOTT</p>
                <div className={`${styles.sports_ride} row`}>
                    {categories.length > 0 ? categories.map((item: any, index: number) => (
                        <div className={`${styles.item} col-sm-6 col-md-6`} key={index}>
                            <Link href={`/pl/${item.slug}`}>
                                <a className="world-cat">
                                    <Image
                                    loader={myLoader}
                                    src={`${item.product_img}`}
                                    alt="product_category_img"   
                                    className="mx-auto d-block"
                                    width={750}
                                    height={422}
                                    /> 
                                    <div className={`${styles.img_btn} text-center`}><span>{item.product_category}</span></div>
                                </a>
                            </Link>
                        </div>
                    )) : "No Categories Found"}
                </div>
            </div>

        </div>
    )
}
export default HomeCategories

