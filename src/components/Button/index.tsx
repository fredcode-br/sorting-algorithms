import Ibutton from "../../Types/button";

const Button = ({children, type, customClass, status, handleClick}  : Ibutton ) => {
    function clicked(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        handleClick()
    }

    return (
        <button 
            disabled={status}
            onClick={clicked}
            type={type}
            className={"bg-dark-100 text-white border border-gray-100 rounded hover:bg-dark-300 px-7 py-2 "+customClass}
        >
            {children}
        </button>
    )
};

export default Button