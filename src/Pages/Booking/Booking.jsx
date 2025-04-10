import { Link } from "react-router-dom"
import Footer from "../../Components/Footer/footer"
import FooterSecond from "../../Components/FooterSec/footerSec"
import Header from "../../Components/Header/header"
import AccountInputProps from "../../Props/AccountInputProps/AccountInputProps"
import ButtonProps from "../../Props/ButtonProps/ButtonProps"
import HeroProps from "../../Props/HeroProps/HeroProps"
import RequestInput from "../../Props/RequestInput/requestInput"
import "./Booking.css"

const Booking = () => {
    return(
        <>
        <Header/>
         <HeroProps text="Booking"/>
         <div className="booking-indiv">
            {/* <h2>Add Your Informations :</h2> */}
            <h1 className="add-info">Add Your Informations :</h1>
            <form action="">
                <div className="input-booking">
                <AccountInputProps text="Name" type="text"/>
                <AccountInputProps text="Surname" type="text"/>
                <AccountInputProps text="Email" type="text"/>
                <AccountInputProps text="Telephone" type="text"/>
                <AccountInputProps text="Address" type="text"/>
                <AccountInputProps text="City" type="text"/>
                <AccountInputProps text="Country" type="text"/>
                <AccountInputProps text="ZIP" type="text"/>
                </div>
                <div>
                    <RequestInput color="request-input-textarea" text="Requests" type="text"/>
                    <RequestInput color="request-input-textareas" text="Arrival" type="text"/>
                    <RequestInput color="request-input-textareas" text="Coupon" type="text"/>
                </div>
                <div>
                    <div className="check-terms">
                        <input type="checkbox" />
                        <p>Terms and conditions</p>
                    </div>
                  <Link to="/checkout"><ButtonProps color="book-checkout" label="CHECKOUT"/></Link>  
                </div>
            </form>
         </div>
         <FooterSecond/>
        </>
    )
}

export default Booking