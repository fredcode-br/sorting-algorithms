import Footer from "../Footer";
import { useAlgorithmContext } from "../../common/context/Algorithm";
import BubbleSort from "../../algorithms/BubbleSort";
import InsertionSort from "../../algorithms/InsertionSort";
import SelectionSort from "../../algorithms/SelectionSort"; 
// import QuickSort from "../../algorithms/QuickSort";

const Content = () => {
    const { numbers, steps, smallest } = useAlgorithmContext();

    return (
        <div 
            className="grid-in-content flex flex-col justify-center items-center relative gap-2 bg-dark-100 text-white h-full"
        >
            <ul 
                id="list-numbers"
                className="flex justify-center w-full"
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
                    <p className="grid place-items-center bg-dark-100 text-white border border-gray-100 rounded-l px-4 py-0">
                        Smallest
                    </p>
                    <span className="grid place-items-center bg-dark-300 text-white border border-gray-100 px-3 py-2 rounded-r w-14 h-12">
                        { smallest }
                    </span>
                </div>
                <div className="flex pt-10">
                    <p className="grid place-items-center bg-dark-100 text-white border border-gray-100 rounded-l px-4 py-0">
                         Steps
                    </p>
                    <span className="grid place-items-center bg-dark-300 text-white border border-gray-100 px-3 py-2 rounded-r w-14 h-12">
                        { steps }
                    </span>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Content