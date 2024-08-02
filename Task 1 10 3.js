// Задание 1 10.3
var result = prompt('Введите число', '');
//  console.log(typeof result);
if (isNaN(result % 2)) {
       alert('Упс, кажется, вы ошиблись');
   }
result = + result
if (typeof result === Number) {
  console.log(typeof result);
 }  else if(result % 2 === 0) {
            alert('Число четное');
      } else {
        alert('число нечетное');
      } 