import RoomsProps from "../../Props/RoomProps/roomprops"
import "./RoomSection.css"


const RoomSection = () => {
    return(
        <>
        <section className="room-sec">
        <RoomsProps first="FROM 22500" imgColor="roomprops-div" second="LOTUS" third="2 GUESTS" fourth="down left" color="room-pos"/>
        <RoomsProps first="FROM 23000" imgColor="roompropss-div" second="DAISY" third="2 GUESTS" fourth="23 FT" color="room-black"/>
        <RoomsProps first="FROM 25000" imgColor="roompropsss-div" second="BLUEBELL" third="2 GUESTS" fourth="23 FT" color="room-black"/>
        <RoomsProps first="FROM 21000" imgColor="roompropssss-div" second="RISE" third="2 GUESTS" fourth="23 FT" color="room-black"/>
        <RoomsProps first="FROM 20500" imgColor="roompropsssss-div" second="SNOWDROP" third="2 GUESTS" fourth="23 FT" color="room-black"/>
        <RoomsProps first="FROM 22000" imgColor="roompropssssss-div" second="LOTUS" third="2 GUESTS" fourth="23 FT" color="room-black"/>
        </section>
         
        </>
    )
}

export default RoomSection