;
(function ($) {


    $.fn.centrizr = function () {

        var $container = $(this);

        $container.addClass('centrizr-container').each(function () {
            var $img = $(this).find('img');
            var halfWidth;
            var halfHeight;
            var parentWidth = $container.width();
            $img.addClass('wide');

            if ($img.width() > parentWidth) {
                halfWidth = $img.width() / 2;
                $img.css('margin-left', -halfWidth + 'px');
            } else {
                $img.removeClass('wide').addClass('tall');
                halfHeight = $img.height() / 2;
                $img.css('margin-top', -halfHeight + 'px');
            }
            $img.animate({'opacity': 1}, 200);
        });

    }

}(jQuery));

