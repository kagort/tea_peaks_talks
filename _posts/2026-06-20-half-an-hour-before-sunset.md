---
layout: post
title: Полчаса до заката
date: 2026-06-20 12:56:24 +03:00
categories:
  - заметки
---
Я сел писать эту заметку со странным чувством. В первую очередь это  чувство возникает потому, что я в своих рассуждениях ищу ответ на вопрос: почему я почти перестал вести заметки  в "Чай-горы-разговоры"? Ведь в жизни пока ещё есть место и чаю,  и горам. А уж разговоров вокруг... 

На пробежке слушал сегодня аудиокнигу Деймона Захариадиса "Дел до ж#пы " про искусство составления списков дел. Там была мысль о том, что каждую задачу нужно привязывать к контексту и цели. Всякий раз нужно отвечать себе на вопрос: зачем я берусь за выполнение конкретной задачи? Если это шаг, то какой цели этот шаг ведёт?
В последние месяца полтора в моих списках дел болтается задача "Написать пост в ЧГР (Чай-горы-разговоры)". Сроки переносятся, творческие идеи рассыпаются. Состояние, похожее на уныние всё время маячит где-то на горизонте. 

Я стал думать. Зачем я затевал этот свой цифровой садик с ограниченным количеством посетителей? Теперь уже трудно ответить однозначно. Помню, что после похода на Килиманджаро в 2024-м я был переполнен мыслями и эмоциями. Всё это требовало какого-то текстового выхода.  Сегодня мыслей и идей не меньше. Но острой потребности писать не ощущается. Возможно, просто к концу учебного года накопилась усталость. Творческие заметки, песни и стихи хорошо пишутся, когда есть свободный режим жизни. То  былое лёгкое раздолбайство, которое не умещалось в таблички и метрики продуктивности, стало казаться священным мифом. Типа: "Были времена, когда боги, люди и животные говорили на одном языке". Наверное, в те вымышленные  времена люди вставали не по будильнику и ложились спать когда хотели. Тогда, наверное, и песни пелись и бумажные книги читались в спокойном темпе. 

Смешно, но у меня в часах стоит ежедневная напоминалка, привязанная ко времени заката в зависимости от времени года и геолокации. Я думал так: поставлю напоминалку за полчаса до заката и буду ежедневно любоваться, где бы я ни был. Ха-ха! Ни разу... Ни разу не посмотрел на заходящее солнце. Часы послушно вибрировали, я читал надпись "Внимание до захода солнца осталось 30 мин" и спокойно продолжал заниматься своими делами, понимая, что пока во Вселенной всё идёт по плану, можно полюбоваться и в другой день. 

А вот вчера вечером мы всей семьёй вывалили на балкон поглазеть на необычайное зрелище. После грозы в небе ещё висели свинцовые тучи, их фиолетовые оборки были подсвечены оранжевыми, розовыми, лиловыми и прочими немыслимыми переливами от лучей уже закатившегося солнца. Мы стояли и не могли отвести глаз. Я подумал, что нужно все дела делать только тогда, когда не можешь не делать.  Собственно, поэтому и сел сегодня писать.

В качестве иллюстрации к общему умонастроению прикладываю небольшой фотоальбом, который сформировался из последних событий жизни.

<!-- Галерея изображений -->
<div class="gallery-container">
  <div class="gallery-wrapper">
    <div class="gallery-slides">
      <div class="gallery-slide">
        <img src="{{ site.baseurl }}/assets/images/posts/bss_1.JPG" alt="Фото 1" loading="lazy">
      </div>
      <div class="gallery-slide">
        <img src="{{ site.baseurl }}/assets/images/posts/bss_2.JPG" alt="Фото 2" loading="lazy">
      </div>
      <div class="gallery-slide">
        <img src="{{ site.baseurl }}/assets/images/posts/bss-3.JPG" alt="Фото 3" loading="lazy">
      </div>
      <div class="gallery-slide">
        <img src="{{ site.baseurl }}/assets/images/posts/bss-4.JPG" alt="Фото 4" loading="lazy">
      </div>
      <div class="gallery-slide">
        <img src="{{ site.baseurl }}/assets/images/posts/bss-5.JPG" alt="Фото 5" loading="lazy">
      </div>
    </div>
    <button class="gallery-prev">❮</button>
    <button class="gallery-next">❯</button>
  </div>
  <div class="gallery-dots">
    <span class="dot" data-index="0"></span>
    <span class="dot" data-index="1"></span>
    <span class="dot" data-index="2"></span>
    <span class="dot" data-index="3"></span>
    <span class="dot" data-index="4"></span>
  </div>
</div>

<style>
.gallery-container {
  max-width: 800px;
  margin: 2rem auto;
  position: relative;
}

.gallery-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.gallery-slides {
  display: flex;
  transition: transform 0.3s ease;
}

.gallery-slide {
  flex: 0 0 100%;
  aspect-ratio: 16/9;
}

.gallery-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.gallery-prev, .gallery-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.5);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  transition: background 0.3s;
  z-index: 10;
}

.gallery-prev:hover, .gallery-next:hover {
  background: rgba(0,0,0,0.8);
}

.gallery-prev { left: 10px; }
.gallery-next { right: 10px; }

.gallery-prev:disabled, .gallery-next:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.gallery-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 1rem;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ccc;
  cursor: pointer;
  transition: background 0.3s;
}

.dot.active {
  background: #333;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelector('.gallery-slides');
  const prevBtn = document.querySelector('.gallery-prev');
  const nextBtn = document.querySelector('.gallery-next');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;
  const totalSlides = slides.children.length;

  function updateGallery() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === totalSlides - 1;
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) { currentIndex--; updateGallery(); }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) { currentIndex++; updateGallery(); }
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => { currentIndex = index; updateGallery(); });
  });

  updateGallery();
});
</script>
