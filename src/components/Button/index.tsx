import Ibutton from "../../Types/button";

const Button = ({children, type, customClass, handleClick}  : Ibutton ) => {
    function clicked(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        handleClick()
    }

    return (
        <button 
            onClick={clicked}
            type={type}
            className={"bg-dark-100 dark:bg-fredcode-100  text-white border border-gray-100 rounded hover:bg-dark-300 hover:dark:bg-fredcode-200 px-7 py-2 "+customClass}
        >
            {children}
        </button>
    )
};

export default Button