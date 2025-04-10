import { Outlet } from "react-router-dom"
import AHeader from "../Header/A-Header"
import Amiddle from "../Middle/Amidddle"
import ASidebar from "../Sidebar/A-Sidebar"
import "./AdminDashboard.css"

const AdminDashboard = () => {
    return(
        <>
        <div className="admin-above">
            <div className="side-size">
            <ASidebar/>
            </div>
          <div className="admin-below">
            <div className="ad-head">
            <AHeader/>
            </div> 
            <div className="admin-middle">
            <Outlet/>
            </div>
          </div>
        </div>
         
        </>
    )
}

export default AdminDashboard