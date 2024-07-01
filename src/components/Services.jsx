import React from 'react'

export default function Services() {
  return (
    <section id="services" className="services why-us py-5">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>We offer a variety of services to our customers, including:</p>
        </div>

        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="icon-box mt-5 mt-lg-0" data-aos="fade-up">
              <i className="bx bx-receipt"></i>
              <h4>Customized orders</h4>
              <p>
                We can create any diamond according to your specifications and
                preferences.
              </p>
            </div>
            <div
              className="icon-box mt-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <i className="bx bx-cube-alt"></i>
              <h4>Online inventory</h4>
              <p>
                We have an online inventory available on all leading platforms
                like Rapnet, IDEX, etc. .
              </p>
            </div>
            <div
              className="icon-box mt-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <i className="bx bx-images"></i>
              <h4>Delivery</h4>
              <p>
                We deliver our diamonds to your doorstep with speed and
                security.
              </p>
            </div>
            <div
              className="icon-box mt-5"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i className="bx bx-shield"></i>
              <h4>After-sales support</h4>
              <p>
                We provide after-sales support and assistance to ensure your
                satisfaction and loyalty.
              </p>
            </div>
          </div>
          <div
            className="image services-bg-img col-lg-6 order-1 order-lg-2"
            data-aos="fade-left"
            data-aos-delay="100"
          ></div>
        </div>
      </div>
    </section>
  );
}
