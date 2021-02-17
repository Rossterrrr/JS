const box = document.getElementById('box');
const bts = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

let wdth = 500;
box.style.cssText = `background-color:blue;width:${wdth}px`;

bts[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

hearts.forEach(function(item){
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
const text = document.createTextNode('Тут был я ');

div.classList.add('black');

wrapper.prepend(div);
hearts[1].after(div);
circles[1].remove();
hearts[0].replaceWith(circles[0]);
div.innerHTML = '<h2>Hello world</h2>';

div.insertAdjacentHTML('afterend','<h3>Hello kitty</h3>');