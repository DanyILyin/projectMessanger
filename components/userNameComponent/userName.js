export function userName() {
    const userName = document.createElement('div')
    userName.className = 'user-name-container'
    userName.innerHTML = `
            <div class="user-name">
                <div class="icon">
                    <img class="icon-user"  src="sourse/img/-1.png" alt="User-logo">
                </div>
                <h3>Имя пользователя</h3>
            </div>
            `
    const targetElement = document.querySelector('.message-content-block');

    targetElement.insertAdjacentElement('afterbegin', userName);
}