// Напишите программу, которая работала бы следующим образом: в prompt вводится значение. 
// С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, 
// затем проверить с помощью typeof, принадлежит ли оно к множеству Number.
// Если это число, то вывести в консоль чётное оно или нечётное.
// Если передано не число, выведите: «Упс, кажется, вы ошиблись».
// *NaN, хоть и относится к типу Number, числом не является. 
// Добавьте отдельную проверку для этого значения.


let a = +prompt('введите число') 
let indicator = (Math.floor (a / 2)) * 2

if(typeof(a) === "number" && !isNaN(a)){
    if (a != indicator){console.log ('Вы ввели нечетное число')}
else {console.log ('Вы ввели четное число')}
} else {
   console.log('Упс, кажется, вы ошиблись');
}
