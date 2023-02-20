import { useRouter } from "next/router";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar"
import PreHeaderStrip from "./NoCost/PreHeaderStrip";
import useHasMounted from '../hooks/general_hooks/usemounted_hook'
import ShanpartsFooter from "./SpFooter/shanparts_footer";
const Layout = ({ children }: any) => {
    const router = useRouter();
    const hasMounted = useHasMounted();
    if (!hasMounted) {
      return null;
    }
    let isDealer;
    const toShowHeader = router.pathname === "/login" || router.pathname === "/register" || router.pathname === "/forgot_password" ? false : true;
    const toShowFooter = router.pathname === "/login" || router.pathname === "/register" || router.pathname === "/forgot_password" ? false : true;
    if (typeof window !== 'undefined') {
        isDealer = localStorage.getItem("isDealer");
    }
    console.log(isDealer);
    console.log(typeof isDealer);
    return (
        <div>
            {/* <PreHeaderStrip /> */}
            {toShowHeader && <Navbar />}
            {children}
            {/* {toShowFooter &&  (isDealer === "true" ? <Dealerfooter /> : <Footer /> )} */}
            {toShowFooter &&  <ShanpartsFooter/> }
            {/* {isDealer === "true" ? <Dealerfooter /> : <Footer />} */}
        </div>
    )
}
export default Layout