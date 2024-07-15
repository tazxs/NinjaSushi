// Glitch анимация для изображений
document.querySelectorAll('.card__image img').forEach(img => {
    img.addEventListener('mouseenter', () => {
        anime({
            targets: img,
            keyframes: [
                {translateX: -10},
                {translateX: 10},
                {translateX: -10},
                {translateX: 0}
            ],
            duration: 800,
            easing: 'easeInOutSine'
        });
    });
});

// Pulse анимация для текста
document.querySelectorAll('.card__title, .card__subtitle').forEach(text => {
    text.addEventListener('mouseenter', () => {
        anime({
            targets: text,
            scale: [1, 1.1, 1],
            duration: 800,
            easing: 'easeInOutSine'
        });
    });
});

// Добавление glitch эффекта для текста
document.querySelectorAll('.card__text').forEach(text => {
    text.addEventListener('mouseenter', () => {
        text.style.color = 'transparent';
        text.style.textShadow = `2px 0 red, -2px 0 blue`;
        setTimeout(() => {
            text.style.color = '';
            text.style.textShadow = '';
        }, 500);
    });
});
// Анимация для .billet при наведении
document.querySelectorAll('.billet').forEach(billet => {
    billet.addEventListener('mouseenter', function() {
        anime({
            targets: billet,
            scale: [1, 1.1, 1],
            duration: 500,
            easing: 'easeInOutSine'
        });
    });
});

// Вращение иконок при наведении
document.querySelectorAll('.image_icons__icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        anime({
            targets: icon,
            rotate: '1turn',
            duration: 800,
            easing: 'easeInOutSine'
        });
    });
});
