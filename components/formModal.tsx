import { Modal,Button } from "react-bootstrap";
import { useState} from "react";
import MissingParts from '../services/api/product_listing_api/missing_parts_api';
import ToastNotification from "./ToastNotification";

const FormModal = ({show,handlemodalclose,setShow}:any) => {
 
  const [partVal, setPartval] = useState<any>();
  const [modelVal, setModelval] = useState<any>();
  const [descriptionVal, setdescriptionval] = useState<any>();
  const [message, setMessage] = useState<any>();
  const [showToast, setshowToast] = useState(false);

const handleSubmit = async (e:any) => {
  e.preventDefault();
  const missingPartsApiRes = await MissingParts(null, partVal, modelVal, descriptionVal);
  setMessage(missingPartsApiRes.msg)

  if(missingPartsApiRes.msg=="success") {
    setshowToast(true);
    setPartval("");
    setModelval("");
    setdescriptionval("");
    setShow(false);
  }
}

console.log(message,"message")

  return (
    <>
      <ToastNotification
        setShow={setshowToast}
        show={showToast}
        content="Enquiry Send Successfully"
      />
      <Modal show={show} onHide={handlemodalclose}>
        <Modal.Header closeButton>
        <h3 className="text-center">Product Enquiry</h3>
        </Modal.Header>
        <Modal.Body>
        
            <div className="form-group">
              <label for="exampleInputEmail1">Item Part No.</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Item Part No."
                value={partVal}
                onChange = {(e)=> setPartval(e.target.value)}
              />
            </div>
            <div className="form-group mt-2">
              <label for="exampleInputPassword1">Model Of Item</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Model Of Item"
                value={modelVal}
                onChange = {(e)=> setModelval(e.target.value)}
              />
            </div>
            <div className="form-group mt-2">
            <label for="exampleFormControlTextarea1">Item Description</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}
         value={descriptionVal}
        onChange = {(e)=> setdescriptionval(e.target.value)}
        ></textarea>
     </div>
          <div className="text-right mt-4">
          <button  className="btn btn-primary" onClick={(e)=>handleSubmit(e)}>
            Save Changes
          </button>
         </div>
        </Modal.Body>  
      </Modal>
    </>
  );
};
export default FormModal;