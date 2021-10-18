// jQuery function
$(function() {
    
    // slick carousel
    (function slickCarousel() {
        
        if ($('.game-block__testimonials').length) {
            $('.game-block__testimonials').slick({
                slidesToShow: 2,
                nextArrow: '<span class="slider-arrow right-arrow"><svg width="22" height="37" viewBox="0 0 22 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9411 21.2132L21.7695 18.3848L3.38476 2.01464e-05L0.556328 2.82845L18.9411 21.2132Z" fill="white"/><path d="M21.7695 18.3847L18.9411 15.5563L0.556325 33.9411L3.38475 36.7695L21.7695 18.3847Z" fill="white"/></svg></span>',
                prevArrow: '<span class="slider-arrow left-arrow"><svg width="22" height="37" viewBox="0 0 22 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.05893 21.2132L0.230499 18.3848L18.6153 2.01464e-05L21.4437 2.82845L3.05893 21.2132Z" fill="white"/><path d="M0.230472 18.3847L3.0589 15.5563L21.4437 33.9411L18.6152 36.7695L0.230472 18.3847Z" fill="white"/></svg></span>',
                autoplay: true,
                autoplaySpeed: 5000,
                responsive: [
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                ]
            });
        };

        if ($('.checkout-testimonials').length) {
            $('.checkout-testimonials').slick({
                slidesToShow: 3,
                nextArrow: '<span class="slider-arrow right-arrow"><svg width="22" height="37" viewBox="0 0 22 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9411 21.2132L21.7695 18.3848L3.38476 2.01464e-05L0.556328 2.82845L18.9411 21.2132Z" fill="white"/><path d="M21.7695 18.3847L18.9411 15.5563L0.556325 33.9411L3.38475 36.7695L21.7695 18.3847Z" fill="white"/></svg></span>',
                prevArrow: '<span class="slider-arrow left-arrow"><svg width="22" height="37" viewBox="0 0 22 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.05893 21.2132L0.230499 18.3848L18.6153 2.01464e-05L21.4437 2.82845L3.05893 21.2132Z" fill="white"/><path d="M0.230472 18.3847L3.0589 15.5563L21.4437 33.9411L18.6152 36.7695L0.230472 18.3847Z" fill="white"/></svg></span>',
                autoplay: true,
                autoplaySpeed: 5000,
                responsive: [
                    {
                        breakpoint: 993,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                ]
            });
        };
    }());

    // form drop
    (function formDrop() {

        // radio
        $.each($('.main-form__list-item'), function() {
            if($(this).find('input').prop('checked') == true){
                $(this).parent().addClass('active');
            }
        });

        $(document).on('click', '.main-form__list-item', function() {
            var radioItem = $(this);
            radioItem.parents('.main-form__drop').find('.main-form__list-item').removeClass('active');
            radioItem.parents('.main-form__drop').find('.main-form__list-item input').prop('checked',false);
            radioItem.toggleClass('active');
            radioItem.find('input').prop('checked',true);
            return false;
        });

        // change select (span)
        $('.main-form__list-item').click(function() {
            let newSort = $(this).find('label').text();
            $(this).parents('.main-form__drop').find('span').text(newSort);
        });

        // drop select function
        $('.main-form__drop span').click(function() {
            $('.main-form__drop span').not(this).parent().removeClass('active');
            $(this).parent().toggleClass('active');
        });

        // remove visible
        $('.main-form__list-item').click(function() {
            $(this).parents('.main-form__drop').removeClass('active');
        });
    }());

    (function acceptPolitic() {
        $(".accept-politic span").click(function () {
          $(this).toggleClass("active");
    
          if ($(this).hasClass("active")) {
            $(this).parent().find("input").prop("checked", true);
          } else {
            $(this).parent().find("input").prop("checked", false);
          }
        });
    })();

    // accordion
    (function accordion() {
        $('.accordion').click(function () {
            $(this).toggleClass('open').next().slideToggle();
            $('.accordion').not(this).removeClass('open').next().slideUp();
        });
    }());

    // game services (toggle)
    (function gameToggle() {
        $('.game-services__check').click(function() {
            $(this).toggleClass('checked');
            if ($(this).hasClass('checked')) {
                $(this).find('input').prop('checked', true);
            } else {
                $(this).find('input').prop('checked', false);
            }
        });
    }());

    // settingsSelect
    (function settingsSelect() {
        $('.select-row__item .main-form__list-item').click(function() {
            let selectImage = $(this).find('.select-image').val();
            $(this).parents('.select-row__item').find('.select-row__image img').attr("src", selectImage);
        });
    }());

    // radioButtons
    (function radioButtons() {
        // radio
        $.each($('.radio-item'), function() {
            if($(this).find('input').prop('checked') == true){
                $(this).addClass('active');
            };
        });
  
        $(document).on('click', '.radio-item', function() {
            var radioItem = $(this);
            radioItem.parents('.radio-wrapper').find('.radio-item').removeClass('active');
            radioItem.parents('.radio-wrapper').find('.radio-item input').prop('checked',false);
            radioItem.toggleClass('active');
            radioItem.find('input').prop('checked',true);
            return false;
        });
    }());

    // checkBox
    (function checkBox() {
        // checkbox
        $.each($('.checkbox-item'), function() {
            if($(this).find('input').prop('checked')==true){
                $(this).addClass('active');
            }
        });
    
        $(document).on('click', '.checkbox-item', function() {
            if($(this).hasClass('active')){
                $(this).find('input').prop('checked',false);
            }else {
                $(this).find('input').prop('checked',true);
            }
            $(this).toggleClass('active');
            return false;
        });
    }());

    // tabs
    (function tabs() {
        var tabContent = $('.tabs-block .tabs-content'); 
        tabContent.filter(':first').addClass('active'); 

        $('.tabs-link a').click(function(){
            tabContent.removeClass('active'); 
            tabContent.filter(this.hash).addClass('active'); 
            $('.tabs-link a').removeClass('active');
            $(this).addClass('active');
            return false;
        }).filter(':first').click();

        $('.tabs-link a').click(function(){
            $('.tabs-link a[href=' + $(this).data('id')+ ']').click();
        });
    }());

    // nouislider
    (function noUiRange() {
        if ($('#amount-range').length) {
            let amountRange = document.getElementById('amount-range');

            noUiSlider.create(amountRange, {
                start: 3,
                connect: [true, false],
                padding: 0,
                step: 1,
                pips: {
                    mode: 'positions', 
                    values: [0, 100],
                },
                range: {
                    'min': 0,
                    'max': 5
                },
                format: wNumb({
                    decimals: 0,
                })
            });

            let amountValues = [
                document.getElementById('amount-range-value')
            ];

            amountRange.noUiSlider.on('update', function (values, handle) {
                amountValues[handle].value = values[handle];
            });

            amountValues.forEach(function (input, handle) {

                input.addEventListener('change', function () {
                    amountRange.noUiSlider.setHandle(handle, this.value);
                });
            });
        };

        if ($('#win-range').length) {
            let winRange = document.getElementById('win-range');

            noUiSlider.create(winRange, {
                start: 2,
                connect: [true, false],
                padding: 0,
                step: 1,
                pips: {
                    mode: 'positions', 
                    values: [0, 100],
                },
                range: {
                    'min': 0,
                    'max': 3
                },
                format: wNumb({
                    decimals: 0,
                })
            });

            let winValues = [
                document.getElementById('win-range-value')
            ];

            winRange.noUiSlider.on('update', function (values, handle) {
                winValues[handle].value = values[handle];
            });

            winValues.forEach(function (input, handle) {

                input.addEventListener('change', function () {
                    winRange.noUiSlider.setHandle(handle, this.value);
                });
            });
        };

        if ($('#games-range').length) {
            let gamesRange = document.getElementById('games-range');

            noUiSlider.create(gamesRange, {
                start: 2,
                connect: [true, false],
                padding: 0,
                step: 1,
                pips: {
                    mode: 'positions', 
                    values: [0, 33 ,66, 100],
                },
                range: {
                    'min': 1,
                    'max': 4
                },
                format: wNumb({
                    decimals: 0,
                })
            });

            let gamesValues = [
                document.getElementById('games-range-value')
            ];

            gamesRange.noUiSlider.on('update', function (values, handle) {
                gamesValues[handle].value = values[handle];
            });

            gamesValues.forEach(function (input, handle) {

                input.addEventListener('change', function () {
                    gamesRange.noUiSlider.setHandle(handle, this.value);
                });
            });
        };

        if ($('#boosters-range').length) {
            let boostersRange = document.getElementById('boosters-range');

            noUiSlider.create(boostersRange, {
                start: 2,
                connect: [true, false],
                padding: 0,
                step: 1,
                pips: {
                    mode: 'positions', 
                    values: [0, 33 ,66, 100],
                },
                range: {
                    'min': 1,
                    'max': 4
                },
                format: wNumb({
                    decimals: 0,
                })
            });

            let boostersValues = [
                document.getElementById('boosters-range-value')
            ];

            boostersRange.noUiSlider.on('update', function (values, handle) {
                boostersValues[handle].value = values[handle];
            });

            boostersValues.forEach(function (input, handle) {

                input.addEventListener('change', function () {
                    boostersRange.noUiSlider.setHandle(handle, this.value);
                });
            });
        };

        if ($('#house-range').length) {
            let houseRange = document.getElementById('house-range');

            noUiSlider.create(houseRange, {
                start: 100,
                connect: [true, false],
                padding: 0,
                step: 1,
                range: {
                    'min': 0,
                    'max': 1000
                },
                format: wNumb({
                    decimals: 0,
                })
            });

            let houseValues = [
                document.getElementById('house-range-value')
            ];

            houseRange.noUiSlider.on('update', function (values, handle) {
                houseValues[handle].value = values[handle];
            });

            houseValues.forEach(function (input, handle) {

                input.addEventListener('change', function () {
                    houseRange.noUiSlider.setHandle(handle, this.value);
                });
            });
        };

        if ($('#mmr-range').length) {
            let mmrRange = document.getElementById('mmr-range');

            noUiSlider.create(mmrRange, {
                start: [1200, 18000],
                connect: true,
                padding: 0,
                step: 50,
                // pips: {
                //     mode: 'positions', 
                //     values: [0, 20, 40, 60, 80, 100],
                // },
                pips: {
                    mode: 'values',
                    values: [0, 1200, 2800, 4800, 7200, 10000, 12500, 15000, 20000],
                    density: 4
                },
                range: {
                    'min': 0,
                    'max': 20000
                },
                format: wNumb({
                    decimals: 0,
                })
            });

            let mmrValues = [
                document.getElementById('currect-range-value'),
                document.getElementById('desired-range-value')
            ];

            mmrRange.noUiSlider.on('update', function (values, handle) {
                mmrValues[handle].value = values[handle];
            });

            mmrValues.forEach(function (input, handle) {

                input.addEventListener('change', function () {
                    mmrRange.noUiSlider.setHandle(handle, this.value);
                });
            });
        };

        if ($('#overwatch-range').length) {
            let overwatchRange = document.getElementById('overwatch-range');

            noUiSlider.create(overwatchRange, {
                start: [1200, 3800],
                connect: true,
                padding: 0,
                step: 100,
                pips: {
                    mode: 'values',
                    values: [0, 1000, 2000, 3000, 4000, 5000],
                    density: 4
                },
                range: {
                    'min': 0,
                    'max': 5000
                },
                format: wNumb({
                    decimals: 0,
                })
            });

            let overwatchValues = [
                document.getElementById('currect-range-value'),
                document.getElementById('desired-range-value')
            ];

            overwatchRange.noUiSlider.on('update', function (values, handle) {
                overwatchValues[handle].value = values[handle];
            });

            overwatchValues.forEach(function (input, handle) {

                input.addEventListener('change', function () {
                    overwatchRange.noUiSlider.setHandle(handle, this.value);
                });
            });
        };

        if ($('#lvl-range').length) {
            let lvlRange = document.getElementById('lvl-range');

            noUiSlider.create(lvlRange, {
                start: [100, 400],
                connect: true,
                padding: 0,
                step: 10,
                pips: {
                    mode: 'values',
                    values: [0, 500],
                    density: 4
                },
                range: {
                    'min': 0,
                    'max': 500
                },
                format: wNumb({
                    decimals: 0,
                })
            });

            let lvlValues = [
                document.getElementById('currect-lvl-value'),
                document.getElementById('desired-lvl-value')
            ];

            lvlRange.noUiSlider.on('update', function (values, handle) {
                lvlValues[handle].value = values[handle];
            });

            lvlValues.forEach(function (input, handle) {

                input.addEventListener('change', function () {
                    lvlRange.noUiSlider.setHandle(handle, this.value);
                });
            });
        };

        if ($('#gambit-range').length) {
            let gambitRange = document.getElementById('gambit-range');

            noUiSlider.create(gambitRange, {
                start: [1200, 12000],
                connect: true,
                padding: 0,
                step: 10,
                pips: {
                    mode: 'values',
                    values: [0, 15000],
                    density: 4
                },
                range: {
                    'min': 0,
                    'max': 15000
                },
                format: wNumb({
                    decimals: 0,
                })
            });

            let gambitValues = [
                document.getElementById('currect-lvl-value'),
                document.getElementById('desired-lvl-value')
            ];

            gambitRange.noUiSlider.on('update', function (values, handle) {
                gambitValues[handle].value = values[handle];
            });

            gambitValues.forEach(function (input, handle) {

                input.addEventListener('change', function () {
                    gambitRange.noUiSlider.setHandle(handle, this.value);
                });
            });
        };

        if ($('#wins-range').length) {
            let winsRange = document.getElementById('wins-range');

            noUiSlider.create(winsRange, {
                start: 5,
                connect: [true, false],
                padding: 0,
                step: 1,
                pips: {
                    mode: 'positions', 
                    values: [0, 100],
                },
                range: {
                    'min': 0,
                    'max': 20
                },
                format: wNumb({
                    decimals: 0,
                })
            });

            let winsDotaValues = [
                document.getElementById('wins-range-value')
            ];

            winsRange.noUiSlider.on('update', function (values, handle) {
                winsDotaValues[handle].value = values[handle];
            });

            winsDotaValues.forEach(function (input, handle) {

                input.addEventListener('change', function () {
                    winsRange.noUiSlider.setHandle(handle, this.value);
                });
            });
        };

        if ($('#kills-range').length) {
            let killsRange = document.getElementById('kills-range');

            noUiSlider.create(killsRange, {
                start: 100,
                connect: [true, false],
                padding: 0,
                step: 1,
                pips: {
                    mode: 'positions', 
                    values: [0, 100],
                },
                range: {
                    'min': 1,
                    'max': 500
                },
                format: wNumb({
                    decimals: 0,
                })
            });

            let killsValues = [
                document.getElementById('kills-range-value')
            ];

            killsRange.noUiSlider.on('update', function (values, handle) {
               killsValues[handle].value = values[handle];
            });

            killsValues.forEach(function (input, handle) {

                input.addEventListener('change', function () {
                    killsRange.noUiSlider.setHandle(handle, this.value);
                });
            });
        };

        if ($('#dota-range').length) {
            let dotaRange = document.getElementById('dota-range');

            noUiSlider.create(dotaRange, {
                start: [1200, 8000],
                connect: true,
                padding: 0,
                step: 100,
                pips: {
                    mode: 'positions', 
                    values: [0, 100],
                },
                range: {
                    'min': 0,
                    'max': 9000
                },
                format: wNumb({
                    decimals: 0,
                })
            });

            let dotaValues = [
                document.getElementById('currect-range-value'),
                document.getElementById('desired-range-value')
            ];

            dotaRange.noUiSlider.on('update', function (values, handle) {
                dotaValues[handle].value = values[handle];
             });
 
             dotaValues.forEach(function (input, handle) {
 
                 input.addEventListener('change', function () {
                     dotaRange.noUiSlider.setHandle(handle, this.value);
                 });
             });
        };

        if ($('#play-range').length) {
            let playRange = document.getElementById('play-range');

            noUiSlider.create(playRange, {
                start: 100,
                connect: [true, false],
                padding: 0,
                step: 1,
                range: {
                    'min': 0,
                    'max': 1000
                },
                format: wNumb({
                    decimals: 0,
                })
            });

            let playValues = [
                document.getElementById('play-range-value')
            ];

            playRange.noUiSlider.on('update', function (values, handle) {
                 playValues[handle].value = values[handle];
             });
 
              playValues.forEach(function (input, handle) {
 
                 input.addEventListener('change', function () {
                     playRange.noUiSlider.setHandle(handle, this.value);
                 });
             });
        };

        if ($('#mood-range').length) {
            let moodRange = document.getElementById('mood-range');

            noUiSlider.create(moodRange, {
                start: [1200, 9000],
                connect: true,
                padding: 0,
                step: 100,
                pips: {
                    mode: 'positions', 
                    values: [0, 100],
                },
                range: {
                    'min': 0,
                    'max': 10000
                },
                format: wNumb({
                    decimals: 0,
                })
            });

            let moodValues = [
                document.getElementById('angry-range-value'),
                document.getElementById('smile-range-value')
            ];

            moodRange.noUiSlider.on('update', function (values, handle) {
                moodValues[handle].value = values[handle];
            });

             moodValues.forEach(function (input, handle) {

                input.addEventListener('change', function () {
                    moodRange.noUiSlider.setHandle(handle, this.value);
                });
            });
        };

        if ($('#place-win-range').length) {
            let placeWinRange = document.getElementById('place-win-range');

            noUiSlider.create(placeWinRange, {
                start: 2,
                connect: [true, false],
                padding: 0,
                step: 1,
                pips: {
                    mode: 'positions', 
                    values: [0, 100],
                },
                range: {
                    'min': 0,
                    'max': 3
                },
                format: wNumb({
                    decimals: 0,
                })
            });

            let placeWinValues = [
                document.getElementById('place-win-range-value')
            ];

            placeWinRange.noUiSlider.on('update', function (values, handle) {
                placeWinValues[handle].value = values[handle];
            });

            placeWinValues.forEach(function (input, handle) {

                input.addEventListener('change', function () {
                    placeWinRange.noUiSlider.setHandle(handle, this.value);
                });
            });
        };

        if ($('#seasonal-win-range').length) {
            let seasonalWinRange = document.getElementById('seasonal-win-range');

            noUiSlider.create(seasonalWinRange, {
                start: 2,
                connect: [true, false],
                padding: 0,
                step: 1,
                pips: {
                    mode: 'positions', 
                    values: [0, 100],
                },
                range: {
                    'min': 0,
                    'max': 3
                },
                format: wNumb({
                    decimals: 0,
                })
            });

            let seasonalWinValues = [
                document.getElementById('seasonal-win-range-value')
            ];

            seasonalWinRange.noUiSlider.on('update', function (values, handle) {
                seasonalWinValues[handle].value = values[handle];
            });

            seasonalWinValues.forEach(function (input, handle) {

                input.addEventListener('change', function () {
                    seasonalWinRange.noUiSlider.setHandle(handle, this.value);
                });
            });
        };
    }());

    // toggle menu
    (function toggleMenu() {
        $('.header-toggle').click(function() {
            $('html').toggleClass('menu-open');
        });

        $('.header-menu__close').click(function() {
            $('html').removeClass('menu-open');
        });
    }());

    // defaultSend
    (function defaultSend() {
        $(document).ready(function() {
            $('.settings-row .range-wrapper__count input').keydown(function(event){
              if(event.keyCode == 13) {
                event.preventDefault();
                return false;
            }
         });
      });
    }());

    // scroll link
    (function scrollLink() {
        $(".scroll-link").click(function() {
            var elementClick = $(this).attr("href")
            var destination = $(elementClick).offset().top;
            jQuery("html:not(:animated),body:not(:animated)").animate({
              scrollTop: destination
            }, 1500);
            return false;
        });
    }());

    // comment length
    (function commentLength() {
        $('.comment-area').keyup(function() {

            let commentValue = $('.comment-area').val();
            
            // count
            if (this.value.length >= 220) {
                this.value = this.value.substr(0, 220);
            }

            $('.review-count__value').text(commentValue.length);
        });
    }());

    (function magnificPopup() {
        $('.open-popup').magnificPopup();
    }());
    
    // selectjs
    (function selectJs() {
        // init
        $('.main-form__select').select2({
            placeholder: "",
        });
    }());

});