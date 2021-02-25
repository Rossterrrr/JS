const adv = document.querySelectorAll('.promo__adv img');
const films = document.querySelectorAll('.promo__interactive-item');
const addFilm = document.querySelector('.add'); 
const inputFilm = addFilm.querySelector('.adding__input');
const button = addFilm.querySelector('button');
const filmList = document.querySelector('.promo__interactive-item').parentElement;

movieDB.movies.sort();
movieDB.movies.forEach(function(item,i){
    films[i].innerHTML =`
    ${item}
    <div class="delete"></div>`;
});
function removeAd(arr){
    arr.forEach(function(item,i){
        item.remove();
    });
}

function filmsCheckOptions(){
    if(inputFilm.value.length > 21){
        inputFilm.value = `${inputFilm.value.slice(0,21)}...`;
    }
    if(inputFilm.value == '') return;
    movieDB.movies.push(inputFilm.value.toUpperCase());
    inputFilm.value = '';
    movieDB.movies.sort();
}
function insertInfo(){
    let content ='';
    movieDB.movies.forEach(function(item,i){
        content += `
        <li class="promo__interactive-item">${item}
            <div class="delete"></div>
        </li>`;
    });
    return content;
}

removeAd(adv);

button.addEventListener('click',function(e){
    e.preventDefault();
    filmsCheckOptions()
    filmList.innerHTML = insertInfo();
});

document.querySelectorAll('.delete').forEach(function(deleteButton,i){
    deleteButton.addEventListener('click',function(e){
        e.preventDefault();
        deleteButton.parentElement.remove();
        movieDB.movies.splice(i,1);
    });
});