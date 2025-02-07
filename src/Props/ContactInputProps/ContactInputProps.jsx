import "./ContactInputProps.css"

const ContactInputProps = ({type, placeholder, style}) => {
    const inputStyle = `${style}`
    return(
        <>
        <div className={inputStyle}>
            <input type={type} placeholder={placeholder} />
        </div>
        </>
    )
}

export default ContactInputProps