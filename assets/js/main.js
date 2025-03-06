document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM полностью загружен');

    // Проверка наличия ключевых элементов
    const burger = document.querySelector('.header__burger');
    const mobileMenu = document.querySelector('.mobile-menu');

    console.log('Бургер-меню найдено:', burger ? 'Да' : 'Нет');
    console.log('Мобильное меню найдено:', mobileMenu ? 'Да' : 'Нет');

    if (burger) {
        console.log('Классы бургер-меню:', burger.className);
    }

    if (mobileMenu) {
        console.log('Классы мобильного меню:', mobileMenu.className);
    }

    // Инициализация переводчика при загрузке страницы
    initTranslator();

    // Слайдер для promo в hero секции
    const promoSlider = {
        slidesContainer: document.querySelector('.promo-slider__slides'),
        slides: document.querySelectorAll('.promo-slider__slide'),
        prevBtn: document.querySelector('.promo-slider__nav-prev'),
        nextBtn: document.querySelector('.promo-slider__nav-next'),
        currentIndex: 1, // Начинаем с центрального слайда
        totalSlides: document.querySelectorAll('.promo-slider__slide').length,

        init: function () {
            if (!this.slidesContainer) return;

            // Инициализация слайдера
            this.updateClasses();
            this.bindEvents();
        },

        bindEvents: function () {
            // Привязка событий
            this.prevBtn.addEventListener('click', () => {
                this.goToPrev();
            });

            this.nextBtn.addEventListener('click', () => {
                this.goToNext();
            });

            // Добавляем автоматическую адаптацию при изменении размера окна
            window.addEventListener('resize', () => {
                this.updateClasses();
            });
        },

        goToPrev: function () {
            this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
            this.updateClasses();
        },

        goToNext: function () {
            this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
            this.updateClasses();
        },

        updateClasses: function () {
            // Обновляем классы для всех слайдов
            this.slides.forEach((slide, index) => {
                // Сначала удаляем все классы состояния
                slide.classList.remove('promo-slider__slide--active', 'promo-slider__slide--prev', 'promo-slider__slide--next', 'promo-slider__slide--hidden');

                // Добавляем соответствующий класс в зависимости от положения
                if (index === this.currentIndex) {
                    slide.classList.add('promo-slider__slide--active');
                } else if (index === this.getPrevIndex()) {
                    slide.classList.add('promo-slider__slide--prev');
                } else if (index === this.getNextIndex()) {
                    slide.classList.add('promo-slider__slide--next');
                } else {
                    slide.classList.add('promo-slider__slide--hidden');
                }
            });
        },

        getPrevIndex: function () {
            return (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
        },

        getNextIndex: function () {
            return (this.currentIndex + 1) % this.totalSlides;
        }
    };

    // Инициализация слайдера promo
    promoSlider.init();

    // Слайдер для promotions
    const promotionsSlider = {
        slidesContainer: document.querySelector('.promotions__slider-slides'),
        slides: document.querySelectorAll('.promotions__slider-slide'),
        prevBtn: document.querySelector('.promotions__nav-prev'),
        nextBtn: document.querySelector('.promotions__nav-next'),
        currentIndex: 1, // Начинаем с центрального слайда (MTT LEADERBOARD)
        totalSlides: document.querySelectorAll('.promotions__slider-slide').length,

        init: function () {
            if (!this.slidesContainer) return;

            // Инициализация слайдера
            this.updateClasses();
            this.bindEvents();
        },

        bindEvents: function () {
            // Привязка событий
            this.prevBtn.addEventListener('click', () => {
                this.goToPrev();
            });

            this.nextBtn.addEventListener('click', () => {
                this.goToNext();
            });

            // Добавляем автоматическую адаптацию при изменении размера окна
            window.addEventListener('resize', () => {
                this.updateClasses();
            });
        },

        goToPrev: function () {
            this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
            this.updateClasses();
        },

        goToNext: function () {
            this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
            this.updateClasses();
        },

        updateClasses: function () {
            // Обновляем классы для всех слайдов
            this.slides.forEach((slide, index) => {
                // Сначала удаляем все классы состояния
                slide.classList.remove('promotions__slider-slide--active', 'promotions__slider-slide--prev', 'promotions__slider-slide--next', 'promotions__slider-slide--hidden');

                // Добавляем соответствующий класс в зависимости от положения
                if (index === this.currentIndex) {
                    slide.classList.add('promotions__slider-slide--active');
                } else if (index === this.getPrevIndex()) {
                    slide.classList.add('promotions__slider-slide--prev');
                } else if (index === this.getNextIndex()) {
                    slide.classList.add('promotions__slider-slide--next');
                } else {
                    slide.classList.add('promotions__slider-slide--hidden');
                }
            });
        },

        getPrevIndex: function () {
            return (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
        },

        getNextIndex: function () {
            return (this.currentIndex + 1) % this.totalSlides;
        }
    };

    // Инициализация слайдера promotions
    promotionsSlider.init();

    // Слайдер community
    const communitySlider = {
        videos: [
            {
                id: 'VIDEO_ID_1',
                title: 'KKPOKER LIVE TOKYO 2022 SUM...'
            },
            {
                id: 'VIDEO_ID_2',
                title: 'KKPOKER CHAMPIONSHIP 2023'
            },
            {
                id: 'VIDEO_ID_3',
                title: 'KKPOKER WORLD SERIES'
            }
        ],
        container: document.querySelector('.community__video-container'),
        navPrev: document.querySelector('.community__nav-prev'),
        navNext: document.querySelector('.community__nav-next'),
        currentIndex: 0,

        init: function () {
            if (!this.container) return;
            this.bindEvents();
            this.updateVideo();
        },

        bindEvents: function () {
            if (this.navPrev) {
                this.navPrev.addEventListener('click', this.prevVideo.bind(this));
            }
            if (this.navNext) {
                this.navNext.addEventListener('click', this.nextVideo.bind(this));
            }
        },

        updateVideo: function () {
            const video = this.videos[this.currentIndex];
            if (this.container && video) {
                this.container.innerHTML = `
                    <iframe 
                        src="https://www.youtube.com/embed/${video.id}" 
                        title="${video.title}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                `;
            }
        },

        prevVideo: function () {
            this.currentIndex = (this.currentIndex - 1 + this.videos.length) % this.videos.length;
            this.updateVideo();
        },

        nextVideo: function () {
            this.currentIndex = (this.currentIndex + 1) % this.videos.length;
            this.updateVideo();
        }
    };

    // Инициализация слайдера community
    communitySlider.init();

    // Инициализация мобильного меню
    initMobileMenu();

    // Добавляем выпадающие подменю для мобильной версии
    initMobileSubmenu();

    // Инициализация языкового меню в хедере
    initHeaderLanguageMenu();

    // Добавляем обработчики ошибок и событий для мониторинга состояния переводчика
    setupTranslatorMonitoring();

    // Проверяем сохраненный язык и применяем его при загрузке страницы
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        setTimeout(() => {
            window.changeLanguage(savedLanguage);
        }, 500);
    }

    // Инициализация FAQ
    initFAQ();

    // Инициализация адаптивных таблиц
    initResponsiveTables();
});

