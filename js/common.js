
document.addEventListener("DOMContentLoaded", function () {
	'use strict';
	document.querySelectorAll('img.svg').forEach((el) => {
		const imgID = el.getAttribute('id');
		const imgClass = el.getAttribute('class');
		const imgURL = el.getAttribute('src');

		fetch(imgURL)
			.then(data => data.text())
			.then(response => {
				const parser = new DOMParser();
				const xmlDoc = parser.parseFromString(response, 'text/html');
				let svg = xmlDoc.querySelector('svg');

				if (typeof imgID !== 'undefined') {
					svg.setAttribute('id', imgID);
				}

				if (typeof imgClass !== 'undefined') {
					svg.setAttribute('class', imgClass + ' replaced-svg');
				}

				svg.removeAttribute('xmlns:a');

				el.parentNode.replaceChild(svg, el);
			})
	});
	$(".js-select-type").select2({
		placeholder: "Вид работы",
		minimumResultsForSearch: Infinity
	});
	$(".js-select-subject").select2({
		placeholder: "Предмет",
		minimumResultsForSearch: Infinity
	});
	$(".js-select-term").select2({
		placeholder: "Срок выполнения",
		minimumResultsForSearch: Infinity
	});
	$(".js-select-check").select2({
		minimumResultsForSearch: Infinity
	});
	$(".open-popup").magnificPopup(
		{
			type: 'inline',
			midClick: true,
			removalDelay: 500, //delay removal by X to allow out-animation
			callbacks: {
				beforeOpen: function () {
					this.st.mainClass = this.st.el.attr('data-effect');
				}
			},
		});

	if ($('#popup2').length) {
		$.magnificPopup.open({
			items: {
				src: '#popup2'
			},
			mainClass: 'my-mfp-zoom-in',
			removalDelay: 300,
		}, 0);
	}

	if ($('#discount_popup').length) {
		$.magnificPopup.open({
			items: {
				src: '#discount_popup'
			},
			mainClass: 'my-mfp-zoom-in',
			removalDelay: 300,
		}, 0);
	}


	$('#file-upload').change(function () {
		var filepath = this.value;
		var m = filepath.match(/([^\/\\]+)$/);
		var filename = m[1];
		$('.s-top-form-item-file-placeholder').html(filename);

	});
	$('#file-upload1').change(function () {
		var filepath = this.value;
		var m = filepath.match(/([^\/\\]+)$/);
		var filename = m[1];
		$('.s-top-form-item-file-placeholder').html(filename);

	});

	const swiper2 = new Swiper('.MySqiper', {
		speed: 1000,
		slidesPerView: 2,
		direction: 'vertical',
		autoplay: {
			delay: 1000,
		},
		loop: true
	});




	const whatSlider = document.querySelector('.js-sliderwhat');
	if (typeof (whatSlider) != 'undefined' && whatSlider != null) {
		const swiperWhat = new Swiper(".js-sliderwhat", {
			slidesPerView: 3,
			speed: 800,
			grid: {
				rows: 2,
				fill: 'row',
			},
			spaceBetween: 0,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".js-next",
				prevEl: ".js-prev",
			},
			breakpoints: {
				320: {
					slidesPerView: "auto",
					spaceBetween: 10,
					grid: {
						rows: 1,
						fill: 'row',
					},
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 0,
					grid: {
						rows: 1,
						fill: 'row',
					},
				},
				992: {
					slidesPerView: 3,
					grid: {
						rows: 2,
						fill: 'row',
					},
				},
			},
		});
	}
	const whatSlider1 = document.querySelector('.js-sliderwhat1');
	if (typeof (whatSlider1) != 'undefined' && whatSlider1 != null) {
		const swiperWhat1 = new Swiper(".js-sliderwhat1", {
			slidesPerView: 3,
			speed: 800,
			spaceBetween: 0,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".js-next",
				prevEl: ".js-prev",
			},
			breakpoints: {
				320: {
					slidesPerView: "auto",
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 0,
				},
				992: {
					slidesPerView: 3,
				},
			},
		});
	}
	const taskSlider = document.querySelector('.js-slidertask');
	if (typeof (taskSlider) != 'undefined' && taskSlider != null) {
		const swiperTask = new Swiper(".js-slidertask", {
			slidesPerView: 4,
			speed: 800,
			pagination: {
				el: ".task-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".js-next1",
				prevEl: ".js-prev1",
			},
			breakpoints: {
				320: {
					slidesPerView: "auto",
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 0,
				},
				992: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 4,
				},
			},
		});
	}
	const reviewsSlider = document.querySelector('.js-sliderreviews');
	if (typeof (reviewsSlider) != 'undefined' && reviewsSlider != null) {
		const swiperTask = new Swiper(".js-sliderreviews", {
			slidesPerView: 3,
			speed: 800,
			pagination: {
				el: ".reviews-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".js-next2",
				prevEl: ".js-prev2",
			},
			breakpoints: {
				320: {
					slidesPerView: "auto",
					spaceBetween: 0,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 0,
				},

			},
		});
	}
	const articlesSlider = document.querySelector('.js-sliderarticles');
	if (typeof (articlesSlider) != 'undefined' && articlesSlider != null) {
		const swiperArticles = new Swiper(".js-sliderarticles", {
			slidesPerView: $('.s-articles-slider').closest('.content').length ? 2 : 3,
			speed: 800,
			pagination: {
				el: ".articles-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".js-next3",
				prevEl: ".js-prev3",
			},
			breakpoints: {
				320: {
					slidesPerView: "auto",
					spaceBetween: 0,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 0,
				},
				992: {
					slidesPerView: $('.s-articles-slider').closest('.content').length ? 2 : 3,
				},
			},
		});
	}
	$(".s-faq-title").click(function () {
		if ($(this).next("div").is(":visible")) {
			$(this).next("div").slideUp("slow");
			$(this).removeClass('active');

		} else {
			$(".s-faq-text").slideUp("slow");
			$(".s-faq-title").removeClass('active');
			$(this).next("div").slideToggle("slow");

			$(this).addClass('active');


		}
		return false;
	});
	$('.s-header-toggle').click(function () {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$('.s-menu').removeClass("active");
			$('.s-bg').removeClass("active");
		} else {
			$(this).addClass("active");
			$('.s-menu').addClass("active");
			$('.s-bg').addClass("active");
		}
		return false;
	});
	$('.s-menu-close').click(function () {
		$('.s-header-toggle').removeClass("active");
		$('.s-menu').removeClass("active");
		$('.s-bg').removeClass("active");

		return false;
	});
	$('.s-bg').click(function () {
		$('.s-header-toggle').removeClass("active");
		$('.s-menu').removeClass("active");
		$('.s-bg').removeClass("active");

		return false;
	});
	$('.s-menu-list li a').click(function () {
		if ($(this).next().length) {
			$(this).closest('.s-menu-list').find('> li').hide();
			$(this).closest('li').fadeIn().addClass('style1');
			$(this).next().fadeIn();
		}

	});
	$('.js-back').click(function () {
		$(this).closest("li.more").closest('ul').find('> li').fadeIn();
		$(this).closest('li.more').removeClass('style1');
		$(this).closest('ul').hide();

	});
	$(window).scroll(function () {
		if ($(window).scrollTop() >= 165) {
			$('.s-header-nav-inner').addClass('fixed-header');
		}
		else {
			$('.s-header-nav-inner').removeClass('fixed-header');
		}
	});
	if ($(window).width() < 992) {
		$(window).scroll(function () {
			if ($(window).scrollTop() >= 72) {
				$('.s-header').addClass('fixed-header');
			}
			else {
				$('.s-header').removeClass('fixed-header');
			}
		});
	} else {

	}

	$(window).resize(function () {
		if ($(window).width() < 992) {
			$(window).scroll(function () {
				if ($(window).scrollTop() >= 72) {
					$('.s-header').addClass('fixed-header');
				}
				else {
					$('.s-header').removeClass('fixed-header');
				}
			});
		}
	});


	// Смена отображения работ
	$('.works .views .grid_btn').click(function (e) {
		e.preventDefault()

		$('.works .views .btn').removeClass('active')
		$(this).addClass('active')

		$('.works .swiper .list').addClass('row')
		$('.works .swiper .list').removeClass('list')
	})

	$('.works .views .list_btn').click(function (e) {
		e.preventDefault()

		$('.works .views .btn').removeClass('active')
		$(this).addClass('active')

		$('.works .swiper .row').addClass('list')
		$('.works .swiper .row').removeClass('row')
	})


	if ($(window).width() < 768) {
		$('.works .swiper .list').addClass('row')
		$('.works .swiper .list').removeClass('list')

		$('.mob-s-works-slider').addClass('s-works-slider')
		$('.mob-s-works-slider .swiper').addClass('js-sliderworks')
		$('.mob-s-works-slider .row').addClass('swiper-wrapper')

		const mobWorksSlider = document.querySelector('.mob-s-works-slider .js-sliderworks');
		if (typeof (mobWorksSlider) != 'undefined' && mobWorksSlider != null) {
			const mobSwiperTask = new Swiper(".mob-s-works-slider .js-sliderworks", {
				slidesPerView: 3,
				speed: 800,
				pagination: {
					el: ".mob_works-pagination",
					clickable: true,
				},
				navigation: {
					nextEl: ".mob-js-next2",
					prevEl: ".mob-js-prev2",
				},
				breakpoints: {
					320: {
						slidesPerView: "auto",
						spaceBetween: 10,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 0,
					},

				},
			});
		}
	}


	const worksSlider = document.querySelector('.js-sliderworks');
	if (typeof (worksSlider) != 'undefined' && worksSlider != null) {
		const swiperTask = new Swiper(".js-sliderworks", {
			slidesPerView: 3,
			speed: 800,
			pagination: {
				el: ".works-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".works-js-next2",
				prevEl: ".works-js-prev2",
			},
			breakpoints: {
				320: {
					slidesPerView: "auto",
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 0,
				},

			},
		});
	}


	// Плавная прокрутка к якорю
	$('.anchors .btn').click(function (e) {
		e.preventDefault()

		let href = $(this).data('anchor'),
			addOffset = $('.s-header-nav-inner').is(':visible') ? $('.s-header-nav-inner').outerHeight() + 20 : $('.s-header').outerHeight() + 20

		if ($(this).data('offset')) addOffset = $(this).data('offset')

		$('html, body').stop().animate({ scrollTop: $(href).offset().top - addOffset }, 1000)
	})

	$('.popup_menu').click(function (e) {
		e.preventDefault()
		$(".menu_auth").toggleClass("active")
	});

});


