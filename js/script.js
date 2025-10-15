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
}}

// Зберігання даних користувачів (в реальному додатку це буде на сервері)
let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Елементи DOM
const elements = {
    // Кнопки
    loginBtn: document.getElementById('loginBtn'),
    registerBtn: document.getElementById('registerBtn'),
    openAuthBtn: document.getElementById('openAuth'),
    closeAuthModal: document.getElementById('closeAuthModal'),
    logoutBtn: document.getElementById('logoutBtn'),
    
    // Модальне вікно
    authModal: document.getElementById('authModal'),
    modalTitle: document.getElementById('modalTitle'),
    
    // Таби
    tabBtns: document.querySelectorAll('.tab-btn'),
    
    // Форми
    loginForm: document.getElementById('loginForm'),
    registerForm: document.getElementById('registerForm'),
    forgotPasswordForm: document.getElementById('forgotPasswordForm'),
    authForms: document.querySelectorAll('.auth-form'),
    
    // Посилання
    forgotPassword: document.getElementById('forgotPassword'),
    backToLogin: document.getElementById('backToLogin'),
    
    // Інформація про користувача
    userInfo: document.getElementById('userInfo'),
    userName: document.getElementById('userName'),
    userEmail: document.getElementById('userEmail')
};

// Ініціалізація
function init() {
    updateUI();
    setupEventListeners();
}

// Оновлення інтерфейсу
function updateUI() {
    if (currentUser) {
        // Користувач увійшов
        elements.userName.textContent = currentUser.username;
        elements.userEmail.textContent = currentUser.email;
        elements.userInfo.style.display = 'block';
        
        // Оновлення кнопок навігації
        elements.loginBtn.style.display = 'none';
        elements.registerBtn.style.display = 'none';
        elements.openAuthBtn.style.display = 'none';
    } else {
        // Користувач не увійшов
        elements.userInfo.style.display = 'none';
        elements.loginBtn.style.display = 'block';
        elements.registerBtn.style.display = 'block';
        elements.openAuthBtn.style.display = 'block';
    }
}

// Налаштування обробників подій
function setupEventListeners() {
    // Відкриття модального вікна
    elements.loginBtn.addEventListener('click', () => openAuthModal('login'));
    elements.registerBtn.addEventListener('click', () => openAuthModal('register'));
    elements.openAuthBtn.addEventListener('click', () => openAuthModal('login'));
    
    // Закриття модального вікна
    elements.closeAuthModal.addEventListener('click', closeAuthModal);
    elements.authModal.addEventListener('click', (e) => {
        if (e.target === elements.authModal) closeAuthModal();
    });
    
    // Таби
    elements.tabBtns.forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });
    
    // Форми
    elements.loginForm.addEventListener('submit', handleLogin);
    elements.registerForm.addEventListener('submit', handleRegister);
    elements.forgotPasswordForm.addEventListener('submit', handleForgotPassword);
    
    // Посилання
    elements.forgotPassword.addEventListener('click', (e) => {
        e.preventDefault();
        showForgotPasswordForm();
    });
    
    elements.backToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        showLoginForm();
    });
    
    // Вихід
    elements.logoutBtn.addEventListener('click', handleLogout);
    
    // Закриття по Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && elements.authModal.style.display === 'flex') {
            closeAuthModal();
        }
    });
}

// Відкриття модального вікна авторизації
function openAuthModal(tab = 'login') {
    elements.authModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    switchTab(tab);
}

// Закриття модального вікна
function closeAuthModal() {
    elements.authModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    clearForms();
}

// Перемикання табів
function switchTab(tab) {
    // Оновлення активних табів
    elements.tabBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tab);
    });
    
    // Оновлення активних форм
    elements.authForms.forEach(form => {
        form.classList.toggle('active', form.id === `${tab}Form`);
    });
    
    // Оновлення заголовка
    elements.modalTitle.textContent = tab === 'login' ? 'Увійти в акаунт' : 'Створення акаунту';
}

// Показати форму входу
function showLoginForm() {
    switchTab('login');
}

// Показати форму відновлення пароля
function showForgotPasswordForm() {
    elements.authForms.forEach(form => form.classList.remove('active'));
    elements.forgotPasswordForm.classList.add('active');
    elements.modalTitle.textContent = 'Відновлення пароля';
}

// Обробка входу
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Валідація
    if (!email || !password) {
        showMessage('Будь ласка, заповніть всі поля', 'error');
        return;
    }
    
    // Пошук користувача
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        showMessage('Вхід успішний!', 'success');
        setTimeout(() => {
            closeAuthModal();
            updateUI();
        }, 1000);
    } else {
        showMessage('Невірний email або пароль', 'error');
    }
}

