Steps:
1. Insert the following into the CSS file. The "top 90" can be changed to "bottom 10" or anywhere else.It is currently below the navigation icons.


#about-Div {
    display: block;
    position: absolute;
    top:90px;
    margin-left:15px;
    z-index: 201;
    background: rgba(255,255,255,0.7);
}



2. Insert the following into the index.html file (just inside the id="mapDiv" at the very top or bottom):
Inside this: <div id="mapDiv" class="max-everything">
Add this:

<div id="about-Div" class="panel panel-default">
  <div><a href="about.html">About</a></div>
</div>


3. The page: There is an HTML page and PNG image in the ZIP. Html page needs to be in same directory as index.html. Image should go there to (or reference needs to be updated in about.html, line 44.
-page: about.html
-image: IALogo.png