// Функция инициализации мобильного меню
function initMobileMenu() {
    console.log('Инициализация мобильного меню...');
    const body = document.querySelector('body');
    const burger = document.querySelector('.header__burger');
    const mobileMenu = document.querySelector('.mobile-menu');

    // Проверяем наличие основных элементов
    if (!burger) {
        console.warn('Кнопка бургер-меню не найдена');
        return;
    }

    if (!mobileMenu) {
        console.warn('Мобильное меню не найдено');
        return;
    }

    console.log('Основные элементы мобильного меню найдены');

    const mobileMenuClose = document.querySelector('.mobile-menu__close');
    const mobileMenuOverlay = document.querySelector('.mobile-menu__overlay');
    const mobileLanguageToggle = document.querySelector('.mobile-menu__language');
    const mobileLanguageOptions = document.querySelector('.mobile-menu__language-options');
    const mobileLanguageLinks = document.querySelectorAll('.mobile-menu__language-option');

    // Открытие/закрытие мобильного меню
    burger.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Нажата кнопка бургер-меню');
        toggleMobileMenu();
    });

    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', function (e) {
            e.preventDefault();
            toggleMobileMenu();
        });
    } else {
        console.warn('Кнопка закрытия мобильного меню не найдена');
    }

    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', function (e) {
            e.preventDefault();
            toggleMobileMenu();
        });
    } else {
        console.warn('Оверлей мобильного меню не найден');
    }

    // Обработка переключения языкового меню в мобильной версии
    if (mobileLanguageToggle && mobileLanguageOptions) {
        mobileLanguageToggle.addEventListener('click', function (e) {
            e.preventDefault();
            mobileLanguageOptions.classList.toggle('active');
        });

        // Обработка выбора языка в мобильной версии
        mobileLanguageLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const language = this.textContent.trim();

                // Закрываем выпадающее меню с языками
                mobileLanguageOptions.classList.remove('active');

                // Применяем выбранный язык
                if (language === 'English') {
                    changeLanguage('en');
                } else if (language === 'Русский') {
                    changeLanguage('ru');
                }

                // Добавляем задержку перед закрытием мобильного меню
                setTimeout(() => {
                    toggleMobileMenu();
                }, 300);
            });
        });
    } else {
        console.warn('Элементы языкового меню в мобильной версии не найдены');
    }

    // Функция переключения состояния меню
    function toggleMobileMenu() {
        console.log('Переключение мобильного меню');
        burger.classList.toggle('active');
        mobileMenu.classList.toggle('active');

        // Запись в консоль текущего состояния меню для отладки
        console.log('Состояние мобильного меню:', mobileMenu.classList.contains('active') ? 'активно' : 'неактивно');

        // Блокируем/разблокируем скролл body
        if (mobileMenu.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    }
}

