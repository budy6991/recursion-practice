function mergeSort(array) {
    // Split the array into two halves
    let middleIndex = Math.ceil(array.length / 2)
    let firstHalf = array.slice().splice(0, middleIndex);
    let secondHalf = array.slice().splice(-middleIndex);   
    
    console.log(firstHalf)
    console.log(secondHalf)
}

mergeSort([1,2,3])