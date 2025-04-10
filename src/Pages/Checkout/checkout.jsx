import { useState } from "react"
import FooterSecond from "../../Components/FooterSec/footerSec"
import Header from "../../Components/Header/header"
import HeroProps from "../../Props/HeroProps/HeroProps"
import "./checkout.css"
import PayProps from "../../Props/PayProps/PayProps"

const Checkout = () => {

    const [activeTab, setActiveTab] = useState('CREDIT CARD');

    const renderComponent = () => {
      switch (activeTab) {
        case 'CREDIT CARD':
          return <PayProps text="Note: Wait the automatic return to the site to complete the transaction." />;
        case 'PAYPAL':
          return <PayProps text="Note: Your reservation will be confirmed when we receive the bank transfer" />;
        case 'BANK TRANSFER':
          return <PayProps text="Note: You could pay directly in our structure with any kind of credit card or cash." />;
        case 'PAYMENT ON ARRIVE':
          return <PayProps text="Note: This request is not a reservation but a simple request, we will get in touch with you." />;
        case 'BOOKING REQUEST':
          return <PayProps text="Note: Wait the automatic return to the site to complete the transaction." />;
        default:
          return null;
      }
    };
  
    const options = ['CREDIT CARD', 'PAYPAL', 'BANK TRANSFER', 'PAYMENT ON ARRIVE', 'BOOKING REQUEST'];

    return(
        <>
         <Header/>
         <HeroProps text="Checkout"/>
           <div className="checkout-divs">
            <h1 className="checkout-info">Your Informations :</h1>
            <div className="checkout-innerdiv">
            <div>
                <p className="checkout-name"><span className="checkout-name-span">Name:</span>igwe</p>
                <p className="checkout-name"><span className="checkout-name-span">Phone:</span>08074913822</p>
                <p className="checkout-name"><span className="checkout-name-span">Country:</span>Nigeria</p>
            </div>
            <div>
                <p className="checkout-name"><span className="checkout-name-span">Surname :</span>daniel</p>
                <p className="checkout-name"><span className="checkout-name-span">Address :</span>Agip Rd</p>
                <p className="checkout-name"><span className="checkout-name-span">ZIP:</span>123009</p>
            </div>
            <div>
                <p className="checkout-name"><span className="checkout-name-span">Email :</span>igwedaniel128@gmail.com</p>
                <p className="checkout-name"><span className="checkout-name-span">City :</span>Port Harcourt</p>
                <p className="checkout-name"><span className="checkout-name-span">Arrival :</span>I do not know</p>
            </div>
            </div>
           <div>
            <p className="checkout-name-span">Requests:</p>
            <div className="checkout-new">
                <p className="checkout-name-span">Extra Services :</p>
                <p className="checkout-name">Cleaning FEE</p>
            </div>
            <div className="checkout-new">
                <p className="checkout-name-span">Coupon :</p>
                <p className="checkout-name">Coupon :</p>
            </div>
            <div className="checkout-new">
                <p className="checkout-name-span">Tax :</p>
                <p className="checkout-name">Included 3 $ City Tax</p>
            </div>
           </div>
           </div>
           <div className="payment-container">
      <h1 className="title">Payment Options:</h1>
      <div className="tabs">
        {options.map(option => (
          <button
            key={option}
            className={`tab-btn ${activeTab === option ? 'active' : ''}`}
            onClick={() => setActiveTab(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {renderComponent()}
      </div>
    </div>
         <FooterSecond/>
        </>
    )
}

export default Checkout