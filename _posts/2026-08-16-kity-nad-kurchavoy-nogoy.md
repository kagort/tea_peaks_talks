---
layout: post
title: Киты над курчавой ногой
date: 2026-08-16 16:51:20 +03:00
categories:
  - заметки
---
Эту заметку я сажусь писать просто от желания поделиться серией фотографий, которые удалось сделать на одном из недавних горных выездов.

Сначала минутка этимологии. Носители карачаево-балкарского языка утверждают, что слово "Бермамыт" происходит от двух тюркских слов "бурма" - "скрученный", "курчавый" и "бут" - "нога" или "утёс". Тут два полюса: или "курчавая нога" или "скрученный утёс" - кому что по душе. "Нога" и "утёс" имеют вполне закономерную связь. В русском языке слово "хребет", например, имеет два значения: анатомическое - "позвоночник" и топонимическое - "горная цепь". В карачаево-балкарском ситуация похожая: аууз (рот) - это ещё и "ущелье", къулакъ (ухо) - "балка", къол (рука) - " узкое ущелье", тамакъ (горло) имеет значение "устье", сырт(спина) - "высокогорье". (Эту информацию я не проверял. Просто нашёл в комментариях в Интернете. )

Плато Бермамыт - место довольно популярное из-за фантастических видов, которые с него открываются при счастливом стечении погодных обстоятельств.

В нашем случае было всё - и стечения, и обстоятельства. Под "стечениями" я понимаю четыре грозы, которые разверзли свои хляби одна за другой, пока мы бродили по плато. Под обстоятельствами имеется в виду сложная архитектура облаков, которая выстраивала сама себя в перерывах между поливами в лучах закатного солнца.

Я механически жал на кнопку фотоаппарата, не веря опыту своих глаз. Каждую секунду вздымались, вздыбливались, вспенивались ватные громады и потом порывистым туманом стекали вниз по ущелью. Солнце обстреливало закатным лазером свинцовую обшивку облачных китов, которые с достоинством скрывались за горизонтом. Ветер был главной движущей силой того театрального действа, которое происходило на небесной сцене.

Солнце село. Свет в зале погас. Резко стало тихо, скучно и холодно. Мы разбрелись по палаткам. Ночью во сне я был Ионой, уютно устроившимся в фиолетовом чреве облачного кита. Кит зевнул, и в палатку проник свет следующего дня.

<!-- Галерея изображений -->
<div class="gallery-container">
  <div class="gallery-wrapper">
    <div class="gallery-slides">
      {% assign bmt_indices = "1,3,6,7,8,9,10,11,12,13,14,15,17,18,19,23" | split: "," %}
      {% for i in bmt_indices %}
      <div class="gallery-slide">
        <img src="{{ site.baseurl }}/assets/images/posts/bmt_ar-{{ i }}.JPG" alt="Фото {{ i }}" loading="lazy">
      </div>
      {% endfor %}
    </div>
    <button class="gallery-prev">❮</button>
    <button class="gallery-next">❯</button>
  </div>
  <div class="gallery-dots">
    {% for i in bmt_indices %}
    <span class="dot" data-index="{{ forloop.index0 }}"></span>
    {% endfor %}
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
  height: 520px;
  background: #111;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-slide img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
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
