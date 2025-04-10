import AmidProps from "../../Props/A-midProps/AmidProps"
// import First from "../../assets/logo-2.png"
import "./Afirst.css"
import { IoBedOutline } from "react-icons/io5";
import { IoIosLogIn } from "react-icons/io";
import { CiLogout } from "react-icons/ci";

const AFirst = () => {
    return(
        <>
        <div className="Afirst">
        <AmidProps img={<IoBedOutline className="bed-icons"/>} first="8,461" second="New Booking"/>
        <AmidProps img={<IoBedOutline className="bed-icons"/>} first="8,461" second="New Booking"/>
        <AmidProps img={<IoIosLogIn className="bed-icons"/>} first="8,461" second="New Booking"/>
        <AmidProps img={<CiLogout className="bed-icons"/>} first="8,461" second="New Booking"/>
        </div>
        </>
    )
}

export default AFirst