import { useAlgorithmContext } from "../../common/context/Algorithm";

const MainHeader = () => {
    const { actualAlgorithm } = useAlgorithmContext();
    return (
        <div className="h-1/5 flex justify-center items-center border-s-2 border-bg-white bg-dark-200 text-white" style={{ gridArea: 'MH', height: '12vh'}}>
            <h1 className="text-xl font-bold">
                { actualAlgorithm.name }
            </h1>
        </div>
    )
};


export default MainHeader