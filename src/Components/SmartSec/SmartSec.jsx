import { motion } from "framer-motion";
import SmartProps from "../../Props/SmartProps/SmartProps";
import "./SmartSec.css";
import key from "../../assets/key-img.png";

const SmartSec = () => {
    return (
        <section className="smart-sec">
            {["Smart Key", "Store Luggage", "Room Service", "Smart Camera"].map((item, index) => (
                <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <SmartProps img={key} color="smartProps" first={item} />
                </motion.div>
            ))}
        </section>
    );
};

export default SmartSec;
