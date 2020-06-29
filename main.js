/******************
 * YOUR CODE HERE *
 ******************/

 //#1//
function addMeToEnd(arr){
  arr.push('Colin')
}

//#2//
function addMeToStart(arr){
  arr.unshift('Colin')
}

//#3//*** */
function changeLast(arr1){
  arr1.splice(arr1.length-1, 1, 5);

}


//#4//
function changeAllValuesTo(arr){
  for (let i = 0; i <arr.length; i++){
}
}

//#5//
function oddOrEven(arr){
  for (let i = 0; i <arr.length; i++){
    if (i % 2 === 0){
      arr.splice(i, 'even')
    } else {
      arr.splice(i, 'odd')
    }
    }
  }


//#6//
function changeNextThreeToValue(arr){
for (let i = 0; i <arr.length; i++){
  arr.splice(arr.indexOf, 15);

}
}


/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof addMeToEnd === 'undefined') {
  addMeToEnd = undefined;
}

if (typeof addMeToStart === 'undefined') {
  addMeToStart = undefined;
}

if (typeof changeLast === 'undefined') {
  changeLast = undefined;
}

if (typeof changeAllValuesTo === 'undefined') {
  changeAllValuesTo = undefined;
}

if (typeof oddOrEven === 'undefined') {
  oddOrEven = undefined;
}

if (typeof changeNextThreeToValue === 'undefined') {
  changeNextThreeToValue = undefined;
}


module.exports = {
  addMeToEnd,
  addMeToStart,
  changeLast,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}
