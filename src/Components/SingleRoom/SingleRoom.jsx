import SmartProps from "../../Props/SmartProps/SmartProps";
import DocProps from "../../Props/DocProps/DocProps";
import StayWalk from "../../Props/StayWalk/stayWalk";
import "./SingleRoom.css";
import starImg from "../../assets/star-img.png";
import roomImg1 from "../../assets/image-1.jpg";
import roomImg2 from "../../assets/barca.webp";
import roomImg3 from "../../assets/room-1.jpeg";
import roomImg4 from "../../assets/tokyo.jpg";
import userImg from "../../assets/user.svg";
import television from "../../assets/television.png";
import RoomImageSlider from "../RoomImageSlider/RoomImageSlider";

const SingleRoom = () => {
    const images = [roomImg1, roomImg2, roomImg3, roomImg4];

    return (
        <>
            <section>
                <div className="single-room-text-div">
                    <h1>SnowDrop</h1>
                    <div>
                        <p>FAME'S PLACE HOTEL</p>
                        <img src={starImg} alt="Rating Stars" />
                    </div>
                </div>

                <div className="single-div">
                    <div>
                        <RoomImageSlider images={images} />
                    </div>

                    <div id="description" className="room-details">
                        <SmartProps img={userImg} color="smartPropss" first="1 GUEST" />
                        <SmartProps img={userImg} color="smartPropss" first="15 ft² Space" />
                        <SmartProps img={userImg} color="smartPropss" first="₦30,000 / NIGHT" />
                        <SmartProps img={userImg} color="smartPropss" first="Weekly Discount Available" />
                    </div>

                    <div className="single-room-text">
                        <p>
                            Experience luxury in our elegant SnowDrop Suite, designed for travelers seeking comfort and
                            style. With modern interiors and a serene ambiance, this room is perfect for a restful stay.
                        </p>
                        <p>
                            Featuring premium bedding, soundproof windows, and a work-friendly space, the suite is ideal
                            for both leisure and business travelers. Enjoy complimentary Wi-Fi, air-conditioning, and 24/7 room service.
                        </p>
                        <p>
                            Unwind with access to our exclusive lounge and wellness spa. Whether you're here for a night or an extended stay, Fame's Place Hotel ensures a memorable experience.
                        </p>
                    </div>

                    <div id="room-service" className="room-me-service">
                        <h2 className="room-service-txt">Room Amenities</h2>
                        <div className="room-doc-div">
                            <DocProps img={television} label="Smart TV with Netflix" />
                            <DocProps img={television} label="High-Speed Wi-Fi" />
                            <DocProps img={television} label="Complimentary Breakfast" />
                            <DocProps img={television} label="Private Ensuite Bathroom" />
                        </div>
                    </div>

                    <div id="around-hotel" className="room-me-service">
                        <h2 className="room-service-txt">Explore The Hotel</h2>
                        <div className="room-around-div">
                            <StayWalk first="Lounge" color="stayWalk-div" />
                            <StayWalk first="Reception" color="stayWalk-divs" />
                            <StayWalk first="Bar" color="stayWalk-divss" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SingleRoom;
