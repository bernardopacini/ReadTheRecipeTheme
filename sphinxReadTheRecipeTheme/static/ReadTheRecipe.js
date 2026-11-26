document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.navbar-toggle');
    var panels = document.querySelectorAll('.toc > ul, .toc > form');
    if (!toggle || !panels.length) {
        return;
    }
    toggle.addEventListener('click', function (e) {
        e.preventDefault();
        var hidden = window.getComputedStyle(panels[0]).display === 'none';
        panels.forEach(function (panel) {
            panel.style.display = hidden ? 'block' : 'none';
        });
        toggle.setAttribute('aria-expanded', hidden ? 'true' : 'false');
    });
});
