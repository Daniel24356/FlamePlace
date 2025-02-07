import SmartProps from "../../Props/SmartProps/SmartProps"
import DocProps from "../../Props/DocProps/DocProps"
import StayWalk from "../../Props/StayWalk/stayWalk"
import "./SingleRoom.css"
import starImg from "../../assets/star-img.png"
import roomImg from "../../assets/IMG_9715.jpg"
import userImg from "../../assets/user.svg"
import television from "../../assets/television.png"

const SingleRoom = () => {
    return(
        <>
        <section>
            <div className="single-room-text-div">
            <h1>Small Room</h1>
            <div>
                <p>HOTEL ROME</p>
                <img src={starImg} alt="" />
            </div>
            </div>
            
            <div className="single-div">
                <div className="room-img">
                  <img src={roomImg} alt="" />
                </div>

                <div className="room-details">
                    <SmartProps img={userImg} color="smartPropss" first="1 GUESTS"/>
                    <SmartProps img={userImg} color="smartPropss" first="15 ft"/>
                    <SmartProps img={userImg} color="smartPropss" first="56$ / PER NIGHT"/>
                    <SmartProps img={userImg} color="smartPropss" first="WEEK PRICE"/>
                </div>

                <div className="single-room-text">
                    <p>Cras malesuada mauris tortor, id tempus mauris blandit sit amet. Morbi a velit efficitur, porttitor metus et,</p>
                    <p>interdum nunc. Phasellus ut elementum diam. Aliquam erat volutpat. Nunc et facilisis elit. Donec</p>
                    <p>consectetur nibh vel gravida aliquet. Suspendisse sit amet lectus tristique, condimentum libero vel, porta</p>
                    <p>justo. Proin sit amet porta nibh. Pellentesque leo lorem, blandit quis hendrerit a, suscipit dapibus nulla.</p>
                    <p>Aenean ut facilisis felis. Cras tincidunt elementum neque, id viverra magna viverra et. Nam tincidunt urna</p>
                    <p>sed urna vehicula fringilla. Curabitur bibendum dictum nunc, ut elementum nibh efficitur gravida. Phasellus</p>
                    <p>luctus scelerisque libero, nec lobortis tortor volutpat at. Nam vitae turpis in est tristique placerat id sed</p>
                    <p>tortor. Vivamus luctus sed nibh ac cursus. Sed vel ligula non risus tempus fermentum.</p>
                </div>

                <div className="room-me-service">
                <h2 className="room-service-txt">Room Services</h2>
                <div className="room-doc-div">
                    <DocProps img={television} label="Swimming Pool"/>
                    <DocProps img={television} label="Television"/>
                    <DocProps img={television} label="No Smoking"/>
                    <DocProps img={television} label="Private Bathroom"/>
                </div>
                </div>
                
                <div className="room-me-service">
                <h2 className="room-service-txt">Around The Hotel</h2>
                <div className="room-around-div">
                    <StayWalk first="Relax Zone" color="stayWalk-divss"  />
                    <StayWalk first="Relax Zone" color="stayWalk-divss"  />
                    <StayWalk first="Relax Zone" color="stayWalk-divss"  />
                </div>
                </div>
                
               
            </div>
        </section>
        </>
    )
}

export default SingleRoom