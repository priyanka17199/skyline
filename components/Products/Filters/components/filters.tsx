import { Spinner } from "react-bootstrap";
import styled from "../../../../styles/filter.module.css";

const Filters = ({filtersData, handleChange, handleClearFilter}:any) => {
    

    return (
        <div className="d-none d-lg-block col-lg-3">
            <div className="clear_filter mb-1">
                <a onClick={()=>handleClearFilter()} href="#" style={{ textDecoration: 'underline' }}>Clear Filter</a>
            </div>

            <div className="filter_section">
                <div className="filter_block">
                    <div className="accordion accordion_custom" id="myAccordion">
                        {filtersData && filtersData.length > 0 ? filtersData.map((item: any, index: any) => {
                            return (
                                <div className="accordion-item accordion_item_custom" key={index}>
                                    <h2 className="accordion-header bold filter_heading" id={"heading" + index} >
                                        <button type="button" className="text-uppercase accordion-button bold accordion_btn_custom"
                                            data-bs-toggle="collapse" data-bs-target={"#collapse" + index} aria-expanded={index === 0 ? "true" : "false"} aria-controls={"collapse" + index}>{item.section}</button>
                                    </h2>
                                    {/* <hr style={{margin:'10px 0 '}}/> */}

                                    <div id={"collapse" + index} className={index === 0 ? "accordion-collapse collapse custom_collapse_css show " : "accordion-collapse custom_collapse_css collapsed"}
                                        aria-labelledby={"heading" + index} >
                                        <div className="card-body p-0">
                                            {item.values.map((vals: any, innerIndex: any) => (
                                                <div className="form_check_filter" key={innerIndex}>
                                                    <input className="form_check_input" type="checkbox" value={vals}
                                                        id="flexCheckDefault" onChange={(e) => handleChange(e, item.section)}
                                                    />
                                                    <label className="form-check-label filter-label accordion-checkbox" htmlFor="flexCheckDefault">
                                                        {vals}
                                                    </label>
                                                </div>
                                            )
                                            )}
                                        </div>
                                    </div>
                                    {/* <hr style={{ margin: '10px 0 ' }} /> */}

                                </div>
                            )
                        }) : <Spinner animation="border" role="status" className={styled.spinner} />}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Filters