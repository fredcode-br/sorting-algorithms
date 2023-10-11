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
        setSorting,
        setSmallest
    } = useAlgorithmContext();
    let sortedNumbers = [...numbers];                 

    function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function swap(i: number, l: number, sortedNumbers: number[]) {
        let I = document.getElementById(`${sortedNumbers[i]}`)
        let L = document.getElementById(`${sortedNumbers[l]}`)
        
        if (I && L) {
            I.style.transform = 'translate(0%, -150%)'
            L.style.transform = 'translate(0%, -150%)'
            await sleep(speed * 0.5)

            let distance = i-l

            I.style.border = "solid 3px red"
            L.style.border = "solid 3px red"
            I.style.transform=`translate(calc((100% + 8px)*(${distance})), -150%)`
            L.style.transform=`translate(calc((-100% - 8px)*(${distance})), -150%)`
            await sleep(speed * 0.45)

            I.style.transitionDuration='0ms'
            L.style.transitionDuration='0ms'
            await sleep(speed * 0.3)
            
            setNumbers(sortedNumbers)
            setSteps(steps => steps + 1)
        
            I.style.transform=`translate(0%, -150%)`
            L.style.transform=`translate(0%, -150%)`
            await sleep(speed * 0.3)
   
            I.style.transitionDuration='200ms'
            L.style.transitionDuration='200ms'
            await sleep(speed * 0.3)
            
            I.style.transform = 'translate(0%, 0%)'
            L.style.transform = 'translate(0%, 0%)'
        }
    }

    const resolve = async (i: number, sortedNumbers: number[]) => {
        let numberI = document.getElementById(`${sortedNumbers[i]}`);
        if (numberI) numberI.style.border = "solid 3px red"
        let l = i
        await sleep(speed * 0.4);
        for (let j = i + 1; j < sortedNumbers.length; j++) {
            if (sortedNumbers[j] < sortedNumbers[l]) {
                if(l !== 0) {
                    let numberL = document.getElementById(`${sortedNumbers[l]}`);
                    if (numberL) numberL.style.border = "solid 1px #6b7280"
                }
                l = j
                setSmallest(sortedNumbers[l])
                let numberL = document.getElementById(`${sortedNumbers[l]}`);
                if (numberL) numberL.style.border = "solid 3px blue"
                await sleep(speed*0.2)
            }else{
                let numberJ = document.getElementById(`${sortedNumbers[j]}`);
                if (numberJ) numberJ.style.border = "solid 3px red"
                await sleep(speed * 0.27);
                if (numberJ) numberJ.style.border = "solid 1px #6b7280"
            }
        }
        if (l !== i) {
            let newArray = [...sortedNumbers];
            let temp = newArray[i];
            newArray[i] = newArray[l];
            newArray[l] = temp;
            sortedNumbers = newArray
            await swap(i, l, sortedNumbers);
        }
        return { sortedNumbers, l }
    }

    const solve = async () => {
        for (let i = 0, timer = sortedNumbers.length; i < sortedNumbers.length - 1; timer--, i++) {
            let resolved = (await resolve(i, sortedNumbers))
            sortedNumbers = resolved.sortedNumbers
            await sleep(timer);
    
            let numberL = document.getElementById(`${sortedNumbers[resolved.l]}`);
            if (numberL) numberL.style.border = "solid 1px #6b7280"
            let numberI = document.getElementById(`${sortedNumbers[i]}`);
            if (numberI) numberI.style.border = "solid 3px green"

            if(i === sortedNumbers.length-2) {
                let lastNumber = document.getElementById(`${sortedNumbers[i+1]}`);
                if (lastNumber) lastNumber.style.border = "solid 3px green"
                setSmallest(sortedNumbers[0])
            }
        }
        setSorting(false)
    }
    useEffect(() => {
        let smallerDiv = document.getElementById('smaller-div')
        if(actualAlgorithm.value === 'selection'){
            if(smallerDiv) smallerDiv?.classList.replace('hidden', 'flex');
            if(sorting === true)
               solve();
         }
         else {
            if(smallerDiv) smallerDiv?.classList.replace('flex', 'hidden');
         }
    }, [sorting, actualAlgorithm.value]);
   
    return <></>;

}

export default SelectionSort
