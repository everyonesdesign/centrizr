Centrizr
============

A jquery plugin for centering images in their containers.
Container element must have position property set as "relative" or "absolute".

Usage
-------------------

HTML: 
```bash
<script src="jquery.js"></script>

<div class="image-container">
   <img src="img.png" alt="image">
</div>
```

CSS: 
```bash
.centrizr-container img {
   position: absolute;
   min-height: 100% !important;
   min-width: 0 !important;  
   max-width: none !important;
   max-height: 100% !important;  
   left: 50%;
 }
.centrizr-container img.tall {
   min-height: 0 !important;
   min-width: 100% !important; 
   max-width: 100% !important;
   max-height: none !important;  
   left: 0;
   top: 50%;
 }
```

 JS: 
```bash
 $('.image-container').centrizr();
```

