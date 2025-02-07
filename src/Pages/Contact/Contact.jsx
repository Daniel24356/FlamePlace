import Header from "../../Components/Header/header"
import Reservation from "../../Components/Reservation/reservation"
import HeroProps from "../../Props/HeroProps/HeroProps"
import "./Contact.css"
import GoogleMapComponent from "../../Components/GoogleMap/GoogleMap"
import Footer from "../../Components/Footer/footer"
import ButtonProps from "../../Props/ButtonProps/ButtonProps"
import ContactInputProps from "../../Props/ContactInputProps/ContactInputProps"

const mapContainerStyle = {
    width: "100%",
    height: "500px",
  };

const Contact = () => {
    return(
        <>
        <Header/>
         <HeroProps text="Contact"/>
         <Reservation/>
         <section className="contact-form-sec">
            <div>
                <p className="contact-us-txt">CONTACT US</p>
                <h1>Get In Touch</h1>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Duis porttitor tellus vel mauris scelerisque accumsan.</p>
                    <p>Maecenas quis nunc sed sapien dignissim pulvinar. Se d</p>
                    <p>at gravida.</p>
                </div>
                <ButtonProps color="view-prices" label="VIEW PRICES"/>
            </div>

            <div>
                <form action="">
                <ContactInputProps style="contact-input-div" type="text" placeholder="Name"/>
                <ContactInputProps style="contact-input-div" type="text" placeholder="Email"/>
                <ContactInputProps style="contact-input-divs" type="text" placeholder="Message"/>
                 <ButtonProps color="send" label="SEND"/>
                </form>       
            </div>
         </section>
         <div className="googlemaps">
           <GoogleMapComponent mapContainerStyle={mapContainerStyle}/>
         </div>
         <Footer/>
        </>
    )
}

export default Contact