Centrizr
============

A jquery plugin for centering images in their containers.
Container element must have position property set as "relative" or "absolute".

Usage
-------------------

Add HTML Structure

Follow this structure to make the plugin work:

```bash
<div class="image-container">
   <img src="img.png" alt="image">
</div>
```

Connect jQuery and Centrizr

Download jQuery library and connect it to your page, then connect Centrizr:

```bash
<script src="jquery.js"></script>
<script src="centrizr.min.js"></script>
```

Inizialize Centrizr

It's recommented to inizialize the plugin on $(window).load, because this way images can load.
The other way you can choose is usage of excellent David DeSandro's <a href="http://desandro.github.io/imagesloaded/">imagesLoaded</a> plugin.

```bash
<script>
    $(window).on("load", function () {
        $('.image-container').centrizr();
    });
</script>
```

Options
-------------------

```bash
responsive: boolean (true) //if set to true, plugin recalculates image position on $(window).resize();
```






