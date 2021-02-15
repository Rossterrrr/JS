let answer;
let numberOfFilms;

const personalMovieDB = {
  count:numberOfFilms,
  movie:{},
  actors:{},
  genres:[],
  privat:false,
  start:function(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    while(isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    }
  },
  showDB:function(){
        console.log(personalMovieDB);
  },
  writeYourGenres:function(){
    for(let i = 1;i<4;i++){
        answer = prompt(`Ваш любимый жанр под номером ${i}`);
        if ((answer === null) || (answer.length > 15) || (answer == '')){
            i--;
        }else {
            personalMovieDB.genres[i-1] = answer;
        }
    }
    personalMovieDB.genres.forEach(function(item,i,arr){
        console.log(`Любимый жанр №${i+1} это ${item}`);
    });
  },
  films:function(){
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
      
  },
  kinoman:function(){
    if(personalMovieDB.count<10){
        alert('Вы просмотрели мало фильмов');
      }else if(personalMovieDB.count<30){
        alert('Вы классический зритель');
      }else alert('Вы киноман');
  },
  toggleVisibleMyDB:function(){
      if(personalMovieDB.privat === false){
          personalMovieDB.privat = true;
      }else personalMovieDB.privat = false;
  }
};


personalMovieDB.start();
personalMovieDB.writeYourGenres();
personalMovieDB.films();
personalMovieDB.kinoman();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showDB();



