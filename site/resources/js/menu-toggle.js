function toggleMenu() {
    var navList = document.getElementById('nav-list');
    if (navList.classList.contains('show')) {
        navList.classList.remove('show');
    } else {
        navList.classList.add('show');
    }
}
