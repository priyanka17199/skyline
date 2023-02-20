import styles from "../../styles/VideoSection.module.css";
// import scott from '../assets/img/scott.png';

const VideosSection = () => {
    return (
        <>
            <section className={styles.yt_video}>
                <div className={styles.youtube_video}>
                    <div className="container ">
                        <div className="row mt-5">

                            <div className="col col-md-10 offset-md-1 col-lg-8 offset-lg-2">

                                <div id="carouselExampleControls" className="carousel slide" data-bs-interval="false">
                                    <div className="carousel-inner">
                                        <div className="carousel-item ">
                                            <div className="ratio ratio-16x9">
                                                <iframe src="https://www.youtube.com/embed/xsCFbftMhM0" style={{ maxWidth: '100%', height: "100%" }} allowFullScreen>
                                                </iframe>
                                            </div>
                                        </div>
                                        <div className="carousel-item active">
                                            <div className="ratio ratio-16x9">

                                                <iframe src="https://www.youtube.com/embed/P6vyHXG7Y1s" style={{ maxWidth: '100%', height: "100%" }} allowFullScreen>

                                                </iframe>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="ratio ratio-16x9">
                                                <iframe src="https://www.youtube.com/embed/9tdyBkDgGzQ" style={{ maxWidth: '100%', height: "100%" }} allowFullScreen>
                                                </iframe>
                                            </div>
                                        </div>
                                    </div>
                                    <button className={`carousel-control-prev ${styles.carousel_Arrow}`} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className={`carousel-control-next ${styles.carousel_Arrow}`} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>




                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default VideosSection