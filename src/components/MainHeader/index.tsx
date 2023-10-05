import { useAlgorithmContext } from "../../common/context/Algorithm";
import ToggleTheme from "./ToggleTheme"

const MainHeader = () => {
    const { actualAlgorithm } = useAlgorithmContext();
    return (
        <div className="px-7 relative h-1/5 flex justify-end items-center border-s-2 border-bg-white bg-dark-200 dark:bg-fredcode-200 text-white" style={{ gridArea: 'MH', height: '12vh'}}>
            <h1 className="absolute right-2/4">
                { actualAlgorithm.name }
            </h1>
            <ToggleTheme />
        </div>
    )
};


export default MainHeader