import "./HeaderProp.css"

const HeaderProps = ({ label, color = 'gray', onClick }) => {
    const btnStyle = `header-txt ${color} }`;
    return(
        <>
         <p onClick={onClick} className={btnStyle}>{label}</p>
        </>
    )
}

export default HeaderProps