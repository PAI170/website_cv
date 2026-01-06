document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.h-menu');
    const menuList = document.querySelector('.menu-list');
    const icon = menuBtn.querySelector('i');

    menuBtn.addEventListener('click', () => {
        
        menuList.classList.toggle('active');
        icon.classList.toggle('icon-rotate');

        if (menuList.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    const menuLinks = document.querySelectorAll('.menu-list a');

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuList.classList.remove('active');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
            icon.classList.remove('icon-rotate');
        });
    });
});