$(window).on('resize', () => {
	if ($(window).width() < 768) {
		$('.works .swiper .list').addClass('row').removeClass('list')

		$('.mob-s-works-slider .swiper').addClass('js-sliderworks')
		$('.mob-s-works-slider .row').addClass('swiper-wrapper')

		const mobWorksSlider = document.querySelector('.mob-s-works-slider .js-sliderworks');
		if (typeof (mobWorksSlider) != 'undefined' && mobWorksSlider != null) {
			const mobSwiperTask = new Swiper(".mob-s-works-slider .js-sliderworks", {
				slidesPerView: 3,
				speed: 800,
				pagination: {
					el: ".mob_works-pagination",
					clickable: true,
				},
				navigation: {
					nextEl: ".mob-js-next2",
					prevEl: ".mob-js-prev2",
				},
				breakpoints: {
					320: {
						slidesPerView: "auto",
						spaceBetween: 10,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 0,
					},

				},
			});
		}
	} else {
		$('.mob-s-works-slider .swiper').removeClass('js-sliderworks')
		$('.mob-s-works-slider .swiper-wrapper').removeClass('swiper-wrapper').addClass('row')

		mobSwiperTask.destroy(true, true)
	}
})

/* IIFE end */

// breakpoint where swiper will be destroyed
// and switches to a dual-column layout
const breakpoint = window.matchMedia('(min-width:768px)');

// keep track of swiper instances to destroy later
let mySwiper, mySwiper1, mySwiper2;

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

const breakpointChecker = function () {

	// if larger viewport and multi-row layout needed
	if (breakpoint.matches === true) {

		// clean up old instances and inline styles when available
		if (mySwiper !== undefined) {
			$('.s-offer-line.swiper-container').each(function () {
				this.swiper.destroy();
			})
		}

		// or/and do nothing
		return;

		// else if a small viewport and single column layout needed
	} else if (breakpoint.matches === false) {

		// fire small viewport version of swiper
		return enableSwiper();

	}

};

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

const enableSwiper = function () {

	mySwiper = new Swiper('.s-offer-line.swiper-container.slider1', {
		slidesPerView: 4,
		speed: 800,
		pagination: {
			el: ".offer-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".js-next4",
			prevEl: ".js-prev4",
		},
		breakpoints: {
			320: {
				slidesPerView: "auto",
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 0,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			},
		},




	});



};

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

// keep an eye on viewport size changes
breakpoint.addListener(breakpointChecker);

// kickstart
breakpointChecker();

$(document).on('click', '.mfp-close', function (e) {
	e.preventDefault();
	$.magnificPopup.close();
});