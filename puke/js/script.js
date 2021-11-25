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
const answer = +prompt(`Сколько фильмов вы уже посмотрели ? `,``);
let numberOfFilms = answer;

const personalMovieDB = { 
    cout: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt(`Один из просмотренных фильмов ?`,``),
      b = prompt(`На сколько оцените его ?`,``),
      c = prompt(`Один из просмотренных фильмов ?`,``),
      d = prompt(`На сколько оцените его ?`,``);

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
  
console.log(personalMovieDB);
