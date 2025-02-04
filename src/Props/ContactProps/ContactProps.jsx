import "./ContactProps.css"

const ContactProps = ({ contactText, reserveText, number, bookingText, numberTwo, icon,  color}) => {
    const btnStyle = `${color}`;
    return(
        <>
         <div className={btnStyle}>
            <img src={icon} alt="" />
            <h2>{contactText}</h2>

            <div>
                <p>{reserveText}</p>
                 <p>{number}</p>
            </div>

            <div>
                <p>{bookingText}</p>
                <p>{numberTwo}</p>
            </div>
         </div>
        </>
    )
}

export default ContactProps