import {useEffect } from 'react';
import { useAlgorithmContext } from "../common/context/Algorithm";

const InsertionSort = () => {
    const { 
        numbers, 
        setNumbers, 
        setSteps, 
        speed, 
        actualAlgorithm, 
        sorting, 
        setSorting 
    } = useAlgorithmContext();
    let sortedNumbers = [...numbers];

    function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const solve = async () => {
        for (let i = 1; i < sortedNumbers.length; i++) {
            let currentElement = sortedNumbers[i];
            let j = i - 1;

            if( i === 1){
                let numberJ = document.getElementById(`${sortedNumbers[j]}`);
                if (numberJ) numberJ.style.border = "solid 3px blue"
                await sleep(speed * 0.5)
            }

            let numberI = document.getElementById(`${sortedNumbers[i]}`);
            if (numberI) numberI.style.border = "solid 3px red"
            await sleep(speed)

            while (j >= 0 && sortedNumbers[j] > currentElement) {
                sortedNumbers[j + 1] = sortedNumbers[j];
                let numberJ = document.getElementById(`${sortedNumbers[j]}`);
                if (numberJ) numberJ.style.border = "solid 3px blue"
                // setSteps(steps => steps + 1)
                await sleep(speed * 0.2)
                j--;
            }
            
            
            sortedNumbers[j + 1] = currentElement;
            setNumbers(sortedNumbers)
            
          }
        // for (let i = 1; i < sortedNumbers.length; i++) {        
        //     let currentValue = sortedNumbers[i]
        //     let j
        //     let numberI = document.getElementById(`${sortedNumbers[i]}`);
        //     if (numberI) numberI.style.border = "solid 3px red"
        //     await sleep(speed)
            
        //     for (j = i - 1; j >= 0 && sortedNumbers[j] > currentValue; j--) {
        //         sortedNumbers[j + 1] = sortedNumbers[j]
        //     }
        //     sortedNumbers[j + 1] = currentValue     
        //     // numberI = document.getElementById(`${sortedNumbers[i]}`);
        //     // if (numberI) numberI.style.border = "solid 1px #6b7280"      
        // }
        console.log(sortedNumbers)
        setSorting(false)
    }

    useEffect(() => {
        if(actualAlgorithm.value === 'insertion'){
            if(sorting === true)
               solve();
         }
    }, [sorting, actualAlgorithm.value]);
   
    return <></>;

}

export default InsertionSort
