import StayAround from "../../Props/StayAround/stayAround"
import StayWalk from "../../Props/StayWalk/stayWalk"
import "./StayTuned.css"
import resort from "../../assets/IMG_9715.jpg"

const StayTuned = () => {
    return(
        <>
        <section className="stayTuned-sec">
        <div className="stayTuned-text-div">
            <p className="stay-hotel">HOTEL NEWS & EVENT</p>
            <h1>Stay Tuned</h1>
            <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci nisl, tempus ut sem a,</p>
            <p>scelerisque sollicitudin arcu.</p>
            </div>
        </div>

        <div className="tuned-div">
            <div className="tuned-me">
                <StayAround first="New Website" imgStyle="imagefirst"/>
                <img className="tune-imgs" src={resort} alt="" />
                <div className="tune-display">
                <StayWalk first="Relax Zone" color="stayWalk-div"  />
                </div>
            </div>
            <div className="tuned-me">
                <img className="tune-img" src={resort} alt="" />
            <StayAround first="New Website" imgStyle="imagesecond"/>
            <div className="tune-display">
                <StayWalk first="Relax Zone" color="stayWalk-div"  />
                </div>
            </div>
            <div className="tuned-me">
                <div className="tuned-now">
                <StayWalk first="Relax Zone" color="stayWalk-div"  />
                <StayWalk first="Daily Walk" color="stayWalk-divs" />
                </div>
            </div>
        </div>
        </section>
      
        </>
    )
}

export default StayTuned