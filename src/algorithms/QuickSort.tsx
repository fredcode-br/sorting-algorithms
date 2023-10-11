import {useEffect } from 'react';
import { useAlgorithmContext } from "../common/context/Algorithm";
import { async } from 'q';

const QuickSort = () => {
    const { 
        numbers, 
        // setNumbers, 
        // setSteps, 
        // speed, 
        actualAlgorithm, 
        sorting, 
        // setSorting 
    } = useAlgorithmContext();
    let sortedNumbers = [...numbers];

    function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const swap = async (arr: number[], i: number, j: number) => {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
   }

    const partition = async (values: number[], l: number, r: number, timer: number) => {
      let pivot = values[r];

      let j = l-1;
      for(let i = l; i < r; i++){
         if(values[i]<pivot){
            j++;
            swap(values,i,j);

            // document.getElementById(ids[i]).style.transform = `translateX(${i*11}px)`;
            // document.getElementById(ids[j]).style.transform = `translateX(${j*11}px)`;
            let numberI = document.getElementById(`${sortedNumbers[i]}`)
            let numberJ = document.getElementById(`${sortedNumbers[j]}`)
            
            if (numberI) numberI.style.transform = 'translate(0%, -150%)'
            if (numberJ) numberJ.style.transform = 'translate(0%, -150%)'
            await sleep(400)

            if (numberI) numberI.style.transform = 'translateY(0%)'
            if (numberJ) numberJ.style.transform = 'translateY(0%)'
            await sleep(400)

         }
      }
      swap(values,r,j+1);
      await sleep(4000)

      let numberR = document.getElementById(`${sortedNumbers[r]}`)
      let numberJ1 = document.getElementById(`${sortedNumbers[j+1]}`)
      if (numberR) numberR.style.border = "solid 3px red"
      if (numberJ1) numberJ1.style.border = "solid 3px red"
      await sleep(4000)

      if (numberR) numberR.style.border = "solid 1px gray"
      if (numberJ1) numberJ1.style.border = "solid 1px gray"

      // setTimeout(() => {

        //  document.getElementById(ids[j+1]).childNodes[1].style.backgroundColor = 'black';
        //  setTimeout(() => {
            // document.getElementById(ids[j+1]).childNodes[1].style.backgroundColor = myState.color;
        //  },myState.speed*6-10)

        //  document.getElementById(ids[r]).style.transform = `translateX(${r*11}px)`;
        //  document.getElementById(ids[j+1]).style.transform = `translateX(${(j+1)*11}px)`;

      // },myState.speed*timer*6);
      return j+1;
   }

   const quickSort = async (values: number[], l: number , r: number, timer: number) => {
      if(l<r){
         let ind = await partition(values,l,r,timer);
         quickSort(values,l,ind-1,timer-1);
         quickSort(values,ind+1,r,timer-1);
      }
   }
   
    const solve = () => {
      quickSort(sortedNumbers, 0, sortedNumbers.length-1, Math.ceil(Math.log(sortedNumbers.length+1)));
    }


    useEffect(() => {
      if(actualAlgorithm.value === 'quick'){
          if(sorting === true)
            solve()
       }
    }, [sorting, actualAlgorithm.value]);
    
    return <></>
}


export default QuickSort