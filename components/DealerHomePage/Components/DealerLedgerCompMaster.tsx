import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useDealerLedger from '../../../hooks/dealer_hooks/dealer_ledger_hook'
import GetSalesVoucherPdf from '../../../services/api/dealer_api/sales_voucer_pdf'
import { CONSTANTS } from '../../../services/config/api-config'

import { dealerLedgerApi, dealerledger_state } from '../../../store/slices/dealer_slice/dealer_ledger_slice'
import { dealerledgersummery_state } from '../../../store/slices/dealer_slice/dealer_ledger_summery_slice'

import Accounts from './Accounts'

const DealerLedgerComp = () => {
  // const {dealersledger , dealerLedgerSummery}:any = useDealerLedger();

  const dealerLedgersum = useSelector(dealerledgersummery_state);
  console.log("dl comp master ledger", dealerLedgersum)

  let customFromDate: any
  let customToDate: any

  const dealerledger = useSelector(dealerledger_state)
  console.log("ledger in frontend file post", dealerledger)
  const dispatch = useDispatch();
  let [dlmonth, setDlMonth] = useState<any>("");
  const [dlFromDate, setDlFromDate] = useState<any>("");
  let [dlToDate, setDlToDate] = useState<any>("");
  let [showData, setShowData] = useState<boolean>(false)
  let [exportAsGenerateURL, setExportAsGenerateURL] = useState("");

  let [fieldDisable, setFieldDisable] = useState<boolean>(false);

  useEffect(()=>
  {
    // setExportAsDate(dealerledger.item.range);
    if (dealerledger.item.range.includes("To")) {
      const ledgerDates = dealerledger.item.range.split("To")
      setExportAsGenerateURL(`party=${dealerLedgersum?.item?.party_name}&from_date=${ledgerDates[0]}&to_date=${ledgerDates[1]}`)
    }
    else
    {
      setExportAsGenerateURL(`party=${dealerLedgersum?.item?.party_name}&month=${dealerledger.item.range}`)
    }
  },[dealerledger])

  const [year, month, day] = dlFromDate.split('-')
  customFromDate = [day, month, year].join('-')
  const [toYear, toMonth, toDay] = dlToDate.split("-")
  customToDate = [toDay, toMonth, toYear].join('-')
  const handlePostGl = () => {

    // console.log("ledger handle post name ", dealerLedgersum?.item?.party_name)
    // console.log("ledger handle post month", dlmonth)
    // console.log("ledger handle post from date", customFromDate)
    // console.log("ledger handle post to date", customToDate)


    dispatch(dealerLedgerApi(dealerLedgersum?.item?.party_name, dlmonth, customFromDate, customToDate))
    setShowData(true);
    setDlMonth("")
    setDlFromDate("")
    setDlToDate("")

  }
  const handleExport = () => {
    // console.log("in handle export ", export_as);
    const method = "export_ledger";
    const entity = "gl";

    window.location.href = `
    ${CONSTANTS.API_BASE_URL}${CONSTANTS.API_MANDATE_PARAMS}&method=${method}&entity=${entity}&${exportAsGenerateURL}
    `;

    // if (export_as.includes("To")) {
    //   window.location.href = `https://scott-sports-v14.8848digitalerp.com/api/method/sportnetwork.api.map.version_mapper?version=v1&entity=gl&method=export_ledger&party=${dealerLedgersum?.item?.party_name}&from_date=${customFromDate}&to_date=${customToDate}`;
    // } else {
    //   window.location.href = `https://scott-sports-v14.8848digitalerp.com/api/method/sportnetwork.api.map.version_mapper?version=v1&entity=gl&method=export_ledger&party=${dealerLedgersum?.item?.party_name}&month=${dlmonth}`;
    // }

    // if (dlmonth) {
    //   window.location.href = `https://scott-sports-v14.8848digitalerp.com/api/method/sportnetwork.api.map.version_mapper?version=v1&entity=gl&method=export_ledger&party=${dealerLedgersum?.item?.party_name}&month=${dlmonth}`
    // }

    // else if (customFromDate && customToDate) {
    //   window.location.href = `https://scott-sports-v14.8848digitalerp.com/api/method/sportnetwork.api.map.version_mapper?version=v1&entity=gl&method=export_ledger&party=${dealerLedgersum?.item?.party_name}&from_date=${customFromDate}&to_date=${customToDate}`
    // }
    console.log("handleexport fn")
    console.log("handleexport fn",dlmonth)
    console.log("handleexport fn",customFromDate, customToDate)
    // console.log("fn date range from",customFromDate )
    // console.log("fn date range to",customToDate)
  }

  // console.log("radio month ", chooseMonth);
  // console.log("radio date", chooseDate);
  const handlePdf = async (pdf_link:any) => {
    const pdfRes = await GetSalesVoucherPdf(pdf_link);
    console.log("pdf res in jsx",pdfRes)
    window.open (`${pdfRes}` , '_blank')
    
  }
  console.log("radio disable", fieldDisable)
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
              {/* <select className="form-select">
              <option>SELECT ACCOUNT NAME</option>
              <option>All Accounts</option>
            </select> */}
              <h6 style={{marginTop:'5px'}}>{dealerLedgersum?.item?.party_name}</h6>

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

      <div className="row">
        <div className="col-6">
          <div className="row mt-3">
            <div className="col-sm-3">
              <div className="form-check">
                <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" onClick={() => setFieldDisable(true)} />
                <label className="form-check-label" for="radio1">Month</label>
              </div>

            </div>
            {
              fieldDisable === false ? <>
                <div className="col-sm-9">
                  <select className="form-select" onChange={(e) => setDlMonth(e.target.value)} disabled>
                    <option>SELECT MONTH</option>
                    {
                      dealerLedgersum.item?.months?.map((month: string, index: number) =>
                        <>
                          <option key={index} value={month}>{month}</option>
                        </>
                      )
                    }
                  </select>
                </div>
              </> :
                <>
                  <div className="col-sm-9">
                    <select className="form-select" onChange={(e) => setDlMonth(e.target.value)}>
                      <option value={dlmonth}>SELECT MONTH</option>
                      {
                        dealerLedgersum.item?.months?.map((month: string, index: number) =>
                          <>
                            <option key={index} value={month}>{month}</option>
                          </>
                        )
                      }
                    </select>
                  </div>
                </>
            }

          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="row mt-3">
            <div className="col-sm-3">
              <div className="form-check">
                <input type="radio" className="form-check-input" id="radio2" name="optradio" value="option1" onClick={() => setFieldDisable(false)} />
                <label className="form-check-label" for="radio2">Date Range</label>
              </div>

            </div>
            {
              fieldDisable === true ? <>
                <div className="col-sm-9">
                  <div className="row">
                    <div className="col-sm-6">
                      <input type="date" id="FromDate" value={dlFromDate} name="FromDate" onChange={(e) => setDlFromDate(e.target.value)} disabled />
                    </div>
                    <div className="col-sm-6">
                      <input type="date" id="toDate" value={dlToDate} name="ToDate" onChange={(e) => setDlToDate(e.target.value)} disabled />
                    </div>
                  </div>
                </div>
              </> :
                <>
                  <div className="col-sm-9">
                    <div className="row">
                      <div className="col-sm-6">
                        <input type="date" id="FromDate" value={dlFromDate} name="FromDate" onChange={(e) => setDlFromDate(e.target.value)} />
                      </div>
                      <div className="col-sm-6">
                        <input type="date" id="toDate" value={dlToDate} name="ToDate" onChange={(e) => setDlToDate(e.target.value)} />
                      </div>
                    </div>
                  </div>
                </>
            }

          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <div className="btn-submit text-center mt-4">
            <button type='button' className='btn btn-warning yellow_btn' onClick={handlePostGl}>Submit</button>

          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div>
            <h5 className='mb-2 mt-5'>Dealer ledger</h5>
          </div>
          <div className="card">
            <div className="card-header" style={{ backgroundColor: 'rgb(195, 230, 255)',height:'40px' }}>
              <div className="d-flex">
                {
                  showData ? <>

                <h5 className="bold black mb-0 flex-fill">Ledger</h5>
                <div>

                  <a target="_blank" className="black mr-4 text-underline" style={{ cursor: 'pointer' }} onClick={handleExport}>Export as
                    <i className="fa fa-file-excel-o ps-2" aria-hidden="true"></i>
                  </a>
                </div>
                  </>: null
                }
              </div>
            </div>

            <div className="pt-0 card-body">
              {
                showData ? <>
                  <div className="card-body">
                    
                    <div className="row">
                      <div className="col-sm-6">
                        <h6 className="mb-0 bold">{dealerledger.item.party_name}</h6>
                      </div>
                      <div className="text-sm-right mt-3 mt-sm-0 text-end col-sm-6">
                        <p className="bold mb-0">{dealerledger.item.range}</p>
                        <p className="bold mb-0"></p>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="voucher_table mb-0 table table-hover table table-sm" style={{ cursor: 'pointer' }}>

                      <thead>
                        <tr >
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
                          <td colspan="4" className="text-right bold">Opening Balance</td>

                          <td className="text-right bold">₹{dealerledger?.item?.general_data?.debit_opening_balance}</td>
                          <td className="text-right bold">₹{dealerledger?.item?.general_data?.credit_opening_balance}</td>
                        </tr>
                        {
                          dealerledger?.item?.sales_data?.map((salesVoucher: any, index: number) => {

                            return (
                              <>
                                  
                                <tr key={index} onClick={()=>{handlePdf(salesVoucher.pdf_link )}}>
                                  <td className="text-nowrap">{salesVoucher.posting_date}</td>
                                  <td>{salesVoucher.party_name}</td>
                                  <td className="text-nowrap">{salesVoucher.voucher_type}</td>
                                  <td className="text-right text-nowrap">{salesVoucher.Voucher_number}</td>
                                  <td className="text-right text-nowrap">₹{salesVoucher.credit_amount}</td>
                                  <td className="text-right text-nowrap">{salesVoucher.debit_amount}</td>
                                </tr>
                              </>
                            );
                          })

                        }

                      </tbody>
                      <tfoot>
                        <tr>
                          <td colspan="4" className="text-right bold">Current Total</td>
                          <td className="text-right bold">₹{dealerledger?.item?.general_data?.current_total}</td>
                          {/* <td className="text-right bold">-</td> */}
                        </tr>
                        <tr>
                          <td colspan="4" className="text-right bold">Closing Balance</td>
                          <td className="text-right bold">₹{dealerledger?.item?.general_data?.debit_closing_balance}</td>
                          <td></td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </>
                  : <>
                    <div className="table-responsive">
                      <th className='mt-3'>There are no transactions</th>
                    </div>
                  </>

              }



            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default DealerLedgerComp
