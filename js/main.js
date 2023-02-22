//----------------- menu show y hidden

const navMenu = document.getElementById('nav-menu'),
   navToggle = document.getElementById('nav-toggle'),
   navColse = document.getElementById('nav-close')

//   --------------------- menu show
// validate if constant exists

if (navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
   })
}

if (navColse) {
   navColse.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
   })
}





/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))






// -------------------------------Qualification tabs------------------------//

const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-Content]')

tabs.forEach(tab =>{
   tab.addEventListener('click', () =>{
      const target = document.querySelector(tab.dataset.target)

      tabContents.forEach(tabContent =>{
         tabContent.classList.remove('qualification__active')
      })
      target.classList.add('qualification__active')

      tabs.forEach(tab =>{
         tab.classList.remove('qualification__active')
      })
      tab.classList.add('qualification__active')
   })
})




