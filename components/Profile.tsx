import React, { useState } from 'react'
import EditFormShippingAddress from './AddressForm/edit_address_form';
import useProfilePage from '../hooks/profile_page_hooks/profilePage_hook';
import Faviconheader from './Faviconheader/Faviconheader';
import styled from "../styles/ProfilePage.module.css";

const Profile = () => {
    const profileList: any = useProfilePage();
  console.log("tsx profile", profileList);

  const [showEditModal, setshowEditModal] = useState(false);
  const [detailData, setdetailData] = useState();


  const handleEditModal = (billingData: any) => {
    console.log("profile billing edit data", billingData);
    setshowEditModal(!showEditModal);
    // setdetailData(profileBillingData);
    setdetailData(profileList.profileList.billing_address);

  };

  console.log("//first",detailData)

  return (
    <>
    <Faviconheader/>
      <div className={`container  mt-5 mb-4 ${styled.profile_cont}`}>
        <div className="row">
          <div className="col-lg-12">
            <div className="mb-3">
              <div className="profile">
                <h4 className="text-start fw-bolder text-uppercase">
                  My Profile
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-4 ">
            <div className="shadow-sm card">
              <div className="card-body">
                <div className="mb-2 row">
                  <div className="col-lg-12">
                    <h4 className="mb-0 profileList">
                      {profileList && profileList?.profileList?.billing_address?.name}
                    </h4>
                  </div>
                </div>
                <hr />
                <div className="row mb-2">
                  <div className="col-sm-5">
                    <p className="">Contact Number :</p>
                  </div>
                  <div className="col-sm-7 fw-bolder ">
                    <h6>
                      {profileList &&
                        profileList?.profileList?.profile_details?.contact_no}
                    </h6>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-sm-5">
                    <p className="">Email ID :</p>
                  </div>
                  <div className="col-sm-7 fw-bolder ">
                    <h6>
                      {profileList &&
                        profileList?.profileList?.profile_details?.email}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="shadow-sm card">
              <div className="card-body">
                <div className="row mb-0 ">
                  <div className="col-lg-12">
                    <h5 className="mb-0 fw-bolder">Store Credit Balance</h5>
                  </div>
                </div>
                <hr />
                <div className="row mb-2 my-0">
                  <div className="col-lg-12 ">
                    <p className="gray">Available store credit balance</p>
                  </div>
                  <div className="col-sm-12 mt-1">
                    <h4 className="fw-bolder">
                      <i>₹&nbsp;</i>
                      {(profileList &&
                        profileList?.profileList?.store_credit_details
                          ?.balance) ||
                        0}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 mb-3 mb-lg-0 ">
            <div className="shadow-sm card  mt-4">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <h5 className="fw-bolder">Billing Address</h5>
                  </div>
                  <div className="col-lg-4 text-end">
                    <button
                      type="button"
                      style={{ background: "none", border: "none" }}
                      onClick={() => {
                        handleEditModal(profileList);
                      }}
                    >
                      <i className="fa fa-edit text-primary "></i>
                    </button>
                  </div>
                </div>
                <hr />

                <div className="row mb-2">
                  <div className="col-sm-5">
                    <p className="">Name :</p>
                  </div>
                  <div className="col-sm-7 fw-bolder ">
                    <h6>{profileList && profileList?.profileList?.billing_address?.name}</h6>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-sm-5">
                    <p className="">Email ID :</p>
                  </div>
                  <div className="col-sm-7 fw-bolder ">
                    <h6>{profileList && profileList?.profileList?.billing_address?.email}</h6>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-sm-5">
                    <p className="">Mobile No:</p>
                  </div>
                  <div className="col-sm-7 fw-bolder ">
                    <h6>
                      {profileList && profileList?.profileList?.billing_address?.contact}
                    </h6>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-sm-5">
                    <p className="">Address :</p>
                  </div>
                  <div className="col-sm-7 w-lg-25 w-sm-75 ">
                    <h6>
                      {profileList && profileList?.profileList?.billing_address?.address_1}
                    </h6>
                    <h6>
                      {profileList && profileList?.profileList?.billing_address?.address_2}
                    </h6>
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col-sm-5">
                    <p className="">Postal Code:</p>
                  </div>
                  <div className="col-sm-7 fw-bolder ">
                    <h6>
                      {profileList && profileList?.profileList?.billing_address?.postal_code}
                    </h6>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-sm-5">
                    <p className="">state :</p>
                  </div>
                  <div className="col-sm-7 fw-bolder ">
                    <h6>{profileList && profileList?.profileList?.billing_address?.state}</h6>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-sm-5">
                    <p className="">Country:</p>
                  </div>
                  <div className="col-sm-7 fw-bolder ">
                    <h6>
                      {profileList && profileList?.profileList?.billing_address?.country}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showEditModal ? (
        <EditFormShippingAddress
          show={showEditModal}
          toHide={handleEditModal}
          detailData={detailData}
          address_type="Billing"
        />
      ) : null}
    </>
  )
}

export default Profile;