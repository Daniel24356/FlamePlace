import { motion } from "framer-motion";
import "./relax.css";
import profile from "../../assets/profile.png";
import sign from "../../assets/signature.png";
import TextProps from "../../Props/TextProps/textprops";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useEffect, useState } from "react";

const Relax = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <section className="relax-sec">
      <div className="relax-div">
        {/* Animated Image Container */}
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
          <motion.div
            className="relax-inner"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relax-suite"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h1>
                + {counterOn && <CountUp style={{ fontSize: 55 }} start={0} end={76} duration={2} delay={0} />}
              </h1>
              <p>Happy Guests</p>
            </motion.div>
          </motion.div>
        </ScrollTrigger>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="hotel-txt">FAME PLACE</p>
          <div className="relax-our">
            <h1>Relax in our</h1>
            <h1>Hotel Resort</h1>
          </div>

          {/* Text Section */}
          <div className="text-div">
            <TextProps first="Welcome to Fames Place, where luxury" second="meets comfort in the heart of Woji, PH" third="Designed to offer a perfect blend of elegance." />
            <TextProps first="At Fames Place, we believe in creating more" second="than just a stay—we curate unforgettable " third="moments." />
            <TextProps first="Indulge in exquisite dining at our on-site " second="restaurant, unwind in our serene spa" third="and our bar." />
            <TextProps first="Come experience hospitality" second="redefined—Fames Place, where" third="every guest is treated like family." />
          </div>

          {/* Profile & Signature Section */}
          <motion.div
            className="profile-sign"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="profile-box">
              <img src={profile} alt="" />
              <div>
                <p>Andrew Stuart</p>
                <p>Hotel Manager</p>
              </div>
            </div>
            <div className="sign-box">
              <img src={sign} alt="" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Relax;