// Обробка реєстрації
function handleRegister(e) {
    e.preventDefault();
    
    const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
    const terms = document.getElementById('terms').checked;
    
    // Валідація
    if (!username || !email || !password || !confirmPassword) {
        showMessage('Будь ласка, заповніть всі поля', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showMessage('Паролі не співпадають', 'error');
        return;
    }
    
    if (!terms) {
        showMessage('Будь ласка, погодьтесь з умовами використання', 'error');
        return;
    }
    
    if (users.find(u => u.email === email)) {
        showMessage('Користувач з таким email вже існує', 'error');
        return;
    }
    
    // Створення нового користувача
    const newUser = {
        id: Date.now(),
        username,
        email,
        password,
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    showMessage('Акаунт успішно створено!', 'success');
    setTimeout(() => {
        switchTab('login');
        clearForms();
    }, 1500);
}

// Обробка відновлення пароля
function handleForgotPassword(e) {
    e.preventDefault();
    
    const email = document.getElementById('resetEmail').value;
    
    if (!email) {
        showMessage('Будь ласка, введіть ваш email', 'error');
        return;
    }
    
    // В реальному додатку тут буде відправка email
    showMessage('Посилання для скидання пароля надіслано на вашу пошту', 'success');
    setTimeout(() => {
        showLoginForm();
        clearForms();
    }, 2000);
}

// Вихід
function handleLogout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateUI();
    showMessage('Ви вийшли з акаунту', 'success');
}

// Очищення форм
function clearForms() {
    document.querySelectorAll('.auth-form').forEach(form => form.reset());
    document.querySelectorAll('.error-message').forEach(msg => msg.style.display = 'none');
}

// Показати повідомлення
function showMessage(text, type = 'info') {
    // Видаляємо старі повідомлення
    const oldMessage = document.querySelector('.success-message, .error-message');
    if (oldMessage) oldMessage.remove();
    
    // Створюємо нове повідомлення
    const message = document.createElement('div');
    message.className = type === 'success' ? 'success-message' : 'error-message';
    message.textContent = text;
    message.style.color = type === 'success' ? '#28a745' : '#dc3545';
    
    // Додаємо повідомлення до активної форми
    const activeForm = document.querySelector('.auth-form.active');
    activeForm.appendChild(message);
    
    // Автоматично видаляємо через 5 секунд
    setTimeout(() => {
        if (message.parentNode) {
            message.remove();
        }
    }, 5000);
}

// Запуск додатка
document.addEventListener('DOMContentLoaded', init);

// Додайте ці функції до вашого script.js

// Функції для відкриття/закриття профілю
function openProfileModal() {
    loadProfileData();
    document.getElementById('profileModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeProfileModal() {
    document.getElementById('profileModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Завантаження даних профілю
function loadProfileData() {
    if (!currentUser) return;
    
    // Оновлення даних в модальному вікні
    document.getElementById('profileUsername').textContent = currentUser.username;
    document.getElementById('profileEmail').textContent = currentUser.email;
    document.getElementById('memberSince').textContent = new Date(currentUser.createdAt).toLocaleDateString('uk-UA');
    
    // Оновлення аватара
    const avatar = currentUser.avatar || 'default-avatar.jpg';
    document.getElementById('profileAvatar').src = avatar;
    document.getElementById('avatarImg').src = avatar;
    
    // Оновлення статистики (приклад)
    document.getElementById('savedRoomsCount').textContent = currentUser.savedRooms?.length || 0;
    document.getElementById('createdRoomsCount').textContent = currentUser.createdRooms?.length || 0;
    document.getElementById('reviewsCount').textContent = currentUser.reviews?.length || 0;
}

// Оновлення UI при вході/виході
function updateUI() {
    if (currentUser) {
        // Показати меню користувача
        document.getElementById('userMenu').style.display = 'flex';
        document.getElementById('authButtons').style.display = 'none';
        
        // Оновити дані в навігації
        document.getElementById('navUserName').textContent = currentUser.username;
        document.getElementById('avatarImg').src = currentUser.avatar || 'default-avatar.jpg';
        
        // Завантажити дані профілю
        loadProfileData();
    } else {
        // Показати кнопки авторизації
        document.getElementById('userMenu').style.display = 'none';
        document.getElementById('authButtons').style.display = 'flex';
    }
}

// Зміна аватара
function changeAvatar() {
    document.getElementById('avatarInput').click();
}

document.getElementById('avatarInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const avatarUrl = e.target.result;
            
            // Оновити аватар користувача
            currentUser.avatar = avatarUrl;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            
            // Оновити аватар в базі даних (в реальному додатку)
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const userIndex = users.findIndex(u => u.id === currentUser.id);
            if (userIndex !== -1) {
                users[userIndex].avatar = avatarUrl;
                localStorage.setItem('users', JSON.stringify(users));
            }
            
            // Оновити UI
            loadProfileData();
            updateUI();
        };
        reader.readAsDataURL(file);
    }
});

// Додаткові функції (заглушки)
function openSavedRooms() {
    alert('Перехід до збережених кімнат');
    // Тут буде ваша логіка для відображення збережених кімнат
}

function openSettings() {
    alert('Перехід до налаштувань');
    // Тут буде ваша логіка для налаштувань
}

function openEditProfile() {
    alert('Редагування профілю');
    // Тут буде ваша логіка для редагування профілю
}

// Оновіть функцію handleLogout
function handleLogout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateUI();
    closeProfileModal();
    showMessage('Ви вийшли з акаунту', 'success');
}