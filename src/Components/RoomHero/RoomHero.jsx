import HeaderProps from "../../Props/HeaderProps/HeaderProps";
import "./RoomHero.css";
import { TbCurrencyNaira } from "react-icons/tb";

const RoomHero = () => {
    
    // Function to handle smooth scrolling
    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <>
        <section>
            <div>
               <div className="room-indiv-div">
                <div className="room-box">
                    <div className="room-left">
                        <HeaderProps 
                            color="white" 
                            label="DESCRIPTION" 
                            onClick={() => handleScroll("description")}
                        />
                        <HeaderProps 
                            color="white" 
                            label="ROOM SERVICES" 
                            onClick={() => handleScroll("room-service")}
                        />
                        <HeaderProps 
                            color="white" 
                            label="AROUND THE HOTEL" 
                            onClick={() => handleScroll("around-hotel")}
                        />
                        <HeaderProps 
                            color="white" 
                            label="SIMILAR ROOMS" 
                            onClick={() => handleScroll("similar-room")}
                        />
                    </div>
               
                    <div className="room-price-txt">
                        <h1>30000</h1>
                        <div>
                            <TbCurrencyNaira className="naira-icon"/>
                            <p>/ PER NIGHT</p>
                        </div>
                    </div>
                </div>
               </div>
            </div>
        </section>
        </>
    );
}

export default RoomHero;
