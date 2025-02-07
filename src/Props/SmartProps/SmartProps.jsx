import "./SmartProps.css"


const SmartProps = ({first, color, img}) => {
    const btnStyle = `${color}`;
    return(
        <>
        <div className={btnStyle}>
            <img src={img} alt="" />
            <div>
                <h3>{first}</h3>
                <p>Lorem ipsum dolor</p>
            </div>
        </div>
        </>
    )
}

export default SmartProps