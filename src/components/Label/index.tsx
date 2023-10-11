import Ilabel from "../../Types/label";

const Label = ({children, customClass, htmlFor, status}  : Ilabel ) => {
    let disabled = ""
    if( status === true ) {
        disabled= "bg-dark-200 opacity-25";
    }

    return (
        <label
            htmlFor={htmlFor} 
            className={"bg-dark-100 text-white border border-gray-100 rounded px-2 py-2 "+customClass+" "+disabled}
        >
            {children}
        </label>
    )
};

export default Label