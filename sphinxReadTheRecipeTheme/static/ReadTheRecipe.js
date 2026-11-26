document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.navbar-toggle');
    var menu = document.querySelector('.toc > ul');
    if (!toggle || !menu) {
        return;
    }
    toggle.addEventListener('click', function (e) {
        e.preventDefault();
        var hidden = window.getComputedStyle(menu).display === 'none';
        menu.style.display = hidden ? 'block' : 'none';
        toggle.setAttribute('aria-expanded', hidden ? 'true' : 'false');
    });
});
