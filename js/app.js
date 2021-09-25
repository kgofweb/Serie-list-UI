// DOM elements
const settings = document.querySelector('.settings');
const profileImage = document.getElementById('profile-img');
const navItem = document.querySelectorAll('.nav-item');

// Event listener
profileImage.addEventListener('click', () => {
  settings.classList.toggle('show');
});

navItem.forEach(items => items.addEventListener('click', changeItem));

// Change item
function changeItem() {
  navItem.forEach(item => item.classList.remove('active'));
  this.classList.add('active');
}