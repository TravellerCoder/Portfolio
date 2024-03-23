document.querySelectorAll('.img-sitio img').forEach(img => {
    img.addEventListener('click', function() {
        this.classList.toggle('large');
    });
});

if (window.innerWidth <= 769) {
    document.querySelectorAll('.img-sitio img').forEach(img => {
        img.classList.add('no-large');
    });
}