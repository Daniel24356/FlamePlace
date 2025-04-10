import ButtonProps from '../ButtonProps/ButtonProps'
import './PayProps.css'

const PayProps = ({text}) => {
    return(
        <>
        <p className='payprop-txt'>{text}</p>
        <ButtonProps  color="book-checkout" label="SEND REQUEST"/>
        </>
    )
}

export default PayProps