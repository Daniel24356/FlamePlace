import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import HeaderProps from "../../Props/HeaderProps/HeaderProps.jsx";
import ButtonProps from "../../Props/ButtonProps/ButtonProps";
import TopHeader from "../TopHeader/TopHeader";
import logo from "../../assets/logo-2.png";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      if (scrollHeight > 500) { // Adjust this value as needed
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
     {isFixed && <div className="header-spacer"></div>}
      <nav className={`header ${isFixed ? "fixed" : ""}`}>
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="header-right">
          <div className="header-mid">
            <Link to="/" className="home-link">
              <HeaderProps label="Home" color="gray" />
            </Link>
            <Link to="/room" className="home-link">
              <HeaderProps label="Rooms" color="gray" />
            </Link>
            <Link to="/about" className="home-link">
              <HeaderProps label="About" color="gray" />
            </Link>
            <Link to="/contact" className="home-link">
              <HeaderProps label="Contact" color="gray" />
            </Link>
            <Link to="/account" className="home-link">
              <HeaderProps label="Signup" color="gray" />
            </Link>
            {/* <HeaderProps label="News" color="gray" /> */}
            <Link to="/account" className="home-link">
              <HeaderProps label="Login" color="gray" />
            </Link>
          </div>
          <div className="book-menu">
            <div className="button-head">
           <Link to="/booking"><ButtonProps label="Book Now" color="book-now" /></Link>   
            </div>

            <div className="menu" onClick={toggleMenu}>
              <IoMdMenu />
            </div>
          </div>
        </div>
      </nav>

      {/* Dropdown Menu - Moved Outside the Navbar */}
      <div className={`dropdown-menu ${isOpen ? "active" : ""}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/room" onClick={toggleMenu}>Rooms</Link>
        <Link to="/about" onClick={toggleMenu}>About</Link>
        {/* <Link to="/pages" onClick={toggleMenu}>Hotel Pictures</Link> */}
        {/* <Link to="/news" onClick={toggleMenu}>News</Link> */}
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        <Link to="/account" onClick={toggleMenu}>Login</Link>
        <Link to="/account" onClick={toggleMenu}>SignUp</Link>
        <Link to="/booking" onClick={toggleMenu}>Book now</Link>
      </div>
    </>
  );
};

export default Header;
