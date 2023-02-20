import React from 'react'
import Brands from '../Brands/Brands'
import DealerHomeAccounts from "../DealerHomePage/DealerHomeAccounts"
import HomeCategories from '../HomeCategories/HomeCategories'

const DealerHomePage = () => {
  return (
    <div>
     <DealerHomeAccounts/>
     <Brands/>
     <HomeCategories/>
    </div>
  )
}

export default DealerHomePage
