import HeaderProps from "../../Props/HeaderProps/HeaderProps.jsx"
import "./header.css"
import logo from "../../assets/logo-2.png"
import ButtonProps from "../../Props/ButtonProps/ButtonProps"
import TopHeader from "../TopHeader/TopHeader"
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom"

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
              <Link to='/room' className="home-link"> <HeaderProps label="Rooms" color="gray"/></Link>
              <HeaderProps label="About" color="gray"/>
              <HeaderProps label="Shop" color="gray"/>
              <HeaderProps label="Pages" color="gray"/>
              <HeaderProps label="News" color="gray"/>
              <HeaderProps label="Contact" color="gray"/>
            </div>
            <div className="book-menu">
            <div className="button-head">
               <ButtonProps label="Book Now" color="book-now" />
            </div>
            <div className="menu">
              <IoMdMenu/>
            </div>
            </div>
            </div>
         </nav>
        </>
    )
}

export default Header