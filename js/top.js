// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.idxData();
			this.idxSlider();
			this.topJS();
		},
		topJS: function() {
			$('.box04').parallax({imageSrc: 'images/b04_bg.jpg'});
			$('.box06').parallax({imageSrc: 'images/b06_bg.jpg'});
			$('.box09').parallax({imageSrc: 'images/b09_bg.jpg'});
		},
		idxSlider: function() {
			$(window).on('load', function() {
						new WOW().init();
				
				$('.idx-slider').slick({
					pauseOnHover: false,
	                autoplay: true,
	                dots: false,
	                arrows: false,
	                fade: true,
	                infinite:true,
	                autoplaySpeed: 3000
	            });
				$('.b08-list').slick({
					autoplay: true,
	                dots: false,
	                arrows: true,
	                slidesToScroll: 1,
				    slidesToShow: 3,
				    responsive: [
				        {
				          breakpoint: 641,
				          settings: {
				            slidesToShow: 2,
				            slidesToScroll: 2,
				            centerMode: true,
			              	variableWidth: true
				          }
				        },
				      ]
	            });
			});
		},
		idxData : function() {
			$.ajax({
				'url' : 'case/_custom/?limit=15',
				'dataType' : 'jsonp',
				'success' : function(json){
					$.each(json.data, function(i,val){
					 	var tlt = val.title.length < 20 ? val.title : val.title.substr(0,15)+'...';
						var thumb = val.img01? $(val.img01).attr('src')	: 'images/case_img_default.jpg';	
						var $li = $('<li><a href="case/'+val.url+'"><p><img src="'+thumb+'" alt="'+val.title+'"></p><p class="description"><span>'+val.category_name+'</span>'+tlt+'</p>');
						$li.appendTo( '.b08-list' );
					});
				}
			});
			$.ajax({
				'url' : 'information/_custom/?limit=15&cat=1',
				'dataType' : 'jsonp',
				'success' : function(json){
					$.each(json.data, function(i,val){
					 	var tlt = val.title.length < 20 ? val.title : val.title.substr(0,15)+'...';
						var thumb = val.image1? $(val.image1).attr('src')	: 'images/information_img_default.jpg';	
						var $li = $('<li><a href="information/'+val.url+'"><p><img src="'+thumb+'" alt="'+val.title+'"></p><p class="ctn"><span>'+val.date+'</span>'+tlt+'</p></a></li>');
						$li.appendTo( '.b01-item01 ul' );
					});
					$('.b01-item01 ul').mCustomScrollbar({
						theme: 'dark'
					});
				}
			});
			$.ajax({
				'url' : 'information/_custom/?limit=15&cat=2',
				'dataType' : 'jsonp',
				'success' : function(json){
					$.each(json.data, function(i,val){
					 	var tlt = val.title.length < 20 ? val.title : val.title.substr(0,15)+'...';
						var thumb = val.image1? $(val.image1).attr('src')	: 'images/information_img_default.jpg';	
						var $li = $('<li><a href="information/'+val.url+'"><p><img src="'+thumb+'" alt="'+val.title+'"></p><p class="ctn"><span>'+val.date+'</span>'+tlt+'</p></a></li>');
						$li.appendTo( '.b01-item02 ul' );
					});
					$('.b01-item02 ul').mCustomScrollbar({
						theme: 'dark'
					});
				}
			});
		},

	};
	
	obj.init();
	
});