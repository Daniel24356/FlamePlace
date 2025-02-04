  import "./textprops.css"

  const TextProps = ({first, second, third, color = 'primary'}) => {
    const btnStyle = `button ${color}`;
    return(
       <>
        <div className="text-p">
          <p>{first}</p>
          <p>{second}</p>
          <p>{third}</p>
        </div>
       </>
    )
  }

  export default TextProps