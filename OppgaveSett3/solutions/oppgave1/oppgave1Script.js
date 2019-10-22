var body = document.querySelector('body');
var button = document.querySelector('button');
var isPressed = false;

button.addEventListener('click', function() {
    if (isPressed) {
        body.style.backgroundColor = '#fff';
    } else {
        body.style.backgroundColor = '#345689';
    }

    isPressed = !isPressed;
});