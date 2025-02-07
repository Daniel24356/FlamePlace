 import SmartProps from "../../Props/SmartProps/SmartProps"
import "./SmartSec.css"
import key from "../../assets/key-img.png"
const SmartSec = () => {
    return (
        <>
        <section className="smart-sec">
        <SmartProps img={key} color="smartProps" first="Smart Key"/>
        <SmartProps img={key} color="smartProps" first="Store Luggage"/>
        <SmartProps img={key} color="smartProps" first="Room Service"/>
        <SmartProps img={key} color="smartProps" first="Smart Camera"/>
        </section>
        
        </>
    )
}

export default SmartSec