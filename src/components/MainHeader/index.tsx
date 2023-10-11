import { useAlgorithmContext } from "../../common/context/Algorithm";

const MainHeader = () => {
    const { actualAlgorithm } = useAlgorithmContext();
    return (
        <div className="hidden md:flex grid-in-header justify-center items-center border-s-2 border-bg-white bg-dark-200 text-white w-full" 
        >
            <h1 className="text-xl font-bold">
                { actualAlgorithm.name }
            </h1>
        </div>
    )
};


export default MainHeader