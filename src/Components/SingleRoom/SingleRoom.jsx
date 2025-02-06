import { IoIosArrowDown } from "react-icons/io"
import CheckProps from "../../Props/CheckProps/CheckProps"
import ButtonProps from "../../Props/ButtonProps/ButtonProps"
import SmartProps from "../../Props/SmartProps/SmartProps"
import DocProps from "../../Props/DocProps/DocProps"
import StayWalk from "../../Props/StayWalk/stayWalk"



const SingleRoom = () => {
    return(
        <>
        <section>
            <div>
            <h1>Small Room</h1>
            <div>
                <p>HOTEL ROME</p>
                <img src="" alt="" />
            </div>
            </div>
            
            <div>
                <div>
                  <img src="" alt="" />
                </div>

                <div>
                    <SmartProps first="1 GUESTS"/>
                    <SmartProps first="15 ft"/>
                    <SmartProps first="56$ / PER NIGHT"/>
                    <SmartProps first="WEEK PRICE"/>
                </div>

                <div>
                    <p>Cras malesuada mauris tortor, id tempus mauris blandit sit amet. Morbi a velit efficitur, porttitor metus et,</p>
                    <p>interdum nunc. Phasellus ut elementum diam. Aliquam erat volutpat. Nunc et facilisis elit. Donec</p>
                    <p>consectetur nibh vel gravida aliquet. Suspendisse sit amet lectus tristique, condimentum libero vel, porta</p>
                    <p>justo. Proin sit amet porta nibh. Pellentesque leo lorem, blandit quis hendrerit a, suscipit dapibus nulla.</p>
                    <p>Aenean ut facilisis felis. Cras tincidunt elementum neque, id viverra magna viverra et. Nam tincidunt urna</p>
                    <p>sed urna vehicula fringilla. Curabitur bibendum dictum nunc, ut elementum nibh efficitur gravida. Phasellus</p>
                    <p>luctus scelerisque libero, nec lobortis tortor volutpat at. Nam vitae turpis in est tristique placerat id sed</p>
                    <p>tortor. Vivamus luctus sed nibh ac cursus. Sed vel ligula non risus tempus fermentum.</p>
                </div>

                <div>
                    <DocProps label="Swimming Pool"/>
                    <DocProps label="Television"/>
                    <DocProps label="No Smoking"/>
                    <DocProps label="Private Bathroom"/>
                </div>

                <div>
                    <h1>Around The Hotel</h1>
                    <StayWalk first="Lounge Bar"/>
                    <StayWalk first="Lounge Bar"/>
                    <StayWalk first="Lounge Bar"/>
                </div>

                <div>
                    <h1>Similar rooms</h1>
                     <StayAround/>
                     <StayAround/>
                     <StayAround/>
                </div>
               
            </div>
        </section>
        </>
    )
}

export default SingleRoom