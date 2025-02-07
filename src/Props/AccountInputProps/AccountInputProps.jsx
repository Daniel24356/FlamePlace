import "./AccountInputProps.css"

const AccountInputProps = ({type, text}) => {
    return(
        <>
        <div className="account-input-props">
           <label>{text}</label>
           <input type={type} />
        </div>
        </>
    )
}

export default AccountInputProps