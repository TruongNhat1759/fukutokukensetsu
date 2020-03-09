$(function () {
    "use strict";
    var obj = {
        init: function () {
            this.smoothScroll();
            this.toTop();
            this.Gnavi();
            this.caseDetailListImg();
        },

        smoothScroll: function () {
            $('a[href^="#"]').click(function () {
                if ($($(this).attr('href')).length) {
                    var p = $($(this).attr('href')).offset();
                    if ($(window).width() > 640) {
                        $('html,body').animate({
                            scrollTop: p.top - 180
                        }, 600);
                    } else {
                        $('html,body').animate({
                            scrollTop: p.top - 105
                        }, 600);
                    }
                }
                return false;
            });

            //Anchor scroll
            var hash1 = location.hash;
                var $root = $('html, body');
                if (hash1 !== "") {
                    var top01 = $(hash1).offset().top;
                    if ($(window).width() > 640) {
                        $root.animate({scrollTop: top01 - 180}, 600);
                    } else {
                        $root.animate({scrollTop: top01 - 105}, 600);
                    }
                }

            //H1 hide on scroll sp    
            $(window).bind("load scroll", function() {
			var hW = $(window).width(),
				sW = $(this).scrollTop();
			if(hW > 640){
				$('#header').removeClass('scrolled');
			}
			else{
				if (sW > 10) {
					$('#header').addClass('scrolled');
				}
				else{
					$('#header').removeClass('scrolled');
				}
			}
		});

        },

        toTop: function () {
            $("#totop").hide();
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('#totop').fadeIn();
                    $('.banner-sp').fadeIn();
                } else {
                    $('#totop').fadeOut();
                    $('.banner-sp').fadeOut();
                }
            });
        },

        Gnavi: function () {
            $('.over').hover(function () {
                var hW = $(window).width();
                if (hW > 640) {
                    if ($(this).hasClass('flag')) {
                        return false;
                    } else {
                        $(this).find('.submenu').stop().slideToggle('fast');
                    }
                } else {
                    return false;
                }
                
            });

            $('.menu-icon').click(function () {
                if ($(this).hasClass('active')) {
                    $('.menu-icon').removeClass('active');
                    $('#gnavi').stop().slideToggle();
                    $('.over').removeClass('active');
                } else {
                    $(this).toggleClass('active');
                    $('#gnavi').stop().slideToggle('fast');
                }
            });
            $('.close-menu').click(function () {
                $('.menu-icon').removeClass('active');
                $('#gnavi').stop().slideUp('fast');
                $('.over').removeClass('active');
            });

            $(window).bind('resize load scroll', function () {
                var ww = $(window).width();
                var pTop = $(this).scrollTop();
                var header = $('#mainvisual, .mainvisual').outerHeight();
                if (ww > 640) {
                    if (pTop > header) {
                        $('#gnavi').addClass('fixed');
                        $('#wrapper').css('padding-top',$('#gnavi').outerHeight());
                        $('#gnavi .contact').css('padding', '15px 20px');
                        $('#gnavi .container > ul > li.over').addClass('actived');
                        $('.idx-fixed').fadeIn();

                    } else {
                        $('#gnavi').removeClass('fixed');
                        $('#wrapper').css('padding-top','');
                        $('#gnavi .contact').css('padding', '28px 20px');
                        $('#gnavi .container > ul > li.over').removeClass('actived');
                         $('.idx-fixed').fadeOut();
                    }
                } else {
                    $('#gnavi').removeClass('fixed');
                    $('#wrapper').css('padding-top','');
                    $('#gnavi .contact').css('padding', '28px 20px');
                    $('#gnavi .container > ul > li.over').removeClass('actived');
                    $('.idx-fixed').fadeOut();
                }
            });

            $(window).bind("load resize", function () {
                var vW = $(window).width();
                if (vW > 640) {
                    $('.menu-icon').removeClass('active');
                    $('.over').removeClass('flag');
                    $('.over').removeClass('active');
                    $('.submenu').removeAttr('style');
					$('.banner-sp').fadeOut('fast');
                } else {
					$('.menu-icon').removeClass('active');
                    $('#gnavi').removeAttr('style');
                    $('.over').addClass('flag');
					$('.over').removeClass('active');
                    $('.submenu').removeAttr('style');
   				}
            });
        },
        caseDetailListImg: function(){
            if($('.case-dtl-img').length > 0){
                $('.case-dtl-img').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true,
                    asNavFor: '.case-dtl-thumbnail',
                });
            }
            if($('.case-dtl-thumbnail').length > 0){
                $('.case-dtl-thumbnail').slick({
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    asNavFor: '.case-dtl-img',
                    focusOnSelect: true,
                    centerMode: true,
                    responsive : [
                        {
                        breakpoint: 641,
                        settings: {
                            arrows: true,
                            dots:false,
                            centerMode: true,
                            slidesToScroll : 1,
                            centerPading:'5px',
                            slidesToShow: 2,
                        }}
                    ]
                });
            }
        },

    };

    obj.init();

});
