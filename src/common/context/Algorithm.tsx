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
    steps: 0,
    setSteps: () => {},
    speed: 1000,
    setSpeed: () => {},
    smallest: 0,
    setSmallest: () => {}, 
    range: 10,
    setRange: () => {},
};

function generateRandomNumbers(range: number): number[] {
    const randomNumbers: number[] = [];
    while (randomNumbers.length < range) {
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
        {name: 'Insertion Sort', value: 'insertion'},
        {name: 'Selection Sort', value: 'selection'},
        // {name: 'Quick Sort', value: 'quick'},
    ];
    const [ range, setRange ] = useState<number>(6)
    const [ actualAlgorithm, setActualAlgorithm ] = useState<IAlgorithmContext>(algorithms[0]);
    const [ numbers, setNumbers ] = useState<number[]>(generateRandomNumbers(range));
    const [ sorting, setSorting ] = useState<boolean>(false);
    const [ steps, setSteps ] = useState<number>(0);
    const [ speed, setSpeed ] = useState<number>(2000);
    const [ smallest, setSmallest  ] = useState<number>(0)
    
    return (
        <AlgorithmContext.Provider value={{ 
            algorithms,
            actualAlgorithm,
            setActualAlgorithm,
            numbers,
            setNumbers,
            sorting,
            setSorting,
            steps,
            setSteps,
            speed,
            setSpeed,
            smallest,
            setSmallest,
            range,
            setRange        }}>
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
        steps,
        setSteps,
        speed,
        setSpeed,
        smallest,
        setSmallest,
        range, 
        setRange
    } = useContext(AlgorithmContext);
    
    function selectAlgorithmn(value: string) {
        const algorithm: IAlgorithmContext = algorithms.find(algorithm => algorithm.value === value ) || {name: "", value: ""};
        setActualAlgorithm(algorithm)
    }

    function sort() {
        setSorting(true)
    }

    function reset() {
        setSorting(false)
        setNumbers(generateRandomNumbers(range))
        setSteps(0)
    }

    useEffect(() => {
        setNumbers(generateRandomNumbers(range))
        setSteps(0)
        setSorting(false)
      }, [actualAlgorithm, setNumbers, setSteps, setSorting, range])


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
        speed, 
        setSpeed,
        sorting,
        setSorting,
        smallest,
        setSmallest,  
        range,
        setRange
    }
}