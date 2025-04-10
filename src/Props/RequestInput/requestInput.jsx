import "./RequestInput.css"

const RequestInput = ({type, text, color}) => {
    const btnStyle = `${color}`
    return(
        <>
          <div className="request-input-props">
           <label>{text}</label>
           <textarea className={btnStyle} name="" id=""></textarea>
           {/* <input type={type} /> */}
        </div>
        </>
    )
}

export default RequestInput