// Функция инициализации языкового меню в хедере
function initHeaderLanguageMenu() {
    const headerLanguageOptions = document.querySelectorAll('.header__language-option');

    if (!headerLanguageOptions.length) return;

    headerLanguageOptions.forEach(option => {
        option.addEventListener('click', function (e) {
            e.preventDefault();
            const language = this.textContent.trim();

            if (language === 'English') {
                changeLanguage('en');
            } else if (language === 'Русский') {
                changeLanguage('ru');
            }
        });
    });

    // Глобальная функция для переключения языка (доступна как из хедера, так и из мобильного меню)
    window.changeLanguage = function (langCode) {
        console.log('Вызвана функция changeLanguage с кодом языка:', langCode);

        // Сохраняем выбранный язык в localStorage
        localStorage.setItem('selectedLanguage', langCode);

        // Сначала переводим интерфейс вручную (это сработает сразу)
        translateInterface(langCode);

        // Проверяем режим работы переводчика
        if (window.translatorFallbackMode) {
            console.log('Переводчик в режиме отказоустойчивости, используется только ручной перевод');
            return;
        }

        // Проверяем, загружен ли скрипт Google Translate
        if (typeof google === 'undefined' || typeof google.translate === 'undefined') {
            console.log('Google Translate API не загружен, загружаю...');

            // Создаем div для Google Translate если его еще нет
            if (!document.getElementById('google_translate_element')) {
                console.log('Создаю элемент google_translate_element');
                const translateElement = document.createElement('div');
                translateElement.id = 'google_translate_element';
                translateElement.style.display = 'none';
                document.body.appendChild(translateElement);
            }

            // Устанавливаем флаг, что загрузка началась
            window.translateScriptLoading = true;

            // Загружаем скрипт Google Translate API
            const googleTranslateScript = document.createElement('script');
            googleTranslateScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';

            // Добавляем обработчики успешной загрузки и ошибки
            googleTranslateScript.onload = function () {
                console.log('Google Translate API скрипт успешно загружен');
                window.translateScriptLoading = false;
                window.translateScriptLoaded = true;
            };

            googleTranslateScript.onerror = function () {
                console.error('Ошибка загрузки Google Translate API');
                console.log('Используется только ручной перевод');
                window.translateScriptLoading = false;
                window.translatorFallbackMode = true;

                // Показываем сообщение об ошибке загрузки
                showTranslatorMessage('Произошла ошибка при загрузке переводчика. Используется только базовый перевод интерфейса.');
            };

            document.body.appendChild(googleTranslateScript);

            // Создаем глобальную функцию для инициализации Google Translate
            window.googleTranslateElementInit = function () {
                console.log('Инициализация Google Translate Element');
                try {
                    new google.translate.TranslateElement({
                        pageLanguage: 'en',
                        includedLanguages: 'en,ru',
                        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                        autoDisplay: false
                    }, 'google_translate_element');

                    // После загрузки скрипта устанавливаем выбранный язык
                    setTimeout(() => {
                        console.log('Устанавливаю язык после инициализации:', langCode);
                        setLanguage(langCode);
                    }, 1500); // Увеличиваем время ожидания
                } catch (error) {
                    console.error('Ошибка при инициализации Google Translate:', error);
                    console.log('Используется только ручной перевод');
                    window.translatorFallbackMode = true;
                    showTranslatorMessage('Произошла ошибка при инициализации переводчика. Используется только базовый перевод интерфейса.');
                }
            };
        } else {
            console.log('Google Translate API уже загружен, устанавливаю язык');
            // Если скрипт уже загружен, просто устанавливаем язык
            setLanguage(langCode);
        }
    };

    // Глобальная функция для установки выбранного языка
    window.setLanguage = function (langCode) {
        console.log('Вызвана функция setLanguage с кодом языка:', langCode);

        // Максимальное количество попыток найти селектор
        const maxAttempts = 5;
        let attempts = 0;

        // Функция для проверки наличия селектора и установки языка
        function attemptSetLanguage() {
            attempts++;
            console.log(`Попытка #${attempts} найти селектор Google Translate`);

            try {
                // Используем API Google Translate для переключения языка
                const select = document.querySelector('.goog-te-combo');
                if (select) {
                    console.log('Найден селектор Google Translate, устанавливаю значение:', langCode);
                    select.value = langCode;

                    // Вызываем событие change для активации перевода
                    if ("createEvent" in document) {
                        const evt = document.createEvent("HTMLEvents");
                        evt.initEvent("change", false, true);
                        select.dispatchEvent(evt);
                        console.log('Событие change успешно отправлено');
                        return true; // Успешно установлен язык
                    } else {
                        select.fireEvent("onchange");
                        console.log('Событие onchange успешно отправлено (IE)');
                        return true; // Успешно установлен язык
                    }
                } else if (attempts < maxAttempts) {
                    console.log(`Селектор не найден, ожидание... (попытка ${attempts} из ${maxAttempts})`);
                    setTimeout(attemptSetLanguage, 500); // Пробуем снова через 500 мс
                    return false;
                } else {
                    console.error('Селектор Google Translate (.goog-te-combo) не найден после нескольких попыток');

                    // Проверяем, загружается ли скрипт в данный момент
                    if (window.translateScriptLoading) {
                        showTranslatorMessage('Переводчик еще загружается. Пожалуйста, подождите несколько секунд и попробуйте снова.');
                    } else {
                        showTranslatorMessage('Ошибка переключения языка: переводчик не загружен полностью. Попробуйте обновить страницу и попробовать снова.');
                    }
                    return false;
                }
            } catch (error) {
                console.error('Ошибка при установке языка:', error);

                if (attempts < maxAttempts) {
                    console.log(`Повторная попытка после ошибки... (попытка ${attempts} из ${maxAttempts})`);
                    setTimeout(attemptSetLanguage, 500);
                    return false;
                } else {
                    showTranslatorMessage('Ошибка при переключении языка: ' + error.message);
                    return false;
                }
            }
        }

        // Запускаем первую попытку
        attemptSetLanguage();
    };
}

