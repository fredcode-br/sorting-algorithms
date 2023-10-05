import Footer from "../Footer";
import Number from "../Number";
import { useAlgorithmContext } from "../../common/context/Algorithm";

const Content = () => {
    const { numbers, steps } = useAlgorithmContext();
    return (
        <div className="flex flex-col justify-center items-center relative gap-2 bg-dark-100  dark:bg-ligth-100  text-white dark:text-black" style={{ gridArea: 'CT', height: '88vh'}}>
            <ul className="flex gap-2">
                {numbers.map((number, index) => (
                    <Number key={index}>{number}</Number>
                ))}
                
            
            </ul>
            <div className="flex pt-10">
                <label 
                    className="bg-dark-100 dark:bg-fredcode-300  text-white border border-gray-100 rounded-l px-3 py-2"
                    htmlFor="speed">
                    Passo
                </label>
                <p  className="grid place-items-center bg-dark-300 dark:bg-fredcode-100  text-white border border-gray-100 px-3 py-2 rounded-r w-14 h-12">
                    { steps }
                </p>
            </div>
            <Footer />
        </div>
    )
};

export default Content