'use strict';

(function () {
  var news = document.querySelector('.actual-news');

  var actualNews = news.querySelectorAll('.actual-news__content');
  var count = 0;
  var slideInterval = setInterval(nextSlide, 5000);

  var bannerImage = document.createElement('img');
  bannerImage.classList.add('actual-news__banner');
  bannerImage.alt = "Текст";
  bannerImage.src = actualNews[0].querySelector('img').src; // Первая картинка

  news.appendChild(bannerImage);

  function nextSlide() {
    actualNews[count].classList.remove('actual-news__content--active');
    count++;                                // Переключаем на следующий слайд
    count = count % actualNews.length;      // Проверяем на остаток

    // ссылка на фото из новости
    bannerImage.src = actualNews[count].querySelector('img').src;
    actualNews[count].classList.add('actual-news__content--active');
  };


})();