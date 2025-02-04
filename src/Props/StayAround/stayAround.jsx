import ButtonProps from "../ButtonProps/ButtonProps"
import blog from "../../assets/blog-1.jpg"
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
                 <p>Phasellus enim libero, blandit vel sapien</p>
                 <p>vitae, condimentum ultricies magna et.</p>
                 <p>Quisque euismod orci utet.</p>
                </div>
                <ButtonProps label="READ MORE" color="read-more"/>
            </div>
        </div>
        </>
    )
}

export default StayAround