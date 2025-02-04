import "./ButtonProps.css"

const ButtonProps = ({ label, disabled = false, color = 'primary' }) => {
    const btnStyle = `button ${color} ${disabled ? 'disabled' : ''}`;
    return(
        <>
         <button className={btnStyle} disabled={disabled}>{label}</button>
        </>
    )
}

export default ButtonProps