
// JAVA SCRIPT ДЛЯ МЕНЮ
const menu = document.getElementById('menu')

const changeClass1 = el => {
    for (let i = 0; i < menu.children.length; i++) {
        menu.children[i].classList.remove('active')
    }
    el.classList.add('active')
}

menu.addEventListener('click', e => {
    const currTab = e.target.dataset.menu
    changeClass1(e.target)
})

