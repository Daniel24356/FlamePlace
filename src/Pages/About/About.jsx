import FooterSecond from "../../Components/FooterSec/footerSec"
import Header from "../../Components/Header/header"
import HeroProps from "../../Props/HeroProps/HeroProps"
import Relax from "../../Components/Relax/relax"
import img from "../../assets/IMG_9638.jpg"
import img1 from "../../assets/IMG_9580.jpg"
import img2 from "../../assets/IMG_9715.jpg"
import img3 from "../../assets/IMG_9645.jpg"
import img4 from "../../assets/IMG_9710.jpg"
import img5 from "../../assets/IMG_9583.jpg"
import "./About.css"
import ButtonProps from "../../Props/ButtonProps/ButtonProps"
import AboutGallery from "../../Components/AboutGallery/AboutGallery"

const About = () => {
    return(
        <>
        <Header/>
        <HeroProps text="About"/>
         <Relax/>
         <AboutGallery/>
         {/* <div className="about-div">
            <img src={img1} alt="" />
            <img src={img} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
         </div> */}
         
         <div className="about-banner">
  <div className="about-banner-overlay"></div> {/* Dark overlay */}
  <div className="about-banner-content">
    <h1>Experience Luxury at Hotel Haven</h1>
    <div>
      <p>Indulge in world-class hospitality, where elegance meets comfort.</p>
      <p>At Hotel Haven, every moment is crafted to offer you a memorable stay.</p>
      <p>Join us for an exquisite dining experience, surrounded by refined ambiance.</p>
    </div>
    <ButtonProps color="contact-us" label="Book Your Stay" />
  </div>
</div>

        <FooterSecond/>
        </>
    )
}

export default About