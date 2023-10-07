import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { AlgorithmContextType, IAlgorithmContext } from '../../Types/algorithm';

type Props = {
    children?: ReactNode;
};

const ALGORITHMS: IAlgorithmContext[] = [
    {name: 'Bubble Sort', value: 'bubble'},
    {name: 'Selection Sort', value: 'selection'},
    {name: 'Insertion Sort', value: 'insertion'}
];

const DEFAUL_VALUE = {
    algorithms: ALGORITHMS,
    actualAlgorithm: {name: 'Bubble Sort', value: 'bubble'},
    setActualAlgorithm: () => {},
    numbers: [],
    setNumbers: () => {},
    sorting: false,
    setSorting: () => {},
    activeNumbers: [],
    setActiveNumbers: () => {},
    steps: 0,
    setSteps: () => {},
    speed: 1,
    setSpeed: () => {}
};

function generateRandomNumbers(): number[] {
    const randomNumbers: number[] = [];
    while (randomNumbers.length < 10) {
        const randomNumber: number = Math.floor(Math.random() * 99) + 1;
        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber);
        }
    }
    return randomNumbers;
}

export const AlgorithmContext = createContext<AlgorithmContextType>(DEFAUL_VALUE);
AlgorithmContext.displayName = "Algorítmo";

export const AlgorithmProvider = ({ children }: Props) => {
    const algorithms: IAlgorithmContext[] = [
        {name: 'Bubble Sort', value: 'bubble'},
        {name: 'Selection Sort', value: 'selection'},
        {name: 'Insertion Sort', value: 'insertion'},
        {name: 'Quick Sort', value: 'quick'}
    ];
    const [ actualAlgorithm, setActualAlgorithm ] = useState<IAlgorithmContext>(algorithms[0]);
    const [ numbers, setNumbers ] = useState<number[]>(generateRandomNumbers);
    const [ sorting, setSorting ] = useState<boolean>(false);
    const [ activeNumbers, setActiveNumbers ] = useState<number[]>([]);
    const [ steps, setSteps ] = useState<number>(0);
    const [ speed, setSpeed ] = useState<number>(1)
    
    return (
        <AlgorithmContext.Provider value={{ 
            algorithms,
            actualAlgorithm,
            setActualAlgorithm,
            numbers,
            setNumbers,
            sorting,
            setSorting,
            activeNumbers, 
            setActiveNumbers,
            steps,
            setSteps,
            speed,
            setSpeed
        }}>
            { children }
        </AlgorithmContext.Provider>
    )
}

export const useAlgorithmContext = () => {
    const { 
        algorithms,
        actualAlgorithm,
        setActualAlgorithm, 
        numbers,
        setNumbers,
        sorting,
        setSorting,
        activeNumbers, 
        setActiveNumbers,
        steps,
        setSteps,
        speed,
        setSpeed
    } = useContext(AlgorithmContext);
    
    function selectAlgorithmn(value: string) {
        const algorithm: IAlgorithmContext = algorithms.find(algorithm => algorithm.value === value ) || {name: "", value: ""};
        setActualAlgorithm(algorithm)
    }

    function bubble(arr: number[]) {
        for (var i = 0; i < arr.length; i++) {                 
            for (var j = 0; j < (arr.length - i - 1); j++) { 
                setActiveNumbers([numbers[0], numbers[1]])
                if (arr[j] > arr[j + 1]) { 
                    var temp = arr[j] 
                    arr[j] = arr[j + 1] 
                    arr[j + 1] = temp 
                    setSteps(step => step+1)
                }
            }
        }
        return arr
    }
    
    function sort() {
        setSorting(true)

        // const copiedNumbers = [...numbers]; 
        // const sortedNumbers = bubble(copiedNumbers)
        // setSorting(false)
        // setNumbers(sortedNumbers)
    }

    function reset() {
        setSorting(false)
        setNumbers(generateRandomNumbers)
        setSteps(0)
    }

    function stop() {
        setSorting(false)
    }

    useEffect(() => {
        if(!sorting){
            // document.getElementById('play-btn').disabled = false;
            // document.getElementById('play-btn').style.backgroundColor = 'rgb(0, 149, 199)';
            // document.getElementById('change-btn').disabled = false;
            // document.getElementById('change-btn').style.backgroundColor = 'rgb(0, 149, 199)';
         }

    }, [sorting])

    useEffect(() => {
        setNumbers(generateRandomNumbers)
        setSteps(0)
      }, [actualAlgorithm, setNumbers, setSteps])


    return {
        algorithms,
        actualAlgorithm,
        numbers,
        setNumbers,
        selectAlgorithmn,
        sort,
        steps,
        setSteps,
        reset,
        stop,
        speed, 
        sorting,
        setSorting
    }
}