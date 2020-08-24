function multiplyAll(arr) {
    var product = 1;
    //iterate through the first array
    for (let i = 0; i < arr.length; i++){
      //iterate through second array
      for (let j = 0; j < arr[i].length; j++){
        /*multiply all the numbers in the multidimensional  array  */
        product = product * arr[i][j]
      }
    }
    return product;
  }
  
  multiplyAll([[1,2],[3,4],[5,6,7]]);
  