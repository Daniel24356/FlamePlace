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
                <p className="hotel-txt">HOTEL BAYVIEW</p>
                <div className="relax-our">
                    <h1>Relax in our</h1>
                    <h1>Hotel Resort</h1>
                </div>
                <div className="text-div">
                    <TextProps 
                    first="Quisque eu euismod arcu. Morbi et dapibus"
                    second="diam, sed interdum velit. Proin tempor nunc" 
                    third="vel nisl condimentum, nec tempor risus."/>
                     <TextProps 
                    first="Quisque eu euismod arcu. Morbi et dapibus"
                    second="diam, sed interdum velit. Proin tempor nunc" 
                    third="vel nisl condimentum, nec tempor risus."/>
                     <TextProps 
                    first="Quisque eu euismod arcu. Morbi et dapibus"
                    second="diam, sed interdum velit. Proin tempor nunc" 
                    third="vel nisl condimentum, nec tempor risus."/>
                     <TextProps 
                    first="Quisque eu euismod arcu. Morbi et dapibus"
                    second="diam, sed interdum velit. Proin tempor nunc" 
                    third="vel nisl condimentum, nec tempor risus."/>
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