import {useEffect } from 'react';
import { useAlgorithmContext } from "../common/context/Algorithm";

const SelectionSort = () => {
    const { 
        numbers, 
        setNumbers, 
        setSteps, 
        speed, 
        actualAlgorithm, 
        sorting, 
        // setSorting 
    } = useAlgorithmContext();
    let sortedNumbers = [...numbers];
    // let numberJ = document.getElementById(`${sortedNumbers[j]}`);
    // if (numberJ) numberJ.style.border="solid 3px red"                        
    
    const solve = () => {
        for (let i = 0; i < sortedNumbers.length - 1; i++) {
            setTimeout(()=>{
                let numberI = document.getElementById(`${sortedNumbers[i]}`);
                if (numberI) numberI.style.border="solid 3px red" 
                let l = i;
                for (let j = i + 1; j < sortedNumbers.length; j++) {
                    setTimeout(()=>{
                        let numberJ = document.getElementById(`${sortedNumbers[j]}`);
                        if (numberJ) numberJ.style.border="solid 3px red" 
                    }, speed*j*0.25)
                    setTimeout(()=>{
                        let numberJ = document.getElementById(`${sortedNumbers[j]}`);
                        if (numberJ) numberJ.style.border="none" 
                    }, speed*j*0.3)
                    if (sortedNumbers[j] < sortedNumbers[l]) {
                        l = j;
                    }
                }
                if (l !== i) {
                    let newArray = [...sortedNumbers];
                    let temp = newArray[i];
                    newArray[i] = newArray[l];
                    newArray[l] = temp;
                    sortedNumbers = newArray
                }
                
                setTimeout(()=>{
                    setNumbers(numbers => sortedNumbers)
                    setSteps(steps => steps+1)
                }, speed*(i+1)*0.2)
                
                setTimeout(()=>{
                    numberI = document.getElementById(`${sortedNumbers[i]}`);
                    let numberL = document.getElementById(`${sortedNumbers[l]}`);
                    if (numberI) numberI.style.border="none" 
                    if (numberI) numberI.style.border="solid 3px green" 
                    
                }, speed*(i+1)*1.2)
                
            }, speed*(i+1)*4)
        }
    }

    useEffect(() => {
        if(actualAlgorithm.value === 'selection'){
            if(sorting === true)
               solve();
         }
    }, [sorting, actualAlgorithm.value]);
   
    return <></>;

}

export default SelectionSort
