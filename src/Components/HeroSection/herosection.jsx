import { useState } from "react";
import { motion } from "framer-motion";
import ButtonProps from "../../Props/ButtonProps/ButtonProps";
import CheckProps from "../../Props/CheckProps/CheckProps";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./herosection.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import image1 from "../../assets/barca.webp";
import image2 from "../../assets/borabora.jpg";
import image3 from "../../assets/argentina.jpg";

const images = [image1, image2, image3];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
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
    <section className="hero-sec">
      <motion.div
        className="hero-bg"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
        key={currentImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      <div className="overlay"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="hero-div">
          <motion.p initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8 }}>
            LUXURY HOTEL & BEST RESORT
          </motion.p>
          <div>
            <motion.h1 initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 1 }}>
              ENJOY A LUXURY
            </motion.h1>
            <motion.h1 initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 1.2 }}>
              EXPERIENCE
            </motion.h1>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 1.5 }}>
            <ButtonProps label="ROOMS & SUITES" color="room-suites" />
          </motion.div>
        </div>

        {/* Check-in Section */}
        <motion.div className="checkprop" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.8 }}>
          <div className="hero-check">
            {/* Check-In */}
            <div className="check-item">
              <CheckProps
                checkText="CHECK-IN"
                dateText={formatDate(checkIn).day}
                secondColor="month-txt"
                monthDate={formatDate(checkIn).month}
                icon={<IoIosArrowDown onClick={() => setOpenCalendar(openCalendar === "checkIn" ? null : "checkIn")} />}
                color="check-me"
                firstColor="check-txt"
                thirdColor="date-txt"
              />
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
                    filterDate={(date) => date = new Date()}
                  />
                </div>
              )}
            </div>

            {/* Check-Out */}
            <div className="check-item">
              <CheckProps
                checkText="CHECK-OUT"
                dateText={formatDate(checkOut).day}
                secondColor="month-txt"
                monthDate={formatDate(checkOut).month}
                icon={<IoIosArrowDown onClick={() => setOpenCalendar(openCalendar === "checkOut" ? null : "checkOut")} />}
                color="check-me"
                firstColor="check-txt"
                thirdColor="date-txt"
              />
              {openCalendar === "checkOut" && (
                <div className="calendar-wrappers">
                  <DatePicker
                    selected={checkOut}
                    onChange={(date) => {
                      setCheckOut(date);
                      setOpenCalendar(null);
                    }}
                    minDate={checkIn}
                    dateFormat="dd MMM yyyy"
                    inline
                    filterDate={(date) => date >= new Date()}
                  />
                </div>
              )}
            </div>

            {/* Guests */}
            <CheckProps
              checkText="GUESTS"
              dateText={guests.toString()}
              secondColor="month-txts"
              monthDate={<IoIosArrowUp onClick={() => setGuests((prev) => prev + 1)} />}
              icon={<IoIosArrowDown onClick={() => setGuests((prev) => Math.max(1, prev - 1))} />}
              color="checks-me"
              firstColor="check-txt"
              thirdColor="date-txt"
            />
          </div>

          <motion.div className="check-available" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 2 }}>
            <p>CHECK</p>
            <p>AVAILABILITY</p>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="image-selector">
        {images.map((_, index) => (
          <button
            key={index}
            className={`selector-btn ${currentImage === index ? "active" : ""}`}
            onClick={() => setCurrentImage(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
