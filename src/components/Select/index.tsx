import Iselect from "../../Types/select"

const Select = ({options, id, handleSelect, status, customClass} : Iselect) => {
 
    function select(event: React.ChangeEvent<HTMLSelectElement>) {
        event.preventDefault()
        const value: string = event.target.value || ""
        handleSelect(value)
    }

    return (
        
        <select 
            onChange={select}
            disabled={status}
            className={"w-full bg-dark-300 dark:bg-fredcode-100  text-white border border-gray-100 hover:bg-dark-200 disabled:bg-dark-200 disabled:opacity-25 px-3 py-2 rounded-r "+customClass}
            id={id}
        >   
            {options.map((option, index) => (
                <option key={index} value={option.value}>{option.name}</option>
            ))}
            
        </select>
    )
}

export default Select