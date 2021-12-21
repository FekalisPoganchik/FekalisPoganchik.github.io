// let number = 5;

// console.log(4/0);

// const persone = `Alex`;

// const bool = false;

// let und;
// console.log(und);

// const obj = { 
//     name: `John`,
//     age: 25,
//     isMarried: false
// };

// // console.log(obj.name);
// console.log(obj["name"]);

// let arr = [`plum.png`, `orange.jpg`, 6, `apple.bmp`, {}, []];
// console.log(arr[1]);
// alert (`hello`);
// const result = confirm(`Are you here ?`);
// console.log(result);
// const answer = +prompt(`Вам есть 18?`,`24`);
// console.log(typeof(answer));
// const ansewers = [];

// ansewers[0] = prompt(`Как ваше имя ?`, ``);
// ansewers[1] = prompt(`Как ваше фамилия ?`, ``);
// ansewers[2] = prompt(`Сколько вам лет ?`, ``);

// console.log(ansewers);

// let incr = 10,
//     decr = 10;

// ++incr;
// --decr;

// console.log(incr);
// console.log(decr);
// const answer = +prompt(`Сколько фильмов вы уже посмотрели ? `,``);
// let numberOfFilms = answer;

// const personalMovieDB = { 
//     cout: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt(`Один из просмотренных фильмов ?`,``),
//       b = prompt(`На сколько оцените его ?`,``),
//       c = prompt(`Один из просмотренных фильмов ?`,``),
//       d = prompt(`На сколько оцените его ?`,``);

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
  
// console.log(personalMovieDB);
// const num = 50; 
// if (num < 49) {
//     console.log(`Error`);
// } else if (num > 100) {
//     console.log(`Много`);
// } else {
//     console.log(`Ok!`);
// }
// (num === 50) ? console.log ('ok!') : console.log(`Error`);
// const num = 50; 
// switch (num) {
//     case 49:
//         console.log(`Неверно`);
//         break;
//     case 100:
//         console.log(`Неверно`);
//         break;
//     case 50:
//         console.log(`В точку`);
//         break;  
//     default:
//         console.log(`Не в этот раз`);
//         break;
// }
// let num = 50; 

// // while (num < 55) {
// //     console.log(num);
// //     num++;
// // }

// // do { 
// //     console.log(num);
// //     num++;
// // }
// // while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if(i === 6){
//         break;
//     }
//     console.log(i);
// }

// const options = { 
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () {
//         console.log("Test");
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);
// console.log(options['colors']['border']);

// delete options.name;

// console.log(options);
// let counter = 0;

// for (let key in options) { 
//     if (typeof(options[key]) === 'object'){
//         for (let i in options[key]) {
//             console.log (`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log (`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

"use strict";

// const arr = [1, 2, 3, 6, 8];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

// // arr.forEach(function(item, i, arr) {
// //     console.log(`${i}: ${item} внутри массива ${arr}`);
// // });

// // arr.pop();
// // arr.push(10);

// // console.log(arr);
// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// for (let value of arr) {
//     console.log (value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// console.log(products.join('; '));

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = { 
//     a: 5,
//     b: 1
// };

// const copy = obj; //ссылку

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) { 
//     let objCopy = {};

//     for (let key in mainObj){
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = { 
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

// // console.log(Object.assign(numbers, add));

// const clone = Object.assign({}, add);

// clone.d = 20;

// // console.log(add);
// // console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'asdasddasas';

// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimio', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk,', 'facebook'];

// console.log(internet);

// function log (a, b ,c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ['a', 'b'];

// const newAarray = [...array];

// const q = { 
//     one: 1,
//     two: 2
// };

// const newObj = {...q};
// array1.forEach(element => console.log(element));

// array1.forEach((element) {
//     console.log(element)
// });
// const name = () => {}
// условие ? выражение1 : выражение2 

// Превратить в строку

// // 1) не используется
// console.log (typeof(String(null)));

// // 2) конкотинация
// console.log(typeof(5 + ''));

// const num = 5; 

// console.log('https://vk.com/catalog/' + num);

// const fontSize = 26 + 'px';

// // Перевести в число (number)

// // 1) не используется

// console.log (typeof(Number('4')));

// // 2) Унарный + плюс перед другим типом данных

// console.log (typeof(+'5'));

// // 3) методы для превращения в числа пользуются не часто

// console.log(typeof(parseInt('15px', 10)));

// let answ = +promt('hello', '');

// // В буллиновое значение

// // 0, '', null, undefined, NaN; Все будут превращаться в false все остальное будет правдой

// 1) нативным способом

// 2) не пользуются

// console.log (typeof(Boolean('4')));

// 3) редкий приём

// console.log (typeof(!!'4'));

// async function getProposals() {
//         const historyCount = await this.rarinonDAOContractRpc.methods.historyCount().call()
//         let requests = []
//         for (let i = 0; i < Number(historyCount); i++) {
//           requests.push(this.rarinonDAOContractRpc.methods.history(i).call())
//         }
//         const proposals = (await Promise.all(requests)).map((proposal, index) => ({ id: index, ...proposal })).reverse()
    
//         return proposals
//       }
// Array.from(imgAd).forEach((img)=>img.remove()); ТАК img ЭЛЕМЕНТ МАСИВА ЗАБУДЬ ПРО ИНДЕКСЫ И НАЗВАНИЯ МАСИВА 
// const mos = Array.from(imgAd).map((img)=>img.remove()); MAP возвращает результат получавшегося масива , (СУЩЕСТВУЕТ ДЛЯ ВОЗВРАЩЕНИЯ ИЗМЕННОЙ КОПИИ МАСИВА)
// console.log(mos)
let a = 1;
let b = 1;

function addBinary(a,b) {
  console.log(a + b);
}
