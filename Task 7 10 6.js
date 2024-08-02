// Задание 7 10.6

var arr = [0, , 6, 4, 5, 0, null, true, 8, 9];
var countOther = 0;
var countEven = 0;
var countOdd = 0;

for (var i = 0; i < arr.length; i++) {
  if (typeof (arr[i]) === "boolean" | (arr[i]) === null) {
      countOther++;
    }
  
    else if (arr[i] % 2 === 0) { 
        countEven++; 
    } 
    else if (arr[i] & 1 === 1) { 
        countOdd++; 
    } 
    else {
      countOther++;
    }
}

console.log(`В массиве ${arr.length} элементов. Из них ${countEven} - чётные,  ${countOdd} нечётные, и ${countOther} - остальные.`);
