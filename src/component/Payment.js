import React from "react";
import { Link } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  return (
    <div>
      <section class="pricing-section">
        <div class="container">
          <div class="sec-title text-center">
            <h3>Select Plans.</h3>
          </div>

          <div class="outer-box">
            <div class="row">
              <div class="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                <div class="inner-box">
                  <div class="icon-box">
                    <div class="icon-outer">
                      <img
                        className="imuu"
                        src="https://res.cloudinary.com/dgvvfn1gf/image/upload/v1675220810/new_logo_rhiway.png"
                      ></img>
                    </div>
                  </div>
                  <div class="price-box">
                    <div class="title">Free</div>
                    <h4 class="price"> ₹00.00</h4>
                  </div>
                  <ul class="features">
                    <li class="true">Before 6 Month Free</li>
                    <li class="true">Get Dashboard</li>
                    <li class="true">Now Use This</li>
                  </ul>
                  <Link to="/login">
                    <div class="btn-box">
                      <Link to="/login" class="theme-btn">
                        BUY PLAN
                      </Link>
                    </div>
                  </Link>
                </div>
              </div>

              <div
                class="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div class="inner-box">
                  <div class="icon-box">
                    <div class="icon-outer">
                      <img
                        className="imuu"
                        src="https://res.cloudinary.com/dgvvfn1gf/image/upload/v1675220810/new_logo_rhiway.png"
                        alt="payment"
                      ></img>
                    </div>
                  </div>
                  <div class="price-box">
                    <div class="title">Basic</div>
                    <h4 class="price">₹ 1,999.00</h4>
                  </div>
                  <ul class="features">
                    <li class="true">After 6 Month Paid</li>
                    <li class="true">Get Dashboard</li>
                    <li class="false">Coming Soon</li>
                  </ul>
                  <div class="btn-box">
                    <a
                      href="https://img.freepik.com/free-vector/red-grunge-style-coming-soon-design_1017-26691.jpg"
                      class="theme-btn"
                    >
                      BUY PLAN
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay="800ms"
              >
                <div class="inner-box">
                  <div class="icon-box">
                    <div class="icon-outer">
                      <img
                        className="imuu"
                        src="https://res.cloudinary.com/dgvvfn1gf/image/upload/v1675220810/new_logo_rhiway.png"
                      ></img>
                    </div>
                  </div>
                  <div class="price-box">
                    <div class="title">Advance</div>
                    <h4 class="price">₹ 3,499.00</h4>
                  </div>
                  <ul class="features">
                    <li class="true">1 Year Paid Plan</li>
                    <li class="true">Get Dashboard</li>
                    <li class="false">Coming Soon</li>
                  </ul>
                  <div class="btn-box">
                    <a
                      href="https://img.freepik.com/free-vector/red-grunge-style-coming-soon-design_1017-26691.jpg"
                      class="theme-btn"
                    >
                      BUY PLAN
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;
