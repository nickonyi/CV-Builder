

function Button({className,label,onClick}){
return (
    <button className={className} onClick={onClick}>
        {label}
    </button>
)
}

export default Button