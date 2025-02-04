import "./footer.css"
import ButtonProps from "../../Props/ButtonProps/ButtonProps"
import ContactProps from "../../Props/ContactProps/ContactProps"
import SupportProps from "../../Props/SupportProps/SupportProps"
import call from "../../assets/call-img.png"
import envelop from "../../assets/envelop-img.png"
import GoogleMapComponent from "../GoogleMap/GoogleMap"
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return(
        <>
         <footer className="footer">
            <div className="footer-inner"> 
                <div className="google-map">
              <GoogleMapComponent/>
                </div>   
             <ContactProps 
             icon={call}
             contactText="Contact Us" 
             reserveText="Reservation :" 
             number="+ 202 303 404" 
             bookingText="Booking :" 
             numberTwo="+ 414 123 404"
             color="contact-div"
             />

             <ContactProps 
             icon={envelop}
             contactText="Drop a Line" 
             reserveText="Information :" 
             number="info@hotel.com" 
             bookingText="Reception :" 
             numberTwo="book@hotel.com"
             color="contact-divs"
             />
            </div>

            <div className="footer-down">
             <div className="foot-down-div">
              <SupportProps supportText="Phone Support" timeText="24 HOURS A DAY"/>
              <h2 className="phone-number">+ 01 345 647 745</h2>
             </div>
             <div className="foot-down-div">
             <SupportProps supportText="Connect With Us" timeText="SOCIAL MEDIA CHANNELS"/>
             <div className="social-icons-div">
                <FaInstagram className="social-icons"/>
                <FaTwitter className="social-icons"/>
                <FaFacebook className="social-icons"/>
                <FaPinterest className="social-icons"/>
                <FaYoutube className="social-icons"/>
             </div>
             </div>
             <div className="foot-down-div">
             <SupportProps supportText="Newsletter" timeText="SIGN UP FOR SPECIAL OFFERS"/>
             <div className="input-btn-div">
                <div className="email-input-div">
                <input type="email" placeholder="Insert your email" />
                </div>
                 <ButtonProps label="SUBSCRIBE" color="suscribe"/>
             </div>
             </div>
            </div>
         </footer>
        </>
    )
}

export default Footer