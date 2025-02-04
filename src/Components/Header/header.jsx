import HeaderProps from "../../Props/HeaderProps/HeaderProps.jsx"
import "./header.css"
import logo from "../../assets/logo-2.png"
import ButtonProps from "../../Props/ButtonProps/ButtonProps"
import TopHeader from "../TopHeader/TopHeader"


const Header = () => {
    return(
        <>
        <TopHeader/>
         <nav className="header">
            <div>
                <img src={logo} alt="" />
            </div>
            <div className="header-right">
            <div className="header-mid">
              <HeaderProps label="Home" color="gray"/>
              <HeaderProps label="Rooms" color="gray"/>
              <HeaderProps label="About" color="gray"/>
              <HeaderProps label="Shop" color="gray"/>
              <HeaderProps label="Pages" color="gray"/>
              <HeaderProps label="News" color="gray"/>
              <HeaderProps label="Contact" color="gray"/>
            </div>
            <div>
               <ButtonProps label="Book Now" color="book-now" />
            </div>
            </div>
         </nav>
        </>
    )
}

export default Header