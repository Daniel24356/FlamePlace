import "./A-Header.css"
import logo from "../../assets/logo-2.png"
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";
import { FaRegEnvelope } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuMessageSquareText } from "react-icons/lu";
import profile from "../../assets/profile.png"

const AHeader = () => {
    return(
        <>
        <nav className="Aheader">
            <div className="Aheader-div">
                <div className="Aheader-innerdiv"> 
                    <div className="dash-icon">
                    <HiOutlineMenuAlt2 className="a-menu"/>
                    <p>Dashboard</p>
                    </div>
                    <div className="search-box">
                        <input type="text" placeholder="Search.." />
                       <HiOutlineSearch className="Asearch-icon"/>
                    </div>
                </div>
            </div>
            <div className="not-profile">
                <div className="red-icon">
                <FaRegEnvelope className="admin-left-icons"/>
                 <div className="red-div">20</div>
                </div>
                 <div className="red-icon">
                 <IoMdNotificationsOutline className="admin-left-icons"/>
                 <div className="red-div">5</div>
                 </div>
                 <div className="red-icon">
                 <LuMessageSquareText className="admin-left-icons"/>
                 <div className="red-div">8</div>
                 </div>
                <img className="admin-profile" src={profile} alt="" />
            </div>
        </nav>
        </>
    )
}

export default AHeader

