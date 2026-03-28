"use client";
import { useState } from "react";
import "./footer.css";

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* TOP SECTION */}
        <div className="footer-top">
          <div className="newsletter">
            <h3>BE THE FIRST TO KNOW</h3>
            <p>Sign up for updates from mettā muse.</p>
            <div className="input-group">
              <input type="email" placeholder="Enter your e-mail..." />
              <button className="subscribe-btn">SUBSCRIBE</button>
            </div>
          </div>

          <div className="contact-info">
            <div className="contact-item">
              <h3>CONTACT US</h3>
              <p>+44 221 133 5360</p>
              <p>customercare@mettamuse.com</p>
            </div>
            <div className="currency-item">
              <h3>CURRENCY</h3>
              <div className="currency-display">
                <img src="https://flagcdn.com/w20/us.png" alt="USA" />
                <span>+ USD</span>
              </div>
              <p className="currency-note">
                Transactions will be completed in Euros and a currency reference is available on hover.
              </p>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* BOTTOM SECTION */}
        <div className="footer-bottom">
          {/* Column 1: mettā muse */}
          <div className={`footer-col ${openSection === 'metta' ? 'open' : ''}`}>
            <div className="col-header" onClick={() => toggleSection('metta')}>
              <h4>mettā muse</h4>
              <i className="ri-arrow-down-s-line"></i>
            </div>
            <ul className="col-links">
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div className={`footer-col ${openSection === 'links' ? 'open' : ''}`}>
            <div className="col-header" onClick={() => toggleSection('links')}>
              <h4>QUICK LINKS</h4>
              <i className="ri-arrow-down-s-line"></i>
            </div>
            <ul className="col-links">
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Column 3: Follow Us & Payment */}
          <div className="footer-col-group">
            <div className={`footer-col ${openSection === 'follow' ? 'open' : ''}`}>
              <div className="col-header" onClick={() => toggleSection('follow')}>
                <h4>FOLLOW US</h4>
                <i className="ri-arrow-down-s-line"></i>
              </div>
              <div className="social-links">
                <div className="icon-circle"><i className="ri-instagram-line"></i></div>
                <div className="icon-circle"><i className="ri-linkedin-fill"></i></div>
              </div>
            </div>

            <div className="payment-section">
              <h4>mettā muse ACCEPTS</h4>
              <div className="payment-icons">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Google_Pay_%28GPay%29_Logo.svg" alt="GPay" className="pay-img" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="pay-img" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/PayPal_logo_with_name.svg" alt="Paypal" className="pay-img" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Amex_logo_2015.png" alt="Amex" className="pay-img" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" alt="ApplePay" className="pay-img" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Shopify_logo.svg" alt="ShopPay" className="pay-img" />
              </div>
            </div>
          </div>
        </div>

        <p className="copyright">
          Copyright © 2023 mettamuse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}