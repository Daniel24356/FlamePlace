import "./WhatsAppChat.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppChat = () => {
  const phoneNumber = "2349079049309";
  const whatsappURL = `https://wa.me/${phoneNumber}`;

  return (
    <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className="whatsapp-float">
      {/* <img src="/assets/whatsapp-icon.png" alt="Chat on WhatsApp" /> */}
        <FaWhatsapp className="whatsapp-icon"/>
    </a>
  );
};

export default WhatsAppChat;
