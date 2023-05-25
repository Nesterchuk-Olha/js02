//Number:age
let a = prompt('Скільки Вам років?');
b = 2023 - a;
alert (b);

//Number:temperature
let a = prompt('Яка зараз температура у Цельсіях?');
b = (a*1.8)+32;
console.log (b);

//Number:divide
let a = prompt('Введіть ділене');
let b = prompt('Введіть дільник');
c = Math.floor(a/b);
console.log (c);

//Number: currency
const rate = 36.95; //гривень коштує 1 долар
let a = prompt('Введіть скільки ви хочете обміняти гривень');
b = (a/rate).toFixed(2);
alert (b);

//Number: RGB
const red = prompt('Введіть перший колір');
const green = prompt('Введіть другий колір');
const blue = prompt('Введіть третій колір');
color = ('#'+red+green+blue);
console.log (color);

//Numbers: flats
let a = prompt('Введіть кількість поверхів');
let b = prompt('Введіть кількість квартир на поверсі');
let c = prompt('Введіть номер квартири');
d = Math.ceil(c/(a*b)); //номер під'їзду
e = Math.ceil((c - (d-1)*a*b)/b);
console.log (d);
console.log (e);
