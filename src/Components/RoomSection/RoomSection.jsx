import RoomsProps from "../../Props/RoomProps/roomprops"
import "./RoomSection.css"


const RoomSection = () => {
    return(
        <>
        <section className="room-sec">
        <RoomsProps first="FROM 25 $" second="Double Room" third="2 GUESTS" fourth="23 FT" color="room-pos"/>
        <RoomsProps first="FROM 25 $" second="Family Room" third="2 GUESTS" fourth="23 FT" color="room-black"/>
        <RoomsProps first="FROM 25 $" second="Luxury Room" third="2 GUESTS" fourth="23 FT" color="room-black"/>
        <RoomsProps first="FROM 25 $" second="Apartment" third="2 GUESTS" fourth="23 FT" color="room-black"/>
        <RoomsProps first="FROM 25 $" second="Room with View" third="2 GUESTS" fourth="23 FT" color="room-black"/>
        <RoomsProps first="FROM 25 $" second="Small Room" third="2 GUESTS" fourth="23 FT" color="room-black"/>
        </section>
         
        </>
    )
}

export default RoomSection