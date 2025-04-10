import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "./footerSec.css";    
import logo from "../../assets/logo-2.png";
import { Link } from "react-router-dom";

const FooterSecond = () => {
    return (
        <>
          <footer className="footers">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-about">
            <img className="footer-second-img" src={logo} alt="Hotel Logo" />
          <p>
          Experience the ultimate in luxury and comfort at Fame's Place, located in the heart of Woji, PH. Indulge in world-class hospitality and serene ambiance.
          </p>
          <a href="#" className="read-mores">EXPLORE MORE →</a>
        </div>
          
        {/* Useful Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <div className="links-wrapper">
            <ul>
              <li><a href="#">Our Hotel</a></li>
              <li><a href="/room">Rooms</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="#">Dining & Cuisine</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
            <ul>
              <li><a href="#">Guest Experiences</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Breakfast & Dining</a></li>
              <li><a href="/room">Room Details</a></li>
              <li><a href="/account">Login</a></li>
              <li><a href="/account">Signup</a></li>
            </ul>
          </div>
          <div className="links-wrappers">
               <ul>
        <Link to="/" >Home</Link>
        <Link to="/room" >Rooms</Link>
        <Link to="/about" >About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/account">Login</Link>
        <Link to="/account">SignUp</Link>
               </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <div className="sus-footer">
          <h3>Subscribe for Exclusive Offers & Updates</h3>
          <input type="email" placeholder="Enter Your Email..." />
          <button>SUBSCRIBE</button>
          </div>
           
          {/* Social Icons */}
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>

          <p className="copyright">Fame's Place - Elevating Hospitality</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>©️ {new Date().getFullYear()} Fame's Place. All rights reserved.</p>
      </div>
    </footer>
        </>
    );
};

export default FooterSecond;
