import Footer from "../../Components/Footer/footer"
import FooterSecond from "../../Components/FooterSec/footerSec"
import FooterTop from "../../Components/FooterTop/FooterTop"
import Gallery from "../../Components/Gallery/Gallery"
import Header from "../../Components/Header/header"
import HeroSection from "../../Components/HeroSection/herosection"
import Relax from "../../Components/Relax/relax"
import Reservation from "../../Components/Reservation/reservation"
import RoomSection from "../../Components/RoomSection/RoomSection"
import SmartSec from "../../Components/SmartSec/SmartSec"
import StayTuned from "../../Components/Stay-Tuned/StayTuned"
import "./Home.css"

const Home = () => {
    return(
        <>
        <Header/>
        <HeroSection/>
        <Relax/>
        <RoomSection/>
        <Gallery/>
        <Reservation/>
        {/* <StayTuned/> */}
        <SmartSec/>
        {/* <FooterTop/> */}
        <FooterSecond/>
        {/* <Footer/> */}
        </>
    )
}

export default Home