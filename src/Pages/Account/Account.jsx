import Footer from "../../Components/Footer/footer"
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
              <ButtonProps color="login" label="LOG IN"/>
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
        <Footer/>
        </>
    )
}

export default Account