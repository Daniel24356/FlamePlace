import ButtonProps from "../ButtonProps/ButtonProps"
import room from "../../assets/IMG_9638.jpg"
import "./bestProps.css"

const BestProps = ({first, second}) => {
    return(
        <>
        <div className="bestProps">
            <img src={room} alt="" />
            <div>
            <div>
              <h3>{first}</h3>
              <p>{second}</p>
            </div>
            <ButtonProps color="book-now-small" label="BOOK NOW"/>
            </div>
           
            
        </div>
        </>
    )
}

export default BestProps