import "./A-Sidebar.css"
import { FaHome } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { TiDocumentText } from "react-icons/ti";
import { FaRegBookmark } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-2.png"

const ASidebar = () => {
    return (
        <>
            <aside className="Asidebar">
                <div className="sidebar-fixed">
                <div className="admin-logo-div">
                    <img className="Admin-logo" src={logo} alt="" />
                    <div className="aheader-logo-txt">
                        <h3>Fame's Place</h3>
                        <p>Admin Dashboard</p>
                    </div>
                </div>
                <div className="Asidebar-under">
                    <div className="Asidebar-div">
                        <FaHome className="sidebar-icons"/>
                        <Link className="side-link" to="/admin"> Dashboard</Link>
                    </div>
                    <div className="Asidebar-div">
                        <TiDocumentText className="sidebar-icons"/>
                        <Link className="side-link" to="/admin/guestlist"> Guest List</Link>
                    </div>
                    <div className="Asidebar-div">
                        <FaRegUser className="sidebar-icons"/>
                        <Link className="side-link" to="/admin/roomlist">Rooms</Link>
                    </div>
                    <div  className="Asidebar-div">
                        <HiOutlineUsers className="sidebar-icons"/>
                        Rooms
                    </div>
                    <div className="Asidebar-div">
                        <FaRegBookmark className="sidebar-icons"/>
                        Booking
                    </div>
                    <div className="Asidebar-div">
                        <FaRegBookmark className="sidebar-icons"/>
                        Booking
                    </div>
                    <div className="Asidebar-div">
                        <FaRegBookmark className="sidebar-icons"/>
                        Booking
                    </div>
                    <div className="Asidebar-div">
                        <CiLogout className="sidebar-icons"/>
                        Logout
                    </div>
                </div>
                </div>
            </aside>
        </>
    )
}

export default ASidebar