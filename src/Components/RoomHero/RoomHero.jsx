import HeaderProps from "../../Props/HeaderProps/HeaderProps"
import "./RoomHero.css"


const RoomHero = () => {
    return(
        <>
        <section>
            <div>
               <div>
               <HeaderProps label="DESCRIPTION"/>
               <HeaderProps label="ROOM SERVICES"/>
               <HeaderProps label="AROUND THE HOTEL"/>
               <HeaderProps label="SIMILAR ROOMS"/>
               </div>
               <div>
                <h1>56</h1>
                <div>
                    <p>$</p>
                    <p>/ PER NIGHT</p>
                </div>
               </div>
            </div>
          
        </section>
        </>
    )
}

export default RoomHero