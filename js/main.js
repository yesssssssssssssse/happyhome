/* HappyHome taplink — без зависимостей */
(function () {
  'use strict';
  if (/static/.test(location.hash)) document.documentElement.classList.add('no-js');
  var m = location.hash.match(/lang=(ru|kk)/);
  var WA_PHONE = '77771512313'; // международный формат без «+»

  /* ---------- i18n ---------- */
  var KK = {
    skip: 'Мазмұнға өту',
    chip1: 'Бу бактериялардың 99%-ын жояды',
    chip2: 'Өз құралдарымыз бен заттарымыз',
    chip3: '20+ адамнан тұратын команда',
    eyebrow: 'Клининг • Ақтөбе',
    hero_h1: '<span class="mark">Жеңіл</span> тыныс алатын үй',
    hero_lead: 'Пәтер, үй және коммерциялық нысандарды тазалау, жиһазды химиялық тазалау және үй көмекшісі. Өз құралдарымызбен және қауіпсіз заттармен келеміз.',
    founder_role: 'HappyHome негізін қалаушы',
    cta_order: 'Тапсырыс беру',
    cta_call: 'Қоңырау', founder_name: 'Әйгерім',
    l_call: 'Қоңырау шалу',
    l_2gis: 'Біз 2GIS-те',
    l_2gis_s: 'Пікірлер мен рейтинг · Ақтөбе',
    why_h: 'Неге бізді <span class="mark">таңдайды</span>',
    why1_t: 'Кәсіби техника',
    why1_p: 'Kärcher SC 4 бу тазартқыштары мен жуғыш шаңсорғыштар — барлық құралды өзіміз әкелеміз.',
    why2_t: 'Балаларға қауіпсіз',
    why2_p: 'Kärcher, Grass, Amway, Buzil гипоаллергенді заттары — химияның өткір иісінсіз.',
    why3_t: 'Тұрақты команда',
    why3_p: 'Кездейсоқ адамдар емес: лайықты жалақы алатын және әр шаршы метрге жауап беретін команда.',
    why4_t: 'Сапа бақылауы',
    why4_p: 'Негізін қалаушы жұмысты сізбен бірге өзі тексеріп, қабылдайды.',
    svc_h: 'Қызметтер <span class="mark">мен бағалар</span>',
    svc_sub: 'Бағалар біздің прайстан алынған. Нақты бағаны сипаттама немесе фото бойынша растаймыз.',
    pr_h: 'Прайс-<span class="mark">парақтар</span>',
    pr_sub: 'Жанына қарай сырғытыңыз, толық экранда ашу үшін басыңыз.',
    s1_t: 'Ылғалды тазалау', s1_m: 'Орташа 4–5 сағат',
    s1_l: ['Барлық беттердің шаңы, айналар мен шынылар', 'Терезе алды, есіктер, тұтқалар, ажыратқыштар мен розеткалар', 'Едендер мен плинтустар, кілемдерді шаңсорғышпен тазалау', 'Ас үй: плита, үстел беті, техниканың сырты, раковина', 'Санузел: сантехника, айналар, шкафтардың сырты, еден', '5 кг-ға дейін қоқысты шығарамыз'],
    s2_t: 'Бас тазалау', s2_m: 'Орташа 6–8 сағат · терең дезинфекцияға арналған бу тазартқыш',
    s2_l: ['Қабырға, жиһаз, техника және кондиционер шаңы', 'Терезелер, жақтаулар, терезе алды, батареялар, люстралар', 'Жұмсақ жиһаз, матрас және кілемді құрғақ тазалау', 'Ас үй: гарнитур, фартук, сорғыш, плита', 'Санузел: плитка, сантехниканы дезинфекциялау', '10 кг-ға дейін қоқысты шығарамыз'],
    s3_t: 'Жөндеуден кейін', s3_m: 'Орташа 6–8 сағат',
    s3_l: ['Төбе, қабырға, еден мен жиһаздағы құрылыс шаңы', 'Терезелер, витраждар мен қалқалар екі жағынан', 'Бояу, грунтовка, көбік, цемент және скотч іздері', 'Шкафтардың, ас үй гарнитуры мен техниканың іші', 'Плитканы терең тазалау, металды жылтырату'],
    s4_t: 'Жиһазды химиялық тазалау', s4_p: 'диван 10 000 ₸-ден',
    p_sofa2: 'Екі орындық диван', p_sofa3: 'Үш орындық диван', p_sofa4: 'Төрт орындық диван', p_sofa5: 'Бес орындық диван',
    p_arm: 'Кресло', p_pouf: 'Пуфик', p_mat1: 'Балалар матрасы', p_mat2: 'Екі орындық матрас',
    p_ch1: 'Арқасыз орындық', p_ch2: 'Арқалы орындық', p_ch3: 'Үлкен орындық', p_pil: 'Кіші / үлкен жастық',
    from: 'бастап',
    s5_t: 'Үй көмекшісі', s5_p: '140 000 ₸-ден', as_h: 'Үй көмекшісі <span class="mark">абонементі</span>', as_sub: 'Абонемент: жеке көмекші кесте бойынша келіп, үй шаруасын бақылауға алады.', as1_b: 'Аптасына 1 рет', as1_t: 'Айына 4 келу', as2_b: 'Аптасына 2 рет', as2_t: 'Айына 8 келу', as_l1: ['Тазалау, кір жуу және үтіктеу','Үй әрқашан ретті'], as_l2: ['Тазалау, кір жуу және үтіктеу','Үй әрқашан ретті'], as_btn: 'WhatsApp-қа жазу', as_btn2: 'WhatsApp-қа жазу', s5_m: 'Аптасына 1–2 рет келетін жеке көмекші',
    s5_l: ['Тазалау, кір жуу және үтіктеу — сіздің қатысуыңызсыз', 'Үй әрқашан ретті, ал сізде өзіңізге уақыт бар'],
    s6_t: 'Коммерция және B2B', s6_p: 'жеке есеп',
    s6_l: ['СО, кеңсе, кафе және мейрамханаларды тазалау және химиялық тазалау', 'Күндізгі және түнгі ауысым', 'Техникалық персоналды аутсорсингке беру'],
    ex_h: 'Қосымша', ex1: 'Құрғақ тұман — иіс, күйік', ex2: 'Озондау', ex3: 'Шыны-керамикалық плиталарды жылтырату',
    rent_h: 'Жабдықты жалға беру — тәулігіне 10 000 ₸-ден',
    r1: 'Жиһаз бен кілемге арналған жуғыш шаңсорғыш (+ сыйлыққа зат)', r2: 'Терезе жуатын робот (+ шыныға арналған зат)', r3: 'Бу тазартқыш', r4: 'Құрғақ қоқыс пен суға арналған шаңсорғыш',
    calc_h: 'Бағаны <span class="mark mark--light">есептеу</span>',
    c_place: 'Нысан', c_flat: 'Пәтер', c_house: 'Үй', c_office: 'Коммерция', c_type: 'Тазалау түрі', c_area: 'Ауданы, м²',
    c_approx: 'Шамамен', c_note: 'Екінші ас үй мен қосымша санузелдер — бөлек', c_send: 'Есепті WhatsApp-қа жіберу',
    c_ind: 'Жеке есептеледі', c_ind_note: 'Коммерциялық нысандар жеке есептеледі — WhatsApp-қа жазыңыз',
    about_h: 'Сәлем, мен <span class="mark">Әйгерім</span>',
    about_p1: 'Мен анамын, жармын және бұрынғы үй шаруасындағы әйелмін. Отбасымызда ерекше бала дүниеге келгенде, қарапайым жұмысқа шыға алмайтынымды түсіндім — өзімнің ісімді құру керек болды.',
    about_p2: 'Блог, жобалар жүргіздім және ештеңеге уақыт жетпейтінін үнемі сездім. Кейде көмекші келіп, үйді жинап кетсе, мен демалып алсам деп армандадым.',
    about_p3: 'Осылай аналар мен клинингті байланыстыру арманы туды: үйді асықпай, жан-тәнімен және сүйіспеншілікпен тазалаудың маңызын түсінетін аналар жұмыс істейтін команда.',
    about_q: 'Енді мен әйелдерге ең қымбат нәрсені — отбасы мен өзіне арналған уақытты қайтаруға көмектесемін.',
    how_h: 'Біз қалай <span class="mark">жұмыс істейміз</span>',
    st1_t: 'Өтінім', st1_p: 'WhatsApp-қа жазасыз: мекенжай, аудан, тазалау түрі, фото да болады.',
    st2_t: 'Есептеу', st2_p: 'Бағаны м² прайсы бойынша есептеп, ыңғайлы уақытты келісеміз.',
    st3_t: 'Келу', st3_p: 'Команда өз жабдығымен, шүберектерімен және заттарымен келеді.',
    st4_t: 'Нәтиже', st4_p: 'Әр бұрышты тексеріп, жұмысты сізбен бірге қабылдаймыз.',
    ba_h: 'Дейін және <span class="mark">кейін</span>', before: 'Дейін', after: 'Кейін',
    ba_more: 'Көбірек жұмыстар — Instagram-дағы «ДО/ПОСЛЕ» хайлайтында',
    promo_h: 'Сыйлықтар <span class="mark">мен бонустар</span>',
    pr1_t: 'Сыйлық сертификаты', pr1_p: 'Жақындарыңызға таза үй мен бос күн сыйлаңыз. Номиналы мен рәсімдеуі — WhatsApp арқылы.',
    pr2_t: '«Үй көмекшісі» абонементі', pr2_p: 'Көмекші аптасына 1–2 рет кесте бойынша келіп, үй шаруасын бақылауға алады.',
    pr_btn: 'Толығырақ →',
    rev_h: 'Клиенттердің <span class="mark">пікірлері</span>', rev_rating: '2GIS-те 5-тен 5 баға',
    rev_client: 'Клиент', rev_sofa: 'Instagram · диванды химиялық тазалау', rev_assist: 'Instagram · үй көмекшісі', swipe: 'Сырғытыңыз →',
    faq_h: 'Жиі қойылатын <span class="mark">сұрақтар</span>',
    q1: 'Неге басқаларға қарағанда қымбатырақ?', a1: 'Біз ең төменгі бағамен емес, нәтижемен бәсекелесеміз. Бізде тұрақты команда, кәсіби жабдық және сенімді заттар бар. Арзан — екі рет қайта істеу, сапалы — бір рет және ұзаққа істеу.',
    q2: 'Тазалауға бірдеңе сатып алу керек пе?', a2: 'Жоқ. Барлық құрал-жабдық, техника мен заттарды өзімізбен әкелеміз — уайымдамаңыз.',
    q3: 'Тазалау қанша уақытқа созылады?', a3: 'Ылғалды тазалау — орташа 4–5 сағат, бас тазалау мен жөндеуден кейінгі тазалау — 6–8 сағат. Нақты уақыт аудан мен нысанның жағдайына байланысты.',
    q4: 'Балаларға, аллергиясы барларға және жануарларға қауіпсіз бе?', a4: 'Иә. Kärcher SC 4 бу тазартқыштары химиясыз микробтар мен бактериялардың 99%-ына дейін жояды, ал заттарымыз гипоаллергенді. Сұраныс бойынша — озондау және құрғақ тұман.',
    q5: 'Кеңсе, кафе және СО тазалайсыздар ма?', a5: 'Иә: сауда нысандарын, кафе мен мейрамханаларды күндізгі немесе түнгі ауысымда тазалаймыз, техникалық персоналды аутсорсингке де береміз. Бағасы жеке есептеледі.',
    q6: '«Үй көмекшісі» дегеніміз не?', a6: 'Бұл аптасына 1–2 рет кесте бойынша келетін жеке көмекші: тазалау, кір жуу және үтіктеу. Абонементпен рәсімдеу ыңғайлы.',
    final_h: 'Бос күніңізді қайтаруға дайынсыз ба?', final_p: 'Бізге жазыңыз — бағасын есептеп, ыңғайлы уақытты таңдаймыз.',
    ct_phone: 'Телефон және WhatsApp', ct_city: 'Қала', ct_city_v: 'Ақтөбе', ct_addr: 'Мекенжай', ct_addr_v: 'Марат Оспанов к-сі, 56 (домофон 43)', ct_hours: 'Жұмыс кестесі', ct_hours_v: 'WhatsApp арқылы нақтылаңыз',
    ft: 'Ақтөбедегі клининг', fab: 'WhatsApp-қа жазу'
  };
  var RU = { c_ind: 'Рассчитывается индивидуально', c_ind_note: 'Коммерческие помещения считаем индивидуально — напишите в WhatsApp' };

  var WA_TEXT = {
    ru: {
      order: 'Здравствуйте! Хочу заказать уборку. Пишу с сайта HappyHome.',
      hello: 'Здравствуйте! Пишу с сайта HappyHome, есть вопрос.',
      gift: 'Здравствуйте! Интересует подарочный сертификат HappyHome.',
      assistant: 'Здравствуйте! Интересует абонемент «Ассистент по дому».',
      plan4: 'Здравствуйте! Интересует помощница по дому: 4 посещения в месяц (1 раз в неделю) — 140 000 ₸.',
      plan8: 'Здравствуйте! Интересует помощница по дому: 8 посещений в месяц (2 раза в неделю) — 280 000 ₸.',
      calc: function (d) { return 'Здравствуйте! Рассчитал(а) стоимость на сайте HappyHome:\n• Помещение: ' + d.place + '\n• Уборка: ' + d.type + '\n• Площадь: ' + d.area + ' м²\n• Ориентировочно: ' + d.sum + '\nПодскажите, когда можно записаться?'; }
    },
    kk: {
      order: 'Сәлеметсіз бе! Тазалауға тапсырыс бергім келеді. HappyHome сайтынан жазып отырмын.',
      hello: 'Сәлеметсіз бе! HappyHome сайтынан жазып отырмын, сұрағым бар.',
      gift: 'Сәлеметсіз бе! HappyHome сыйлық сертификаты қызықтырады.',
      assistant: 'Сәлеметсіз бе! «Үй көмекшісі» абонементі қызықтырады.',
      plan4: 'Сәлеметсіз бе! Үй көмекшісі қызықтырады: айына 4 келу (аптасына 1 рет) — 140 000 ₸.',
      plan8: 'Сәлеметсіз бе! Үй көмекшісі қызықтырады: айына 8 келу (аптасына 2 рет) — 280 000 ₸.',
      calc: function (d) { return 'Сәлеметсіз бе! HappyHome сайтында бағаны есептедім:\n• Нысан: ' + d.place + '\n• Тазалау: ' + d.type + '\n• Ауданы: ' + d.area + ' м²\n• Шамамен: ' + d.sum + '\nҚашан жазылуға болады?'; }
    }
  };

  var lang = 'ru';
  var store = {};
  if (m) { lang = m[1]; } else try { lang = localStorage.getItem('hh_lang') || (navigator.language || '').slice(0, 2) === 'kk' && 'kk' || 'ru'; } catch (e) {}

  function snapshotRu() {
    document.querySelectorAll('[data-i18n],[data-i18n-html],[data-i18n-list]').forEach(function (el) {
      if (el.hasAttribute('data-i18n-list')) {
        store[el.getAttribute('data-i18n-list')] = [].map.call(el.querySelectorAll('li'), function (li) { return li.textContent; });
      } else if (el.hasAttribute('data-i18n-html')) {
        store[el.getAttribute('data-i18n-html')] = el.innerHTML;
      } else if (!(el.getAttribute('data-i18n') in store)) {
        store[el.getAttribute('data-i18n')] = el.textContent;
      }
    });
    Object.keys(RU).forEach(function (k) { store[k] = RU[k]; });
  }
  function t(k) { return (lang === 'kk' ? KK[k] : store[k]) || store[k] || k; }

  function applyLang() {
    document.documentElement.lang = lang === 'kk' ? 'kk' : 'ru';
    document.querySelectorAll('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) { el.innerHTML = t(el.getAttribute('data-i18n-html')); });
    document.querySelectorAll('[data-i18n-list]').forEach(function (el) {
      var arr = t(el.getAttribute('data-i18n-list'));
      if (Array.isArray(arr)) el.innerHTML = arr.map(function (s) { return '<li>' + s + '</li>'; }).join('');
    });
    document.querySelectorAll('.lang__btn').forEach(function (b) {
      var on = b.getAttribute('data-lang') === lang;
      b.classList.toggle('is-active', on); b.setAttribute('aria-pressed', on);
    });
    updateWa(); calc();
  }

  /* ---------- WhatsApp ---------- */
  function waUrl(text) { return 'https://wa.me/' + WA_PHONE + '?text=' + encodeURIComponent(text); }
  function updateWa() {
    document.querySelectorAll('.js-wa').forEach(function (a) {
      var key = a.getAttribute('data-wa') || 'hello';
      if (key === 'calc') return;
      a.href = waUrl(WA_TEXT[lang][key]);
    });
  }

  /* ---------- Калькулятор (тарифы из хайлайта «Прайс», ₸/м²) ---------- */
  var RATES = { regular: [300, 400], general: [700, 900], renovation: [800, 1500] };
  var form = document.getElementById('calcForm');
  var range = document.getElementById('areaRange');
  var num = document.getElementById('area');
  var sumEl = document.getElementById('calcSum');
  var noteEl = document.getElementById('calcNote');
  var calcBtn = document.querySelector('.js-wa[data-wa="calc"]');
  function fmt(n) { return Math.round(n / 100) * 100 >= 0 ? (Math.round(n / 100) * 100).toLocaleString('ru-RU').replace(/,/g, ' ') : n; }
  function labelOf(name) {
    var inp = form.querySelector('input[name="' + name + '"]:checked');
    return inp ? inp.nextElementSibling.textContent.trim() : '';
  }
  function calc() {
    if (!form) return;
    var place = form.querySelector('input[name="place"]:checked').value;
    var type = form.querySelector('input[name="type"]:checked').value;
    var area = Math.max(10, Math.min(2000, parseInt(num.value, 10) || 0));
    var sum;
    if (place === 'office') {
      sum = t('c_ind'); sumEl.textContent = sum; noteEl.textContent = t('c_ind_note');
    } else {
      var r = RATES[type];
      sum = fmt(area * r[0]) + ' – ' + fmt(area * r[1]) + ' ₸';
      sumEl.textContent = sum; noteEl.textContent = t('c_note');
    }
    if (calcBtn) calcBtn.href = waUrl(WA_TEXT[lang].calc({ place: labelOf('place'), type: labelOf('type'), area: area, sum: sum }));
  }
  if (form) {
    form.addEventListener('change', calc);
    range.addEventListener('input', function () { num.value = range.value; calc(); });
    num.addEventListener('input', function () { range.value = Math.min(300, num.value || 20); calc(); });
    form.addEventListener('submit', function (e) { e.preventDefault(); });
  }

  /* ---------- До / после ---------- */
  document.querySelectorAll('.ba').forEach(function (ba) {
    var r = ba.querySelector('.ba__range');
    r.addEventListener('input', function () { ba.style.setProperty('--pos', r.value + '%'); });
  });

  /* ---------- Появление при скролле ---------- */
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  } else { els.forEach(function (el) { el.classList.add('in'); }); }

  /* ---------- Плавающая кнопка: показываем после hero ---------- */
  var fab = document.querySelector('.fab');
  var hero = document.querySelector('.hero');
  if (fab && hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (e) { fab.classList.toggle('show', !e[0].isIntersecting); }, { threshold: 0.15 }).observe(hero);
  } else if (fab) { fab.classList.add('show'); }


  /* ---------- Язык ---------- */
  snapshotRu();
  document.querySelectorAll('.lang__btn').forEach(function (b) {
    b.addEventListener('click', function () {
      lang = b.getAttribute('data-lang');
      try { localStorage.setItem('hh_lang', lang); } catch (e) {}
      applyLang();
    });
  });
  applyLang();
  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
})();

/* Прайс-листы: просмотр на весь экран, листание стрелками, свайпом и клавишами */
(function () {
  var dlg = document.getElementById('prDlg'); if (!dlg || !dlg.showModal) return;
  var img = document.getElementById('prImg');
  var items = Array.prototype.slice.call(document.querySelectorAll('.pr__item')), cur = 0;
  function show(i) { cur = (i + items.length) % items.length; img.src = items[cur].getAttribute('data-full'); img.alt = items[cur].querySelector('img').alt; }
  items.forEach(function (a, i) { a.addEventListener('click', function (e) { e.preventDefault(); show(i); dlg.showModal(); }); });
  dlg.querySelector('.pr__close').addEventListener('click', function () { dlg.close(); });
  dlg.querySelector('.pr__nav--prev').addEventListener('click', function () { show(cur - 1); });
  dlg.querySelector('.pr__nav--next').addEventListener('click', function () { show(cur + 1); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener('keydown', function (e) { if (e.key === 'ArrowLeft') show(cur - 1); if (e.key === 'ArrowRight') show(cur + 1); });
  var x0 = null;
  dlg.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  dlg.addEventListener('touchend', function (e) { if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 50) show(cur + (dx < 0 ? 1 : -1)); x0 = null; });
})();
