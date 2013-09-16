;
(function ($) {

    $.fn.centrizr = function (options) {

        var $this = $(this);

        //setting options
        var defaults = {
            responsive: true
        };

        options = $.extend(defaults, options);

        $this.each(function () {
            //define container and img variables
            var $container = $(this);
            var $img = $container.find('img');

            //measure width, height and proportion of container
            var containerWidth = $container.width();
            var containerHeight = $container.height();
            var containerProportion = containerWidth / containerHeight;

            //measure width, height and proportion of image
            var imgWidth = $img.width();
            var imgHeight = $img.height();
            var imageProportion = imgWidth / imgHeight;

            //if no image -  log it
            if (!$img.length) {
                //throw new Error("no image to center");
                console.log("no image to center");
            }

            resetImagesCondition();
            setPositionProperty();
            setImageSizeAndPosition();

            function resetImagesCondition() {
                $img.css({
                    "top": "",
                    "width": "",
                    "marginTop": "",
                    "left": "",
                    "height": "",
                    "marginLeft": ""
                });
            }
            function setPositionProperty() {
                if ($container.css("position") == "static") {
                    $container.css("position", "relative");
                }
                $img.css('position', 'absolute');
            }

            function setImageSizeAndPosition() {
                if (containerProportion <= imageProportion) { //i.e. image is wider than container
                    $img.css({
                        "left": "50%",
                        "height": "100%",
                        "marginLeft": -(imgWidth * (containerHeight / imgHeight) / 2) + "px"
                    });
                } else { //i.e. image is narrower than container
                    $img.css({
                        "top": "50%",
                        "width": "100%",
                        "marginTop": -(imgHeight * (containerWidth / imgWidth) / 2) + "px"
                    });
                }
            }

        });
        if (options.responsive) {
            $(window).on("resize.centrizr", function() {
               //it's important to set "responsive" to false not to come into loop
               optionsForUpdate = $.extend(options, {responsive: false});
               $this.centrizr(optionsForUpdate);
            });
        }
        return this;
    }

    $.fn.centrizr.destroy = function () {
        $(this).css("position", "").find("img").css({
            "top": "",
            "width": "",
            "marginTop": "",
            "left": "",
            "height": "",
            "marginLeft": ""
        });
        return this;
    }

}(jQuery));

