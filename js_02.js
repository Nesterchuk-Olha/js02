//Number:age
let a = prompt('Скільки Вам років?');
b = 2023 - a;

//Number:temperature
let a = prompt('Яка зараз температура у Цельсіях?');
b = (a*1.8)+32;

//Number:divide
let a = prompt('Введіть ділене');
let b = prompt('Введіть дільник');
c = Math.floor(a/b);

//Number: currency
const rate = 36.95; //гривень коштує 1 долар
let a = prompt('Введіть скільки ви хочете обміняти гривень');
b = (a/rate).toFixed(2);

//Number: RGB
const red = prompt('Введіть перший колір');
const green = prompt('Введіть другий колір');
const blue = prompt('Введіть третій колір');
color = ('#'+red+green+blue);

//Numbers: flats
let a = prompt('Введіть кількість поверхів');
let b = prompt('Введіть кількість квартир на поверсі');
let c = prompt('Введіть номер квартири');
d = Math.ceil(c/(a*b)); //номер під'їзду
e = c%(a*b);