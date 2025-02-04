import "./TopHeader.css"
import { MdPayment } from "react-icons/md";
import { FaRegCheckSquare } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import avatar from "../../assets/avatar.jpg"

const TopHeader = () => {
    return(
        <>
        <div className="topHeader-div">
            <div className="topHeader-left">
            <div>
                <MdPayment/>
                <p>Payment Options</p>
            </div>
            <div>
                <FaRegCheckSquare/>
                <p>Terms Condition</p>
            </div>
            <p>US</p>
            <p>IT</p>
            <p>ES</p>
            </div>

            <div className="topHeader-right">
             <p>My Bookings</p>
             <div className="icon-divs">
             <BsEnvelope className="envelope-icons"/>
             <div className="num-div">4</div>
             </div>
              
             <p>Add Your Review</p>
             <div className="topHeader-acc">
                <img src={avatar} alt="" />
                <div>
                    <p>My Account</p>
                    <p>LOG IN</p>
                </div>
             </div>
            </div>
        </div>
        </>
    )
}


export default TopHeader