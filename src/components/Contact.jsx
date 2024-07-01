import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="contact section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Connecting Brilliance: Reach Out to Us Today</p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div
              className="info d-flex flex-column justify-content-center"
              data-aos="fade-right"
            >
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>
                  <span>
                    <strong>Ketan Brothers Diamondz Exports</strong>
                  </span>
                </p>
                <p>
                  BW-5010A, 5th Floor, Tower B,
                  <br />
                  Bharat Diamond Bourse,
                  <br />
                  Bandra Kurla Complex, Bandra (E), Mumbai - 400051, India.
                </p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@ketanbrothers.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Tel:</h4>
                <p>+91-22-43563000</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
              data-aos="fade-left"
            >
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
        <div className="my-5">
          <p>
            Ketan Brothers Diamondz Exports has adopted RJC policies and
            procedures that documents its commitment to responsible business
            practices of RJC COP’s including policies on sourcing and human
            rights.
          </p>
          <p>
            All policies and corresponding due diligence are available on
            request. Any grievances related to sourcing policies of Ketan
            Brothers Diamondz Exports are received and resolved by the top
            management.
          </p>
          <p>
            The company’s annual supply chain due diligence systems and
            practices are also available as a memorandum on request.
          </p>
          <p>
            Request for the policy documents and or due diligence practices and
            grievances can be addressed to
            <a href="mailto:jay@ketanbrothers.com">jay@ketanbrothers.com</a>
            or Number <a href="tel:+912243563030">+912243563030</a>
          </p>
        </div>
        <div className="text-center">
          <img src="assets/img/rjc.jpg" alt="RJC" style={{ width: "145px" }} />
          <img
            src="assets/img/itraceit.jpg"
            alt="iTraceit"
            style={{ width: "100px" }}
          />
        </div>
      </div>
    </section>
  );
}
