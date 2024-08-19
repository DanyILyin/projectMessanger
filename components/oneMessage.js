export function oneMessage() {
    const oneMessage = document.createElement('div')
    oneMessage.className = 'one-message'
    oneMessage.innerHTML = `<p>Проверка</p>`
    const targetElement = document.querySelector('.message-content-block');
    targetElement.insertAdjacentElement('beforeEnd', oneMessage);
}

//fsdfsd