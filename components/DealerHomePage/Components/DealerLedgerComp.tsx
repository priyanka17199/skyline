import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useDealerLedger from '../../../hooks/dealer_hooks/dealer_ledger_hook'
import { dealerLedgerApi, dealerledger_state } from '../../../store/slices/dealer_slice/dealer_ledger_slice'
import Accounts from './Accounts'

const DealerLedgerComp = () => {
    // const dealersledger = useDealerLedger();
    // console.log("render file res",dealersledger)
// const dealerledger = useSelector(dealerledger_state)
// console.log("ledger in frontend file", dealerledger)
  return (
    <div className="container">
    <div className="row">
      <div className="col-12">
        <Accounts />
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6">
        <div className="row">
          <div className="col-sm-3">
            <label htmlFor="">Account Name: </label>
          </div>
          <div className="col-sm-9">
            <select className="form-select">
              <option>SELECT ACCOUNT NAME</option>
              <option>All Accounts</option>
            </select>

          </div>

          {/* <div className="col-sm-3 mt-3">
            <label htmlFor="">Company Name: </label>
          </div>
          <div className="col-sm-9 mt-3">
            <select className="form-select">
              <option>SELECT COMPANY NAME</option>
              <option>Scott Sports</option>
            </select>

          </div> */}
        </div>

      </div>
    </div>
    {/* <div className="row">
      <div className="col-6">
        <div className="row mt-3">
          <div className="col-sm-3">
            <div className="form-check">
              <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" checked/>
              <label className="form-check-label" for="radio1">Month : </label>
            </div>

          </div>
          <div className="col-sm-9">
            <select className="form-select">
              <option>SELECT MONTH</option>
              <option>December</option>
            </select>
          </div>
        </div>
      </div>
    </div> */}
    <div className="row">
      <div className="col-6">
        <div className="row mt-3">
          <div className="col-sm-3">
            <div className="form-check">
              <input type="radio" className="form-check-input" id="radio2" name="optradio" value="option1"/>
              <label className="form-check-label" for="radio2">Date Range : </label>
            </div>

          </div>
          <div className="col-sm-9">
            <div className="row">
              <div className="col-sm-6">
              <input type="date" id="FromDate" name="FromDate"/>
              </div>
              <div className="col-sm-6">
              <input type="date" id="toDate" name="FromDate"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-6">
        <div className="btn-submit text-center mt-4">
          <button type='button' className='btn btn-warning yellow_btn'>Submit</button>

        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-12">
        <div className="card mt-5">
          <div className="card-header" style={{ backgroundColor: 'rgb(195, 230, 255)' }}>
            <div className="d-flex">
              <h5 className="bold black mb-0 flex-fill">Ledger</h5>
              <div>
                <Link href="#">
                  <a target="_blank" className="black mr-4 text-underline">Export as
                    <i className="fa fa-file-excel-o ps-2" aria-hidden="true"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6">
                <h6 className="mb-0 bold">DemoTest</h6>
              </div>
              <div className="text-sm-right mt-3 mt-sm-0 text-left col-sm-6">
                <p className="bold mb-0">September - 2022</p>
                <p className="bold mb-0"></p>
              </div>
            </div>
          </div>
        <div className="pt-0 card-body">
          {/* <div className="table-responsive">
            <table className="voucher_table mb-0 table table-hover table table-sm" style={{cursor:'pointer'}}>
              <tr>
                <td colspan="4" className="text-right bold">Opening Balance</td>
                <td className="text-right bold">-</td>
                <td className="text-right bold">-</td>
              </tr>
              <thead>
                <tr>
                  <th width="10%" className="text-nowrap">Date</th>
                  <th width="50%" className="text-nowrap">Particulars</th>
                  <th width="10%" className="text-nowrap">Vch Type</th>
                  <th width="10%" className="text-right text-nowrap">Vch No.</th>
                  <th width="10%" className="text-right text-nowrap">Debit</th>
                  <th width="10%" className="text-right text-nowrap">Credit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-nowrap">30-09-2022</td>
                  <td>DemoTest</td>
                  <td className="text-nowrap">Opening Voucher</td>
                  <td className="text-right text-nowrap"></td>
                  <td className="text-right text-nowrap">₹1000.00</td>
                  <td className="text-right text-nowrap">-</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="4" className="text-right bold">Current Total</td>
                  <td className="text-right bold">₹1000.00</td>
                  <td className="text-right bold">-</td>
                </tr>
                <tr>
                  <td colspan="4" className="text-right bold">Closing Balance</td>
                  <td className="text-right bold">₹1000.00</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div> */}

          <div className="table-responsive">
            <th>There are no transactions</th>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div >
  )
}

export default DealerLedgerComp
