'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };  
    
    const ad = document.querySelectorAll('.promo__adv img'),
        // imgAd = ad.getElementsByTagName('img'),
        swapGenre = document.querySelector('.promo__genre'),
        swapBG = document.getElementsByClassName('promo__bg'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        inputInfo = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');
    
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = inputInfo.value;
        const favorite = checkbox.checked;

        if (newFilm) {
            
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            
            if (favorite) {
                console.log('Добавляем любимый фильм')
            }

            movieDB.movies.push(newFilm)
            sortArr(movieDB.movies)

            createMovieList(movieDB.movies, movieList)

            event.target.reset()
        }
    });
    
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    // for (let i = imgAd.length - 1;i >= 0; i--){
    //         imgAd[i].remove();
    //     } мои каляки
    // Array.from(imgAd).forEach((img)=>img.remove()); ТАК img ЭЛЕМЕНТ МАСИВА ЗАБУДЬ ПРО ИНДЕКСЫ И НАЗВАНИЯ МАСИВА 
    // const mos = Array.from(imgAd).map((img)=>img.remove()); MAP возвращает результат получавшегося масива , (СУЩЕСТВУЕТ ДЛЯ ВОЗВРАЩЕНИЯ ИЗМЕННОЙ КОПИИ МАСИВА)
    // console.log(mos)
    const makeChanges = () => {
        swapGenre.innerHTML = 'драма';
        swapBG[0].style.cssText = 'background:url("../img/bg.jpg") center top/cover no-repeat;'; 
    };

    const sortArr = (arr) => {
        arr.sort()
    }

    // swapBG.style.backgroundImage = 'url("/img/bg.jpg")' еще один вариант решения
    
    // movieDB.movies.sort() НОРМ НО ЛУЧШЕ МЕТОД В НАЧАЛЕ
    
    // for (let i = 0; i < refactorLi.length; i = i + 1){
    //     refactorLi[i].innerHTML = `${i + 1}. ${movieDB.movies[i]}`
    // }
    // btnDefault.addEventListener('click', function(event) {
    //     event.preventDefault();
    //     let i
    //     movieDB.movies = movieDB.movies[i] + ","+" "+ inputInfo.value
    //     console.log(movieDB.movies)
    // }); мои каляки

    function createMovieList(films, parent){
            parent.innerHTML = '';
            sortArr(films)
            films.forEach((film, i) => {
                parent.innerHTML += `
                <li class="promo__interactive-item">${i+1}. ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove()
                movieDB.movies.splice(i, 1)

                createMovieList(films, parent)
            })
        });
    }

    deleteAdv(ad)
    makeChanges()
    createMovieList(movieDB.movies, movieList)
})





