export async function oneMessage(idChat, IdMessage, IdOwnerMessage) {
    // Создаем элемент
    const oneMessage = document.createElement('div');
    oneMessage.className = 'one-message';

    try {
        // Загружаем данные из JSON файла 
        const response = await fetch('components/oneMessageComponent/messages.json');
        const data = await response.json();

        // Находим сообщение с нужного нам чата и нужным id
        const message = data.messages.find(msg => msg.idChat === idChat && msg.idMessage === IdMessage);
        if (message) {
            if (message.messageOwnerId === IdOwnerMessage) {
                oneMessage.className = 'one-message-owner';
            }
            oneMessage.innerHTML = message.text;

            
        } else {
            console.error('Сообщение не найдено');
        }
    } catch (error) {
        console.error('Ошибка при загрузке JSON:', error);
    }

    console.log(oneMessage);
    return oneMessage; // Возвращаем элемент
}