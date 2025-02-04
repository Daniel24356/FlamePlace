import "./SmartProps.css"
import key from "../../assets/key-img.png"

const SmartProps = ({first}) => {
    return(
        <>
        <div className="smartProps">
            <img src={key} alt="" />
            <div>
                <h3>{first}</h3>
                <p>Lorem ipsum dolor</p>
            </div>
        </div>
        </>
    )
}

export default SmartProps