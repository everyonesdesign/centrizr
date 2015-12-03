Centrizr
============

A jquery plugin for centering images in their containers.
Container element must have position property set as "relative" or "absolute".

Usage
-------------------

###1. Add HTML Structure

Follow this structure to make the plugin work:

```html
<div class="image-container">
   <img src="img.png" alt="image">
</div>
```

###2. Connect jQuery and Centrizr

Download jQuery library and connect it to your page, then connect Centrizr:

```html
<script src="jquery.js"></script>
<script src="centrizr.min.js"></script>
```

###3. Inizialize Centrizr

It's recommented to inizialize the plugin on $(window).load, because this way images can load.
The other way you can choose is usage of excellent David DeSandro's <a href="http://desandro.github.io/imagesloaded/">imagesLoaded</a> plugin.

```html
<script>
    $(window).on("load", function () {
        $('.image-container').centrizr();
    });
</script>
```

Options
-------------------

```js
responsive: boolean (true) //if set to true, plugin will fit new size on $(window).resize();
```

Methods
-------------------
```js
$(selector).centrizr.destroy() //returns elements to their initial state
```

Notes
-------------------
If you want to manually recalculate the position of the images, simply use $(selector).centrizr() method. If the plugin is already initialized, the method will reinizialize it.
