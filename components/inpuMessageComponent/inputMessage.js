export function inputMessage() {
    const inputMessage = document.createElement('div')
    inputMessage.className = 'input-container'
    inputMessage.innerHTML = `<input class="input-message" type="text" placeholder="Написать сообщение..."> `
    const targetElement = document.querySelector('.message-content-block');
    targetElement.insertAdjacentElement('beforeEnd', inputMessage);
}