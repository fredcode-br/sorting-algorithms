export type IAlgorithmContext = {
    name: string,
    value: string
}

export type AlgorithmContextType = {
    algorithms: IAlgorithmContext[];
    actualAlgorithm: IAlgorithmContext;
    setActualAlgorithm: React.Dispatch<React.SetStateAction<IAlgorithmContext>>;
    numbers: number[];
    setNumbers: React.Dispatch<React.SetStateAction<number[]>>;
    steps: number;
    setSteps: React.Dispatch<React.SetStateAction<number>>;
};