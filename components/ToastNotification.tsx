import { Toast, ToastContainer } from "react-bootstrap";

interface props {
    setShow: any,
    show: any,
    content: any
}

const ToastNotification = ({ setShow, show, content }: props) => {
    // console.log('toast noticfication');
    return (

       
         <ToastContainer className="p-3 toast_custom_css " >
            <Toast
                onClose={() => setShow(false)}
                show={show}
                delay={3000}
                autohide
            >
                {content !== "Added to Cart" && content !== "Register Successfully" ? <Toast.Body className="p-4 fs-6" style={{backgroundColor: "red", color: "white"}}>{content}</Toast.Body>: 
                <Toast.Body className="fs-6 p-4" style={{backgroundColor: "grey", color: "white"}}>{content}</Toast.Body>  }
                
            </Toast>
        </ToastContainer>
    )
}
export default ToastNotification