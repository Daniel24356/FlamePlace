import Reception from "../../Props/ReceptionProps/Reception"
import "./reservation.css"

const Reservation = () => {
    return(
        <>
        <section className="reservation-sec">
        <Reception first="Reception 24h / 7 Days"/>
        <Reception first="Reservation Online"/>
        </section>
        </>
    )
}

export default Reservation