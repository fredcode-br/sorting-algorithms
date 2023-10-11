import Button from "../Button";
import Select from "../Select";
import IconReset from "./reset.svg"
import { useAlgorithmContext } from "../../common/context/Algorithm";
import Label from "../Label";

const Form = () => {

    const { algorithms, selectAlgorithmn, sort, reset, setSpeed, sorting} = useAlgorithmContext();
    
    return (
        <div className="w-full">
            <h2 className="pb-10 font-bold text-3xl">Algorithms</h2>
            <form className="flex flex-col items-center gap-12">
                <div className="flex w-full">
                    <Label 
                        customClass="w-2/5"
                        htmlFor="algorithm"
                        status={sorting}
                    >
                        Algorithm
                    </Label>
                    <Select 
                        customClass="w-3/5"
                        status={sorting}
                        id="algorithm" 
                        options={algorithms}
                        handleSelect={(value = "") => selectAlgorithmn(value)}
                    />
                </div>
                <div className="flex w-full">
                    <Label
                        customClass="bg-transparent border-none rounded px-0 py-0 me-2"
                        htmlFor="speed"
                        status={sorting}
                    >
                        Speed: 
                    </Label>
                    <input 
                        disabled={sorting}
                        className="w-full"
                        type="range" 
                        name="speed" 
                        id="speed"
                        step="1000"
                        min="1000"
                        max="5000"
                        onChange={event => setSpeed(Number(event.target.value))}
                    />
            
                </div>
                <div className="flex gap-2 w-full">
                    <Button
                        handleClick={() => {reset()}}
                        status={sorting}
                    >
                        <img
                            className=" text-ligth-100 w-8"
                            src={IconReset} 
                            alt="Resetar" 
                        />
                    </Button>
                    <Button 
                        type="submit" 
                        customClass="w-full" 
                        id="sort" 
                        handleClick={() => sort()}
                        status={sorting}    
                    >
                        Sort
                    </Button>
                </div>
            </form>
        </div>
    )
};

export default Form