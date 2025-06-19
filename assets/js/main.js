// SHOW MENU
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

  if(toggle && nav){
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    });
  }
}
showMenu('nav_toggle', 'nav_menu')

// ACTIVE & REMOVE ACTIVE
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
  navLink.forEach(n => n.classList.remove('active'))
  this.classList.add('active')

  // Close menu on mobile
  const navMenu = document.getElementById('nav_menu')
  navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// CONTACT FORM SUBMIT
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form reload

  // Show success message
  const successMessage = document.getElementById("successMessage")
  successMessage.style.display = "block"

  // Reset the form
  this.reset()

  // Hide after 3 seconds
  setTimeout(() => {
    successMessage.style.display = "none"
  }, 3000)
});
