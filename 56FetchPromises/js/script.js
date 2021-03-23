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
          modal = document.querySelector('.modal');

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
    
    modal.addEventListener('click',(e) => {
        if((e.target && e.target === modal) || e.target.getAttribute('data-close') == ''){
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

    class menuItem{
        constructor(bgUrl,title,descr,coast,alt){
            this.bgUrl = bgUrl;
            this.title = title;
            this.descr = descr;
            this.coast = coast;
            this.alt = alt;
        }
        make(){
            return `
            <div class="menu__item">
                    <img src="${this.bgUrl}" alt="${this.alt}">
                    <h3 class="menu__item-subtitle">${this.title}"</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.coast}</span> руб/день</div>
                    </div>
            </div>
            `;
        }

    }
    const menu = document.querySelector('.menu__field .container');

    const obj3 = new menuItem('img/tabs/vegy.jpg','Меню фитнес','Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!','150 рублей','vegy');
    const obj2 = new menuItem('img/tabs/elite.jpg','Меню премиум', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!','250 рублей','elite');
    const obj1 = new menuItem('img/tabs/post.jpg','Меню постное','Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.','159 рублей','vegy');
    let array = [obj3,obj2,obj1];
    array.forEach((item)=>{
        menu.innerHTML += item.make();
    });

    // ОТПРАВКА ДАННЫХ НА СЕРВЕР С ПОМОЩЬЮ FORMDATA

  /*  const forms = document.querySelectorAll('form');

    const message = {
        loading:'Загрузка',
        sucsess:'Спасибо,скоро мы с вами свяжемся',
        failure:'Что то пошло не так...'
    };
    forms.forEach(item => {
        postData(item);
    })

    function postData(form){
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.append(statusMessage);
            
            const request = new XMLHttpRequest();
            request.open('POST','server.php');
            //request.setRequestHeader('Content-type','multipart/form-data');
            const formData = new FormData(form);

            request.send(formData);
            request.addEventListener('load',() => {
                if (request.status === 200){
                    console.log(request.response);
                    statusMessage.textContent = message.sucsess;
                    form.reset();
                    setTimeout(() => {
                        statusMessage.remove();
                    },2000);
                }else {
                    statusMessage.textContent = message.failure;
                }
            });

        });
    }*/

    //ОТПРАВКА ДАННЫХ НА СЕРВЕР С ПОМОЩЬЮ ФОРМАТА JSON

    const forms = document.querySelectorAll('form');

    const message = {
        loading:'icons/spinner.svg',
        sucsess:'Спасибо,скоро мы с вами свяжемся',
        failure:'Что то пошло не так...'
    };
    function postData(form){
        form.addEventListener('submit',(e) => {
            e.preventDefault();
            const formData = new FormData(form);

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.append(statusMessage);
            
            const obj = {};
            formData.forEach((value,key) => {
                obj[key] = value;
            });

            fetch('server.php',{
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify(obj)
            })
            .then(data => data.text())
            .then(data => {
                console.log(data);
                statusMessage.textContent = message.sucsess;
                statusMessage.remove()
            }).catch(() => {
                statusMessage.textContent = message.failure;
            }).finally(() => {
                form.reset();
            })
        });
    }
    forms.forEach(elem => {
        postData(elem);
    });
   


});