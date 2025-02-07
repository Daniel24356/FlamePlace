import "./DocProps.css"

const DocProps = ({label, img}) => {
    return(
        <>
        <div className="docProps-div">
            <img src={img} alt="" />
            <p>{label}</p>
        </div>
        </>
    )
}

export default DocProps