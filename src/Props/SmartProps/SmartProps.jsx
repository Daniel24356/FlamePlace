import "./SmartProps.css"


const SmartProps = ({first, color, img,second}) => {
    const btnStyle = `${color}`;
    return(
        <>
        <div className={btnStyle}>
            <img src={img} alt="" />
            <div>
                <h3>{first}</h3>
                <p>{second}</p>
            </div>
        </div>
        </>
    )
}

export default SmartProps