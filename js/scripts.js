// JpreLoader ------------------

	$('#main').jpreLoader({
		loaderVPos: '50%',
		autoClose: true,
	}, 
	function() {	
		$('#main').animate({"opacity":'1'},{queue:false,duration:700,easing:"easeInOutQuad"});
		setTimeout( function(){		
			$('.panel').slideUp(1000);
		},1200);
	});


function initCashemir() {

// functions ------------------
	"use strict";
	
	var ino = $('.navigation');
	var $tElems = $('.inner a');
	var ct = $('.inner a').length;
	var al = {queue:true,duration:800,easing:"easeInOutQuad"};
	var bo = $('.body-overlay');
	var $mem = $('.member-box');
	var memlenght = $('.member-box').length;
	var $project = $('.box a');
	var projectlenght = $('.box a').length;	    
	
	
// show menu ------------------	

	function showmenu(){
		$(".nav-button").addClass('nav-rotade');
		ino.animate({"left":'0'},al);          
		ino.removeClass("isDown");
		bo.fadeIn();		
		setTimeout( function(){		
			for (var i = 0; i <= ct; i++) {
				var cft = $tElems[i];
				$(cft).delay(150 * i).animate({'opacity' : '1',left:'0'},al); 
			}
		},100);
	}
	
// hide menu ------------------

	function hidemenu(){
		$(".nav-button").removeClass('nav-rotade');
		ino.animate({"left":'-200px'},al);   
		ino.addClass("isDown");
		bo.fadeOut();		
		setTimeout( function(){					
			for (var i = 0; i <= ct; i++) {
				var cft = $tElems[i];
				$(cft).delay(150 * i).animate({'opacity' : '0',left:'-25%'},al);				 
			}		
		},100);
	}
		
// project show ------------------

	function showprojectbox(){
			setTimeout( function(){					
				for (var i = 0; i <= projectlenght; i++) {
					var projectb = $project[i];
					$(projectb).delay(250 * i).animate({'opacity' : '1',top:'0'},1000);				 
				}		
			},600);
		}	
		
// call menu ------------------

	$(".nav-button").click( function(){
		if ($('.navigation').hasClass("isDown") ) {
			showmenu();
			
		} else {
			hidemenu();
		}	
		return false;
	});
	
// navigation links ------------------

	$(".inner a , .body-overlay").click( function() {
		setTimeout( function(){	
			hidemenu();				 	
		},900);	
	});
// Call plugins  ----------------------------------------
	
//  superslides --------
	
 	$('#slides').superslides({
      animation: 'fade',
	  play: 10000
    });
	
	$('#slides').hammer().on('swipeleft', function() {
		$(this).superslides('animate', 'next');
	});
	
	$('#slides').hammer().on('swiperight', function() {
		$(this).superslides('animate', 'prev');
	});
	
//  scroll nav --------
		
	$('#nav').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 750,
		scrollOffset: 30,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing',
	});

// owlCarousel  --------
   
	$("#clientsay").owlCarousel({		   
		navigation : true,
		pagination:true, 
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		transitionStyle : "goDown"			  
	});
	
	$("#client-carusel").owlCarousel({		   
		navigation : false,
		pagination:false,  
		slideSpeed : 300,
		paginationSpeed : 400,
		items : 4,			  
	});	

    var owl = $("#owl-demo");	
	owl.owlCarousel({		
		navigation : false,
		pagination:false,
		singleItem : true,
		paginationSpeed : 1000,
		goToFirstSpeed : 2000,
		autoHeight : true,
		mouseDrag:	false,	
		touchDrag:false,
		transitionStyle : "goDown"	   
	});
	
// about animation  --------
	 
	$(".next-slide, .close").click(function(){
		var ww = $(window).width();
      	owl.trigger('owl.next');		
		if(ww < 959){			
			setTimeout( function(){			
				$('html').scrollTo('#about h2',800,{'axis':'y'});			
			},600);	
		}
    });
	
	$('.lanch-sklills').click(function(){		  
		setTimeout( function(){	
			$('.skillbar').each(function(){
				$(this).find('.skillbar-bar').animate({width:$(this).attr('data-percent')},3000);
			});		
		},1500);		  
	});
		 
	// flexslider  --------
	
	$('.serviseslider').flexslider({
		animation: "slide",
		smoothHeight: true,
		slideshow: false,
		controlNav: false,              
		directionNav: false,
		startAt: 1, 
		start: function(slider) {			
            $('a.animbox').click(function() {
                var slideTo = $(this).attr("name")
                var slideToInt = parseInt(slideTo)
				var ww = $(window).width();			
                if (slider.currentSlide != slideToInt) 
				{					
                    slider.flexAnimate(slideToInt)
                }				
				if(ww < 959){									
					setTimeout( function(){
						$('html').scrollTo('.serviseslider',800,{'axis':'y'} );									
					},600);							
				}
            });
        }
	});
	
	$('.resume-slider').flexslider({
		animation: "slide",
		slideDirection: "horizontal",
		slideshow: false,
		slideshowSpeed: 3500,
		animationDuration: 500,
		directionNav: true,
		controlNav: false,
	});
	
	 $('.image-popup').magnificPopup({
          type: 'image',
          closeOnContentClick: true,
          mainClass: 'mfp-img-mobile',
          image: {
            verticalFit: true
          }
          
     });
	
		
	$('.service_box').click(function(){	  
	  $('.service_box').removeClass('actser');
	  $(this).addClass('actser');	  
	});
	
	$('#options li').click(function(){	  
	  $('#options li').removeClass('actcat');
	  $(this).addClass('actcat');  
	});  
	
