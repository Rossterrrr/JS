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
    const dateEnd = '2021-03-01';
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
});