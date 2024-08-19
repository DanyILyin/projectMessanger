export function rigthPanel() {
    const rigthPanel = document.createElement('div')
    rigthPanel.className = 'right-panel'
    rigthPanel.innerHTML = `
    <div class="right-panel-icon">
        <img class="right-panel-icon-user"  src="sourse/img/-1.png" alt="User-logo">
    </div>
    <h2>Имя пользователя</h2>
    <h3>@Тег пользователя</h3>
    `
    const targetElement = document.querySelector('.messanger');
    targetElement.insertAdjacentElement('beforeEnd', rigthPanel);
}