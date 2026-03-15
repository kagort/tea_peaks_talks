---
layout: post
title: Гора, два пенса и святой
date: 2026-03-07 16:03:10 +03:00
categories:
  - заметки
  - кабинетный_альпинизм
  - горы
---

Меня сразу захватил этот профиль Елизаветы II, это монументальное спокойствие  комбайнёра, окидывающего взглядом  убранные поля.  Автор дизайна  - британский скульптор Ян Ранк-Бродлей оставил свои инициалы под портретом. Так что есть кого благодарить :)) 

---


Пришло время добавить к моим увлечениям горами элементы кабинетного альпинизма. Я снова вернулся к коллекционированию монет. Когда-то в детстве  стихийно собирал юбилейные рубли и монеты дальних стран.  "Дальние страны" всегда беспокоила. Об этом, наверное, ещё будут  заметки.

Итак, на сей раз было решено раскрыть тему гор через нумизматику. Первая покупка превратилась в курьёз. Об этом и пойдет речь.

Как современный человек совершает покупки? 
Ответ: открывает приложение, пишет в строке поиска свои пожелания, и -  вуаля! Через пару дней в пункте выдачи заказов уже вас ждёт заветная вещица. Я полез на сайт коллекционеров, вбил "монеты с горами" и тут же попал под очарование профиля английской королевы и загадочного описания  "2 пенса, домик в горах".  
Забрал монету, стал разбираться, что за загадочный домик на скалах. 
Воображение рисовало место в шотландских горах для уединённых молитв и покаянных бдений членов королевской семьи.

Оказалось, что это никакие не горы. Это скит святого Святого Хельера на острове Джерси, который построен на скале, возвышающейся над уровнем моря от силы метров на пятнадцать.  Во время отлива можно до скалы добраться по морскому дну пешком.  И, вообще, монета не британская, а джерсийская. Остров Джерси  - это коронное владение Британской короны (bailiwick - область юрисдикции бейлифа, управляемая лейтенантом-губернатором, которого назначает лично монарх). Остров находится в проливе Ла-Манш, и его  105 тыс. жителей говорят на джерсийском диалекте нормандского языка, английском и французском  и не подчиняются парламентским законам Великобритании. 

Святой Хельер - христианский миссионер и  аскет (VI в.) , подвизался в келье на скале как раз на острове Джерси.  Легенда гласит, что он выдолбил себе ложе прям в скале и прожил в этом углублении около 15 лет в посте и молитве. Он принял мученическую смерть от  топоров морских разбойников, к которым вышел с проповедью.  Ирония судьбы в том, что топоры эти теперь являются символом столицы острова - города Сент-Хелиер. А сама хижина красуется на монете, отчеканенной потомками тех самых разбойников. (Хельера зарубили саксонские пираты - одни из прародителей современных англичан).  

В общем, моя первая "монета с горами" отсылает не к реальным горам, а к высоте духовного подвига древнего святого. По-своему неплохое начало. 

<!-- Галерея изображений -->
<div class="gallery-container">
  <div class="gallery-wrapper">
    <div class="gallery-slides">
      {% for i in (0..7) %}
      <div class="gallery-slide">
        <img src="{{ site.baseurl }}/assets/images/posts/bz-{{ i }}.JPG" alt="Фото {{ i }}" loading="lazy">
      </div>
      {% endfor %}
    </div>
    <button class="gallery-prev">❮</button>
    <button class="gallery-next">❯</button>
  </div>
  <div class="gallery-dots">
    {% for i in (0..7) %}
    <span class="dot" data-index="{{ i }}"></span>
    {% endfor %}
  </div>
</div>

<!-- остальной код CSS и JS без изменений -->

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
    
    // Update buttons
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === totalSlides - 1;
    
    // Update dots
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateGallery();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
      updateGallery();
    }
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateGallery();
    });
  });

  updateGallery();
});
</script>
