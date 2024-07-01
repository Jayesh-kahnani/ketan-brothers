import React from 'react'

export default function Team() {
  return (
    <section id="team" className="team">
        <div className="container">

            <div className="section-title" data-aos="fade-up">
                <h2>Team</h2>
                <p>Unifying Brilliance: Our Team, Your Vision</p>
            </div>

            <div className="row">

                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                    <div className="member" data-aos="zoom-in">
                        <div className="member-img">
                            <img src="assets/img/team/team-1.jpg" className="img-fluid" alt=""/>
                                  {/* <div className="social">
                                <!--                                <a href=""><i className="bi bi-twitter"></i></a>-->
                                <!--                                <a href=""><i className="bi bi-facebook"></i></a>-->
                                <!--                                <a href=""><i className="bi bi-instagram"></i></a>-->
                                <!-- <a href=""><i className="bi bi-linkedin"></i></a> -->*/}
                            {/* </div>  */}
                        </div>
                        <div className="member-info">
                            <h4>Ketan B. Parikh</h4>
                            {/* <!--                            <span>Chief Executive Officer</span>--> */}
                            <p> a respected diamantaire with over 35 years of experience and expertise in finance and
                                administration</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                    <div className="member" data-aos="zoom-in" data-aos-delay="100">
                        <div className="member-img">
                            <img src="assets/img/team/team-2.jpg" className="img-fluid" alt=""/>
                            <div className="social">
                                {/* <!--                                <a href=""><i className="bi bi-twitter"></i></a>-->
                                <!--                                <a href=""><i className="bi bi-facebook"></i></a>-->
                                <!--                                <a href=""><i className="bi bi-instagram"></i></a>--> */}
                                <a href="https://www.linkedin.com/in/jaykparikh/"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="member-info">
                            <h4>Jay K. Parikh</h4>
                            {/* <!--                            <span>Product Manager</span>--> */}
                            <p>the mastermind behind the computerization of the diamond manufacturing and sales process.
                                He has a double major in Finance and IT from Carnegie Mellon University, USA</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                    <div className="member" data-aos="zoom-in" data-aos-delay="200">
                        <div className="member-img">
                            <img src="assets/img/team/team-3.jpg" className="img-fluid" alt=""/>
                            <div className="social">
                                {/* <!--                                <a href=""><i className="bi bi-twitter"></i></a>-->
                                <!--                                <a href=""><i className="bi bi-facebook"></i></a>-->
                                <!--                                <a href=""><i className="bi bi-instagram"></i></a>--> */}
                                <a href=""><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="member-info">
                            <h4>Apurva Kothari</h4>
                            {/* <!--                            <span>CTO</span>--> */}
                            <p> a vital part of the sales and marketing team at Mahendra Brothers for the last 15 years.
                                He has an MBA from Bryant University, USA and a Graduate Jeweller from GIA, USA</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
  )
}
