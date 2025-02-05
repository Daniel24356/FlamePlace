import ButtonProps from "../../Props/ButtonProps/ButtonProps"
import CheckProps from "../../Props/CheckProps/CheckProps"
import "./herosection.css"
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
const HeroSection = () => {
    return(
        <>
        <section className="hero-sec">
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
             color="check-me" />
            <CheckProps 
            checkText="CHECK-IN" 
            dateText="03" 
            secondColor="month-txt" 
            monthDate="Feb" 
            icon={<IoIosArrowDown/>} 
            color="check-me" />
            <CheckProps 
            checkText="CHECK-IN" 
            dateText="03" 
            secondColor="month-txts" 
            monthDate={<IoIosArrowUp />} 
            icon={<IoIosArrowDown/>} 
            color="checks-me" />
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