// Scroll animation   ----------------------------------------
	
	$('.animaper').appear();
		
	$(document.body).on('appear', '.present-block', function() {
		$(this).each(function(){ 			
			setTimeout (function (){				
				$('.present-block').animate({opacity:'1', top:'0'},{queue:true,duration:1200});
			}, 600 ); 
		});
	});
	
		
	$(document.body).on('appear', '.service_box', function() {
		$(this).each(function(){ 				
				$('.service_box').animate({opacity:'1', top:'0'},{queue:true,duration:1200});

		});
	});
	$(document.body).on('appear', '#folio_container', function() {
		$(this).each(function(){ 			
				showprojectbox();

		});
	});
	$(document.body).on('appear', '.resume-line', function() {
		$(this).each(function(){ 			
				$('.resume-line').animate({height:'100%'},{queue:true,duration:3200});

		});
	});	
	$(document.body).on('appear', '.resume-box', function() {
		$(this).each(function(){ 			
			setTimeout (function (){	
				$('.resume-box').animate({opacity:'1', top:'0'},{queue:true,duration:1200});
			}, 800 );
		});
	});		
	$(document.body).on('appear', '.smallicon', function() {
		$(this).each(function(){ 			
			setTimeout (function (){	
				$('.smallicon').animate({opacity:'0.8', top:'0'},{queue:true,duration:1200});
			}, 200 );
		});
	});
	
//  Mixitup  ------
	
	$('#folio_container').mixitup({
		targetSelector: '.box',
		effects: ['fade','rotateZ','rotateX','rotateY'],
		easing: 'windback',
		transitionSpeed: 1200,
	});	
	

// Scroll to  --------

	$(".inner a ").click( function(event) {
		event.preventDefault();
		$.scrollTo( 
			$(this).attr('href'),950,{easing:'swing',offset: 25,'axis':'y'} );
		});
		$('.to-top, .logo').click(function() {$('html').scrollTo('#topSlide',1500,{'axis':'y'});hidemenu();});
		$('.start').click(function() {$('html').scrollTo('#about',1500,{'axis':'y'});});
	
	$('.actform').click(function() {
		$('.contactForm').slideToggle(1000);
		setTimeout (function (){	
			$('html').scrollTo('.to-top',1000,{'axis':'y'});	
		}, 800 );	

	});
	
	$('.showmap').click(function(){
		if($(this).hasClass('mnv')){
			$('.mapbox').animate({"height":'450px'},{queue:false,duration:700,easing:"easeInOutQuad"});
			setTimeout (function (){	
				$('html').scrollTo('.mapbox',1000,{'axis':'y'});	
			}, 800 );
			$(this).removeClass('mnv');
		}
		else{
			$(this).addClass('mnv');
			$('.mapbox').animate({"height":'0'},{queue:false,duration:700,easing:"easeInOutQuad"});
		}
	});
	
	$('.close-map').click(function(){
		$('.showmap').addClass('mnv');
		$('.mapbox').animate({"height":'0'},{queue:false,duration:700,easing:"easeInOutQuad"});
	});

// Subscribe   ----------------------------------------

	$('.subscriptionForm').submit(function(){		
		var email = $('#subscriptionForm').val();
		$.ajax({
			url:'php/subscription.php',
			type :'POST',
			dataType:'json',
			data: {'email': email},success: function(data){
				if(data.error){
					$('#error').fadeIn()
				}
				else{
					$('#success').fadeIn();
					$("#error").hide();}
				}
			});
		return false
	});
	
	$('#subscriptionForm').focus(function(){
		$('#error').fadeOut();
		$('#success').fadeOut();	
	});
	
	$('#subscriptionForm').keydown(function(){	
		$('#error').fadeOut();
		$('#success').fadeOut();		
	});	 
				
};

