let numberOfFilms;
numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
  count:numberOfFilms,
  movie:{},
  actors:{},
  genres:[],
  privat:false
};

for (let i = 0;i<2;i++){
  let ans1 = prompt('Один из последних просмотренных фильмов?');
  let ans2 = +prompt('Ваша оценка фильма?');
  personalMovieDB.movie[ans1] = ans2;
  if((ans1 == null) || (ans1.length > 50) || (ans2 == null)) i--;
}
if(personalMovieDB.count<10){
  alert('Вы просмотрели мало фильмов');
}else if(personalMovieDB.count<30){
  alert('Вы классический зритель');
}else alert('Вы киноман');

console.log(personalMovieDB);