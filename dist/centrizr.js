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

            setPositionProperty();
            resetPositionProperty();
            setImageSizeAndPosition();

            //sets initial required styles for container and image
            function setPositionProperty() {
                if ($container.css("position") == "static") {
                    $container.css("position", "relative");
                }
                $container.css("overflow", "hidden");
                $img.css({
                    "position": "absolute",
                    "max-width": "none",
                    "min-width": 0
                });
            }

            //resets size of image for proportion better calculation
            function resetPositionProperty() {
                $img.css({
                    "left": "auto",
                    "height": "auto",
                    "marginLeft": 0,
                    "top": "auto",
                    "width": "auto",
                    "marginTop": 0
                });
            }

            //positions image according to it's size
            function setImageSizeAndPosition() {
                if (containerProportion <= imageProportion) { //i.e. image is wider than container
                    $img.css({
                        "left": "50%",
                        "height": "100%",
                        "marginLeft": -(imgWidth * (containerHeight / imgHeight) / 2) + "px",
                        "top": 0,
                        "width": "auto",
                        "marginTop": 0
                    });
                } else { //i.e. image is narrower than container
                    $img.css({
                        "top": "50%",
                        "width": "100%",
                        "marginTop": -(imgHeight * (containerWidth / imgWidth) / 2) + "px",
                        "left": 0,
                        "height": "auto",
                        "marginLeft": 0
                    });
                }
            }

        });

        //reinitialize on $(window).resize if responsive is set to true
        if (options.responsive) {
            $(window).on("resize.centrizr", function () {
                //it's important to set "responsive" to false not to come into loop
                var optionsForUpdate = $.extend(options, {responsive: false});
                $this.centrizr(optionsForUpdate);
            });
        }

        return this;
    };

    //destroy public method
    $.fn.centrizr.destroy = function () {
        $(this).css({
            "position": "",
            "overflow": ""
        }).find("img").css({
            "top": "",
            "width": "",
            "marginTop": "",
            "left": "",
            "height": "",
            "marginLeft": ""
        });
        $(window).unbind(".centrizr");
        return this;
    }

}(jQuery));

