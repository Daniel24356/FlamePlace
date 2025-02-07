import Footer from "../../Components/Footer/footer"
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

const About = () => {
    return(
        <>
        <Header/>
        <HeroProps text="About"/>
         <Relax/>
         <div className="about-div">
            <img src={img1} alt="" />
            <img src={img} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
         </div>
         <div className="About-banner">
            <div className="overlays"></div>
            <div className="About-banner-div">
                <h1>Lunch & Dinner</h1>
                <div>
                    <p>Mauris vel quam vel felis maximus bibendum vel quis erat. Duis accumsan</p>
                    <p>posuere est quis egestas. Donec nec odio non tellus convallis mattis a nec</p>
                    <p>purus. Duis quis tortor elit.</p>
                </div>
                <ButtonProps color="contact-us" label="CONTACT US"/>
            </div>
         </div>
        <Footer/>
        </>
    )
}

export default About