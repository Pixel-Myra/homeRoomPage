// Збереження кімнати в localStorage
let rooms = JSON.parse(localStorage.getItem('rooms')) || [];
rooms.push({name: "Моя кімната", items: []});
localStorage.setItem('rooms', JSON.stringify(rooms));

// Бургер-меню
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav__link');

    // Відкриття/закриття меню при кліку на бургер
    if (burger) {
        burger.addEventListener('click', function() {
            burger.classList.toggle('active');
            nav.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
    }

    // Закриття меню при кліку на посилання
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            burger.classList.remove('active');
            nav.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });

    // Закриття меню при кліку поза ним
    document.addEventListener('click', function(e) {
        if (nav.classList.contains('active') && 
            !nav.contains(e.target) && 
            !burger.contains(e.target)) {
            burger.classList.remove('active');
            nav.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
});

// Функція для вибору кімнати (якщо потрібна)
function selectRoom(roomType) {
    console.log('Вибрано кімнату:', roomType);
    // Тут можна додати логіку для переходу на сторінку вибраної кімнати
function showPopup() {
  alert("Cam rosberesa 😊");
}
function openPopup() {
    document.getElementById('popupOverlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
}
function openPopup(name) {
  document.getElementById('popup-' + name).style.display = 'block';
}

function closePopup(name) {
  document.getElementById('popup-' + name).style.display = 'none';
}