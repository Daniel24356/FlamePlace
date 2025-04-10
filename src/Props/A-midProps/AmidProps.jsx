import "./AmidProps.css"

const AmidProps = ({img, first, second}) => {
    return(
        <>
        <div className="mid-div">
            <div className="mid-innerdivs">
                {img}
            </div>
            <div className="text-ad">
                <h2 className="texts">{first}</h2>
                <p className="textss">{second}</p>
            </div>
        </div>
        </>
    )
}

export default AmidProps