// Добавляем словарь с переводами для ключевых элементов интерфейса
const translations = {
    'en': {
        'tournaments': 'Tournaments',
        'promotions': 'Promotions',
        'blog': 'Blog',
        'instant_rake': 'Instant rake',
        'language': 'Language',
        'download': 'Download',
        'browser_play': 'Browser play',
        'trending_promotions': 'TRENDING PROMOTIONS',
        'nuts_poker_news': 'NUTS POKER NEWS',
        'community': 'COMMUNITY',
        'download_nuts': 'DOWNLOAD NUTS POKER',
        'read_more': 'READ MORE',
        'watch_now': 'WATCH NOW',
        'made_for_mobile': 'Made for mobile faster, smoother, fresher than ever!',
        'made_for_you': 'NUTS POKER - MADE FOR YOU',
        'guaranteed_cashback': 'GUARANTEED CASHBACK',
        'cashback_text': 'Up to 50% Instant Rakeback can be collected after every game!',
        'global_players': 'GLOBAL PLAYERS',
        'ok_button': 'OK',
        'error_translator': 'Error switching language: translator not fully loaded. Please try again in a few seconds.',
        'try_again': 'Try again',
        'promotions_title': 'PROMOTIONS',
        'promotions_subtitle': 'Time for daily offers',
        'learn_more': 'Learn more'
    },
    'ru': {
        'tournaments': 'Турниры',
        'promotions': 'Акции',
        'blog': 'Блог',
        'instant_rake': 'Мгновенный рейкбек',
        'language': 'Язык',
        'download': 'Скачать',
        'browser_play': 'Играть в браузере',
        'trending_promotions': 'ПОПУЛЯРНЫЕ АКЦИИ',
        'nuts_poker_news': 'НОВОСТИ NUTS POKER',
        'community': 'СООБЩЕСТВО',
        'download_nuts': 'СКАЧАТЬ NUTS POKER',
        'read_more': 'ПОДРОБНЕЕ',
        'watch_now': 'СМОТРЕТЬ СЕЙЧАС',
        'made_for_mobile': 'Создан для мобильных устройств быстрее, плавнее, свежее, чем когда-либо!',
        'made_for_you': 'NUTS POKER - СОЗДАН ДЛЯ ВАС',
        'guaranteed_cashback': 'ГАРАНТИРОВАННЫЙ КЭШБЭК',
        'cashback_text': 'До 50% мгновенного рейкбека можно получить после каждой игры!',
        'global_players': 'ИГРОКИ СО ВСЕГО МИРА',
        'ok_button': 'ОК',
        'error_translator': 'Ошибка переключения языка: переводчик не загружен полностью. Попробуйте еще раз через несколько секунд.',
        'try_again': 'Попробовать снова',
        'promotions_title': 'АКЦИИ',
        'promotions_subtitle': 'Время ежедневных предложений',
        'learn_more': 'Подробнее'
    }
};

