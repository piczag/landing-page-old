var adjustIphone = function() {
  var iphoneHeight = 569;
  var windowHeight = $(window).innerHeight();
  var iphoneMargin = (windowHeight - iphoneHeight)/2;
  $('.iphone-container').css('margin-top', iphoneMargin + 'px');
}
var adjustSlides = function() {
  var windowHeight = $(window).innerHeight();
  $('.slide').css('min-height',windowHeight + 'px');
}

$(document).ready(function(){
  adjustIphone();
  adjustSlides();
  $('.iphone-screen').css('opacity','0');
  $('.iphone-screen[data-index=1]').css('opacity','1');

  $('section[data-type="background"]').each(function() {
    var $bgobj = $(this);
    $(window).scroll(function() {
      var yPos = -(($(window).scrollTop() - $bgobj.position().top) / $bgobj.data('speed'));
      var coords = '50% ' + yPos + 'px';
      $bgobj.css({backgroundPosition: coords})
    })

  });

  $('.slideshow-container').each(function(){
    var slides = $(this).find('.slideshow-image');
    var $slide1 = $(slides[0]);
    var $slide2 = $(slides[1]);
    var $slide3 = $(slides[2]);
    
    $slide1.css({'filter': 'alpha(opacity=100)', 'opacity': '1', 'z-index': '2'});
    $slide2.css({'filter': 'alpha(opacity=100)', 'opacity': '1', 'z-index': '1'});
    $slide3.css({'filter': 'alpha(opacity=0)', 'opacity': '0'});
    
    /*
    setTimeout(function(){
      setInterval(function(){
        $slide1.css({'filter': 'alpha(opacity=0)', 'opacity': '0'});
        console.log('slide1 off');
        setTimeout(function(){
          $slide2.css({'z-index': '2'});
          $slide1.css({'filter': 'alpha(opacity=100)', 'opacity': '1', 'z-index': '1'});
          console.log('slide1 on');
        }, 1000);  
      }, 6000);
    }, 2000);
    */

    setInterval(function(){
      $slide1.css({'filter': 'alpha(opacity=100)', 'opacity': '1'});
      $slide2.css({'filter': 'alpha(opacity=0)', 'opacity': '0'});
      $slide3.css({'filter': 'alpha(opacity=0)', 'opacity': '0'});
    },6000);
    setTimeout(function() {setInterval(function(){
      $slide1.css({'filter': 'alpha(opacity=100)', 'opacity': '1', 'z-index': '1'});
      $slide2.css({'filter': 'alpha(opacity=0)', 'opacity': '0', 'z-index': '2'});
      $slide3.css({'filter': 'alpha(opacity=0)', 'opacity': '0'});
    },6000);}, 1000);
    setTimeout(function() {setInterval(function(){
      $slide1.css({'filter': 'alpha(opacity=0)', 'opacity': '0'});
      $slide2.css({'filter': 'alpha(opacity=100)', 'opacity': '1'});
      $slide3.css({'filter': 'alpha(opacity=0)', 'opacity': '0'});
    },6000);}, 2000);
    setTimeout(function() {setInterval(function(){
      $slide1.css({'filter': 'alpha(opacity=0)', 'opacity': '0'});
      $slide2.css({'filter': 'alpha(opacity=100)', 'opacity': '1', 'z-index': '1'});
      $slide3.css({'filter': 'alpha(opacity=0)', 'opacity': '0', 'z-index': '2'});
    },6000);}, 3000);
    setTimeout(function() {setInterval(function(){
      $slide1.css({'filter': 'alpha(opacity=0)', 'opacity': '0'});
      $slide2.css({'filter': 'alpha(opacity=0)', 'opacity': '0'});
      $slide3.css({'filter': 'alpha(opacity=100)', 'opacity': '1'});
    },6000);}, 4000);
    setTimeout(function() {setInterval(function(){
      $slide1.css({'filter': 'alpha(opacity=0)', 'opacity': '0', 'z-index': '2'});
      $slide2.css({'filter': 'alpha(opacity=0)', 'opacity': '0'});
      $slide3.css({'filter': 'alpha(opacity=100)', 'opacity': '1', 'z-index': '1'});
    },6000);}, 5000);



/*
    setTimeout(function(){
      setInterval(function(){
        $slide2.css({'filter': 'alpha(opacity=0)', 'opacity': '0'});
        console.log('slide2 off');
        setTimeout(function(){
          $slide3.css({'z-index': '2'});
          $slide2.css({'filter': 'alpha(opacity=100)', 'opacity': '1', 'z-index': '1'});
          console.log('slide2 on');
        }, 1000);  
      }, 6000);
    }, 4000);

    setTimeout(function(){
      setInterval(function(){
        $slide3.css({'filter': 'alpha(opacity=0)', 'opacity': '0'});
        console.log('slide3 off');
        setTimeout(function(){
          $slide1.css({'z-index': '2'});
          $slide3.css({'filter': 'alpha(opacity=100)', 'opacity': '1', 'z-index': '1'});
          console.log('slide3 on');
        }, 1000);  
      }, 6000);
    }, 6000);
*/


  });

  $(window).scroll(function(){
    var distances = [];
    $('.slide').each(function(idx){
      dist = Math.abs($(window).scrollTop() - $(this).position().top);
      distances.push(dist);
      
    });
    var min = distances[0];
    var minIdx = 0;
    for (var j=0; j<distances.length; j++) {
      if (distances[j] <= min) {
        min = distances[j];
        minIdx = j;
      }
    }
    $('.iphone-screen').css('opacity','0');
    $('.iphone-screen[data-index=' + (minIdx+1) + ']').css('opacity','1');
  });
});
$(window).resize(function() {
  adjustIphone();
  adjustSlides();
});
