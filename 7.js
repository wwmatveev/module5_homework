// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

// При выполнении задания необходимо учесть, что массив может содержать не только числа, 
// но и, например, знаки, null и так далее.


let array = [12, 5, 8, 130, 44, 0, 1, 0, 7,];

let isZero = (elem) => elem === 0; 
let isEven = (elem) => elem % 2 === 0;
let isOdd = (elem) => elem % 2 !== 0;
let isOthers = (elem)=> elem != +elem ;





let zero = array.filter(isZero);
let evenNumbers = array.filter(isEven); 
let oddNumbers = array.filter(isOdd);
let others = array.filter(isOthers);


console.log(evenNumbers.length)
console.log(oddNumbers.length)
console.log(zero.length)
console.log(others.length)



