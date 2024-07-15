document.querySelectorAll('.nav_list').forEach(navItem => {
    navItem.addEventListener('mouseenter', () => {
        anime({
            targets: navItem,
            keyframes: [
                {translateX: -10},
                {translateX: 10},
                {translateX: 0}
            ],
            duration: 800,
            easing: 'easeInOutSine'
        });
    });
});

document.querySelectorAll('.nav_list__icon i').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        anime({
            targets: icon,
            scale: [1, 1.2, 1],
            rotate: '1turn',
            duration: 1000,
            easing: 'easeInOutSine'
        });
    });
});
document.querySelectorAll('.bread_link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        anime({
            targets: link,
            keyframes: [
                {translateX: -5},
                {translateX: 5},
                {translateX: 0}
            ],
            color: ['#ff6666', '#6666ff', 'inherit'],
            duration: 800,
            easing: 'easeInOutSine'
        });
    });
});

document.querySelectorAll('.bread_btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        anime({
            targets: btn,
            scale: [1, 1.1, 1],
            duration: 800,
            easing: 'easeInOutSine'
        });
    });
});
document.querySelector('.personal_btn').addEventListener('click', function() {
    const personalBlock = document.querySelector('.personal_block');
    const wrapper = document.querySelector('.delivery_addres__wrapper');

    personalBlock.style.opacity = 0;
    setTimeout(() => personalBlock.classList.add('hidden'), 500);

    const newBlock = document.createElement('div');
    newBlock.className = 'delivery_addres__block glitch';
    newBlock.innerHTML = `
        <div class="block_left">
            <a href="#" class="block_left__icon"><i class="fa-solid fa-location-dot"></i></a>
            <div class="block_left__text">
                <h2 class="left_text__title">Киев, Николая Краснова, 16</h2>
                <p class="left_text__text">Подьезд 5, этаж 3, квартира 104</p>
            </div>
        </div>
        <div class="block_right">
            <a href="#" class="block_right__icon"><i class="fa-solid fa-trash"></i></a>
        </div>
    `;

    wrapper.appendChild(newBlock);

    setTimeout(() => {
        newBlock.classList.remove('glitch');
    }, 500);

    const deleteIcon = newBlock.querySelector('.block_right__icon');
    deleteIcon.addEventListener('click', () => {
        newBlock.remove();
    });
});

document.querySelectorAll('.block_right__icon').forEach(icon => {
    icon.addEventListener('click', function() {
        this.parentElement.parentElement.remove();
    });
});
let currentActive = 1; 
const wraps = document.querySelectorAll('.text-wrap'); 
const progress = document.getElementById('progress'); 
const circle = document.querySelectorAll('.circle')
function update() {
    wraps.forEach((wrap, index) => {
        if (index < currentActive) {
            wrap.classList.add('active');
        } else {
            wrap.classList.remove('active');
        }
    });
    circle.forEach((circles, index) => {
        if (index < currentActive) {
            circles.classList.add('active');
        } else {
            circles.classList.remove('active');
        }
    });
    const actives = document.querySelectorAll('.progress-container .text-wrap.active');
    const numberOfActives = actives.length;
    const numberOfSteps = wraps.length;
    progress.style.width = `${(numberOfActives - 1) / (numberOfSteps - 1) * 100}%`; 
}

function updateActive(newIndex) {
    currentActive = newIndex;
    update();
}

wraps.forEach((wrap, index) => {
    wrap.addEventListener('click', () => updateActive(index + 1));
});

updateActive(1); 

