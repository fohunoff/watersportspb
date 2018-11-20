'use strict';

(function () {
 
  /* Кнопка должна располагаться строго выше скрываемого списка */
  
  /**
   * Структура:
   * 
   * div (position: relative)
   * |-- h2.header-navigation__title
   * |-- button.accordeon
   * |-- ul (скрываемый список)
   * |----li.md-hide-element (класс, который отвечает за сокрытие)
   * |------a.header-navigation__item--active (активная ссылка)
   * |----li.md-hide-element (класс, который отвечает за сокрытие)
   * |------a.header-navigation__item (ссылка)
   * |----li.md-hide-element (класс, который отвечает за сокрытие)
   * |------a.header-navigation__item (ссылка)
   * 
   */

  var accordeonButtons = document.querySelectorAll('.accordeon');
  
  // Показываем активный пункт меню (только для верхнего меню)
  var activeLink = document.querySelector('.header-navigation__item--active');
  if (activeLink) {
    activeLink.parentElement.classList.remove('md-hide-element');
  } else {
    // Костыльно показываем главное навигационное меню
    accordeonButtons[0].nextElementSibling.children[0].classList.remove('md-hide-element');
  }

  /* Замыкание */
  var setAllAccordeons = function (showButton) {
    showButton.addEventListener('click', function () {
      var menuList = showButton.nextElementSibling;
      // var title = showButton.previousElementSibling;

      showButton.classList.toggle('accordeon--open');
      if (window.innerWidth < 750) {
        var li = menuList.querySelectorAll('li');
        [].map.call(li, function (elem) {
          if(!elem.children[0].classList.contains('header-navigation__item--active')) {
            elem.classList.toggle('md-hide-element');
          }
        });
      }
    });
  };
  
  [].map.call(accordeonButtons, accordeonButton => setAllAccordeons(accordeonButton));
})();
