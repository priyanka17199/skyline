import React from 'react'
import Image from 'next/image'
import notfound404_img from '../public/assets/images/notfound404_img.png'
import Link from "next/link";
import Faviconheader from "../components/Faviconheader/Faviconheader";
const Pagenotfound = () => {
  return (
    <>
    <Faviconheader/>
    <div className={`container notfound_container`}>
    <Image src={notfound404_img} width={190} height={92} alt="page not found image" ></Image>
    <h3 className="notfound_heading">Looking for something ?</h3>
    <p className="notfound_p">We&apos;re sorry. The Web address you entered is not a functioning page on our site.</p>
   <Link href="/" ><a className={`btn btn-warning yellow_btn`} type='button'>Go Home</a></Link>
    </div>
    </>
  )
}

export default Pagenotfound 