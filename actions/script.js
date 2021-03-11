const btns = document.querySelectorAll('button');

const deleteElement = function(e){
        console.log(e.currentTarget);
        console.log(e.type);
};

btns.forEach(function(item,i,arr){
    item.addEventListener('click',deleteElement,{once:true});
})