// Функция для ручного перевода элементов интерфейса
function translateInterface(langCode) {
    console.log('Перевод интерфейса на язык:', langCode);
    if (!translations[langCode]) {
        console.error('Переводы для языка', langCode, 'не найдены');
        return;
    }

    // Переводим элементы навигации в хедере
    document.querySelectorAll('.header__nav-item').forEach(item => {
        const key = item.textContent.toLowerCase().trim();
        if (key === 'tournaments') item.textContent = translations[langCode].tournaments;
        if (key === 'promotions') item.textContent = translations[langCode].promotions;
        if (key === 'blog') item.textContent = translations[langCode].blog;
    });

    // Переводим элементы в хедере
    document.querySelectorAll('.header__actions-item').forEach(item => {
        const key = item.textContent.toLowerCase().trim();
        if (key === 'instant rake') item.textContent = translations[langCode].instant_rake;
        if (key === 'download') item.textContent = translations[langCode].download;
        if (key === 'browser play') item.textContent = translations[langCode].browser_play;
        if (key === 'language') item.textContent = translations[langCode].language;
    });

    // Переводим элементы в выпадающем меню языков
    document.querySelectorAll('.header__language span').forEach(item => {
        if (item.textContent.toLowerCase().trim() === 'language') {
            item.textContent = translations[langCode].language;
        }
    });

    // Переводим элементы мобильного меню
    document.querySelectorAll('.mobile-menu__nav-item').forEach(item => {
        const key = item.textContent.toLowerCase().trim();
        if (key === 'tournaments') item.textContent = translations[langCode].tournaments;
        if (key === 'promotions') item.textContent = translations[langCode].promotions;
        if (key === 'blog') item.textContent = translations[langCode].blog;
        if (key === 'instant rake') item.textContent = translations[langCode].instant_rake;
        if (key === 'download') item.textContent = translations[langCode].download;
        if (key === 'browser play') item.textContent = translations[langCode].browser_play;
        if (key === 'language') item.textContent = translations[langCode].language;
    });

    // Переводим заголовок hero секции
    const heroTitle = document.querySelector('.hero__title');
    if (heroTitle) {
        if (langCode === 'ru') {
            heroTitle.innerHTML = `${translations[langCode].made_for_mobile.replace('Создан для мобильных устройств', 'Создан для <span>мобильных устройств</span>')}`;
        } else {
            heroTitle.innerHTML = `${translations[langCode].made_for_mobile.replace('Made for mobile', 'Made for <span>mobile</span>')}`;
        }
    }

    // Переводим заголовок блока features
    const featuresHeading = document.querySelector('.features__heading');
    if (featuresHeading) {
        featuresHeading.textContent = translations[langCode].made_for_you;
    }

    // Переводим карточки features
    document.querySelectorAll('.features__card-title').forEach(title => {
        const key = title.textContent.trim();
        if (key === 'GUARANTEED CASHBACK') title.textContent = translations[langCode].guaranteed_cashback;
        if (key === 'GLOBAL PLAYERS') title.textContent = translations[langCode].global_players;
    });

    document.querySelectorAll('.features__card-text').forEach(text => {
        if (text.textContent.includes('Up to 50% Instant Rakeback')) {
            text.textContent = translations[langCode].cashback_text;
        }
    });

    // Переводим заголовки секций
    const promotionsHeading = document.querySelector('.promotions__heading');
    if (promotionsHeading) {
        if (langCode === 'ru') {
            promotionsHeading.innerHTML = `${translations[langCode].trending_promotions.replace('ПОПУЛЯРНЫЕ', '<span>ПОПУЛЯРНЫЕ</span>')}`;
        } else {
            promotionsHeading.innerHTML = `${translations[langCode].trending_promotions.replace('TRENDING', '<span>TRENDING</span>')}`;
        }
    }

    const newsHeading = document.querySelector('.news__heading');
    if (newsHeading) {
        if (langCode === 'ru') {
            newsHeading.innerHTML = `${translations[langCode].nuts_poker_news.replace('НОВОСТИ', '<span>НОВОСТИ</span>')}`;
        } else {
            newsHeading.innerHTML = `${translations[langCode].nuts_poker_news.replace('NEWS', '<span>NEWS</span>')}`;
        }
    }

    const communityHeading = document.querySelector('.community__heading');
    if (communityHeading) {
        communityHeading.textContent = translations[langCode].community;
    }

    const downloadTitle = document.querySelector('.download__title');
    if (downloadTitle) {
        if (langCode === 'ru') {
            downloadTitle.innerHTML = translations[langCode].download_nuts.replace('СКАЧАТЬ', '<span>СКАЧАТЬ</span>');
        } else {
            downloadTitle.innerHTML = translations[langCode].download_nuts.replace('DOWNLOAD', '<span>DOWNLOAD</span>');
        }
    }

    // Переводим кнопки действий
    const readMoreLink = document.querySelector('.news__link');
    if (readMoreLink) {
        readMoreLink.textContent = translations[langCode].read_more;
    }

    const watchNowBtn = document.querySelector('.community__watch-btn');
    if (watchNowBtn) {
        watchNowBtn.textContent = translations[langCode].watch_now;
    }

    // Переводим сообщения об ошибках и кнопки в диалогах
    const okButtons = document.querySelectorAll('button, .btn').forEach(btn => {
        if (btn.textContent.trim() === 'OK') {
            btn.textContent = translations[langCode].ok_button;
        }
        if (btn.textContent.trim() === 'Try again') {
            btn.textContent = translations[langCode].try_again;
        }
    });

    // Переводим элементы страницы акций
    const promotionsTitle = document.querySelector('.promotions-header .page-header__title');
    if (promotionsTitle) {
        promotionsTitle.textContent = translations[langCode].promotions_title;
    }

    const promotionsSubtitle = document.querySelector('.promotions-header .page-header__subtitle');
    if (promotionsSubtitle) {
        promotionsSubtitle.textContent = translations[langCode].promotions_subtitle;
    }

    // Переводим кнопки "Learn more" на странице акций
    document.querySelectorAll('.promotion-card__link').forEach(link => {
        if (link.textContent.trim() === 'Learn more') {
            link.textContent = translations[langCode].learn_more;
        }
    });

    console.log('Интерфейс успешно переведен на:', langCode);
}

