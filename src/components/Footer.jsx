import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscription = async (e) => {
    e.preventDefault();
    setStatus("Subscribing...");

    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setStatus("submitted");
      setEmail(""); 
    } else {
      setStatus("error");
    }
  };

  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <a href="#header" className="scrollto footer-logo">
                <img src="assets/img/hero-logo.png" alt="" />
              </a>
              <h3>Ketan Brothers</h3>
              <p>
                Diamonds Beyond Imagination: Crafting Excellence Since 1940.
              </p>
            </div>
          </div>
          {/* Newsletter */}
          <div className="row footer-newsletter justify-content-center">
            <div className="col-lg-6">
              <form onSubmit={handleSubscription} method="post">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={handleChange}
                />
                <input type="submit" value="Subscribe" />
              </form>
              {status === "Subscribing..." && <p>Subscribing...</p>}
              {status === "submitted" && <p>Subscription successful!</p>}
              {status === "error" && (
                <p>Subscription failed. Please try again.</p>
              )}
            </div>
          </div>
          <div className="social-links">
            <a href="#" className="facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" className="whatsapp">
              <i className="bx bxl-whatsapp"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom clearfix">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Ketan Brothers</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
