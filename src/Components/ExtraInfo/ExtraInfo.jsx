import BestProps from "../../Props/BestProps/BestProps"
import DocProps from "../../Props/DocProps/DocProps"
import "./ExtraInfo.css"

const ExtraInfo = () => {
    return(
        <>
        <section>
             <div>
                  <div>
                    <CheckProps 
                    checkText="CHECK-IN"
                    dateText="03" 
                    secondColor="month-txt" 
                    monthDate="Feb" 
                    icon={<IoIosArrowDown/>} />
                     <CheckProps 
                    checkText="CHECK-IN"
                    dateText="03" 
                    secondColor="month-txt" 
                    monthDate="Feb" 
                    icon={<IoIosArrowDown/>} />
                     <CheckProps 
                    checkText="CHECK-IN"
                    dateText="03" 
                    secondColor="month-txt" 
                    monthDate="Feb" 
                    icon={<IoIosArrowDown/>} />
                     <CheckProps 
                    checkText="CHECK-IN"
                    dateText="03" 
                    secondColor="month-txt" 
                    monthDate="Feb" 
                    icon={<IoIosArrowDown/>} />
                  </div>
                  <ButtonProps label="BOOK NOW"/>
                </div>

                <div>
                    <BestProps first="Apartment" second="From 56$ per night"/>
                    <BestProps first="Apartment" second="From 56$ per night"/>
                    <BestProps first="Apartment" second="From 56$ per night"/>
                </div>

                <div>
                    <DocProps label="Conditions of Hospitality"/>
                    <DocProps label="Conditions of Hospitality"/>
                    <DocProps label="Conditions of Hospitality"/>
                </div>
        </section>
        </>
    )
}

export default ExtraInfo