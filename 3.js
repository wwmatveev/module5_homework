// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. 
// Например, "Hello" -> "olleH".


// function reverseStr(str){
// console.log("Входные данные - "+str);
// let arr;
// arr=str.split("");//строка в массив "" для преобразования в 5 элементов
// console.log("Получаем массив - "+arr);
// console.log(arr);
// arr.reverse();
// console.log("Получаем новый массив");
// console.log(arr);
// let newStr;//вводим новую переменную
// newStr=arr.join("");
// console.log("Получаем новую строку");
// console.log(newStr);
// return newStr;
// }
// reverseStr("Hello")

function reverseStr(str){
        return str.split("").reverse().join("");//строка в массив - .split(""), переворачиваем массив - .reverse() превращаем в строку-.join("")
    }
    reverseStr("Hello")
    