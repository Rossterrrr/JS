/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

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
adv.forEach(function(item){
    item.remove();
})

const genre = document.querySelector('.promo__genre');
genre.innerHTML = 'ДРАМА';

const bg = document.querySelector('.promo__bg');
bg.style.cssText = 'background:url("img/bg.jpg")';

movieDB.movies.sort();
const films = document.querySelectorAll('.promo__interactive-item');
films.forEach(function(item,i){
    films[i].innerHTML = `${i+1} ${movieDB.movies[i]}`;
});

const movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = '';

movieDB.movies.forEach(function(film,i){
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i+1} ${film}
        <div class="delete"></div>
    </li>
    `;
})

// Практика:

const newFilm = {
    filmName:"Интерстеллар",
    filmGenre:"Научная фантастика",
    filmMarkKinopoisk:8.5,
    filmMarkImdb:9.1,
    description:"Фильм Кристофера Нолана,окунитесь с космическую реальность...",
    bgImg:""
};

const content = document.querySelector('.promo__content');
const bgimage = content.querySelector('.promo__bg');
const filmGenre = content.querySelector('.promo__genre');
const title = content.querySelector('.promo__title');
const descr = content.querySelector('.promo__descr');
const rating = content.querySelectorAll('.promo__ratings span');

bgimage.style.cssText = 'background:url("img/bg2.jpg")';
filmGenre.innerHTML = newFilm.filmGenre;
title.innerHTML = newFilm.filmName;
descr.innerHTML = newFilm.description;
rating.forEach(function(item,i){
    if(i == 0){
        item.innerHTML = `IMDB: ${newFilm.filmMarkImdb}`;
    }else item.innerHTML = `Кинопоиск: ${newFilm.filmMarkKinopoisk}`;
});