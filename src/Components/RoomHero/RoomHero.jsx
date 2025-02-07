import HeaderProps from "../../Props/HeaderProps/HeaderProps"
import "./RoomHero.css"


const RoomHero = () => {
    return(
        <>
        <section>
            <div>
               <div className="room-indiv-div">
                <div className="room-box">
                    <div className="room-left">
                    <HeaderProps color="white" label="DESCRIPTION"/>
               <HeaderProps color="white" label="ROOM SERVICES"/>
               <HeaderProps color="white" label="AROUND THE HOTEL"/>
               <HeaderProps color="white" label="SIMILAR ROOMS"/>
                    </div>
               
               <div className="room-price-txt">
                <h1>56</h1>
                <div>
                    <p>$</p>
                    <p>/ PER NIGHT</p>
                </div>
               </div>
                </div>
               </div>
               
            </div>
          
        </section>
        </>
    )
}

export default RoomHero