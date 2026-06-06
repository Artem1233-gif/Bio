document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link-card');
    links.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px)';
        link.style.transition = `all 0.4s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 100);
    });

    const avatar = document.querySelector('.avatar-frame');
    if (avatar) {
        avatar.addEventListener('mouseenter', () => {
            const gradient = document.querySelector('.avatar-gradient');
            if (gradient) gradient.style.opacity = '1';
        });
        avatar.addEventListener('mouseleave', () => {
            const gradient = document.querySelector('.avatar-gradient');
            if (gradient) gradient.style.opacity = '0.7';
        });
    }

    console.log('%c✨ Gentboom | Разработчик и автоматизация', 'color: #3b82f6; font-size: 14px; font-weight: bold;');
    console.log('%c🚀 Telegram: @Gentboom | GitHub: Artem1233-gif', 'color: #a1a1aa; font-size: 12px;');
});

window.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        console.warn(`Не удалось загрузить изображение: ${e.target.src}`);
        e.target.style.display = 'none';
    }
}, true);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href !== '#' && href !== '#/') {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
