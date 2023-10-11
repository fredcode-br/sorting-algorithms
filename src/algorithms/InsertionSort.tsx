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
        const n = sortedNumbers.length
        for (let i = 1; i < n; i++) {
            
            if (i === 1) {
                let firstNumber = document.getElementById(`${sortedNumbers[i-1]}`);
                if (firstNumber) firstNumber.style.border = "solid 3px blue"
            }
            

            let numberI = document.getElementById(`${sortedNumbers[i]}`);
            if (numberI) numberI.style.border = "solid 3px red"
            await sleep(speed * 0.5)
        
            for (let j = i; j > 0; j--) {
              if (sortedNumbers[j] < sortedNumbers[j - 1]) {
                // Troca os elementos se o elemento atual for menor que o anterior
                const temp = sortedNumbers[j];
                let newArray = [...sortedNumbers];
                newArray[j] = newArray[j - 1];
                newArray[j - 1] = temp
                sortedNumbers = newArray

                let numberJ = document.getElementById(`${sortedNumbers[j]}`);
                let numberJ1 = document.getElementById(`${sortedNumbers[j - 1]}`);
                if (numberJ) numberJ.style.transform = 'translate(0%, -150%)'
                    if (numberJ1) numberJ1.style.transform = 'translate(0%, -150%)'
                    await sleep(speed * 0.2)

                    setNumbers(sortedNumbers)
                    setSteps(steps => steps + 1)
                    await sleep(speed * 0.2)

                    if (numberJ) numberJ.style.transform = 'translateY(0%)'
                    if (numberJ1) numberJ1.style.transform = 'translateY(0%)'
                    if (numberJ1) numberJ1.style.border = "solid 3px blue"
                    await sleep(speed * 0.4)

              } else {
                let numberJ = document.getElementById(`${sortedNumbers[j]}`);
                if (numberJ) numberJ.style.border = "solid 3px blue"
                break;
              }

            }
        }

        for (let i = 0; i < sortedNumbers.length; i++) {
            let number = document.getElementById(`${sortedNumbers[i]}`)
            if (number) number.style.border = "solid 3px green"
        }

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
