import { motion } from "framer-motion";
import SmartProps from "../../Props/SmartProps/SmartProps";
import "./SmartSec.css";
import key from "../../assets/key-img.png";
import key1 from "../../assets/room.png";
import key2 from "../../assets/room-s.png";
import key3 from "../../assets/disinfec.png";

// Data for each feature
const smartFeatures = [
    {
        title: "Smart Key",
        description: "Unlock your room with your keycard seamlessly.",
        img: key
    },
    {
        title: "Store Luggage",
        description: "Enjoy hassle-free travel with our secure luggage storage service.",
        img: key1
    },
    {
        title: "Room Service",
        description: "Order food and amenities with a single touch, available 24/7.",
        img: key2
    },
    {
        title: "Disinfectant",
        description: "Ensure a germ-free environment with automated air and surface disinfection technology",
        img: key3
    }
];

const SmartSec = () => {
    return (
        <section className="smart-sec">
            {smartFeatures.map((feature, index) => (
                <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <SmartProps 
                        img={feature.img} 
                        color="smartProps" 
                        first={feature.title} 
                        second={feature.description} 
                    />
                </motion.div>
            ))}
        </section>
    );
};

export default SmartSec;
