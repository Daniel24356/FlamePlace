import "./roomprops.css"

const RoomsProps = ({first, second, third, fourth, color = 'primary'}) => {
    const btnStyle = `${color}`;
    return(
        <>
          <div className="roomprops-div">
            <div className="overlays"></div>
            <div className={btnStyle}>
                <p>{first}</p>
            </div>
            <div className="roomprops-content">
            <div>
                <h1 className="room-name">{second}</h1>
                <div className="room-icons-div">
                    <div>
                      {/* icons */}
                      <p>{third}</p>
                    </div>
                    <div> 
                      {/* icons */}
                      <p>{fourth}</p>
                    </div>
                </div>
            </div>
            </div>
          </div>
        </>
    )
}

export default RoomsProps