import React from 'react'
import Image from "next/image";
import styled from "../../../styles/DealerHomeAccounts.module.css";
import Link from 'next/link';
import useDealerLedger from '../../../hooks/dealer_hooks/dealer_ledger_hook';

const Accounts = () => {
  const {dealersledger , dealerLedgerSummery}:any = useDealerLedger();
  console.log("dl summery in accounts", dealerLedgerSummery)
  return (
    <div className={`container ${styled.dealerAccountsMainDiv}`}>
      <div className="mt-3 pd7 mb-5 row">
          <div className="mb-3 mb-sm-0 col-sm-4">
            <div
              className="h-100 card"
              style={{ backgroundColor: " rgb(251, 233, 231)" }}
            >
              <div className="text-center card-body">
                <div>
                  <h6 className="bold mb-2 black"style={{ fontSize: "14px", fontFamily: "Ubuntu, sans-serif" }}>Remaining Credit Balance</h6>
                  <h4 className="mb-0 black"style={{ fontSize: "14px", fontFamily: "Ubuntu, sans-serif" }}>
                    <i className="fa fa-inr pe-1"></i>{dealerLedgerSummery.remaining_credit_balance}
                  </h4>
                </div>
                <hr />
                <div>
                  <h6 className="bold mb-2 black" style={{ fontSize: "14px", fontFamily: "Ubuntu, sans-serif" }}>Total Credit Amount</h6>
                  <h4 className="mb-0 black" style={{ fontSize: "14px", fontFamily: "Ubuntu, sans-serif" }}>
                    <i className="fa fa-inr pe-1"></i>{dealerLedgerSummery.total_credit_amount}
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            <div
              className="h-100 card"
              style={{ backgroundColor: " rgb(255, 249, 196)" }}
            >
              <div className="text-center card-body">
                <div className="row">
                  <div className="col-12">
                    <div>
                      <h6 className="bold mb-4 black" style={{ fontSize: "14px", fontFamily: "Ubuntu, sans-serif" }}>
                        Payment not required at this time
                      </h6>
                        <Image
                        src="data:image/png;base64,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"
                        alt="checked img"
                        width={40}
                        height={40}/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="text-end mt-3 col-lg-12">
                    <Link href="/dealer-ledger">
                    <a className="view_statement" >
                      View Statement
                    </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Accounts
