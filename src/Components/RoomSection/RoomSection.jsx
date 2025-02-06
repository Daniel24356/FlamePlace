import RoomsProps from "../../Props/RoomProps/roomprops"
import "./RoomSection.css"


const RoomSection = () => {
    return(
        <>
        <section className="room-sec">
        <RoomsProps first="FROM 25 $" second="LOTUS" third="2 GUESTS" fourth="down left" color="room-pos"/>
        <RoomsProps first="FROM 25 $" second="DAISY" third="2 GUESTS" fourth="23 FT" color="room-black"/>
        <RoomsProps first="FROM 25 $" second="BLUEBELL" third="2 GUESTS" fourth="23 FT" color="room-black"/>
        <RoomsProps first="FROM 25 $" second="RISE" third="2 GUESTS" fourth="23 FT" color="room-black"/>
        <RoomsProps first="FROM 25 $" second="SNOWDROP" third="2 GUESTS" fourth="23 FT" color="room-black"/>
        <RoomsProps first="FROM 25 $" second="LOTUS" third="2 GUESTS" fourth="23 FT" color="room-black"/>
        </section>
         
        </>
    )
}

export default RoomSection