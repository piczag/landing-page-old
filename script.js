var adjustIphone = function() {
  var iphoneHeight = 569;
  var windowHeight = $(window).innerHeight();
  var iphoneMargin = (windowHeight - iphoneHeight)/2;
  $('.iphone-container').css('margin-top', iphoneMargin + 'px');
}
var adjustSlides = function() {
  var windowHeight = $(window).innerHeight() * 1.2;
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