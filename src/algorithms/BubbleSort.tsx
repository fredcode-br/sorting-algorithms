import {useEffect } from 'react';
import { useAlgorithmContext } from "../common/context/Algorithm";
import { delay } from 'framer-motion';

const BubbleSort = () => {
    const { numbers, setNumbers, steps, setSteps, speed, actualAlgorithm, sorting, setSorting } = useAlgorithmContext();
    let sortedNumbers = [...numbers];

    const solve = () => {
        for(let i = sortedNumbers.length, timer=0; i > 0; timer += i-1, i--){
            console.log("Teste")
            setTimeout(() => {
                for(let j = 1; j < i; j++){
                    setTimeout(() => {
                        let numberJ = document.getElementById(`${sortedNumbers[j]}`);
                        if (numberJ) numberJ.style.border="solid 2px red"
                        let numberJ1 = document.getElementById(`${sortedNumbers[j-1]}`);
                        if (numberJ1) numberJ1.style.border="solid 2px red"

                        setTimeout(() => {
                            if (numberJ) numberJ.style.border='none'
                            if (numberJ1) numberJ1.style.border='none'
                        }, 600-10) // Tempo para desativar animação troca

                        if (sortedNumbers[j] < sortedNumbers[j - 1]) {
                            let temp = sortedNumbers[j];
                            let newArray = [...sortedNumbers];
                            newArray[j] = newArray[j - 1];
                        newArray[j - 1] = temp
                        sortedNumbers = newArray
                        setSteps(steps => steps+1)

                        let numberJPosition = numberJ?.getBoundingClientRect()
                        let numberJ1Position = numberJ1?.getBoundingClientRect()
                            
                        if (numberJ) numberJ.style.transform='translate(0%, -150%)'
                        if (numberJ1) numberJ1.style.transform='translate(0%, -150%)'
                        
                        setTimeout(()=>{
                            if (numberJ) numberJ.style.transform='translate( calc(130% - 4px), -150%)'
                            if (numberJ1) numberJ1.style.transform='translate( calc(-130% + 4px), -150%)'
                        },200) 
                        

                        setTimeout(()=>{
                            if (numberJ) numberJ.style.transform='translate( calc(130% - 4px), 0%)'
                            if (numberJ1) numberJ1.style.transform='translate( calc(-130% + 4px), 0%)'
                        },500) // Tempo para desativar animação troca
                        setNumbers(sortedNumbers)
                    }
                    setTimeout(()=>{
                        if (numberJ) numberJ.style.transform='translate( 0%, 0%)'
                        if (numberJ1) numberJ1.style.transform='translate( 0%, 0%)'
                    },710) // Tempo para desativar animação troca
                }, (j-1)*700)
                
                }
                console.log("SortedNumbers: "+ sortedNumbers)
                // setNumbers(sortedNumbers)
            },timer*800)
        }
        console.log("Numbers:       "+ numbers )
        
       setSorting(false)
    }

    useEffect(() => {
        if(actualAlgorithm.value === 'bubble'){
            if(sorting == true)
               solve();
         }
    }, [sorting]);
   
    return <></>;

}

export default BubbleSort
