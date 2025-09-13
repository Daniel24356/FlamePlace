import { motion } from "framer-motion";
import "./relax.css";
import profile from "../../assets/profile.png";
import sign from "../../assets/signature.png";
import TextProps from "../../Props/TextProps/textprops";

const Relax = () => {
  return (
    <section className="relax-sec">
      <div className="relax-div">
        {/* Animated Image Container */}
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
            <h1>Castle of Comfort</h1>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="hotel-txt">HOTEL HAVEN</p>
          <div className="relax-our">
            <h1>Relax in our</h1>
            <h1>Hotel Resort</h1>
          </div>

          {/* Text Section */}
          <div className="text-div">
            <TextProps first="Welcome to Hotel Haven, where luxury" second="meets comfort in the heart of Lekki, Lagos" third="Designed to offer a perfect blend of elegance." />
            <TextProps first="At Hotel Haven, we believe in creating more" second="than just a stay—we curate unforgettable " third="moments." />
            <TextProps first="Indulge in exquisite dining at our on-site " second="restaurant, unwind in our serene spa" third="and our bar." />
            <TextProps first="Come experience hospitality" second="redefined—Hotel Haven, where" third="every guest is treated like family." />
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
