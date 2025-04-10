import Header from "../../Components/Header/header"
import Reservation from "../../Components/Reservation/reservation"
import HeroProps from "../../Props/HeroProps/HeroProps"
import "./Contact.css"
import GoogleMapComponent from "../../Components/GoogleMap/GoogleMap"
import ButtonProps from "../../Props/ButtonProps/ButtonProps"
import ContactInputProps from "../../Props/ContactInputProps/ContactInputProps"
import FooterSecond from "../../Components/FooterSec/footerSec"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const mapContainerStyle = {
    width: "100%",
    height: "500px",
};

const Contact = () => {
    return (
        <>
            <Header />
            <HeroProps text="Contact" />
            <div className="contact-top">
            <Reservation />
            <h1 className="con-txt">If you have any questions don't hesitate to contact us.</h1>
            <section className="contact-form-sec">
                {/* <div>
                    <p className="contact-us-txt">CONTACT US</p>
                    <h1>Get In Touch</h1>
                    <div>
                        <p>We’re here to make your stay exceptional. Have questions? Contact our team for reservations, special requests, or inquiries. Visit us or call today – we look forward to welcoming you!</p>
                    </div>
                    <ButtonProps color="view-prices" label="VIEW PRICES" />
                </div> */}
                

                <div className="try-div">
                    <form className="contact-form-new" action="">
                        <p className="touch-get">GET IN TOUCH</p>
                        <ContactInputProps style="contact-input-div" type="email" placeholder="Enter your email address" />
                        <ContactInputProps style="contact-input-div" type="text" placeholder="Enter your name" />
                        <ContactInputProps style="contact-input-div" type="text" placeholder="Enter your subject" />
                        <ContactInputProps style="contact-input-divs" type="text" placeholder="Enter your message" />
                        <p className="field-txt">* All fields are mandatory</p>
                        <ButtonProps color="contact-btn-new" label="SEND MESSAGE" />
                    </form>
                </div>
                <div className="contact-new">
                    <p className="touch-get">INFORMATION</p>
                    <div className="field-me">
                    <div className="field-inner">
                       <FaLocationDot className="loc-icons"/>
                        <div>
                        <p className="address-con"> ADDRESS</p>
                        <p className="address-under">19 Eze Ihunwo Eze Ogbonda street, off Circular road, woji, PH, Rivers State.</p>
                        </div>
                    </div>
                    <div className="field-inner">
                       <FaPhoneAlt className="loc-iconss"/>
                       <div>
                       <p className="address-con"> PHONE/FAX</p>
                       <p className="address-under">Calls Us: +234 9079049309</p>
                       </div>
                    </div>
                    <div className="field-inner">
                        <MdEmail className="loc-icons"/>
                        <div>
                        <p className="address-con">E-MAIL</p>
                        <p className="address-under">famesplace@gmail.com</p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <div className="googlemaps">
                <GoogleMapComponent mapContainerStyle={mapContainerStyle} />
            </div>
            </div>
            <FooterSecond />
        </>
    )
}

export default Contact