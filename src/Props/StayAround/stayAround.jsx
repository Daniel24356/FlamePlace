import ButtonProps from "../ButtonProps/ButtonProps"
import blog from "../../assets/IMG_9696.jpg"
import "./stayAround.css"

const StayAround = ({first, imgStyle}) => {
    const btnStyle = ` ${imgStyle}`;
    return (
        <>
        <div >
            <img className={btnStyle} src={blog} alt="" />
            <div className="stayAround-div">
                <p className="stayAround-txt">March 14, 2022</p>
                <h2>{first}</h2>
                <div>
                 <p>Exciting new activities await at Fames</p>
                 <p>Place! From themed dining nights</p>
                 <p>and live entertainment to...</p>
                </div>
                <ButtonProps label="READ MORE" color="read-more"/>
            </div>
        </div>
        </>
    )
}

export default StayAround