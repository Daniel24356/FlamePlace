import { Link } from "react-router-dom";
import ButtonProps from "../ButtonProps/ButtonProps";
import "./roomprops.css";
import { TbCurrencyNaira } from "react-icons/tb";

const RoomsProps = ({ first, second, third, fourth, imgColor, color = "primary" }) => {
    const btnStyle = `${color}`;
    const divStyle = `room-card ${imgColor}`;
    return (
        <div className={divStyle}>
            <div className="overlays"></div>

            {/* Room Name and Border Bottom */}
            <div className="room-header">
                <h3 className="room-name">{second}</h3>
                <div className="room-border"></div>
            </div>

            {/* Room Details (Hidden Initially, Appears After Name Moves) */}
            <div className="room-overlay">
                <p className="room-description">
                    Experience luxury and comfort in our elegantly designed {second},
                    featuring modern amenities and breathtaking views.
                </p>
                <div className="room-icons-div">
                    <div>
                        <p>{third}</p>
                    </div>
                    <div>
                        <p>{fourth}</p>
                    </div>
                </div>
             
                <div className="price-button-div">
                    <div className={btnStyle}>
                        <TbCurrencyNaira className="naira-icon" />
                        <p>{first}</p>
                    </div> 
                    <div className="btn-y">
                   <Link to="/booking"><ButtonProps color="book-now-smalls" label="book-now"/></Link> 
                    </div> 
                    
                    </div>
            </div>
            <div>
                
                </div>
        </div>
    );
};

export default RoomsProps;
