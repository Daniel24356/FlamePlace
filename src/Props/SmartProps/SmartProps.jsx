import "./SmartProps.css"


const SmartProps = ({first, color, img}) => {
    const btnStyle = `${color}`;
    return(
        <>
        <div className={btnStyle}>
            <img src={img} alt="" />
            <div>
                <h3>{first}</h3>
                <p>we use smart devices here.</p>
            </div>
        </div>
        </>
    )
}

export default SmartProps