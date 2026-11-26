document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.toc-toggle');
    var toc = document.querySelector('.toc');
    if (!toggle || !toc) {
        return;
    }
    toggle.addEventListener('click', function (e) {
        e.preventDefault();
        var open = toc.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
});
