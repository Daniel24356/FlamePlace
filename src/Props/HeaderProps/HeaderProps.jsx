import "./HeaderProp.css"

const HeaderProps = ({ label, color = 'gray' }) => {
    const btnStyle = `header-txt ${color} }`;
    return(
        <>
         <p className={btnStyle}>{label}</p>
        </>
    )
}

export default HeaderProps