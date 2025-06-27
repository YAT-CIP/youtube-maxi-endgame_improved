const navbar = document.getElementById('navbar')
const openButton = document.getElementById('header__navbar-button--open')
const closeButton = document.getElementById('header__navbar-button--close')
const overlay = document.getElementById('header__overlay')
const navLinks = document.querySelectorAll('#navbar a')

function openSidebar(){
    navbar.classList.add('show-navbar')
}

function closeSidebar(){
    navbar.classList.remove('show-navbar')
}

openButton.addEventListener('click', openSidebar)
closeButton.addEventListener('click', closeSidebar)
overlay.addEventListener('click', closeSidebar)

navLinks.forEach(link => {
	link.addEventListener('click', closeSidebar)
})

// Gère l'état de aria-expanded en fonction de l'état de <details>

const allAccordions = document.querySelectorAll('.faq__accordion');

allAccordions.forEach(detail => {
  const summary = detail.querySelector('summary');
  
  summary.addEventListener('click', () => {
    // Laisser le navigateur gérer l'ouverture
    // Puis mettre à jour l'attribut
    const isOpen = detail.hasAttribute('open');
    summary.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
  });
});