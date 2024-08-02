// Задание 6 10.6

var arr = ["b", "b", "c", "b"];
var checkItem = arr[0];
var isSame = true;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] != checkItem) {
    isSame = false;
    console.log(i);
      }
}

console.log(isSame);