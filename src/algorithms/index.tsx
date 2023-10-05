import { useAlgorithmContext } from "../common/context/Algorithm"


export function Bubble(arr: number[]) {
    const { setSteps } = useAlgorithmContext();

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