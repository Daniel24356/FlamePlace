import "./CheckProps.css"

const CheckProps = (
    { checkText, dateText, monthDate, icon, color = 'gray', secondColor }
) => {
    const btnStyle = `header-txt ${color} }`;
    const textStyle = `header-txt ${secondColor} }`;
    return(
        <>
        <div className={btnStyle}>
            <p className="check-txt">{checkText}</p>
            <div className="check-innerdiv">
            <h1 className="date-txt">{dateText}</h1>
            <div className="">
                <p className={textStyle}>{monthDate}</p>
                <p>{icon}</p>
            </div>
            </div>
        </div>
        </>
    )
}

export default CheckProps