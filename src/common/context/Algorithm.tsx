import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { AlgorithmContextType, IAlgorithmContext } from '../../Types/algorithm';
// import { bubble } from '../../algorithms/index';

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
    steps: 0,
    setSteps: () => {}
};


function generateRandomnumbers() {
    const randomNumbers: number[] = [];
    for (let i = 0; i < 10; i++) {
        const randomNumber: number = Math.floor(Math.random() * 99) + 1;
        randomNumbers.push(randomNumber)
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
    const [ numbers, setNumbers ] = useState<number[]>(generateRandomnumbers);
    const [ steps, setSteps ] = useState<number>(0);
    
    return (
        <AlgorithmContext.Provider value={{ 
            algorithms,
            actualAlgorithm,
            setActualAlgorithm,
            numbers,
            setNumbers,
            steps,
            setSteps
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
        steps,
        setSteps
    } = useContext(AlgorithmContext);

    function selectAlgorithmn(value: string) {
        const algorithm: IAlgorithmContext = algorithms.find(algorithm => algorithm.value === value ) || {name: "", value: ""};
        setActualAlgorithm(algorithm)
    }
    
    function sort() {
        const copiedNumbers = [...numbers];
        const sortedNumbers = bubble(copiedNumbers)
        setNumbers(sortedNumbers)
       
       
    }

    function bubble(arr: number[]) {
        for (var i = 0; i < arr.length; i++) { 
            for (var j = 0; j < (arr.length - i - 1); j++) { 
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

    function reset() {
        setNumbers(generateRandomnumbers)
        setSteps(0)
    }

    useEffect(() => {
        setNumbers(generateRandomnumbers)
        setSteps(0)
      }, [actualAlgorithm, setNumbers, setSteps])


    return {
        algorithms,
        actualAlgorithm,
        numbers,
        selectAlgorithmn,
        sort,
        steps,
        setSteps,
        reset
    }
}