document.addEventListener('DOMContentLoaded', function() {
    const toggleArrow = document.querySelector('.history_left .toggle-arrow');
    const collapsibleSection = document.querySelector('.history_right__collapsible');

    toggleArrow.addEventListener('click', function() {
        collapsibleSection.classList.toggle('collapsed'); // Переключение класса для анимации
        if (collapsibleSection.classList.contains('collapsed')) {
            toggleArrow.classList.remove('fa-chevron-down');
            toggleArrow.classList.add('fa-chevron-up'); // Смена иконки стрелки
        } else {
            toggleArrow.classList.remove('fa-chevron-up');
            toggleArrow.classList.add('fa-chevron-down'); // Возврат иконки стрелки
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('.list-item');

    listItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            anime({
                targets: item.querySelector('.text_right'),
                color: '#ff6347', // Пример изменения цвета
                duration: 500,
                easing: 'easeInOutQuad'
            });

            anime({
                targets: item.querySelector('.dashes:after'),
                scale: [1, 1.5], // Пример анимации увеличения
                duration: 800,
                easing: 'easeInOutExpo'
            });
        });

        item.addEventListener('mouseleave', () => {
            anime({
                targets: item.querySelector('.text_right'),
                color: '#000', // Возврат к исходному цвету
                duration: 500,
                easing: 'easeInOutQuad'
            });
        });

        item.addEventListener('click', () => {
            // Пример анимации 'glitch' при клике
            anime({
                targets: item,
                keyframes: [
                    {translateX: 10},
                    {translateX: -10},
                    {translateX: 10},
                    {translateX: 0}
                ],
                duration: 800,
                easing: 'easeInOutExpo'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const gridItems = document.querySelectorAll('.history__grid-container .grid-item');

    gridItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            anime({
                targets: item,
                keyframes: [
                    {translateX: -100, duration: 550},
                    {translateX: 10, duration: 450},
                    {translateX: -10, duration: 450},
                    {translateX: 0, duration: 450}
                ],
                easing: 'easeInOutSine'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const tipItems = document.querySelectorAll('.history_tips__item');

    tipItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            anime({
                targets: item,
                scale: 1.05,
                duration: 300,
                easing: 'easeInOutQuad'
            });
        });

        item.addEventListener('mouseleave', () => {
            anime({
                targets: item,
                scale: 1,
                duration: 400,
                easing: 'easeInOutQuad'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const titles = document.querySelectorAll('.history_top__title');

    titles.forEach(title => {
        title.addEventListener('mouseenter', () => {
            anime({
                targets: title,
                translateX: [
                    { value: 10, duration: 100 },
                    { value: -10, duration: 100 },
                    { value: 10, duration: 100 },
                    { value: -10, duration: 100 },
                    { value: 0, duration: 100 }
                ],
                scale: [
                    { value: 1.1, duration: 100, delay: 100 },
                    { value: 1, duration: 100 }
                ],
                rotate: [
                    { value: 3, duration: 100 },
                    { value: -3, duration: 100 },
                    { value: 0, duration: 100 }
                ],
                easing: 'easeInOutQuad',
                loop: false
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const badge = document.querySelector('.aside_badge');

    badge.addEventListener('mouseenter', () => {
        anime({
            targets: badge,
            keyframes: [
                { translateX: -10, duration: 50 },
                { translateX: 10, duration: 50 },
                { translateX: -10, duration: 50 },
                { translateX: 10, duration: 50 },
                { translateX: 0, duration: 50 }
            ],
            easing: 'easeInOutSine'
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.right_top__btn');

    button.addEventListener('mouseenter', () => {
        anime({
            targets: button,
            keyframes: [
                { translateX: -5, duration: 50 },
                { translateX: 5, duration: 50 },
                { translateX: -5, duration: 50 },
                { translateX: 5, duration: 50 },
                { translateX: 0, duration: 50 }
            ],
            easing: 'easeInOutQuad'
        });
    });
});
const openModal = document.querySelector('.right_top__btn');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close_btn');
const saveBtn = document.querySelector('.modal_btn');
const modalInput = document.querySelectorAll('.modal_input');
const modalInputName = document.querySelector('.name');
const modalInputEmail = document.querySelector('.email');
const modalInputNumber = document.querySelector('.number');
const nameWrap = document.querySelector('.right_top__title');
const emailWrap = document.querySelector('.badge_right__email');
const numberWrap = document.querySelector('.badge_right__number');
const overlay = document.querySelector('.overlay');
function openModalFunc(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
function closeModalFunc(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
openModal.addEventListener('click', openModalFunc);
closeModal.addEventListener('click', closeModalFunc);
overlay.addEventListener('click', closeModalFunc);
document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModalFunc();
    }
})
saveBtn.addEventListener('click', function(){
    if(modalInputName.value.trim() !== "" && modalInputEmail.value.trim() !== "" && modalInputNumber.value.trim() !== ""){
        nameWrap.textContent = modalInputName.value;
        emailWrap.textContent = modalInputEmail.value;
        numberWrap.textContent = modalInputNumber.value;
        closeModalFunc();
    }
    
})
