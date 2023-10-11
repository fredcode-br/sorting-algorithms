import Footer from "../Footer";
import { useAlgorithmContext } from "../../common/context/Algorithm";
import BubbleSort from "../../algorithms/BubbleSort";
import InsertionSort from "../../algorithms/InsertionSort";
import SelectionSort from "../../algorithms/SelectionSort";
import Label from "../Label";
// import QuickSort from "../../algorithms/QuickSort";

const Content = () => {
    const { numbers, steps, smallest } = useAlgorithmContext();

    return (
        <div className="flex flex-col justify-center items-center relative gap-2 bg-dark-100 text-white" style={{ gridArea: 'CT', height: '88vh'}}>
            <ul 
                id="list-numbers"
                className="flex"
            >
                <BubbleSort />
                <SelectionSort />
                <InsertionSort />
                {/* <QuickSort /> */}
                
                {numbers.map((number) => (
                    <li 
                        className="grid place-items-center bg-dark-200 text-white w-12 h-12 border border-gray-500 rounded mx-1"
                        id={number.toString()}
                        key={number}
                        style={{ transition: "200ms ease-in" }}
                    >
                        {number}
                    </li>
                ))}
            </ul>
            <div className="flex gap-5">
                <div id="smaller-div" className="hidden pt-10 ">
                    <Label
                        customClass="grid place-items-center px-4 py-0"
                        htmlFor="steps"
                    >
                        Smallest
                    </Label>
                    <p id="steps" className="grid place-items-center bg-dark-300 text-white border border-gray-100 px-3 py-2 rounded-r w-14 h-12">
                        { smallest }
                    </p>
                </div>
                <div className="flex pt-10">
                    <Label
                        customClass="grid place-items-center px-4 py-0"
                        htmlFor="steps"
                    >
                        Steps
                    </Label>
                    <p id="steps" className="grid place-items-center bg-dark-300 text-white border border-gray-100 px-3 py-2 rounded-r w-14 h-12">
                        { steps }
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Content