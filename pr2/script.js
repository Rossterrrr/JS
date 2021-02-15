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
  
  if((ans1 != null) && (ans1.length < 50) && (ans2 != null) && (ans1 != '') && (ans2 != '')){
  	  personalMovieDB.movie[ans1] = ans2;
  	  console.log('Done');
  	} else {
  		console.log('Error');
  		i--;
  	}


}
if(personalMovieDB.count<10){
  alert('Вы просмотрели мало фильмов');
}else if(personalMovieDB.count<30){
  alert('Вы классический зритель');
}else alert('Вы киноман');

console.log(personalMovieDB);

let a,b,c,d;

a = prompt('Какое животное на картинке?');
b = prompt('Сколько у него лап?');
c = prompt('Какого он цвета');
d = prompt('Большие у него уши?');

let animal = {
	name:a,
	countFeets:b,
	colorOfAnimal:c,
	bigHears:d
};

console.log(animal);

