// Получаем все элементы с классом 'dropdown'
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector('.dropdown-btn');
    const content = dropdown.querySelector('.dropdown-content');

    // Добавляем обработчик события на кнопку
    button.addEventListener('click', function(event) {
        // Переключаем класс 'visible' вместо прямого изменения стиля
        content.classList.toggle('visible');
        event.stopPropagation(); // Останавливаем всплытие
    });
});

// Закрыть выпадающее меню при клике вне его
document.addEventListener('click', () => {
    dropdowns.forEach(dropdown => {
        dropdown.querySelector('.dropdown-content').classList.remove('visible');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar");
    const content = document.querySelector(".content");
    const toggleBtn = document.getElementById("sidebarToggle");

    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
        content?.classList.toggle("shift"); // Добавляем проверку на наличие content
    });
});

  AOS.init({
    duration: 1000, // Длительность анимации в миллисекундах
    once: true, // Анимация происходит только один раз
    offset: 200, // Отступ перед началом анимации
  });




