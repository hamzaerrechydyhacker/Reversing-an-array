function reverseArray(arr){
  let reArr = []; 
  for(let i=arr.length-1; i>=0; i--){
    reArr.push(arr[i]); 
  }
  return reArr; 
}

function reverseArrayInPlace(array){
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}
