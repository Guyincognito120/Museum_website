// script


$( document ).ready( function() {
	//Google Maps JS
	//Set Map
	function initialize() {
			var myLatlng = new google.maps.LatLng(52.363590, 9.738974);
			var imagePath = './img/marker120.png'
			var mapOptions = {
				zoom: 15,
				center: myLatlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				scrollwheel: false
			}

		var map = new google.maps.Map(document.getElementById('map'), mapOptions);
		//Callout Content
		var contentString = 'Kurt-Schwitters-Platz, 30169 Hannover';
		//Set window width + content
		var infowindow = new google.maps.InfoWindow({
			content: contentString,
			maxWidth: 500
		});

		//Add Marker
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: imagePath,
			title: 'image title'
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});

		//Resize Function
		google.maps.event.addDomListener(window, "resize", function() {
			var center = map.getCenter();
			google.maps.event.trigger(map, "resize");
			map.setCenter(center);
		});
	}

	google.maps.event.addDomListener(window, 'load', initialize);

});





$(function() {
				$( '#dl-menu' ).dlmenu();
			});


			$(window).scroll(function() {

			    if ($(window).scrollTop() > 2) {
			        $('.row_nav').addClass('sticky'),
			        $('.font_logo').addClass('font_light');

			    } else {
			        $('.row_nav').removeClass('sticky'),
			        $('.font_logo').removeClass('font_light');
			    }
			});



			$(window).scroll(function() {

			    if ($(window).scrollTop() > 2) {
			        $('#scroller').css("right", "-1px");


			    } else {
			        $('#scroller').css("right", "-200px");
			        
			    }
			});




			$('a.scroll').click(function(event) {
			    var id = $(this).attr("href");
			    var offset = 70;
			    var target = $(id).offset().top - offset;
			    $('html, body').animate({
			        scrollTop: target
			    }, 800);
			    event.preventDefault();
			});


			$('a.btn_access').hover(function () {
			      $('.overlay').toggleClass('overlay-alpha')
			      // $('.intro-title').css('color':'#ffffff')
			    });

	$('.toggle_current').click(function() {
			    $('.2014_hallo').toggleClass('current');
			    
			});

	$('.toggle_past').click(function() {
			    $('.2013_hallo').toggleClass('past');
			    
			});


/*$('.super').click(function() {
			    $('.header-main').toggleClass('extend'),
			    $('.sticky').toggleClass('extend120');			    
			});*/



function uncheck() {
    // Uncheck all checkboxes on page load    
    $(':checkbox:checked').removeAttr('checked');
    console.log("uncheck");
}


/*$('#_3').change(function uncheck(){
  if($(this).is(':checked')){
    $('.menu_search').show(250);
  } else {
    $('.menu_search').hide(500);
  }

});*/

$('#_3').change(function uncheck(){
  if($(this).is(':checked')){
    $('ul.nav_menu').css("margin-top","0" );
  } 
  else {
    $('ul.nav_menu').css("margin-top","+2em" );
  }

});

$('#_4').click(function() {
  if ($(this).is(':checked')) {
    $(this).siblings('label').html('<i class="fa fa-plus"></i><span>weniger beiträge</span>');
  } else {
    $(this).siblings('label').html('<i class="fa fa-plus"></i><span>mehr beiträge</span>');
  }
});

/*window.onload = function() {            

  $(".menu_search").hide();
        }*/


/*$('.pic1desc').hide();
$('.pic2desc').hide();

//When the Image is hovered upon, show the hidden div using Mouseover
$('.img_pr_view_1').hover(function() {
$(this).show(250);
});*/



/*    -----------  ausprobieren  --------  */



/*$('.img_pr_view_1').change(function hovered(){
  if($(this).is(':hover')){
    $('.pic1desc').css("display","block" );
  } 
  else {
    $('.pic1desc').css("display","none" );
  }

});*/


  /*if($('.img_pr_view_1').hover{
    $('.pic1desc').css("display","block" );
  } 
  else {
    $('.pic1desc').css("display","none" );
  };*/



$('.pic1desc1').hide();



$('.img_pr_view_1').hover(function() {
    $(".pic1desc1").fadeToggle();
    
});

$('.pic1desc2').hide();

$('.img_pr_view_2').hover(function() {
    $(".pic1desc2").fadeToggle();
    
});


$('.pic1desc3').hide();

$('.img_pr_view_3').hover(function() {
    $(".pic1desc3").fadeToggle();
    
});

$('.pic1desc4').hide();

$('.img_pr_view_4').hover(function() {
    $(".pic1desc4").fadeToggle();
    
});