document.addEventListener('DOMContentLoaded',() => {
    //tabs
    const headerList = document.querySelector('.tabheader__items'),
          tabs = headerList.querySelectorAll('.tabheader__item'),
          tabContent = document.querySelectorAll('.tabcontent');
    
    function start(){
        hide();
        show();
    }

    function hide(){
        tabContent.forEach((item,i) => {
            item.classList.add('hide');
            item.classList.remove('show');
            tabs[i].classList.remove('tabheader__item_active');
            item.classList.remove('fade');
        });
    }
    function show(i = 0){
        tabContent[i].classList.remove('hide');
        tabContent[i].classList.add('show');
        tabs[i].classList.add('tabheader__item_active');
        tabContent[i].classList.add('fade');
        
    }
    headerList.addEventListener('click',(e) => {
        tabs.forEach((item,i) => {
            if(e.target && e.target == item){
                hide();
                show(i);
            }
        });
    });
    start();

    // TIMER
    const dateEnd = '2021-05-05';
    let timer;
    function setZero(num){
        if (num < 10 ){
            return `0${num}`;
        }else {
            return num;
        }
    }
    function clockExpr(){
        const delta = Date.parse(dateEnd) - Date.parse(new Date),
              days = Math.floor(delta /(1000*60*60*24)),
              hours = Math.floor((delta/(1000*60*60)) % 24),
              minutes = Math.floor((delta / (1000*60)) % 60),
              seconds = Math.floor((delta/1000) % 60);
        let struct = {
            'days':days,
            'hours':hours,
            'minutes':minutes,
            'seconds':seconds
        }
        if(delta <= 0){
            clearInterval(timer);
        }
        return struct;
    }
    function setClock(){
        let obj = clockExpr();
        document.querySelector('#days').innerHTML = setZero(obj.days);
        document.querySelector('#hours').innerHTML = setZero(obj.hours);
        document.querySelector('#minutes').innerHTML = setZero(obj.minutes);
        document.querySelector('#seconds').innerHTML = setZero(obj.seconds);
        console.log('done');
    }
    timer = setInterval(setClock,1000);

    // MODAL WINDOW PRACTICE

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          closeBtn = document.querySelector('[data-close]');

    function showModal() {
        modal.classList.remove('hide');
        modal.classList.add('show','fade');
        document.body.style.overflow = 'hidden';
    }
    let i = 0;
    function checkInterval () {
           if((document.documentElement.scrollHeight - (document.documentElement.scrollTop + document.documentElement.clientHeight) == 0) && (i < 1)){
                showModal();
                console.log('modal scroll');
                i++;               
           }


    }
    function hideModal() {
        modal.classList.remove('show','fade');
        modal.classList.add('hide');
        document.body.style.overflow = '';
    }

    modalTrigger.forEach((item) => {
        item.addEventListener('click',showModal);
    });
    
    closeBtn.addEventListener('click',hideModal);
    modal.addEventListener('click',(e) => {
        if(e.target && e.target === modal){
            hideModal();
        }
    });
    //Обработчик событий при нажатии на эскейп в тот момент 
    //когда модальное окно открыто
    document.addEventListener('keydown',(e) => {
        if(e.code === 'Escape' && modal.classList.contains('show')){
            hideModal();
        }
    });
   // let modalTimer = setTimeout(showModal,20000);
    let scrollCheck = setInterval(checkInterval,2000);

    //CLASSES
    
});