// Функция инициализации переводчика
function initTranslator() {
    console.log('Инициализация переводчика...');

    // Получаем язык браузера
    const browserLanguage = navigator.language || navigator.userLanguage;
    console.log('Язык браузера:', browserLanguage);

    // Определяем предпочтительный язык на основе языка браузера
    let preferredLanguage = 'en';
    if (browserLanguage.startsWith('ru')) {
        preferredLanguage = 'ru';
    }

    // Загружаем язык из localStorage или используем определенный из браузера
    const savedLanguage = localStorage.getItem('selectedLanguage');
    const defaultLanguage = preferredLanguage;
    const language = savedLanguage || defaultLanguage;

    console.log('Определен язык:', language);

    // Устанавливаем флаг режима отказоустойчивости для отслеживания состояния
    window.translatorFallbackMode = false;

    // Добавляем обработчик событий для случаев, когда Google Translate API блокируется
    window.addEventListener('error', function (e) {
        if (e.filename && e.filename.includes('translate_a/element.js')) {
            console.error('Ошибка при загрузке Google Translate API:', e.message);
            console.log('Используется только ручной перевод');
            window.translateScriptLoading = false;

            // Отмечаем, что скрипт не загружен и применяем ручной перевод
            window.translateScriptError = true;
            window.translatorFallbackMode = true;
            translateInterface(language);

            // Уведомляем пользователя
            setTimeout(() => {
                showTranslatorMessage('Внешний переводчик недоступен. Используется только базовый перевод интерфейса.');
            }, 1000);
        }
    }, true);

    // Устанавливаем таймер на проверку загрузки переводчика
    const translatorTimeout = setTimeout(() => {
        if (typeof google === 'undefined' || typeof google.translate === 'undefined') {
            console.warn('Переводчик Google не загружен после таймаута, используется ручной перевод');
            window.translateScriptLoading = false;
            window.translateScriptError = true;
            window.translatorFallbackMode = true;
            translateInterface(language);
        }
    }, 5000);

    // Применяем ручной перевод сразу, чтобы интерфейс был переведен вне зависимости от загрузки Google API
    translateInterface(language);

    // Если переводчик еще не загружен, запускаем процесс загрузки
    if (typeof google === 'undefined' || typeof google.translate === 'undefined') {
        if (!window.translateScriptLoading && !window.translateScriptLoaded) {
            console.log('Запускаю загрузку Google Translate API...');
            window.translateScriptLoading = true;

            // Создаем элемент для Google Translate если его нет
            if (!document.getElementById('google_translate_element')) {
                const translateElement = document.createElement('div');
                translateElement.id = 'google_translate_element';
                translateElement.style.display = 'none';
                document.body.appendChild(translateElement);
            }

            // Загружаем скрипт Google Translate
            const googleTranslateScript = document.createElement('script');
            googleTranslateScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';

            // Обработчики событий загрузки
            googleTranslateScript.onload = function () {
                console.log('Google Translate API успешно загружен');
                window.translateScriptLoading = false;
                window.translateScriptLoaded = true;
                clearTimeout(translatorTimeout);

                // Устанавливаем язык через короткую задержку
                setTimeout(() => {
                    if (typeof google !== 'undefined' && typeof google.translate !== 'undefined') {
                        setLanguage(language);
                    }
                }, 1000);
            };

            googleTranslateScript.onerror = function () {
                console.error('Ошибка загрузки Google Translate API');
                console.log('Используется только ручной перевод');
                window.translateScriptLoading = false;
                window.translateScriptError = true;
                window.translatorFallbackMode = true;
                clearTimeout(translatorTimeout);

                // Показываем сообщение об ошибке загрузки
                showTranslatorMessage('Произошла ошибка при загрузке переводчика. Используется только базовый перевод интерфейса.');
            };

            // Устанавливаем таймаут для скрипта
            googleTranslateScript.timeout = 5000;

            document.body.appendChild(googleTranslateScript);
        }
    } else {
        // Если API уже загружен, просто применяем язык
        console.log('Google Translate API уже загружен, применяем язык');
        clearTimeout(translatorTimeout);
        setLanguage(language);
    }
}

