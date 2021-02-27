document.addEventListener('DOMContentLoaded',() => {
    const tabContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');
    const tabs = document.querySelectorAll('.tabheader__item');

    function hide(){
        tabContent.forEach((item) => {
            item.classList.add('hide');
            item.classList.remove('show');
            item.classList.remove('fade');
        });
    }
    function show(i = 0){
        tabContent[i].classList.add('show');
        tabContent[i].classList.remove('hide');
        tabs.forEach((item) => {
            item.classList.remove('tabheader__item_active');
        });
        tabs[i].classList.add('tabheader__item_active');
        tabContent[i].classList.add('fade');
    }

    tabsParent.addEventListener('click',(e) => {
        const target = e.target;
        tabs.forEach((item,i) => {
            if(target && target == item){
                hide();
                show(i);
            }
        });
    });
});