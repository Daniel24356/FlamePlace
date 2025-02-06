import ButtonProps from "../ButtonProps/ButtonProps"


const BestProps = ({img, first, second}) => {
    return(
        <>
        <div>
            <img src={img} alt="" />
            <div>
              <h3>{first}</h3>
              <p>{second}</p>
            </div>
            <ButtonProps label="BOOK NOW"/>
        </div>
        </>
    )
}

export default BestProps