// Функция для создания компонента
function createComponent() {
    const component = document.createElement('div');
    component.innerHTML = '<h1>Привет, мир!</h1><p>Это мой компонент.</p>';
    component.style.border = '1px solid #000';
    component.style.padding = '10px';
    component.style.margin = '10px';
    return component;
}

// Вставляем компонент в DOM
const app = document.getElementById('app');
app.appendChild(createComponent());