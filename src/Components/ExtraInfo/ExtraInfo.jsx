import { IoIosArrowDown } from "react-icons/io"
import BestProps from "../../Props/BestProps/BestProps"
import CheckProps from "../../Props/CheckProps/CheckProps"
import DocProps from "../../Props/DocProps/DocProps"
import "./ExtraInfo.css"
import ButtonProps from "../../Props/ButtonProps/ButtonProps"
import doc from "../../assets/pdf-gold.svg"

const ExtraInfo = () => {
    return (
        <>
            <section className="extra-info-sec">
                <div>
                    <div className="check-extra">
                        <div className="check-extra-div">

                            <CheckProps
                                checkText="CHECK-IN"
                                dateText="03"
                                secondColor="month-txtss"
                                monthDate="Feb"
                                icon={<IoIosArrowDown className="arr-down-icons" />}
                                color="check-props"
                                firstColor="check-txts"
                                thirdColor="date-txts"
                            />
                            <CheckProps
                                checkText="CHECK-IN"
                                dateText="03"
                                secondColor="month-txtss"
                                monthDate="Feb"
                                color="check-props"
                                icon={<IoIosArrowDown className="arr-down-icons" />}
                                firstColor="check-txts"
                                thirdColor="date-txts"
                            />
                            <CheckProps
                                checkText="CHECK-IN"
                                dateText="03"
                                secondColor="month-txtss"
                                monthDate="Feb"
                                icon={<IoIosArrowDown className="arr-down-icons" />}
                                color="check-props"
                                firstColor="check-txts"
                                thirdColor="date-txts"
                            />
                            <CheckProps
                                checkText="CHECK-IN"
                                dateText="03"
                                secondColor="month-txtss"
                                monthDate="Feb"
                                icon={<IoIosArrowDown className="arr-down-icons" />}
                                color="check-props"
                                firstColor="check-txts"
                                thirdColor="date-txts"
                            />
                        </div>
                        <ButtonProps color="book-now-large" label="BOOK NOW" />
                    </div>

                </div>
               
               <div className="room-service-top">
               <h2 className="room-service-txt">Best Rooms</h2>
                <div className="best-div">
                    <BestProps first="Apartment" second="From 56$ per night" />
                    <BestProps first="Apartment" second="From 56$ per night" />
                    <BestProps first="Apartment" second="From 56$ per night" />
                </div>
                </div>

                <div className="room-document-div">
                <h2 className="room-service-txt">Documents</h2>
                <div className="extra-docs">
                    <DocProps img={doc} label="Conditions of Hospitality" />
                    <DocProps img={doc} label="Conditions of Hospitality" />
                    <DocProps img={doc} label="Conditions of Hospitality" />
                </div>
                </div>
            </section>
        </>
    )
}

export default ExtraInfo