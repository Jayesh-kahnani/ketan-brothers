
// src/components/Contact.jsx
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("submitted");
        setFormData({ name: "", email: "", subject: "", message: "" });
        console.log(formData);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

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
                  <strong>Ketan Brothers Diamondz Exports</strong>
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
              onSubmit={handleSubmit}
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
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="my-3">
                {status === "submitting" && (
                  <div className="loading">Submitting...</div>
                )}
                {status === "error" && (
                  <div className="error-message">Failed to send message</div>
                )}
              </div>
              <div className="text-center">
                <button type="submit" disabled={status === "submitting"}>
                  {status === "submitting" ? "sending" : "Send Message"}
                </button>
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
            alt="RJC"
            style={{ width: "100px" }}
          />
        </div>
      </div>
    </section>
  );
}
