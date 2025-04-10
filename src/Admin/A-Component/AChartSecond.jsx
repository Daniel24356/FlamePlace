import PieCharts from "../Charts/PieChart"
import "./AChart.css"
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";

const AChartSecond = () => {
    return(
        <>
        <div className="chartSecond">
            <div className="chart-div">
                <p className="chart-text">Room Booking Chart</p>
                <BsThreeDotsVertical/>
            </div>
            <PieCharts/>
              <div className="chart-color">
                    <div className="chart-unders">
                        <div className="sin-chart">
                            <GoDotFill className="dot-fill"/>
                            Single
                        </div>
                        <p>734</p>
                    </div>
                    <div className="chart-under">
                        <div className="sin-chart">
                            <GoDotFill className="dot-fill"/>
                            Single
                        </div>
                        <p>734</p>
                    </div>
                    <div className="chart-under">
                        <div className="sin-chart">
                            <GoDotFill className="dot-fill"/>
                            Single
                        </div>
                        <p>734</p>
                    </div>
                </div>
        </div>
        </>
    )
}

export default AChartSecond