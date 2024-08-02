// Задание 2 10.4
var x = [1, 2, 3, 4, 5];
  console.log(typeof x);

switch (typeof x){
  case "number":
    console.log("This is a number");
    break;
  
  case "string":
    console.log(typeof x);
    console.log("This is a string");
    break;
    
  case "boolean":
    console.log("This is boolean");
    break;
  default:
    console.log("Тип x не определён");
}
