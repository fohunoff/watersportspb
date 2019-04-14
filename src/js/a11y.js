'use strict';

(function () {
    var eye = document.querySelector('.eye');
    var eyeLink = eye.querySelector('.eye__link');
    var notice = eye.querySelector('p');
    var isNotice = false;

    eyeLink.addEventListener('click', function (evt) {
        evt.preventDefault();

        if (isNotice) {
            isNotice = !isNotice;
            notice.classList.toggle('eye__notice');
            notice.textContent = '';
        } else {
            isNotice = !isNotice;
            notice.classList.toggle('eye__notice');
            notice.textContent = 'Версия для слабовидящих находится в разработке';
        };
    })
})();