// Функция настройки мониторинга состояния переводчика
function setupTranslatorMonitoring() {
    // Обработчик успешной загрузки страницы
    window.addEventListener('load', function () {
        console.log('Страница полностью загружена');

        // Проверяем состояние переводчика
        checkTranslatorState();
    });

    // Функция проверки состояния переводчика
    function checkTranslatorState() {
        console.log('Проверка состояния переводчика...');

        // Если переводчик не загружен через 10 секунд после полной загрузки страницы
        setTimeout(() => {
            if ((typeof google === 'undefined' || typeof google.translate === 'undefined') &&
                !window.translateScriptError) {
                console.warn('Переводчик не инициализирован после полной загрузки страницы');

                // Если переводчик все еще загружается, обновляем состояние
                if (window.translateScriptLoading) {
                    window.translateScriptLoading = false;
                    console.log('Сброс флага загрузки переводчика');
                }

                // Применяем сохраненный язык через ручной перевод
                const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
                translateInterface(savedLanguage);
            } else {
                console.log('Переводчик успешно загружен и инициализирован');

                // Добавляем класс к body для стилизации переведенных элементов
                document.body.classList.add('translator-ready');
            }
        }, 10000);
    }

    // Отслеживаем ошибки fetch для определения проблем с сетью
    window.addEventListener('unhandledrejection', function (event) {
        console.error('Необработанная ошибка Promise:', event.reason);

        // Если ошибка связана с fetch или сетевым запросом
        if (event.reason instanceof TypeError &&
            event.reason.message.includes('fetch') ||
            event.reason.message.includes('network')) {
            console.warn('Возможны проблемы с сетевым подключением');

            // Если переводчик загружается, отмечаем как ошибку загрузки
            if (window.translateScriptLoading) {
                window.translateScriptLoading = false;
                window.translateScriptError = true;

                // Применяем только ручной перевод
                const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
                translateInterface(savedLanguage);
            }
        }
    });

    // Мониторинг состояния переключателя Google Translate
    const translatorWatcher = setInterval(() => {
        // Если Google Translate инициализирован, но селектор не найден
        if (typeof google !== 'undefined' &&
            typeof google.translate !== 'undefined' &&
            !document.querySelector('.goog-te-combo')) {

            console.warn('Google Translate инициализирован, но селектор не найден');
            const counter = window.gtRetryCounter || 0;

            if (counter < 3) {
                console.log(`Попытка переинициализации переводчика (${counter + 1}/3)...`);
                window.gtRetryCounter = counter + 1;

                // Пробуем переинициализировать
                if (typeof window.googleTranslateElementInit === 'function') {
                    window.googleTranslateElementInit();
                }
            } else {
                console.error('Не удалось инициализировать переводчик после нескольких попыток');
                clearInterval(translatorWatcher);

                // Применяем только ручной перевод
                const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
                translateInterface(savedLanguage);
            }
        } else if (document.querySelector('.goog-te-combo')) {
            // Если селектор найден, прекращаем мониторинг
            console.log('Переводчик успешно инициализирован, мониторинг остановлен');
            clearInterval(translatorWatcher);
        }
    }, 2000);

    // Останавливаем мониторинг через 20 секунд в любом случае
    setTimeout(() => {
        if (translatorWatcher) {
            clearInterval(translatorWatcher);
            console.log('Мониторинг переводчика остановлен по таймауту');
        }
    }, 20000);
}

// Функция для отображения сообщений об ошибках переводчика
function showTranslatorMessage(message, isError = true) {
    // Сначала удаляем существующие сообщения, если они есть
    const existingMessages = document.querySelectorAll('.translator-error');
    existingMessages.forEach(msg => msg.remove());

    // Создаем элемент сообщения
    const messageElement = document.createElement('div');
    messageElement.className = 'translator-error';

    // Добавляем содержимое сообщения
    messageElement.innerHTML = `
        <button class="translator-error__close" aria-label="Закрыть">&times;</button>
        <p>${message}</p>
    `;

    // Добавляем сообщение на страницу
    document.body.appendChild(messageElement);

    // Добавляем обработчик для кнопки закрытия
    const closeButton = messageElement.querySelector('.translator-error__close');
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            messageElement.remove();
        });
    }

    // Автоматически удаляем сообщение через 5 секунд
    setTimeout(() => {
        if (messageElement.parentNode) {
            messageElement.remove();
        }
    }, 5000);

    // Заменяем стандартные алерты
    if (isError) {
        console.error(message);
    } else {
        console.log(message);
    }
}

// Заменяем стандартные алерты на красивые уведомления
const originalAlert = window.alert;
window.alert = function (message) {
    // Проверяем, связано ли сообщение с переводчиком
    if (message.includes('переводчик') || message.includes('перевод') ||
        message.includes('translator') || message.includes('language')) {
        showTranslatorMessage(message);
    } else {
        // Для других сообщений используем стандартный alert
        originalAlert(message);
    }
};

