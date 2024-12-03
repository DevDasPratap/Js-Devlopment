import PropTypes from "prop-types"

const Button = ({text, onClick, disabled=false, customStyle})=>{
    const disabledStyle={
        backgroundColor: '#999',
        color:'#333',
        cursor:'not-allowed'
    }
    const style = {
        padding: '0.25rem, 1rem',
        backgroundColor: '#ddd',
        color: '#111',
        borderRadius:'0.30rem',
        cursor:'pointer',
        ...customStyle,
        ...(disabled && disabledStyle)
    }
    return (
        <button onClick={onClick} disabled={disabled} style={style}>{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    customStyle: PropTypes.object,
    disabled: PropTypes.bool
}
export default Button