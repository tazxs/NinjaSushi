document.querySelectorAll('.top_btn').forEach(button => {
    button.addEventListener('click', function() {
        anime({
            targets: button,
            scale: [1, 1.4, 1],
            rotate: {
                value: 360,
                duration: 800,
                easing: 'easeInOutSine'
            },
            backgroundColor: '#CCF5D5',
            duration: 1000,
            easing: 'easeInOutQuad',
            complete: function(anim) {
                button.style.backgroundColor = ''; 
            }
        });
    });
});



document.querySelectorAll('.heart').forEach(button => {
    button.addEventListener('mouseenter', function() {
        for (let i = 0; i < 5; i++) {
            const heart = document.createElement('div');
            heart.textContent = '❤️';
            heart.style.position = 'absolute';
            heart.style.left = `${Math.random() * button.offsetWidth}px`;
            heart.style.top = `${Math.random() * button.offsetHeight}px`;
            heart.style.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
            heart.style.pointerEvents = 'none';
            button.appendChild(heart);

            anime({
                targets: heart,
                scale: [0, 1.5, 1],
                opacity: [0, 1, 0],
                duration: 1500,
                easing: 'easeOutExpo',
                complete: () => button.removeChild(heart)
            });
        }
    });
});

document.querySelectorAll('.plus').forEach(button => {
    button.addEventListener('mouseenter', function() {
        for (let i = 0; i < 5; i++) {
            const symbol = document.createElement('div');
            symbol.textContent = ['+', '-', '×', '÷'][Math.floor(Math.random() * 4)];
            symbol.style.position = 'absolute';
            symbol.style.left = `${Math.random() * button.offsetWidth}px`;
            symbol.style.top = `${Math.random() * button.offsetHeight}px`;
            symbol.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
            symbol.style.pointerEvents = 'none';
            button.appendChild(symbol);

            anime({
                targets: symbol,
                scale: [0, 1.5, 1],
                opacity: [0, 1, 0],
                duration: 1500,
                easing: 'easeOutExpo',
                complete: () => button.removeChild(symbol)
            });
        }
    });
});

