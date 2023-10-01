import Iselect from "../../Types/select"

const Select = ({options, selected, id} : Iselect) => {
    return (
        <select 
            className="w-full bg-dark-300 dark:bg-fredcode-100  text-white border border-gray-100 hover:bg-dark-200 hover:dark:bg-fredcode-200 px-3 py-2 rounded-r"
            id={id}
        >
            <option value="valor1">Valor 1</option>
            <option value="valor2" selected>Valor 2</option>
            <option value="valor3">Valor 3</option>
        </select>
    )
}

export default Select