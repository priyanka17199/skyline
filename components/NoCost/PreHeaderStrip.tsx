import styles from "../../styles/PreHeaderStrip.module.css";

const PreHeaderStrip = () => {

    return (
        <div>
            <div className={styles.no_cost_slider}>
            <div id="carouselExampleControls" className={`carousel slide ${styles.no_cost_emi_bg}`} data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className={`carousel-item ${styles.no_cost_carousel_item} active`} data-bs-interval="3000">
                        <p className="mb-0" style={{ textAlign: "center", color: "black", fontWeight: "600", fontSize: "12px" }}>No Cost EMI Available</p>
                    </div>
                    <div className={`carousel-item ${styles.no_cost_carousel_item}`} data-bs-interval="3000">
                        <a href="Bikes.pdf" target="_blank" style={{ textDecoration: "none" }}>
                            <p className="mb-0" data-toggle="modal" data-target="#exampleModalLong" style={{ textAlign: "center", color: "black", fontWeight: "600", fontSize: "12px" }}>
                                Click and Collect for Bike</p></a>


                    </div>
                    <div className="carousel-item no-cost-carousel-item" data-bs-interval="3000">
                        <p className="mb-0" style={{ textAlign: "center", color: "black", fontWeight: "600", fontSize: "12px" }}>Free shipping on order above
                            &#x20B9; 1000</p>
                    </div>
                </div>
                <button className={`carousel-control-prev ${styles.carousel_Arrow}`} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className={`carousel-control-prev-icon carousel-prev ${styles.carousel_arrow_icon}`} aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className={`carousel-control-next ${styles.carousel_Arrow}`} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className={`carousel-control-next-icon ${styles.carousel_arrow_icon}`} aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>
        </div>
    )
}

export default PreHeaderStrip