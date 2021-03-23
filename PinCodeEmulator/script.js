'use strict';

let input = document.querySelector('input');
const form = document.querySelector('form');
const btn = document.querySelectorAll('[type="button"]');
let counter = 0;
let tmp;

function setPassword(pass){
    switch(counter){
        case 0:
            input.style.cssText = 'font-size:20px';
            input.setAttribute('placeholder','Придумайте пин-код');
            counter++;
            break;
        case 1:
            tmp = pass;
            input.setAttribute('placeholder','Подтвердите пин-код');
            counter++;
            break;
        case 2:
            if(tmp == pass){
                input.setAttribute('placeholder','Введите пин-код');
                console.log('Пароль установлен');
                localStorage.setItem('password',pass);
                counter++;
            }else {
                input.setAttribute('placeholder','Повторите попытку');
            }
            break;
    }
}

function checkPassword(pass){
    if(!localStorage.getItem('password')){
        return;
    }
    if (pass == localStorage.getItem('password')){
        input.setAttribute('placeholder','Вход выполнен');
        input.style.cssText += 'border:6px solid #67ba5f';
        setTimeout(() => {
            input.style.cssText += 'border:6px solid #767b94';
            input.setAttribute('placeholder','Введите пин-код');
        },2000);
    }else {
        input.setAttribute('placeholder','Неправильный пин');
        input.style.cssText += 'border:6px solid #bf4545';
        setTimeout(() => {
            input.style.cssText += 'border:6px solid #767b94';
            input.setAttribute('placeholder','Введите пин-код');
        },2000);
    }
}

function init(){
    if(localStorage.getItem('password') && localStorage.getItem('password') != ''){
        input.style.cssText = 'font-size:20px';
        input.setAttribute('placeholder','Введите пин-код');
        counter = 3;
    }else{
        setPassword();
    }
    
}

btn.forEach(elem => {
    elem.addEventListener('click',e => {
        e.preventDefault();
        input.value += elem.textContent;
        
    });
});
form.addEventListener('submit',e => {
    e.preventDefault();
    setPassword(input.value);
    checkPassword(input.value);
    input.value = '';
});
init();
