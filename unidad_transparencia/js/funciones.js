var menu = document.getElementById("menu");
var brand = document.getElementById("my-brand");
var socialBar = document.getElementById("icon-bar");
var isscroll = $("#scroll").val()=="1"?true:false;
var imgAmbos = $('#image-ambos').val();
var imgGob = $('#image-gob').val();
var imagenBanner = $('#header-image').val();

var showSocialBar = $('#social-bar').val()=="1"?true:false;
var dropdownmenu =  $("div[class*='dropdown-menu-left']");

$(document).ready(function() {

    // cargar de banner
    // console.log('imagenBanner', imagenBanner.replaceAll('\\','/'))
    $('#loadBanner').css({ 'background-image': 'url('+ imagenBanner.replaceAll('\\','/') +')', 'background-size': 'cover'});

	$( window ).resize(function() {
		//displayFacebookBox();
		if(isscroll){
			displayMenu();
			myFunction(true);
		}

		menuMovil();

	});

	window.onscroll = function() {
		if(isscroll)myFunction();
	};

	//displayFacebookBox();
	if(isscroll) displayMenu();

	// if(!isscroll) $(".btn-social").css("background-color","white");

	// (showSocialBar)?socialBar.classList.remove("d-none"):socialBar.classList.add("d-none");

	menuMovil();

	/*
    Carousel
	*/
	$('#carousel-cobay').on('slide.bs.carousel', function (e) {
		/*
			CC 2.0 License Iatek LLC 2018 - Attribution required
		*/
		var $e = $(e.relatedTarget);
		var idx = $e.index();
		var itemsPerSlide = 4;
		var totalItems = $('.carousel-item').length;

		if (idx >= totalItems-(itemsPerSlide-1)) {
			var it = itemsPerSlide - (totalItems - idx);
			for (var i=0; i<it; i++) {
				// append slides to end
				if (e.direction=="left") {
					$('.carousel-item').eq(i).appendTo('.carousel-inner');
				}
				else {
					$('.carousel-item').eq(0).appendTo('.carousel-inner');
				}
			}
		}
	});

    // $('#carousel-cobay-posts').on('slide.bs.carousel', function (e) {
	// 	/*
	// 		CC 2.0 License Iatek LLC 2018 - Attribution required
	// 	*/
	// 	var $e = $(e.relatedTarget);
	// 	var idx = $e.index();
	// 	var itemsPerSlide = 4;
	// 	var totalItems = $('.carousel-item').length;

	// 	if (idx >= totalItems-(itemsPerSlide-1)) {
	// 		var it = itemsPerSlide - (totalItems - idx);
	// 		for (var i=0; i<it; i++) {
	// 			// append slides to end
	// 			if (e.direction=="left") {
	// 				$('.carousel-item').eq(i).appendTo('.carousel-inner');
	// 			}
	// 			else {
	// 				$('.carousel-item').eq(0).appendTo('.carousel-inner');
	// 			}
	// 		}
	// 	}
	// });

});

var mobileMenuWidth = 1050;

function menuMovil(){
	if(isMobileMenu() && !isscroll)
	{
		brand.classList.remove("my-nav-brand-reduce");
		brand.classList.add("my-nav-brand");
	}else{
		if(!isMobileMenu() && !isscroll){
			brand.classList.remove("my-nav-brand");
			brand.classList.add("my-nav-brand-reduce");
		}
	}
}

function isMobileMenu() {
	var windowWidth = $(window).width();
	if (windowWidth < mobileMenuWidth) {
		var isMobileMenu = true;
	}
	else {
		var isMobileMenu = false;
	}
	return isMobileMenu;
}

// function displayFacebookBox(){
// 	var fbBox = $('div.fb-page span');
// 	var ftwg = $('div.ftwg');
// 	var cntWeb = $('#version-web');

// 	if (isMobileMenu()) {
// 		fbBox.hide();
// 		ftwg.removeClass("col-md-6");
// 		ftwg.addClass("col-md-12");
// 		cntWeb.hide();
// 	}else{
// 		fbBox.show();
// 		ftwg.removeClass("col-md-12");
// 		ftwg.addClass("col-md-6");
// 		cntWeb.show();
// 	}
// }

function displayMenu(){
	if (isMobileMenu()) {
		menu.classList.add("bg-cobay-azul-medio");
	}else{
		menu.classList.remove("bg-cobay-azul-medio");
	}
}

function myFunction(resize = false) {
	var sticky = 1; //menu.offsetTop;

	if (!isMobileMenu()) {
		//sticky += 550;
		menu.classList.remove("bg-cobay-azul-medio");
		if (window.pageYOffset >= sticky) {
			menu.classList.add("bg-cobay-azul-medio");

			brand.classList.remove("my-nav-brand");
			//brand.classList.add("my-nav-brand-reduce");
			$("#gobierno").attr("src",imgAmbos).attr("width","25%");
			// $(".btn-social").css("background-color","white")

            dropdownmenu.each(function(m){
                $(this).removeClass("menu-backgroud-transparent");
                $(this).addClass("menu-backgroud-color");
            });

		} else {
			menu.classList.remove("bg-cobay-azul-medio");

			//brand.classList.remove("my-nav-brand-reduce");
			brand.classList.add("my-nav-brand");
            $("#gobierno").attr("src",imgGob).attr("width", "30%");
			// $(".btn-social").css("background-color","transparent")

            dropdownmenu.each(function(m){
                $(this).removeClass("menu-backgroud-color");
                $(this).addClass("menu-backgroud-transparent");
            });

		}
	}else
	{
		sticky += 150;
		if(resize){
			brand.classList.remove("my-nav-brand-reduce");
			brand.classList.add("my-nav-brand");
		}
		if (window.pageYOffset >= sticky) {
			$("#gobierno").attr("src",imgAmbos);
			brand.classList.add("my-img");
		} else {
			$("#gobierno").attr("src",imgGob);
			brand.classList.remove("my-img");
		}
	}
}

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v3.2';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$(document).ready(function(){
  $('.menujq > ul > li:has(ul)').addClass('desplegable');
   $('.menujq > ul > li > a').click(function() {
     var comprobar = $(this).next();
     $('.menujq li').removeClass('active');
     $(this).closest('li').addClass('active');
     if((comprobar.is('ul')) && (comprobar.is(':visible'))) {
        $(this).closest('li').removeClass('active');
        comprobar.slideUp('normal');
     }
     if((comprobar.is('ul')) && (!comprobar.is(':visible'))) {
        $('.menujq ul ul:visible').slideUp('normal');
        comprobar.slideDown('normal');
     }
  });
  $('.menujq > ul > li > ul > li:has(ul)').addClass('desplegable');
   $('.menujq > ul > li > ul > li > a').click(function() {
     var comprobar = $(this).next();
     $('.menujq ul ul li').removeClass('active');
     $(this).closest('ul ul li').addClass('active');
     if((comprobar.is('ul ul')) && (comprobar.is(':visible'))) {
        $(this).closest('ul ul li').removeClass('active');
        comprobar.slideUp('normal');
     }
     if((comprobar.is('ul ul')) && (!comprobar.is(':visible'))) {
        $('.menujq ul ul ul:visible').slideUp('normal');
        comprobar.slideDown('normal');
     }
  });
});
