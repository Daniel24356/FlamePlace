import AreaCharts from "../Charts/AreaChart"
import "./AChart.css"
import { BsThreeDotsVertical } from "react-icons/bs";

const Achart = () => {
    return (
        <>
            <div className="chartOne">
                <div className="chart-div">
                    <p className="chart-text">Hotel Survay</p>
                    <BsThreeDotsVertical />
                </div>
                <AreaCharts />
               
            </div>
        </>
    )
}

export default Achart