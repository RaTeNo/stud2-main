$(() => {
    // Ширина окна для ресайза
    WW = $(window).width()


    // Кастомный select
    $('.lk_info select, .filter select, .feedback select').niceSelect()


    // Табы
    var locationHash = window.location.hash

    $('body').on('click', '.tabs button', function (e) {
        e.preventDefault()

        if (!$(this).hasClass('active')) {
            const $parent = $(this).closest('.tabs_container'),
                activeTab = $(this).data('content'),
                $activeTabContent = $(activeTab),
                level = $(this).data('level')

            $parent.find('.tabs:first button').removeClass('active')
            $parent.find('.tab_content.' + level).removeClass('active')

            $(this).addClass('active')
            $activeTabContent.addClass('active')
        }
    })

    if (locationHash && $('.tabs_container').length) {
        const $activeTab = $(`.tabs button[data-content="${locationHash}"]`),
            $activeTabContent = $(locationHash),
            $parent = $activeTab.closest('.tabs_container'),
            level = $activeTab.data('level')

        $parent.find('.tabs:first button').removeClass('active')
        $parent.find('.tab_content.' + level).removeClass('active')

        $activeTab.addClass('active')
        $activeTabContent.addClass('active')

        $('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
    }


    // Аккордион
    $('body').on('click', '.accordion .accordion_item .head', function (e) {
        e.preventDefault()

        const $item = $(this).closest('.accordion_item'),
            $accordion = $(this).closest('.accordion')

        if ($item.hasClass('active')) {
            $item.removeClass('active').find('.data').slideUp(300)
        } else {
            $accordion.find('.accordion_item').removeClass('active')
            $accordion.find('.data').slideUp(300)

            $item.addClass('active').find('.data').slideDown(300)
        }
    })


    // Заказ
    $('.orders .order .name').click(function (e) {
        e.preventDefault()

        let parent = $(this).closest('.order')

        parent.toggleClass('active').find('.hide').slideToggle(300)
    })

    $('.orders .order .messages_btn').click(function (e) {
        e.preventDefault()

        let parent = $(this).closest('.order')

        parent.toggleClass('open_messages')
    })


    // Предложения экспертов
    $('.suggestions .item .messages_btn').click(function (e) {
        e.preventDefault()

        let parent = $(this).closest('.item')

        parent.toggleClass('open_messages')
    })


    // Заказ - задание
    $('.lk_info .order_info .task .spolder_btn').click(function (e) {
        e.preventDefault()

        let parent = $(this).closest('.task')

        parent.find('.text').toggleClass('full')
        $(this).toggleClass('active')
    })


    // Специализация
    $('.lk_info .lk_specialization .mob_tab_btn').click(function (e) {
        e.preventDefault()

        if (!$(this).hasClass('active')) {
            $('.lk_info .lk_specialization .mob_tab_btn').removeClass('active')
            $(this).addClass('active')

            $('.lk_info .lk_specialization .tab_content').hide()
            $(this).next().slideDown(300)
        } else {
            $(this).removeClass('active')
            $(this).next().slideUp(300)
        }
    })


    // Вывод средств
    $('.lk_info .withdrawal .methods .head').click(function (e) {
        e.preventDefault()

        $(this).closest('.item').toggleClass('active')
        $(this).toggleClass('active').next().slideToggle(300)
    })


    // Копирование промокода
    const clipboard = new ClipboardJS('.copy_btn')

    clipboard.on('success', (e) => {
        $(e.trigger).addClass('copied')

        setTimeout(() => {
            $(e.trigger).removeClass('copied')
        }, 3000)

        e.clearSelection()
    })
})



$(window).on('load', () => {
    // Тарифы
    initTariffsSliders()
})



$(window).on('resize', () => {
    if (typeof WW !== 'undefined' && WW != $(window).width()) {
        // Тарифы
        initTariffsSliders()
    }
})



// Тарифы
tariffsSliders = []

function initTariffsSliders() {
    if (window.outerWidth < 1024) {
        if ($('.tariffs .row').length) {
            $('.tariffs .row > *').addClass('swiper-slide')
            $('.tariffs .row').addClass('swiper-wrapper').removeClass('row')

            $('.tariffs .swiper').each(function (i) {
                $(this).addClass('tariffs_s' + i)

                let options = {
                    loop: false,
                    speed: 500,
                    watchSlidesProgress: true,
                    slideActiveClass: 'active',
                    slideVisibleClass: 'visible',
                    slidesPerView: 'auto',
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true,
                        bulletActiveClass: 'active'
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    spaceBetween: 12
                }

                tariffsSliders.push(new Swiper('.tariffs_s' + i, options))
            })
        }
    } else {
        tariffsSliders.forEach(element => element.destroy(true, true))

        tariffsSliders = []

        $('.tariffs .swiper-wrapper').addClass('row').removeClass('swiper-wrapper')
        $('.tariffs .row > *').removeClass('swiper-slide')
    }
}