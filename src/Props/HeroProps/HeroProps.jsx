import "./HeroProps.css"

const HeroProps = ({text}) => {
    return(
        <>
        <section className="heroprops">
            <div className="overlay"></div>
            <div className="hero-content">
            <h1>{text}</h1>
            </div>
            
        </section>  
        </>
    )
}

export default HeroProps