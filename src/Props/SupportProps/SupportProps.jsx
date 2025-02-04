import "./SupportProps.css"

const SupportProps = ({supportText, timeText, color}) => {
    const btnStyle = `${color}`;
    return(
        <>
        <div className="support-div">
            <h2 className="support-text-one">{supportText}</h2>
            <h2 className="support-text-two">{timeText}</h2>
        </div>
        </>
    )
}

export default SupportProps