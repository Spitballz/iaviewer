var map;
var isPanelOpen = false;
var map_year = "2006"
var current_tab = "year";

require(["esri/map", "esri/layers/ArcGISDynamicMapServiceLayer", "esri/dijit/Geocoder", "esri/TimeExtent",
    "esri/layers/ImageParameters", "esri/tasks/query", "esri/tasks/QueryTask","dojox/charting/Chart2D",
    "dojox/charting/themes/MiamiNice", "dojox/charting/plot2d/Columns","dojox/charting/plot2d/Lines",
    "dojox/charting/action2d/Highlight", "dojox/charting/action2d/Tooltip", "dojo/currency",
    "dojo/dom", "dojo/on", "dojo/parser", "dojo/domReady!"], 
function(Map, ArcGISDynamicMapServiceLayer, Geocoder, TimeExtent, ImageParameters, Query, QueryTask, 
Chart, theme, ColumnsPlot, LinesPlot, Highlight, Tooltip, Currency, dom, on, parser) {

    parser.parse();
    var timeExtent = new TimeExtent();
    var IALayer;
    //Setup Map
    map = new Map("mapDiv", {
        zoom: 3,
        basemap: "topo",
        logo:false,
        center: [-10, 35], 
        sliderPosition: "top-left",
        minZoom: 3, maxZoom: 19,
        wrapAround180: true
    });

    //Setup Dynamic IALayers
    var imageParameters = new ImageParameters();
    imageParameters.format = "png24";
    IALayer = new ArcGISDynamicMapServiceLayer("http://maps.grandriver.ca/arcgis/rest/services/CODE/IAMap2/MapServer", {
      "opacity" : 0.75, "imageParameters" : imageParameters
    });
    
    map.addLayer(IALayer); 
    MapSetTime(map_year);

    initTaylor();
    
    //Year Slider
    $('#timeSlider').slider().on('slide', function(ev){
        $('#timeSliderValue').html(ev.value);
    });
    $('#timeSlider').slider().on('slideStop', function(ev){
        MapSetTime(ev.value);
    });
    function MapSetTime(year) {
        map_year = year;
        handleTabChange(current_tab);
        timeExtent.startTime = new Date(year, 0, 3, 0, 0, 0, 0);
        timeExtent.endTime = new Date(year, 0, 3, 0, 0, 0, 0);
        map.setTimeExtent(timeExtent);
    }
});

function menuCollapseExpand() {    // Show/hide extra menu section
    var divObject = document.getElementById("menu");
    var currentCssClass = divObject.className;
    if (divObject.className == "panel panel-default menu-Visible") {divObject.className = "panel panel-default menu-Hidden";}
    else {divObject.className = "panel panel-default menu-Visible";}

    $("#togglePanel").toggleClass("glyphicon glyphicon-chevron-up glyphicon glyphicon-chevron-down");
    if(isPanelOpen){
        $("#togglePanel").prop("title", "click to show panel");
        isPanelOpen = false;
    }
    else{
        $("#togglePanel").prop("title", "click to hide panel");   
        isPanelOpen = true;
    }
}

function handleTabChange(tab){
    if(_iso3 == "") return;
    if(map_year == "") return;
    var map_changed = (tab ? true : false);
    if(!tab) tab = current_tab;
    //console.log("running chart: " + tab);
    switch(tab){
        case "rank":
            getRankingAxisInfo(_iso3, map_year);
            break;
        case "near":
            getNearAxisInfo(_iso3, map_year);
            break;
        case "year":
            if(!map_changed) {
                getCountryTotals(_iso3);
            }
            break;
    }
    current_tab = tab;
}

