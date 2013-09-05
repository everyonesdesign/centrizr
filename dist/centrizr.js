;(function($) {


$.fn.centrizr = function() {

  var $container = $(this);

  $.container.addClass('centrizr-container');
  $container.each(function() {
      var $img = $(this).find('img');
      var halfWidth = $img.width()/2;
      var parentWidth = $container.width();
      
      if ($img.width()>parentWidth) {
        $img.css('margin-left',-halfWidth + 'px');
      } else {
        $img.addClass('tall');
        var halfHeight = $(this).height()/2;
        $img.css('margin-top',-halfHeight + 'px');
      }
      $img.animate({'opacity': 1}, 200);
    });

  });

}

}(jQuery));

