window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // verificar se passou da linha
  // offsettop --> mostra o topo de uma section
  const sectionTop = section.offsetTop

  // offsettop --> mostra a açtura de uma section
  const sectionHight = section.offsetHeight

  // o topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  // verificar se a base da section está abaixo da linha alvo
  const sectionEndsAt = sectionTop + sectionHight
  const sectionEndPassedTargerLine = sectionEndsAt <= targetLine

  // limites da seção
  const sectionBounderies =
  sectionTopReachOrPassedTargetLine && !sectionEndPassedTargerLine

  // quertSelector --> pesquisa pelo seletor
  // ( *= ) --> contenha
  const sectionId = section.getAttribute('id')
  const menuElemet = document.querySelector(`.menu a[href*=${sectionId}]`)

  if (sectionBounderies) {
    menuElemet.classList.add('active')
  } else {
    menuElemet.classList.remove('active')
  }
}


function showNavOnScroll() {
  if (scrollY == 0) {
    navigation.classList.remove('scroll')
  } else {
    navigation.classList.add('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`#home,
#home img,
#home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`)
