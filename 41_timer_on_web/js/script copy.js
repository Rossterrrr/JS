document.addEventListener('DOMContentLoaded',() => {
    //TABS
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

    //TIMER 

    const deadline = '2021-04-22';

    function getTimeRemaining(endTime){
        const t = Date.parse(endTime) - Date.parse(new Date),
              days = Math.floor(t/(1000*60*60*24)),
              hours = Math.floor((t/(1000*60*60)) % 24),
              mins = Math.floor((t/(1000*60)) % 60),
              secs = Math.floor((t/1000)%60);
        return {
            'total': t,
            'days': days,
            'hours':hours,
            'mins':mins,
            'secs':secs
        };

    }
    function setZero(num){
        if(num < 10){
            return `0${num}`;
        }else {
            return num;
        }
    }
    function SetClock(selector,endtime){
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock,1000);
        updateClock();
        function updateClock(){
            const t = getTimeRemaining(endtime);
            days.innerHTML = setZero(t.days);
            hours.innerHTML = setZero(t.hours);
            minutes.innerHTML = setZero(t.mins);
            seconds.innerHTML = setZero(t.secs);

            if(t.total <= 0){
                clearInterval(timeInterval);
            }
        }
    }
    SetClock('.timer',deadline);
});