// Функция для добавления выпадающих подменю в мобильной версии
function initMobileSubmenu() {
    console.log('Инициализация мобильных подменю...');

    // Находим все элементы с классом mobile-menu__nav-dropdown
    const dropdownItems = document.querySelectorAll('.mobile-menu__nav-item.mobile-menu__nav-dropdown');
    console.log('Найдено выпадающих меню:', dropdownItems.length);

    if (dropdownItems.length === 0) {
        // Если элементы не найдены, создаем их для ключевых пунктов меню
        createTournamentsSubmenu();
        createPromotionsSubmenu();
    } else {
        // Если элементы найдены, добавляем им обработчики событий
        dropdownItems.forEach(item => {
            // Ищем соответствующий контейнер с подменю
            const next = item.nextElementSibling;

            if (next && next.classList.contains('mobile-menu__dropdown-container')) {
                // Добавляем обработчик клика
                item.addEventListener('click', function (e) {
                    e.preventDefault();
                    console.log('Клик по выпадающему меню:', this.textContent);
                    this.classList.toggle('active');
                    next.classList.toggle('active');
                });
            } else {
                // Создаем контейнер для подменю, если его нет
                createDropdownContainer(item);
            }
        });
    }

    function createTournamentsSubmenu() {
        // Ищем ссылку с текстом Tournaments
        let tournamentsNavItem = null;
        document.querySelectorAll('.mobile-menu__nav-item').forEach(item => {
            if (item.textContent.includes('Tournaments')) {
                tournamentsNavItem = item;
            }
        });

        if (!tournamentsNavItem) {
            // Если не нашли по тексту, берем первый элемент
            tournamentsNavItem = document.querySelector('.mobile-menu__nav-item:nth-child(1)');
        }

        if (tournamentsNavItem) {
            createSubmenuForItem(tournamentsNavItem, [
                { href: '#', text: 'MTT Schedule' }
            ]);
        }
    }

    function createPromotionsSubmenu() {
        // Ищем ссылку с текстом Promotions
        let promotionsNavItem = null;
        document.querySelectorAll('.mobile-menu__nav-item').forEach(item => {
            if (item.textContent.includes('Promotions')) {
                promotionsNavItem = item;
            }
        });

        if (!promotionsNavItem) {
            // Если не нашли по тексту, берем второй элемент
            promotionsNavItem = document.querySelector('.mobile-menu__nav-item:nth-child(2)');
        }

        if (promotionsNavItem) {
            createSubmenuForItem(promotionsNavItem, [
                { href: './match-bonus.html', text: '100% Match Bonus' },
                { href: './first-deposit-offer.html', text: '$100 FIRST DEPOSIT OFFER' }
            ]);
        }
    }

    function createSubmenuForItem(item, links) {
        item.classList.add('mobile-menu__nav-dropdown');

        // Создаем контейнер для выпадающего меню
        const dropdownContainer = document.createElement('div');
        dropdownContainer.className = 'mobile-menu__dropdown-container';

        // Добавляем ссылки
        links.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.href = link.href;
            linkElement.className = 'mobile-menu__dropdown-item';
            linkElement.textContent = link.text;
            dropdownContainer.appendChild(linkElement);
        });

        // Вставляем контейнер после элемента меню
        item.parentNode.insertBefore(dropdownContainer, item.nextSibling);

        // Добавляем обработчик событий
        item.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('Клик по созданному выпадающему меню:', this.textContent);
            this.classList.toggle('active');
            dropdownContainer.classList.toggle('active');
        });
    }

    function createDropdownContainer(item) {
        // Определяем, какое подменю нужно создать
        if (item.textContent.includes('Tournament')) {
            createSubmenuForItem(item, [
                { href: '#', text: 'MTT Schedule' }
            ]);
        } else if (item.textContent.includes('Promotion')) {
            createSubmenuForItem(item, [
                { href: './match-bonus.html', text: '100% Match Bonus' },
                { href: './first-deposit-offer.html', text: '$100 FIRST DEPOSIT OFFER' }
            ]);
        }
    }
}

// Функция для работы с FAQ
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    if (faqItems.length > 0) {
        console.log('FAQ элементы найдены: ' + faqItems.length);

        // Устанавливаем правильную высоту для открытого элемента
        faqItems.forEach(item => {
            if (item.classList.contains('active')) {
                const content = item.querySelector('.faq-item__content');
                if (content) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            }
        });

        // Обработчики кликов
        faqItems.forEach(item => {
            const header = item.querySelector('.faq-item__header');
            const content = item.querySelector('.faq-item__content');

            if (header && content) {
                header.addEventListener('click', () => {
                    // Если текущий элемент уже активен, то просто закрываем его
                    if (item.classList.contains('active')) {
                        item.classList.remove('active');
                        content.style.maxHeight = '0px';
                    } else {
                        // Закрываем все активные элементы FAQ
                        faqItems.forEach(otherItem => {
                            const otherContent = otherItem.querySelector('.faq-item__content');
                            otherItem.classList.remove('active');
                            if (otherContent) {
                                otherContent.style.maxHeight = '0px';
                            }
                        });

                        // Открываем текущий элемент
                        item.classList.add('active');
                        content.style.maxHeight = content.scrollHeight + 'px';
                    }
                });
            }
        });
    } else {
        console.log('FAQ элементы не найдены на странице');
    }
}

// Функция для адаптивных таблиц
function initResponsiveTables() {
    const tables = document.querySelectorAll('.mission-table');

    if (tables.length > 0) {
        console.log('Таблицы найдены: ' + tables.length);

        // Добавляем обработку респонсивности для таблиц на мобильных устройствах
        if (window.innerWidth < 768) {
            tables.forEach(table => {
                table.classList.add('mission-table--responsive');

                // Получаем заголовки таблицы
                const headers = Array.from(table.querySelectorAll('th')).map(th => th.textContent.trim());

                // Для каждой строки таблицы (кроме заголовков) добавляем data-атрибуты с названиями заголовков
                const rows = table.querySelectorAll('tbody tr');
                rows.forEach(row => {
                    const cells = row.querySelectorAll('td');
                    cells.forEach((cell, index) => {
                        if (headers[index]) {
                            cell.setAttribute('data-label', headers[index]);
                        }
                    });
                });
            });
        }
    }
} 