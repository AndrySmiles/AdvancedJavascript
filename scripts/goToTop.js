'use strict';

let goToTopEl = document.getElementById('goToTop');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        goToTopEl.style.display = 'block';
    } else {
        goToTopEl.style.display = 'none';
    }
});