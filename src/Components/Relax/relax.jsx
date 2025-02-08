import "./relax.css"
import profile from "../../assets/profile.png"
import sign from "../../assets/signature.png"
import TextProps from "../../Props/TextProps/textprops"

const Relax = () => {
    return(
        <>
        <section className="relax-sec">
            <div className="relax-div">
                <div className="relax-inner">
                   <div className="relax-suite">
                       <h1>+76</h1>
                       <p>BIG SUITES</p>
                   </div>
                </div>
           
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