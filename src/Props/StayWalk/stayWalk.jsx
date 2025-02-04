import "./stayWalk.css"

const StayWalk = ({first, color}) => {
    const walkDiv = `${color}`
    return(
        <>
        <div className={walkDiv}>
            <p>March 14, 2022</p>
            <h2>{first}</h2>
        </div>
        </>
    )
}

export default StayWalk