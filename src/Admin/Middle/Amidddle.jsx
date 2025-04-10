import Achart from "../A-Component/AChart"
import AChartSecond from "../A-Component/AChartSecond"
import AFirst from "../A-Component/AFirst"
import BookingTable from "../A-Component/BookingTable"

import "./Amiddle.css"

const Amiddle = () => {
    return(
        <>
        <div className="Amiddle">
        <AFirst/>
        <div className="middle-div">
            <Achart/>
            <AChartSecond/>
        </div>
        <BookingTable/>
        </div>
        
        </>
    )
}

export default Amiddle