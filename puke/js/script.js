'use strict';

let numberOfFilms;

const personalMovieDB = { 
    cout: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    howManyFilms: function() {
    this.cout = prompt(`Сколько фильмов вы уже посмотрели ? `,``);
    while (this.cout == '' || this.cout == null || isNaN(this.cout)) {
        this.cout = prompt(`Сколько фильмов вы уже посмотрели ? `,``);
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt(`Один из просмотренных фильмов ?`,``),
                  b = prompt(`На сколько оцените его ?`,``);
                if  (a != null && b != null && a.length > 0 && b.length > 0 && a.length < 50 && b.length < 50) {
                    personalMovieDB.movies[a] = b;
                    console.log ('Выполнено');
                }else {
                    i--;
                    console.log('Откройте букву Л');
                }
        }
    },
    detectPersonalLevel: function () {
        if (+personalMovieDB.cout < 10) { 
            console.log ("Просмотрено довольно мало фильмов");
        }else if (+personalMovieDB.cout >= 10 && +personalMovieDB.cout < 30) { 
            console.log ("Вы классический зритель");
        }else if (+personalMovieDB.cout >= 30) { 
            console.log("Вы киноман");
        }else { 
            console.log("Ошибка");
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`);
                if  (genre != null && genre.length > 0 && genre.length < 50) {
                    personalMovieDB.genres[i - 1] = genre;
                    console.log ('Выполнено');
                }else {
                    i--;
                    console.log('Откройте букву Л');
                }
        }
        this.genres.forEach (function (a, i) {
            console.log(`Любимый жанр ${i + 1} - это ${a}`);
        });   
    },
    showMyDB: function () { 
        if (personalMovieDB.privat == false){ 
            console.log (personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        this.privat ? this.privat = false : this.privat = true;
    }
};

personalMovieDB.howManyFilms();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();