// Contact submit  ----------------------------------------

	$("#submit_btn").click(function(){		
		var user_name=$('input[name=name]').val();
		var user_email=$('input[name=email]').val();
		var user_message=$('textarea[name=message]').val();
		var proceed=true;
			if(user_name==""){
				$('input[name=name]').css('border','1px solid #F54F36');
				proceed=false
			}
			if(user_email==""){
				$('input[name=email]').css('border','1px solid #F54F36');
				proceed=false
			}
			if(user_message==""){
				$('textarea[name=message]').css('border','1px solid #F54F36');
				proceed=false
			}
			if(proceed){
				post_data={'userName':user_name,'userEmail':user_email,'userMessage':user_message};
				$.post('php/contact_me.php',
				post_data,
				function(data){
					$("#result").hide().html('<div class="success">'+data+'</div>').slideDown(500);
					$('#contact_form input').val('');
					$('#contact_form textarea').val('')}).fail(
						function(err){
							$("#result").hide().html('<div class="error">'+err.statusText+'</div>').fadeIn(1500)
					});
			}
	});
	
$("#contact_form input, #contact_form textarea").keyup(function(){		
		$("#contact_form input, #contact_form textarea").css('border','1px solid #101011');
		$("#result").fadeOut(1500)			
});	

// Ajax portfolio   ----------------------------------------
		
