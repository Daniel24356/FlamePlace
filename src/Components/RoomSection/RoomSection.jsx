import RoomsProps from "../../Props/RoomProps/roomprops"
import "./RoomSection.css"


const RoomSection = () => {
    return(
        <>
        <section className="room-sec">
        <RoomsProps first="FROM 25 $" imgColor="roomprops-div" second="LOTUS" third="2 GUESTS" fourth="down left" color="room-pos"/>
        <RoomsProps first="FROM 25 $" imgColor="roompropss-div" second="DAISY" third="2 GUESTS" fourth="23 FT" color="room-black"/>
        <RoomsProps first="FROM 25 $" imgColor="roompropsss-div" second="BLUEBELL" third="2 GUESTS" fourth="23 FT" color="room-black"/>
        <RoomsProps first="FROM 25 $" imgColor="roompropssss-div" second="RISE" third="2 GUESTS" fourth="23 FT" color="room-black"/>
        <RoomsProps first="FROM 25 $" imgColor="roompropsssss-div" second="SNOWDROP" third="2 GUESTS" fourth="23 FT" color="room-black"/>
        <RoomsProps first="FROM 25 $" imgColor="roompropssssss-div" second="LOTUS" third="2 GUESTS" fourth="23 FT" color="room-black"/>
        </section>
         
        </>
    )
}

export default RoomSection