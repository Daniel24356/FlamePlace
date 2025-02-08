import { useEffect, useState } from "react";
import ButtonProps from "../../Props/ButtonProps/ButtonProps"
import CheckProps from "../../Props/CheckProps/CheckProps"
import "./herosection.css"
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import image1 from "../../assets/IMG_9725.jpg"
import image2 from "../../assets/IMG_9736.jpg"
import image3 from "../../assets/IMG_9734.jpg"
import image4 from "../../assets/IMG_9811.jpg"

const images = [image1,image2,image3, image4];

const HeroSection = () => {

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

    return(
        <>
        <section  className="hero-sec"  style={{ backgroundImage: `url(${images[currentImage]})` }}>
        <div class="overlay"></div>
        <div className="hero-content">
            <div className="hero-div">
            <p>LUXURY HOTEL & BEST RESORT</p>
            <div>
            <h1>ENJOY A LUXURY</h1>
            <h1>EXPERIENCE</h1>
            </div>
          
          <ButtonProps label="ROOMS E SUITES" color="room-suites"/>
          </div>

          <div className="checkprop">
            <div className="hero-check">
            <CheckProps
             checkText="CHECK-IN"
             dateText="03" 
             secondColor="month-txt" 
             monthDate="Feb" 
             icon={<IoIosArrowDown/>} 
             color="check-me"
             firstColor="check-txt"
             thirdColor="date-txt"
              />
            <CheckProps 
            checkText="CHECK-IN" 
            dateText="03" 
            secondColor="month-txt" 
            monthDate="Feb" 
            icon={<IoIosArrowDown/>} 
            color="check-me"
             firstColor="check-txt"
             thirdColor="date-txt"
            />
            <CheckProps 
            checkText="CHECK-IN" 
            dateText="03" 
            secondColor="month-txts" 
            monthDate={<IoIosArrowUp />} 
            icon={<IoIosArrowDown/>} 
            color="checks-me" 
             firstColor="check-txt"
             thirdColor="date-txt"
            />
            </div>
            
            <div className="check-available">
                <p>CHECK</p>
                <p>AVAILABILITY</p>
            </div>
          </div>


          </div>
        </section>
        </>
    )
}

export default HeroSection