import Inumber from "../../Types/number"
import { motion } from "framer-motion"


const Number = ({ children, id } : Inumber) => {
    return (
        <motion.li 
            className="grid place-items-center bg-dark-200  dark:bg-fredcode-100  text-white w-12 h-12 border border-gray-500 rounded"
            id={id}
        >
            {children}
        </motion.li>
    )
}

export default Number