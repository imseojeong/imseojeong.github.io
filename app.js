const gnbNav = document.querySelector('.gnb-nav')

const gnbNavMenuButton = document.querySelector('.gnb-nav-menu-button')
const gnbNavCloseButton = document.querySelector('.gnb-nav-close-button')

const gnbNavList = document.querySelector('.gnb-nav-list')

const openGnbNav = () => {
  gnbNav.classList.remove('is-hidden')
}
gnbNavMenuButton.addEventListener('click', openGnbNav)

const closeGnbNav = (e) => {
  if (e.target === gnbNavList) return
  gnbNav.classList.add('is-hidden')
}
gnbNavCloseButton.addEventListener('click', closeGnbNav)
gnbNavList.addEventListener('click', closeGnbNav)
