import Iselect from "../../Types/select"

const Select = ({options, id, onChange} : Iselect) => {
    
    return (
        
        <select 
            className="w-full bg-dark-300 dark:bg-fredcode-100  text-white border border-gray-100 hover:bg-dark-200 hover:dark:bg-fredcode-200 px-3 py-2 rounded-r"
            id={id}
        >   
            {options.map((option, index) => (
                <option key={index} value={option.value}>{option.name}</option>
            ))}
            
        </select>
    )
}

export default Select