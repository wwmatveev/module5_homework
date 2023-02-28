// Создайте произвольный массив Map. 
// Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».




let Cars = { mark: "Mercedes", title: "Famous", comfort: "Present"};


function result()
{
  let key = Object.keys(Cars);
  for (key in Cars) {
  console.log( "Ключ: " + key +','+ " значение: " + Cars[key] );
}
}
result()