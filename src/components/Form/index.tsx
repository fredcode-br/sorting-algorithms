import { useState } from "react";
import Button from "../Button";
import Select from "../Select";


const Form = () => {
    const algorithms: { name: string; value: string }[] = [
        {name: 'Bubble Sort', value: 'bubble'},
        {name: 'Selection Sort', value: 'selection'},
        {name: 'Insertion Sort', value: 'insertion'}
    ]

    const [speed, setSpeed] = useState<string>('5')

    function submit() {
      
        "teste"
      
    }

    return (
        <div className="w-full">
            <h2 className="pb-10 font-bold text-3xl">Algorithms</h2>
            <form className="flex flex-col items-center gap-12">
                <div className="flex w-full">
                <label 
                    className="bg-dark-100 dark:bg-fredcode-300  text-white border border-gray-100 rounded-l px-3 py-2"
                    htmlFor="algorithm">
                    Algorítmo
                </label>
                <Select 
                    id="algorithm" 
                    options={algorithms} 
                />
                </div>
                <div className="w-full">
                    <input 
                            className="w-full bg-fredcode-300"
                            type="range" 
                            name="speed" 
                            id="speed"
                            step="1"
                            min="1"
                            max="5"
                            onChange={event => setSpeed(event.target.value)}
                            />
                    <div className="flex w-full pt-3">
                        <label 
                            className="bg-dark-100 dark:bg-fredcode-300  text-white border border-gray-100 rounded-l px-3 py-2"
                            htmlFor="speed">
                            Velocidade
                        </label>
                        <p className="w-full bg-dark-300 dark:bg-fredcode-100  text-white border border-gray-100 px-3 py-2 rounded-r">
                            {speed}
                        </p>
                    </div>
                </div>
                <div className="w-full">
                    <Button type="submit" customClass="w-full">
                        Ordenar
                    </Button>
                    <div className="flex justify-between pt-4">
                        <Button>
                            Resetar
                        </Button>
                        <Button>
                            Parar
                        </Button>
                    </div> 
                </div>
            </form>
        </div>
    )
};

export default Form