
/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded',() => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
            "Вадим в стране чудес",
            "Смешной и еще смешнее",
            "Мистер Н"
        ]
    };
    const adv = document.querySelectorAll('.promo__adv img');
    const adForm = document.querySelector('form.add');
    const addInput = document.querySelector('.adding__input');
    const checkbox = adForm.querySelector('[type="checkbox"]');
    const movieList = document.querySelector('.promo__interactive-list');
    const genre = document.querySelector('.promo__genre');
    const films = document.querySelectorAll('.promo__interactive-item');

    adForm.addEventListener('submit',function(e){
        e.preventDefault();
        let newFilm = addInput.value;
        const favorite = checkbox.checked;
        if(newFilm){
            if(newFilm.length > 21){
                newFilm = `${newFilm.substring(0,22)}...`;
            }
            movieDB.movies.push(newFilm.toUpperCase());
            sortArray(movieDB.movies);
    
            createMovieList(movieDB.movies,movieList);
        }
        e.target.reset();
    });
    films.forEach(function(item,i){
        films[i].innerHTML = `${i+1} ${movieDB.movies[i]}`;
    });
    const sortArray = function(arr){
        arr.sort();
    }

    const makeChanges = function(){
        genre.innerHTML = 'ДРАМА';
    }
    function removeAd(arr){
        arr.forEach(function(item){
            item.remove();
        })
    }
    function createMovieList(films,parent){
        parent.innerHTML = '';
        films.forEach(function(film,i){
            parent.innerHTML += `
            <li class="promo__interactive-item">${i+1} ${film}
                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach(function(item,i){
            item.addEventListener('click',()=> {
                item.parentElement.remove();
                movieDB.movies.splice(i,1);
                createMovieList(films,parent);
            });
        });
    }
    sortArray(movieDB.movies);
    createMovieList(movieDB.movies,movieList);
    removeAd(adv);
    makeChanges();


    
});