let currentColor = ' ';

function colorChange(color) {
    const divkey = document.getElementById('key')
    divkey.style.backgroundColor = color;

}
function createDiv(color) {
    const newDiv = document.createElement('div')
    newDiv.className = 'new-div';
    newDiv.style.backgroundColor = color;
    document.body.appendChild(newDiv);

}


document.addEventListener('keydown', function (event) {

    if (event.key === 'a') {
        currentColor = 'pink';
        colorChange(currentColor);
    } else if (event.key === 's') {
        currentColor = 'orange';
        colorChange(currentColor);
    } else if (event.key === 'd') {
        currentColor = 'lightblue'
        colorChange(currentColor);
    } else if (event.key === 'q') {
        createDiv('purple')
        colorChange(currentColor);
    } else if (event.key === 'w') {
        createDiv('gray')
    } else if (event.key === 'e') {
        createDiv('brown')
    }
});