// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
// Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. 
// Проверить, все ли элементы в массиве одинаковые.


var a = [5,8,4,"3",9,1,6,3,5,2,'str',8,7,4,5,3,0,5,6,6,12];
console.log(a);
var b = [];

for (var i = 0; i < a.length; i++) {
for (var j = 0; j < a.length; j++) {
if (i == j) {
continue;
}
if (a[i]==a[j]) {
    console.log(true)
b.push(a[i]);
var n = a[i];
}
for (var k = 0; k < a.length; k++) {
if (a[k] == n) {
    console.log(false)
a.splice(k, 1);
}
};
};
};

