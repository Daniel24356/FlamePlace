import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import BestProps from "../../Props/BestProps/BestProps";
import CheckProps from "../../Props/CheckProps/CheckProps";
import DocProps from "../../Props/DocProps/DocProps";
import ButtonProps from "../../Props/ButtonProps/ButtonProps";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ExtraInfo.css";
import doc from "../../assets/pdf-gold.svg";
import room from "../../assets/IMG_9638.jpg";
import room1 from "../../assets/IMG_9682.jpg";
import room2 from "../../assets/IMG_9664.jpg";
import { Link } from "react-router-dom";

const ExtraInfo = () => {
  // State for date values
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  });
  const [guests, setGuests] = useState(2);
  const [openCalendar, setOpenCalendar] = useState(null);

  const formatDate = (date) => ({
    day: date ? date.getDate().toString().padStart(2, "0") : "01",
    month: date ? date.toLocaleString("en-US", { month: "short" }) : "Jan",
  });

  return (
    <>
      <section className="extra-info-sec">
        <div>
          <div className="check-extra">
            <div className="check-extra-div">
                
                <div className="check-item">
              {/* Check-In */}
              <div onClick={() => setOpenCalendar(openCalendar === "checkIn" ? null : "checkIn")}>
                <CheckProps
                  checkText="CHECK-IN"
                  dateText={formatDate(checkIn).day}
                  monthDate={formatDate(checkIn).month}
                  icon={<IoIosArrowDown className="arr-down-icons" />}
                  color="check-propss"
                  firstColor="check-txts"
                  secondColor="month-txtss"
                  thirdColor="date-txts"
                />
              </div>
              {openCalendar === "checkIn" && (
                <div className="calendar-wrapper">
                  <DatePicker
                    selected={checkIn}
                    onChange={(date) => {
                      setCheckIn(date);
                      setOpenCalendar(null);
                    }}
                    minDate={new Date()}
                    dateFormat="dd MMM yyyy"
                    inline
                  />
                </div>
              )}
            </div>

            <div className="check-item">
              {/* Check-Out */}
              <div onClick={() => setOpenCalendar(openCalendar === "checkOut" ? null : "checkOut")}>
                <CheckProps
                  checkText="CHECK-OUT"
                  dateText={formatDate(checkOut).day}
                  monthDate={formatDate(checkOut).month}
                  icon={<IoIosArrowDown className="arr-down-icons" />}
                  color="check-propss"
                  firstColor="check-txts"
                  secondColor="month-txtss"
                  thirdColor="date-txts"
                />
              </div>
              {openCalendar === "checkOut" && (
                <div className="calendar-wrapper">
                  <DatePicker
                    selected={checkOut}
                    onChange={(date) => {
                      setCheckOut(date);
                      setOpenCalendar(null);
                    }}
                    minDate={checkIn}
                    dateFormat="dd MMM yyyy"
                    inline
                  />
                </div>
              )}
              </div>

              {/* Guests */}
              <div className="guests-container">
                <CheckProps
                  checkText="GUESTS"
                  dateText={guests.toString()}
                  monthDate={<IoIosArrowUp onClick={() => setGuests((prev) => prev + 1)} />}
                   icon={<IoIosArrowDown className="arr-down-icons" onClick={() => setGuests((prev) => Math.max(1, prev - 1))} />}
                  color="check-propss"
                  firstColor="check-txts"
                  secondColor="month-txtss"
                  thirdColor="date-txts"
                />
              </div>

              {/* Nights */}
              <CheckProps
                checkText="NIGHTS"
                dateText="1"
                monthDate="Night"
                icon={<IoIosArrowDown className="arr-down-icons" />}
                color="check-propss"
                firstColor="check-txts"
                secondColor="month-txtss"
                thirdColor="date-txts"
              />
            </div>
         <Link to="/booking"><ButtonProps color="book-now-large" label="BOOK NOW" /></Link>   
          </div>
        </div>

        {/* Updated Room Service Section */}
        <div className="room-service-top">
          <h2 className="room-service-txt">Luxurious Stays</h2>
          <div className="best-div">
            <BestProps img={room} first="Daisy" second="From ₦20,000 per night" />
            <BestProps img={room1} first="BlueBell" second="From ₦20,000 per night" />
            <BestProps img={room2} first="Rose" second="From ₦20,000 per night" />
          </div>
        </div>

        {/* Updated Documents Section */}
        <div className="room-document-div">
          <h2 className="room-service-txt">Guest Information</h2>
          <div className="extra-docs">
            <DocProps img={doc} label="Hotel Terms & Conditions" />
            <DocProps img={doc} label="Check-In & Check-Out Policy" />
            <DocProps img={doc} label="Guest Privacy Policy" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ExtraInfo;
