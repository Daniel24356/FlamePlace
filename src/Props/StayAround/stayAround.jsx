import ButtonProps from "../ButtonProps/ButtonProps"
import blog from "../../assets/IMG_9696.jpg"
import "./stayAround.css"
import { Link } from "react-router-dom";

const StayAround = ({first, imgStyle, img}) => {
    const btnStyle = ` ${imgStyle}`;
    return (
        <>
        <div className="stay-div">
            <img className={btnStyle} src={img} alt="" />
            <div className="stayAround-div">
                {/* <p className="stayAround-txt">March 14, 2022</p> */}
                <h2>{first}</h2>
                <div>
                 
                 <p> Experience luxury and comfort in our</p>
                 <p>elegantly designed LOTUS, featuring</p>
                 <p>modern amenities and breathtaking views.</p>
                </div>
              <Link to="/booking"><ButtonProps label="BOOK NOW" color="read-more"/></Link>  
            </div>
        </div>
        </>
    )
}

export default StayAround