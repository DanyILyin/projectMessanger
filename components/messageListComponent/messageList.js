import { oneMessage } from "../oneMessageComponent/oneMessage.js";

export async function messageList() {
    const messageList = document.createElement('div');
    messageList.className = 'message-list';

    // Предположим, что вы хотите вызвать oneMessage 5 раз с разными параметрами
    for (let i = 0; i < 5; i++) {
        const messageElement = await oneMessage(1, i, 0); // Пример параметров
        messageList.appendChild(messageElement); // Добавляем элемент в messageList
    }

    const targetElement = document.querySelector('.message-content-block');
    targetElement.insertAdjacentElement('beforeEnd', messageList);
}