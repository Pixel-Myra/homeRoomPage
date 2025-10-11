// Збереження кімнати в localStorage
let rooms = JSON.parse(localStorage.getItem('rooms')) || [];
rooms.push({name: "Моя кімната", items: []});
localStorage.setItem('rooms', JSON.stringify(rooms));
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