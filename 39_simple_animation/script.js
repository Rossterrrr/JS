const btn = document.querySelector('.btn');
function anim(){
    const box = document.querySelector('.box');
    let pos = 0;
    const id = setInterval(frame,4);
    function frame(){
        if (pos == 300){
            clearInterval(id);
        }else{
            pos++;
            box.style.top = pos + 'px';
            box.style.left = pos + 'px';
        }

    }
}

btn.addEventListener('click',anim);