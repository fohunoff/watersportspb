'use strict';

(function () {
  var isSpoiler = document.querySelector('.spoilers');

  if (isSpoiler !== null) {
    
    var spoilers = document.querySelectorAll('.spoiler');

    /* Замыкание */
    var addListener = function (elem) {
      var spolerTitle = elem.querySelector('.spoiler__header');
      // var spolerBody = elem.querySelector('.spoiler__body');
      
      spolerTitle.addEventListener('click', function () {
        spolerTitle.classList.toggle('spoiler__header--open');
      });
    }

    for (var i = 0; i < spoilers.length; i++) {
      var spoiler = spoilers[i];
      addListener(spoiler); // Замыкание
    }
  }
})();