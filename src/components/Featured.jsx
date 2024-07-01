import React from 'react'

export default function Featured() {
    // <!-- ======= Featured Section ======= -->

  return (
    <section id="featured" className="featured mb-5">
        <div className="container">

            <div className="section-title" data-aos="fade-up">
                <h2>Offering</h2>
                <p>We have a wide range of diamonds to suit every taste and budget. Our offering includes:</p>
            </div>

            <div className="row">
                <div className="col-lg-6" data-aos="fade-right">
                    <div className="tab-content">
                        <div className="tab-pane active show" id="tab-1">
                            <figure>
                                <img src="assets/img/1.jpg" alt="" className="img-fluid"/>
                            </figure>
                        </div>
                        <div className="tab-pane" id="tab-2">
                            <figure>
                                <img src="assets/img/2.jpg" alt="" className="img-fluid"/>
                            </figure>
                        </div>
                        <div className="tab-pane" id="tab-3">
                            <figure>
                                <img src="assets/img/3.jpg" alt="" className="img-fluid"/>
                            </figure>
                        </div>
                        <div className="tab-pane" id="tab-4">
                            <figure>
                                <img src="assets/img/4.jpg" alt="" className="img-fluid"/>
                            </figure>
                        </div>
                        <div className="tab-pane" id="tab-5">
                            <figure>
                                <img src="assets/img/5.jpg" alt="" className="img-fluid"/>
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mt-4 mt-lg-0" data-aos="fade-left">
                    <ul className="nav nav-tabs flex-column">
                        <li className="nav-item">
                            <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">
                                <h4>Round diamonds</h4>
                                <p>The classNameic and most popular shape that never goes out of style.</p>
                            </a>
                        </li>
                        <li className="nav-item mt-2">
                            <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                                <h4>Fancy shapes</h4>
                                <p>The unique and creative shapes that express your personality and style.</p>
                            </a>
                        </li>
                        <li className="nav-item mt-2">
                            <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                                <h4>Fancy colors</h4>
                                <p>The rare and stunning colors that add a touch of glamour and elegance.</p>
                            </a>
                        </li>
                        <li className="nav-item mt-2">
                            <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
                                <h4>Certified diamonds</h4>
                                <p>The diamonds that come with certificates from reputable laboratories that attest to
                                    their quality and authenticity.</p>
                            </a>
                        </li>
                        <li className="nav-item mt-2">
                            <a className="nav-link" data-bs-toggle="tab" href="#tab-5">
                                <h4>Non-certified diamonds</h4>
                                <p>The diamonds that do not have certificates but are still of high quality and
                                    value.</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </section>)
    {/* <!-- End Featured Section-- > */}
 
}
