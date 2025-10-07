// Збереження кімнати в localStorage
let rooms = JSON.parse(localStorage.getItem('rooms')) || [];
rooms.push({name: "Моя кімната", items: []});
localStorage.setItem('rooms', JSON.stringify(rooms));
