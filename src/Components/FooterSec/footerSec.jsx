import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "./footerSec.css"    
import logo from "../../assets/logo-2.png"

const FooterSecond = () => {
    return (
        <>
          <footer className="footers">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-about">
            <img className="footer-second-img" src={logo} alt="" />
          {/* <h2>G <span className="brand-name">RANDEUR</span></h2> */}
          <p>
          Welcome to Fames Place, where luxury meets comfort in the heart of Woji, PH
           Designed to offer a perfect blend of elegance
          </p>
          <a href="#" className="read-mores">READ MORE →</a>
        </div>

        {/* Useful Links */}
        <div className="footer-links">
          <h3>Useful Links</h3>
          <div className="links-wrapper">
            <ul>
              <li><a href="#">About Hotel</a></li>
              <li><a href="#">Press Room</a></li>
              <li><a href="#">Beverages</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Packages</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
            <ul>
              <li><a href="#">Team</a></li>
              <li><a href="#">Experience</a></li>
              <li><a href="#">Grid View</a></li>
              <li><a href="#">Offers</a></li>
              <li><a href="#">Breakfast</a></li>
              <li><a href="#">Detail Page</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3>Subscribe To Receive News Updates & Offers</h3>
          <input type="email" placeholder="Your Email Address..." />
          <button>SUBSCRIBE US</button>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>

          <p className="copyright">www.DownloadNewThemes.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>©️ {new Date().getFullYear()} RANDEUR. All rights reserved.</p>
        <p>www.DownloadNewThemes.com</p>
      </div>
    </footer>
        </>
    )
}

export default FooterSecond