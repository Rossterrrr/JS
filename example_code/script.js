const btns = document.querySelectorAll('button');
btns[0].classList.add('red');
const wrapper = document.querySelector('.btn-block');
btns[1].addEventListener('click',() => {
    if(btns[1].classList.contains('blue')){
        btns[1].classList.remove('blue');
    }else {
        btns[1].classList.add('blue');
    }
});
wrapper.addEventListener('click',(e) => {
    if(e.target && e.target.tagName == 'BUTTON'){
        console.log('it`s a button');
    }
})
const newButton = document.createElement('button');
newButton.classList.add('red');

wrapper.append(newButton);