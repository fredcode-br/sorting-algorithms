import {useEffect } from 'react';
import { useAlgorithmContext } from "../common/context/Algorithm";

const BubbleSort = () => {
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

    const solve = () => {
        for(let i = sortedNumbers.length, timer=0; i > 0; timer += i-1, i--){
            setTimeout(() => {
                for(let j = 1; j < i; j++){
                    setTimeout(() => {
                        let numberJ = document.getElementById(`${sortedNumbers[j]}`);
                        let numberJ1 = document.getElementById(`${sortedNumbers[j-1]}`);
                        if (numberJ) numberJ.style.border="solid 3px red"
                        if (numberJ1) numberJ1.style.border="solid 3px red"

                        setTimeout(() => {
                            if (numberJ) numberJ.style.border='none'
                            if (numberJ1) numberJ1.style.border='none'
                            if (j === i-1) if (numberJ1) numberJ1.style.border="solid 3px green"
                        }, speed-100)
                        
                        if (sortedNumbers[j] < sortedNumbers[j - 1]) {
                            let temp = sortedNumbers[j];
                            let newArray = [...sortedNumbers];
                            newArray[j] = newArray[j - 1];
                            newArray[j - 1] = temp
                            sortedNumbers = newArray
                            
                            
                            setTimeout(() => {
                                if (numberJ) numberJ.style.transform='translate(0%, -150%)'
                                if (numberJ1) numberJ1.style.transform='translate(0%, -150%)'
                            }, speed*0.1)
                            setTimeout(() => {
                                setNumbers(sortedNumbers)
                                setSteps(steps => steps+1)
                            }, speed*0.52)
                        
                            setTimeout(()=>{
                                if (numberJ) numberJ.style.transform='translateY(0%)'
                                if (numberJ1) numberJ1.style.transform='translateY(0%)'
                            },speed*0.7) 
                        }
    
                    }, (j-1)*speed)
                }
            },timer*speed)
        }   
       setSorting(false)
    }

    useEffect(() => {
        if(actualAlgorithm.value === 'bubble'){
            if(sorting === true)
               solve();
         }
    }, [sorting, actualAlgorithm.value]);
   
    return <></>;
}

export default BubbleSort
