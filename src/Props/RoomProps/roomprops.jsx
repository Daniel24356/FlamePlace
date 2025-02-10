import "./roomprops.css"
import { TbCurrencyNaira } from "react-icons/tb";

const RoomsProps = ({first, second, third, fourth, imgColor, color = 'primary'}) => {
    const btnStyle = `${color}`;
    const divStyle = `room-card ${imgColor}`
    return(
        <>
          <div className={divStyle}>
            <div className="overlays"></div>

            <div className="room-overlay">
            <div class="room-info">
            <h3 class="room-name">{second}</h3>
            <p className="">Experience luxury and comfort in our elegantly designed {second},
               featuring modern amenities and breathtaking views</p>
             </div>
            </div>

            <div className={btnStyle}>
                <TbCurrencyNaira className="naira-icon"/>
                <p>{first}</p>
            </div>
            <div className="roomprops-content">
            <div>
                <h1 className="room-name">{second}</h1>
                <div className="room-icons-div">
                    <div>
                      {/* icons */}
                      <p>{third}</p>
                    </div>
                    <div> 
                      {/* icons */}
                      <p>{fourth}</p>
                    </div>
                </div>
            </div>
            </div>
          </div>
        </>
    )
}

export default RoomsProps