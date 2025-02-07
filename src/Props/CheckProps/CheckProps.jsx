import "./CheckProps.css"

const CheckProps = (
    { checkText, dateText, monthDate, icon, color = 'gray', secondColor, firstColor, thirdColor }
) => {
    const btnStyle = `header-txt ${color} }`;
    const textStyle = `header-txt ${secondColor} }`;
    const textStyles = `header-txt ${firstColor} }`;
    const textStyless = `header-txt ${thirdColor} }`;
    return(
        <>
        <div className={btnStyle}>
            <p className={textStyles}>{checkText}</p>
            <div className="check-innerdiv">
            <h1 className={textStyless}>{dateText}</h1>
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