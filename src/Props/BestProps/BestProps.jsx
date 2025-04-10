import { Link } from "react-router-dom"
import ButtonProps from "../ButtonProps/ButtonProps"
import "./BestProps.css"

const BestProps = ({first, second, img}) => {
    return(
        <>
        <div className="bestProps">
            <img src={img} alt="" />
            <div>
            <div>
              <h3>{first}</h3>
              <p>{second}</p>
            </div>
          <Link to="/booking"><ButtonProps color="book-now-small" label="BOOK NOW"/></Link>  
            </div>
           
        </div>
        </>
    )
}

export default BestProps