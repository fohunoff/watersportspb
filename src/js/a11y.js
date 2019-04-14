'use strict';

(function () {
    var eye = document.querySelector('.eye');
    var eyeLink = eye.querySelector('.eye__link');

    eyeLink.addEventListener('click', function (evt) {
        evt.preventDefault();

        var isNotice = document.querySelector('.eye__notice');

        if (isNotice) {
            console.log('plug');
        } else {
            var notice = document.createElement('p');
            notice.classList.add('eye__notice');
            notice.textContent = 'Версия для слабовидящих находится в разработке';
            eye.appendChild(notice);
        };
    })
})();