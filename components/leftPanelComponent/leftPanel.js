export function leftPanel() {
    const leftPanel = document.createElement('div')
    leftPanel.className = 'left-panel'
    leftPanel.innerHTML = `
    <div class="chat-short">
        <img class="icon-user"  src="sourse/img/-1.png" alt="User-logo">
        <div class="short-chat-info">
        <h3>Имя Чата</h3>
        <t>Последнее сообщение</t>
        </div>
    </div>
    `
    const targetElement = document.querySelector('.messanger');
    targetElement.insertAdjacentElement('afterbegin', leftPanel);
}