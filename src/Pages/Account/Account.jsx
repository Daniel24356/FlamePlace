
import { Link } from "react-router-dom"
import FooterSecond from "../../Components/FooterSec/footerSec"
import Header from "../../Components/Header/header"
import AccountInputProps from "../../Props/AccountInputProps/AccountInputProps"
import ButtonProps from "../../Props/ButtonProps/ButtonProps"
import HeroProps from "../../Props/HeroProps/HeroProps"
import "./Account.css"

const Account = () => {
    return(
        <>
        <Header/>
        <HeroProps text="Account"/>
         <section className="Account-sec">
            <form className="account-form" action="">
               <ButtonProps color="already-member" label="ALREADY A MEMBER"/>
               <h3>Log In</h3>
               <AccountInputProps text="Username" type="text"/>
               <AccountInputProps text="Password" type="text"/>
               <div className="remember-div">
                 <input type="checkbox" />
                <label>Remember Me</label>
               </div>
               <Link to="/admin">
               <ButtonProps color="login" label="LOG IN"/>
               </Link>
              
            </form>
            <form className="account-form" action="">
            <ButtonProps color="already-members" label="I DO NOT HAVE AN ACCOUNT"/>
            <h3>Registration</h3>
            <AccountInputProps text="Username" type="text"/>
            <AccountInputProps text="Password" type="text"/>
            <AccountInputProps text="Email" type="text"/>
            <AccountInputProps text="FirstName" type="text"/>
            <AccountInputProps text="LastName" type="text"/>
            <AccountInputProps text="NickName" type="text"/>
            <ButtonProps  color="login" label="REGISTRATION"/>
            </form>
         </section>
        <FooterSecond/>
        </>
    )
}

export default Account