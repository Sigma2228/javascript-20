const gallery = document.querySelector('.gallery')
const image = document.querySelector('.image')
let position = 0
document.addEventListener('keydown', event => {
    if(event.key === 'd') {
        position += 10
    }
    if(event.key === 'a') {
        position -= 10
    }
    gallery.style.transform = `translateX(${position}px)`;
    gallery.style.transition = 'transform 0.1s';
})
const amountInput = document.getElementById('amount')
const createBtn = document.getElementById('createBtn')
const destroyBtn = document.getElementById('destroyBtn')
const boxes = document.getElementById('boxes')
createBtn.addEventListener('click', () => {
    const amount = parseInt(amountInput.value)
    createBoxes(amount);
})
destroyBtn.addEventListener('click', () => {
    boxes.innerHTML = ''
})

function createBoxes(amount) {
     boxes.innerHTML = ''
     let size = 30; 
    for(let i = 0;i < amount;i++) {
    const create = document.createElement('div')
    create.style.backgroundColor = getRandomColor();
    create.style.width = `${size}px`;
    create.style.height = `${size}px`;
    create.style.display = 'inline-block'
    size += 10;
    boxes.appendChild(create);
    }
}
function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}