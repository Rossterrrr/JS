'use strict';
document.addEventListener('DOMContentLoaded',() => {
    const form = document.querySelector('form');
    const checkbox = form.querySelector('#checkbox');
    const colors = ['red','blue','yellow','orange'];
    const input = document.querySelectorAll('input');
    const colorButton = document.querySelector('#color');
    let i = 0;

    function setColor(color){
        document.querySelectorAll('button').forEach((item) => {
            item.style.cssText = `background-color: ${color}`;
            localStorage.setItem('color',color);
        });
    
    }
    function initColor(){
        document.querySelectorAll('button').forEach((item) => {
            item.style.cssText = `background-color: ${localStorage.getItem('color')}`;
        });
    }

    initColor();
    let str = '';
    let stringCounter = 0;

    input[1].addEventListener('input',() => {
        str += input[1].value.match(/\w/g).join('');
        console.log(str);
        setTimeout(() => {
            input[1].value = input[1].value.replace(/./g,'*');
        },500)
    });

    form.addEventListener('submit',(e) => {
        e.preventDefault();
        if(checkbox.checked){
            localStorage.setItem('userName',input[0].value);
            localStorage.setItem('password',input[1].value);
        }
        console.log('submit');
    });

    colorButton.addEventListener('click',() => {
        if(i < colors.length){
            setColor(colors[i]);
            i++;
        }else {
            i = 0;
            setColor(colors[i]);
            i++;
        }
    });

    const obj = {
        name : 'Vadim',
        surname : 'Zabolotsky',
        lastname : 'Sergeevich',
        age : 21
    }
    localStorage.setItem('person',JSON.stringify(obj));
    console.log(JSON.parse(localStorage.getItem('person')));
});


