function createElement(){
    const element = document.createElement('div');
    element.classList.add('element');
    
    element.style.left = Math.random() * 100 + 'vw';
    element.style.animationDuration = Math.random() * 2 + 3 + 's';

    element.innerText = '🍔';

    document.body.appendChild(element);

    setTimeout(() => {
        element.remove();
    }, 5000);
}

setInterval(createElement, 500);