function initPortfolio() {
	
	"use strict";

	var   window_height = $(window).height(),
      current,
	  next, 
	  prev,
	  target, 
	  hash,
	  url,
	  page,
	  title,	  	  	  
	  projectIndex,
	  scrollPostition,
	  projectLength,
	  ajaxLoading = false,
	  wrapperHeight,
	  pageRefresh = true,
	  content =false,
	  loader = $('div#loader'),
	  portfolioGrid = $('#folio_container'),
	  projectContainer = $('div#ajax-content-inner'),
	  projectNav = $('#project-navigation ul'),
	  exitProject = $('div#closeProject a'),
	  easing = 'easeOutExpo',
	  folderName ='projects';
	  			
		$(window).bind( 'hashchange', function() {  		 
		hash = $(window.location).attr('hash'); 
		var root = '#!'+ folderName +'/';
		var rootLength = root.length;	
		if( hash.substr(0,rootLength) != root ){
			return;						
		} else {	
			var correction = 50;
			var headerH = $('#portfolio h2').outerHeight()+correction;
			hash = $(window.location).attr('hash'); 
			url = hash.replace(/[#\!]/g, '' ); 
			portfolioGrid.find('li.box.current').children().removeClass('act');
			portfolioGrid.find('li.box.current').removeClass('cur' );
			if(pageRefresh == true && hash.substr(1,rootLength) ==  root){	
					$('html').scrollTo('#portfolio h2',1500,{'axis':'y'},function(){
						loadProject();
					});
			}else if(pageRefresh == false && hash.substr(0,rootLength) == root){				
				$('html,body').stop().animate({scrollTop: (projectContainer.offset().top-headerH)+'px'},800,'easeOutExpo', function(){ 							
					if(content == false){						
						loadProject();							
					}else{	
						projectContainer.animate({opacity:0,height:wrapperHeight},function(){
						loadProject();
						});
					}							
				projectNav.fadeOut('100');
				exitProject.fadeOut('100');						
			});
				}else if(hash=='' && pageRefresh == false || hash.substr(0,rootLength) != root && pageRefresh == false || hash.substr(0,rootLength) != root && pageRefresh == true){	
					scrollPostition = hash; 
					console.log(scrollPostition);
					$('html,body').stop().animate({scrollTop: scrollPostition+'px'},1000,function(){						
					deleteProject();														
				});
			}
			portfolioGrid.find('li.box a[href="#!' + url + '"]' ).parent().addClass( 'cur' );
			portfolioGrid.find('li.box.cur').find('a').addClass('act');
		}  
	});
		  	
	function loadProject(){
		loader.fadeIn();
		if(!ajaxLoading) {				
			ajaxLoading = true;
			projectContainer.load( url +' div#ajaxpage', function(xhr, statusText, request){
				if(statusText == "success"){				
					ajaxLoading = false;
					page =  $('div#ajaxpage');		
					$('.flexslider').flexslider({
						animation: "slide",
						slideDirection: "horizontal",
						slideshow: false,
						slideshowSpeed: 3500,
						animationDuration: 500,
						directionNav: true,
						controlNav: true,
					});
					$('.popup-gallery').magnificPopup({
						delegate: 'a',
						type: 'image',
						mainClass: 'my-mfp-zoom-in',
						tLoading: 'Loading image #%curr%...',
						gallery: {
								enabled: true,
								navigateByImgClick: true,
								preload: [0,1]
						},
						image: {
								tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
								titleSrc: function(item) {
								return item.el.attr('title') + '<small>by KWST</small>';
							}
						}
					});			
				hideLoader();				  									
				$(".container").fitVids();	
				}
			});
		}
	}	
	function hideLoader(){
		loader.fadeOut('fast', function(){													  
			showProject();					
		});			 
	}
		
	function showProject(){
		if(content==false){
			wrapperHeight = projectContainer.children('div#ajaxpage').outerHeight()+'px';
			projectContainer.animate({opacity:1,height:wrapperHeight}, function(){
				$(".container").fitVids();
				scrollPostition = $('html,body').scrollTop();
				projectNav.fadeIn();
				exitProject.fadeIn();
				content = true;	
			});
		}
		else{
				wrapperHeight = projectContainer.children('div#ajaxpage').outerHeight()+'px';
				projectContainer.animate({opacity:1,height:wrapperHeight}, function(){																		  
					$(".container").fitVids();
					scrollPostition = $('html,body').scrollTop();
					projectNav.fadeIn();
					exitProject.fadeIn();
			});					
		}
			projectIndex = portfolioGrid.find('li.box.cur').index();
			projectLength = $('li.box a').length-1;
		if(projectIndex == projectLength){
				$('ul li#nextProject a').addClass('disabled');
				$('ul li#prevProject a').removeClass('disabled');
		}else if(projectIndex == 0){
				$('ul li#prevProject a').addClass('disabled');
				$('ul li#nextProject a').removeClass('disabled');	
		}else{
				$('ul li#nextProject a,ul li#prevProject a').removeClass('disabled');
		}
	}
		
	function deleteProject(closeURL){
			projectNav.fadeOut(100);
			exitProject.fadeOut(100);				
			projectContainer.animate({opacity:0,height:'0px'});
			if(typeof closeURL!='undefined' && closeURL!='') {
				projectContainer.find('iframe').remove();
				location = '#_';
			}
				portfolioGrid.find('li.box.current').children().removeClass('act');
				portfolioGrid.find('li.box.current').removeClass('cur' );			
		  }
			$('#nextProject a').on('click',function () {											   							   				 
				current = portfolioGrid.find('li.box.cur');
				next = current.next('li.box');
				target = $(next).children('a').attr('href');
				$(this).attr('href', target);
				if (next.length === 0) { 
					 return false;			  
				 } 
			   current.removeClass('cur'); 
			   current.children().removeClass('act');
			   next.addClass('cur');
			   next.children().addClass('act');
			});
			$('#prevProject a').on('click',function () {			
			  current = portfolioGrid.find('li.box.cur');
			  prev = current.prev('li.box');
			  target = $(prev).children('a').attr('href');
			  $(this).attr('href', target);
			   if (prev.length === 0) {
				  return false;			
			   }
			   current.removeClass('cur');  
			   current.children().removeClass('act');
			   prev.addClass('cur');
			   prev.children().addClass('act');		   
			});
			$('#closeProject a').on('click',function () {
				 $('html').scrollTo('#portfolio h2',1500,{'axis':'y'});
				deleteProject($(this).attr('href')); 			
				portfolioGrid.find('li.box.cur').children().removeClass('act');			
				loader.fadeOut();
				return false;
			});
			 pageRefresh = false;	  
	};
	
	$(window).load(function(){
		$(window).trigger( 'hashchange');
	});

	$(document).ready(function(){
		initPortfolio();	
		initCashemir();		
	});

//  definition of mobile browser------------------

	var isMobile = { 
       Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
		
    };
	
// if not mobile ------------------  	
	trueMobile = isMobile.any();
	if (trueMobile == null){
		
// parallax  --------	

	$('#servises').parallax("50%", 0.4);
	$('#facts').parallax("70%", 0.3);
	$('#subscribe').parallax("80%", 0.2);
	$('#resume .content').parallax("80%", 0.2);
	
// hoverdir --------
	
	$(' #folio_container > li ').each(function(){$(this).hoverdir();});
	
// lavaLamp --------
	
	$("#options ul").lavaLamp({
    	fx: "easeOutElastic", 
    	speed: 700,
    });	
	
// Hover animation   ---	
				
		$('.box a').hover(function(){
			$(this).find('img').addClass('img-rotade');		
			},function(){
			$(this).find('img').removeClass('img-rotade');	
		});			
						
	}	
$('.show-panel').click(function(){		
	$('.panel').slideToggle(500);			
});