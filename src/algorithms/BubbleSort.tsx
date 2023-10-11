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

    function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function swap(j: number) {
        let J = document.getElementById(`${sortedNumbers[j]}`)
        let J1 = document.getElementById(`${sortedNumbers[j-1]}`)
        
        if (J && J1) {
            let numberJ = J.innerHTML
            let numberJ1 = J1.innerHTML
            J.style.transform=`translate(calc((100% + 8px)), -150%)`
            J1.style.transform=`translate(calc((-100% - 8px)), -150%)`
            await sleep(speed * 0.05)

            J.style.transitionDuration='0ms'
            J1.style.transitionDuration='0ms'
            await sleep(speed * 0.2)
            
            setNumbers(sortedNumbers)
            setSteps(steps => steps + 1)
        
            J.style.transform=`translate(0%, -150%)`
            J1.style.transform=`translate(0%, -150%)`
            await sleep(speed * 0.05)
   
            J.style.transitionDuration='200ms'
            J1.style.transitionDuration='200ms'
        }

    }

    async function solve() {
        for (let i = sortedNumbers.length; i > 0; i--) {
            for (let j = 1; j < i; j++) {
                let numberJ = document.getElementById(`${sortedNumbers[j]}`);
                let numberJ1 = document.getElementById(`${sortedNumbers[j - 1]}`);
                if (numberJ) numberJ.style.border = "solid 3px red"
                if (numberJ1) numberJ1.style.border = "solid 3px red"
                await sleep(speed * 0.05)

                if (sortedNumbers[j] < sortedNumbers[j - 1]) {
                    let temp = sortedNumbers[j];
                    let newArray = [...sortedNumbers];
                    newArray[j] = newArray[j - 1];
                    newArray[j - 1] = temp
                    sortedNumbers = newArray

                    if (numberJ) numberJ.style.transform = 'translate(0%, -150%)'
                    if (numberJ1) numberJ1.style.transform = 'translate(0%, -150%)'
                    await sleep(speed * 0.3)

                    await swap(j)

                    await sleep(speed * 0.3)
                    if (numberJ) numberJ.style.transform = 'translate(0%, 0%)'
                    if (numberJ1) numberJ1.style.transform = 'translate(0%, 0%)'
                    await sleep(speed * 0.4)
                }
                else {
                    await sleep(speed * 0.5)
                }
                numberJ = document.getElementById(`${sortedNumbers[j]}`);
                numberJ1 = document.getElementById(`${sortedNumbers[j - 1]}`);
                if (numberJ) numberJ.style.border = 'solid 1px #6b7280'
                if (numberJ1) numberJ1.style.border = 'solid 1px #6b7280'
                if (j === i - 1) {
                    if (numberJ) numberJ.style.border = "solid 3px green"
                }
                await sleep(speed * 0.03)
            }
            if (i === 1) {
                for (i = 0; i < sortedNumbers.length; i++) {
                    let number = document.getElementById(`${sortedNumbers[i]}`)
                    if (number) number.style.border = "solid 3px green"
                }
            }
            await sleep(speed)
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
