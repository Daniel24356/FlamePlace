import ExtraInfo from '../../Components/ExtraInfo/ExtraInfo'
import Header from '../../Components/Header/header'
import RoomHero from '../../Components/RoomHero/RoomHero'
import SingleRoom from '../../Components/SingleRoom/SingleRoom'
import './Room.css'
import StayAround from "../../Props/StayAround/stayAround"
import Footer from '../../Components/Footer/footer'

const Room = () => {
    return(
        <>
          <section>
            <Header/>
            <RoomHero/>
            <div className='room-cont'>
            <SingleRoom/>
            <ExtraInfo/>
            </div>
           
                <div className='similar-room'>
                <h1 className='similar-room-text'>Similar rooms</h1>
                <div className="similar-room-div">
                <StayAround first="New Website" imgStyle="imagefirst"/>
                    <StayAround first="New Website" imgStyle="imagefirst"/>
                    <StayAround first="New Website" imgStyle="imagefirst"/>
                </div>
                  
                </div>
                <Footer/>
          </section>
        </>
    )
}

export default Room