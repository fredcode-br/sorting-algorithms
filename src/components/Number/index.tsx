import Inumber from "../../Types/number"


const Number = ({ children } : Inumber) => {
    return (
        <li className="grid place-items-center bg-dark-200  dark:bg-fredcode-100  text-white w-12 h-12 border border-gray-500 rounded">
            {children}
        </li>
    )
}

export default Number