import ContactProps from "../../Props/ContactProps/ContactProps"
import GoogleMapComponent from "../GoogleMap/GoogleMap"
import call from "../../assets/call-img.png"
import envelop from "../../assets/envelop-img.png"

const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

const FooterTop = () => {
    return(
        <>
        <section>
        <div className="footer-inner"> 
                <div className="google-map">
              <GoogleMapComponent mapContainerStyle={mapContainerStyle}/>
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
        </section>
        </>
    )
}

export default FooterTop