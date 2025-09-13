import ExtraInfo from '../../Components/ExtraInfo/ExtraInfo'
import Header from '../../Components/Header/header'
import RoomHero from '../../Components/RoomHero/RoomHero'
import SingleRoom from '../../Components/SingleRoom/SingleRoom'
import './Room.css'
import StayAround from "../../Props/StayAround/stayAround"
import FooterSecond from '../../Components/FooterSec/footerSec'
import blog from "../../assets/image-1.jpg"
import blog1 from "../../assets/image-2.jpg"
import blog2 from "../../assets/ukhotel.jpg"

const Room = () => {
    return (
        <>
            <section>
                <Header />
                <RoomHero />
                <div className='room-cont'>
                    <SingleRoom />
                    <ExtraInfo />
                </div>
                <div id='similar-room' className='similar-room'>
                    <h1 className='similar-room-text'>Similar Room</h1>
                    <div className="similar-room-div">
                        <StayAround img={blog} first="Lotus" imgStyle="imagefirst" />
                        <StayAround img={blog1} first="Daisy" imgStyle="imagefirst" />
                        <StayAround img={blog2} first="Rose" imgStyle="imagefirst" />
                    </div>
                </div>

                <FooterSecond />
            </section>
        </>
    )
}

export default Room