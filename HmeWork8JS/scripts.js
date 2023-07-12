/* Задание 1
Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша. */

/* const form = document.querySelector("form");
input = document.querySelector("input");
button = document.querySelector("button");
ul = document.querySelector("ul");

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    const value = input.value;
    if (value) {
        const li = document.createElement('li');
        li.textContent = value;
        ul.appendChild(li);
     }
    });



/* Задание 2
Вставить в html тег input (просто предусмотреть в разметке).
Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value */

/* const input = document.querySelector("input");

input.addEventListener("keyup", (event) =>{
    const value = input.value;
   console.log(value);
    });


/* Задание 3
Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).    */

/* const form = document.querySelector("form");
input = document.querySelector("input");
button = document.querySelector("button");
ul = document.querySelector("ul");

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    const value = input.value;
    if (value) {
        const li = document.createElement('li');
        li.textContent = value;
        ul.appendChild(li);
        input.value = "";
      }
    });



/* Задание 4
Калькулятор. 
Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Внутри select будут options - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). Результат отображается в div.
1) решить с помощью if

2) решить с помощью evel (https://developer.mozilla.org/...)    */

/*const calcForm = document.querySelector(".calc"),
num1 = calcForm.querySelector(".num1"),
num2 = calcForm.querySelector(".num2"),
select = calcForm.querySelector("select"),
resultBlock = document.querySelector(".result"),
calcTitle = document.querySelector("h2");

calcForm.addEventListener("submit", (event) =>{
    event.preventDefault();
    //const result = eval(`${num1.value} ${select.value} ${num2.value}`);
    //console.log(result); 


 let result;
if (select.value === "+") {
    result = Number(num1.value) + Number(num2.value);
  } else if (select.value === "-") {
    result = Number(num1.value) - Number(num2.value);
  } else if (select.value === "*") {
    result = Number(num1.value) * Number(num2.value);
  } else if (select.value === "/") {
    result = Number(num1.value) / Number(num2.value);
  }
  resultBlock.textContent = `Результат: ${result}`;
});


/*Задание 5
Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.*/


/* const button = document.querySelector('button');

const randomNumber = (min, max) =>
Math.floor(Math.random() * (max - min + 1) + min);

button.addEventListener("mouseenter",() => {
const red = randomNumber(0, 255);
const green = randomNumber(0, 255);
const blue = randomNumber(0, 255);
const randomColor = `rgb(${red}, ${green}, ${blue})`;
button.style.backgroundColor = randomColor;
});

button.addEventListener("mouseleave", () => {
button.style.transform = `rotate(${randomNumber(-180, 180)}deg)`;
});
