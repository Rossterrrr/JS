const box = document.querySelector('.box'),
      btn = document.querySelector('button');

console.log(box.clientHeight);
console.log(box.clientWidth);
console.log(box.offsetWidth);
console.log(box.offsetHeight);

btn.addEventListener('click',() => {
    box.style.height = box.scrollHeight + 'px';
    console.log('done');
    console.log(document.documentElement.scrollTop);
});
