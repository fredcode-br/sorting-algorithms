import Button from "../Button";
import Select from "../Select";
import IconReset from "./reset.svg"
import { useAlgorithmContext } from "../../common/context/Algorithm";

const Form = () => {

    const { algorithms, selectAlgorithmn, sort, reset, stop, speed, setSpeed, sorting} = useAlgorithmContext();
    
    return (
        <div className="w-full">
            <h2 className="pb-10 font-bold text-3xl">Algorithms</h2>
            <form className="flex flex-col items-center gap-12">
                <div className="flex w-full">
                <label 
                    className="bg-dark-100 text-white border border-gray-100 rounded-l px-3 py-2"
                    htmlFor="algorithm">
                    Algorítmo
                </label>
                <Select 
                    id="algorithm" 
                    options={algorithms}
                    handleSelect={(value = "") => selectAlgorithmn(value)}
                />
                </div>
                <div className="w-full">
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
                    <div className="flex w-full pt-3">
                        <label 
                            className="bg-dark-100  text-white border border-gray-100 rounded-l px-3 py-2"
                            htmlFor="speed">
                            Velocidade
                        </label>
                        <p className="w-full bg-dark-300 text-white border border-gray-100 px-3 py-2 rounded-r">
                            {(Number(speed))*0.001}
                        </p>
                    </div>
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
                        Ordenar
                    </Button>
                </div>
            </form>
        </div>
    )
};

export default Form