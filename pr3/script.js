function showDB(){
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}
function writeYourGenres(){
    for(let i = 1;i<4;i++){
        answer = prompt(`Ваш любимый жанр под номером ${i}`);
        if ((answer === null) || (answer.length > 15) || (answer == '')){
            i--;
        }else {
            personalMovieDB.genres[i-1] = answer;
        }
    }
}
function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    while(isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    }
}
function films(){
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
      
}
function kinoman(){
    if(personalMovieDB.count<10){
        alert('Вы просмотрели мало фильмов');
      }else if(personalMovieDB.count<30){
        alert('Вы классический зритель');
      }else alert('Вы киноман');
}

let answer;
let numberOfFilms;
start();
const personalMovieDB = {
  count:numberOfFilms,
  movie:{},
  actors:{},
  genres:[],
  privat:false
};
films();
kinoman();
showDB();
writeYourGenres();



