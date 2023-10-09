import Button from "../Button";
import Select from "../Select";

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
                <div className="w-full">
                    <Button type="submit" customClass="w-full" id="sort" handleClick={() => sort()}>
                        Ordenar
                    </Button>
                    <div className="flex justify-between pt-4">
                        <Button
                            handleClick={() => {reset()}}
                            status={sorting}
                        >
                            Resetar
                        </Button>
                        <Button 
                            handleClick={() => {stop()}}
                        >
                            Parar
                        </Button>
                    </div> 
                </div>
            </form>
        </div>
    )
};

export default Form