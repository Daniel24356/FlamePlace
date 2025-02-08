import "./relax.css"
import profile from "../../assets/profile.png"
import sign from "../../assets/signature.png"
import TextProps from "../../Props/TextProps/textprops"
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"
import { useEffect, useState } from "react"

const Relax = () => {

    const [counterOn, setCounterOn] = useState(false);

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false); 
    const toRotate = ["1500+","1500+","1500+"];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;
  
    useEffect(() => {
        let ticker = setInterval(() => {
           tick();
        },delta)
  
        return () => {clearInterval(ticker)};
    }, [text])
  
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length - 1) : fullText.substring(0, text.length + 1);
   
        setText(updatedText);
        if(isDeleting){
           setDelta(prevDelta => prevDelta/2)
        }
        
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ""){
            setIsDeleting(fasle);
            setLoopNum(loopNum + 1);
            setDelta(2000);
        }
    }

    return(
        <>
        <section className="relax-sec">
            <div className="relax-div">
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div className="relax-inner">
                    
                    <div className="relax-suite">
                       <h1>
                        +
                        {counterOn &&   <CountUp style={{
               fontSize: 55
                }} start={0} end={76} duration={2} delay={0}/>}  
                       </h1>
                       <p>BIG SUITES</p>
                   </div>
                   
                </div>
                </ScrollTrigger>
            <div>
                <p className="hotel-txt">FAME PLACE</p>
                <div className="relax-our">
                    <h1>Relax in our</h1>
                    <h1>Hotel Resort</h1>
                </div>
                <div className="text-div">
                    <TextProps 
                    first="Welcome to Fames Place, where luxury"
                    second="meets comfort in the heart of Woji, PH" 
                    third="Designed to offer a perfect blend of elegance."/>
                     <TextProps 
                    first="At Fames Place, we believe in creating more"
                    second="than just a stay—we curate unforgettable " 
                    third="moments."/>
                     <TextProps 
                    first="Indulge in exquisite dining at our on-site "
                    second="restaurant, unwind in our serene spa" 
                    third="and our bar."/>
                     <TextProps 
                    first="Come experience hospitality"
                    second="redefined—Fames Place, where" 
                    third="every guest is treated like family."/>
                </div>
                <div className="profile-sign">
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
                </div>
            </div>
            </div>
            
        </section>
        </>
    )
}

export default Relax