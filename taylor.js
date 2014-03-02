var countries = [{"NAME":"Antigua and Barbuda","ISO3":"ATG"},{"NAME":"Algeria","ISO3":"DZA"},{"NAME":"Azerbaijan","ISO3":"AZE"},{"NAME":"Albania","ISO3":"ALB"},{"NAME":"Armenia","ISO3":"ARM"},{"NAME":"Angola","ISO3":"AGO"},{"NAME":"American Samoa","ISO3":"ASM"},{"NAME":"Argentina","ISO3":"ARG"},{"NAME":"Australia","ISO3":"AUS"},{"NAME":"Bahrain","ISO3":"BHR"},{"NAME":"Barbados","ISO3":"BRB"},{"NAME":"Bermuda","ISO3":"BMU"},{"NAME":"Bahamas","ISO3":"BHS"},{"NAME":"Bangladesh","ISO3":"BGD"},{"NAME":"Belize","ISO3":"BLZ"},{"NAME":"Bosnia and Herzegovi","ISO3":"BIH"},{"NAME":"Bolivia","ISO3":"BOL"},{"NAME":"Burma","ISO3":"MMR"},{"NAME":"Benin","ISO3":"BEN"},{"NAME":"Solomon Islands","ISO3":"SLB"},{"NAME":"Brazil","ISO3":"BRA"},{"NAME":"Bulgaria","ISO3":"BGR"},{"NAME":"Brunei Darussalam","ISO3":"BRN"},{"NAME":"Canada","ISO3":"CAN"},{"NAME":"Cambodia","ISO3":"KHM"},{"NAME":"Sri Lanka","ISO3":"LKA"},{"NAME":"Congo","ISO3":"COG"},{"NAME":"Democratic Republic ","ISO3":"COD"},{"NAME":"Burundi","ISO3":"BDI"},{"NAME":"China","ISO3":"CHN"},{"NAME":"Afghanistan","ISO3":"AFG"},{"NAME":"Bhutan","ISO3":"BTN"},{"NAME":"Chile","ISO3":"CHL"},{"NAME":"Cayman Islands","ISO3":"CYM"},{"NAME":"Cameroon","ISO3":"CMR"},{"NAME":"Chad","ISO3":"TCD"},{"NAME":"Comoros","ISO3":"COM"},{"NAME":"Colombia","ISO3":"COL"},{"NAME":"Costa Rica","ISO3":"CRI"},{"NAME":"Central African Repu","ISO3":"CAF"},{"NAME":"Cuba","ISO3":"CUB"},{"NAME":"Cape Verde","ISO3":"CPV"},{"NAME":"Cook Islands","ISO3":"COK"},{"NAME":"Cyprus","ISO3":"CYP"},{"NAME":"Denmark","ISO3":"DNK"},{"NAME":"Djibouti","ISO3":"DJI"},{"NAME":"Dominica","ISO3":"DMA"},{"NAME":"Dominican Republic","ISO3":"DOM"},{"NAME":"Ecuador","ISO3":"ECU"},{"NAME":"Egypt","ISO3":"EGY"},{"NAME":"Ireland","ISO3":"IRL"},{"NAME":"Equatorial Guinea","ISO3":"GNQ"},{"NAME":"Estonia","ISO3":"EST"},{"NAME":"Eritrea","ISO3":"ERI"},{"NAME":"El Salvador","ISO3":"SLV"},{"NAME":"Ethiopia","ISO3":"ETH"},{"NAME":"Austria","ISO3":"AUT"},{"NAME":"Czech Republic","ISO3":"CZE"},{"NAME":"French Guiana","ISO3":"GUF"},{"NAME":"Finland","ISO3":"FIN"},{"NAME":"Fiji","ISO3":"FJI"},{"NAME":"Falkland Islands (Ma","ISO3":"FLK"},{"NAME":"Micronesia, Federate","ISO3":"FSM"},{"NAME":"French Polynesia","ISO3":"PYF"},{"NAME":"France","ISO3":"FRA"},{"NAME":"Gambia","ISO3":"GMB"},{"NAME":"Gabon","ISO3":"GAB"},{"NAME":"Georgia","ISO3":"GEO"},{"NAME":"Ghana","ISO3":"GHA"},{"NAME":"Grenada","ISO3":"GRD"},{"NAME":"Greenland","ISO3":"GRL"},{"NAME":"Germany","ISO3":"DEU"},{"NAME":"Guam","ISO3":"GUM"},{"NAME":"Greece","ISO3":"GRC"},{"NAME":"Guatemala","ISO3":"GTM"},{"NAME":"Guinea","ISO3":"GIN"},{"NAME":"Guyana","ISO3":"GUY"},{"NAME":"Haiti","ISO3":"HTI"},{"NAME":"Honduras","ISO3":"HND"},{"NAME":"Croatia","ISO3":"HRV"},{"NAME":"Hungary","ISO3":"HUN"},{"NAME":"Iceland","ISO3":"ISL"},{"NAME":"India","ISO3":"IND"},{"NAME":"Iran (Islamic Republ","ISO3":"IRN"},{"NAME":"Israel","ISO3":"ISR"},{"NAME":"Italy","ISO3":"ITA"},{"NAME":"Cote d'Ivoire","ISO3":"CIV"},{"NAME":"Iraq","ISO3":"IRQ"},{"NAME":"Japan","ISO3":"JPN"},{"NAME":"Jamaica","ISO3":"JAM"},{"NAME":"Jordan","ISO3":"JOR"},{"NAME":"Kenya","ISO3":"KEN"},{"NAME":"Kyrgyzstan","ISO3":"KGZ"},{"NAME":"Korea, Democratic Pe","ISO3":"PRK"},{"NAME":"Kiribati","ISO3":"KIR"},{"NAME":"Korea, Republic of","ISO3":"KOR"},{"NAME":"Kuwait","ISO3":"KWT"},{"NAME":"Kazakhstan","ISO3":"KAZ"},{"NAME":"Lao People's Democra","ISO3":"LAO"},{"NAME":"Lebanon","ISO3":"LBN"},{"NAME":"Latvia","ISO3":"LVA"},{"NAME":"Belarus","ISO3":"BLR"},{"NAME":"Lithuania","ISO3":"LTU"},{"NAME":"Liberia","ISO3":"LBR"},{"NAME":"Slovakia","ISO3":"SVK"},{"NAME":"Liechtenstein","ISO3":"LIE"},{"NAME":"Libyan Arab Jamahiri","ISO3":"LBY"},{"NAME":"Madagascar","ISO3":"MDG"},{"NAME":"Martinique","ISO3":"MTQ"},{"NAME":"Mongolia","ISO3":"MNG"},{"NAME":"Montserrat","ISO3":"MSR"},{"NAME":"The former Yugoslav ","ISO3":"MKD"},{"NAME":"Mali","ISO3":"MLI"},{"NAME":"Morocco","ISO3":"MAR"},{"NAME":"Mauritius","ISO3":"MUS"},{"NAME":"Mauritania","ISO3":"MRT"},{"NAME":"Malta","ISO3":"MLT"},{"NAME":"Oman","ISO3":"OMN"},{"NAME":"Maldives","ISO3":"MDV"},{"NAME":"Mexico","ISO3":"MEX"},{"NAME":"Malaysia","ISO3":"MYS"},{"NAME":"Mozambique","ISO3":"MOZ"},{"NAME":"Malawi","ISO3":"MWI"},{"NAME":"New Caledonia","ISO3":"NCL"},{"NAME":"Niue","ISO3":"NIU"},{"NAME":"Niger","ISO3":"NER"},{"NAME":"Aruba","ISO3":"ABW"},{"NAME":"Anguilla","ISO3":"AIA"},{"NAME":"Belgium","ISO3":"BEL"},{"NAME":"Hong Kong","ISO3":"HKG"},{"NAME":"Northern Mariana Isl","ISO3":"MNP"},{"NAME":"Faroe Islands","ISO3":"FRO"},{"NAME":"Andorra","ISO3":"AND"},{"NAME":"Gibraltar","ISO3":"GIB"},{"NAME":"Isle of Man","ISO3":"IMN"},{"NAME":"Luxembourg","ISO3":"LUX"},{"NAME":"Macau","ISO3":"MAC"},{"NAME":"Monaco","ISO3":"MCO"},{"NAME":"Palestine","ISO3":"PSE"},{"NAME":"Montenegro","ISO3":"MNE"},{"NAME":"Mayotte","ISO3":"MYT"},{"NAME":"Åland Islands","ISO3":"ALA"},{"NAME":"Norfolk Island","ISO3":"NFK"},{"NAME":"Cocos (Keeling) Isla","ISO3":"CCK"},{"NAME":"Antarctica","ISO3":"ATA"},{"NAME":"Bouvet Island","ISO3":"BVT"},{"NAME":"French Southern and ","ISO3":"ATF"},{"NAME":"Heard Island and McD","ISO3":"HMD"},{"NAME":"British Indian Ocean","ISO3":"IOT"},{"NAME":"Christmas Island","ISO3":"CXR"},{"NAME":"United States Minor ","ISO3":"UMI"},{"NAME":"Vanuatu","ISO3":"VUT"},{"NAME":"Nigeria","ISO3":"NGA"},{"NAME":"Netherlands","ISO3":"NLD"},{"NAME":"Norway","ISO3":"NOR"},{"NAME":"Nepal","ISO3":"NPL"},{"NAME":"Nauru","ISO3":"NRU"},{"NAME":"Suriname","ISO3":"SUR"},{"NAME":"Nicaragua","ISO3":"NIC"},{"NAME":"New Zealand","ISO3":"NZL"},{"NAME":"Paraguay","ISO3":"PRY"},{"NAME":"Peru","ISO3":"PER"},{"NAME":"Pakistan","ISO3":"PAK"},{"NAME":"Poland","ISO3":"POL"},{"NAME":"Panama","ISO3":"PAN"},{"NAME":"Portugal","ISO3":"PRT"},{"NAME":"Papua New Guinea","ISO3":"PNG"},{"NAME":"Guinea-Bissau","ISO3":"GNB"},{"NAME":"Qatar","ISO3":"QAT"},{"NAME":"Reunion","ISO3":"REU"},{"NAME":"Romania","ISO3":"ROU"},{"NAME":"Republic of Moldova","ISO3":"MDA"},{"NAME":"Philippines","ISO3":"PHL"},{"NAME":"Puerto Rico","ISO3":"PRI"},{"NAME":"Russia","ISO3":"RUS"},{"NAME":"Rwanda","ISO3":"RWA"},{"NAME":"Saudi Arabia","ISO3":"SAU"},{"NAME":"Saint Kitts and Nevi","ISO3":"KNA"},{"NAME":"Seychelles","ISO3":"SYC"},{"NAME":"South Africa","ISO3":"ZAF"},{"NAME":"Lesotho","ISO3":"LSO"},{"NAME":"Botswana","ISO3":"BWA"},{"NAME":"Senegal","ISO3":"SEN"},{"NAME":"Slovenia","ISO3":"SVN"},{"NAME":"Sierra Leone","ISO3":"SLE"},{"NAME":"Singapore","ISO3":"SGP"},{"NAME":"Somalia","ISO3":"SOM"},{"NAME":"Spain","ISO3":"ESP"},{"NAME":"Saint Lucia","ISO3":"LCA"},{"NAME":"Sudan","ISO3":"SDN"},{"NAME":"Sweden","ISO3":"SWE"},{"NAME":"Syrian Arab Republic","ISO3":"SYR"},{"NAME":"Switzerland","ISO3":"CHE"},{"NAME":"Trinidad and Tobago","ISO3":"TTO"},{"NAME":"Thailand","ISO3":"THA"},{"NAME":"Tajikistan","ISO3":"TJK"},{"NAME":"Tokelau","ISO3":"TKL"},{"NAME":"Tonga","ISO3":"TON"},{"NAME":"Togo","ISO3":"TGO"},{"NAME":"Sao Tome and Princip","ISO3":"STP"},{"NAME":"Tunisia","ISO3":"TUN"},{"NAME":"Turkey","ISO3":"TUR"},{"NAME":"Tuvalu","ISO3":"TUV"},{"NAME":"Turkmenistan","ISO3":"TKM"},{"NAME":"United Republic of T","ISO3":"TZA"},{"NAME":"Uganda","ISO3":"UGA"},{"NAME":"United Kingdom","ISO3":"GBR"},{"NAME":"Ukraine","ISO3":"UKR"},{"NAME":"United States","ISO3":"USA"},{"NAME":"Burkina Faso","ISO3":"BFA"},{"NAME":"Uruguay","ISO3":"URY"},{"NAME":"Uzbekistan","ISO3":"UZB"},{"NAME":"Saint Vincent and th","ISO3":"VCT"},{"NAME":"Venezuela","ISO3":"VEN"},{"NAME":"British Virgin Islan","ISO3":"VGB"},{"NAME":"Viet Nam","ISO3":"VNM"},{"NAME":"United States Virgin","ISO3":"VIR"},{"NAME":"Namibia","ISO3":"NAM"},{"NAME":"Wallis and Futuna Is","ISO3":"WLF"},{"NAME":"Samoa","ISO3":"WSM"},{"NAME":"Swaziland","ISO3":"SWZ"},{"NAME":"Yemen","ISO3":"YEM"},{"NAME":"Zambia","ISO3":"ZMB"},{"NAME":"Zimbabwe","ISO3":"ZWE"},{"NAME":"Indonesia","ISO3":"IDN"},{"NAME":"Guadeloupe","ISO3":"GLP"},{"NAME":"Netherlands Antilles","ISO3":"ANT"},{"NAME":"United Arab Emirates","ISO3":"ARE"},{"NAME":"Timor-Leste","ISO3":"TLS"},{"NAME":"Pitcairn Islands","ISO3":"PCN"},{"NAME":"Palau","ISO3":"PLW"},{"NAME":"Marshall Islands","ISO3":"MHL"},{"NAME":"Saint Pierre and Miq","ISO3":"SPM"},{"NAME":"Saint Helena","ISO3":"SHN"},{"NAME":"San Marino","ISO3":"SMR"},{"NAME":"Turks and Caicos Isl","ISO3":"TCA"},{"NAME":"Western Sahara","ISO3":"ESH"},{"NAME":"Serbia","ISO3":"SRB"},{"NAME":"Holy See (Vatican Ci","ISO3":"VAT"},{"NAME":"Svalbard","ISO3":"SJM"},{"NAME":"Saint Martin","ISO3":"MAF"},{"NAME":"Saint Barthelemy","ISO3":"BLM"},{"NAME":"Guernsey","ISO3":"GGY"},{"NAME":"Jersey","ISO3":"JEY"},{"NAME":"South Georgia South ","ISO3":"SGS"},{"NAME":"Taiwan","ISO3":"TWN"}];
var _typeahead = null;

function initTaylor(){

	map.on("click", function(event){
		_typeahead.typeahead("val","searching the map...");
		var query = new esri.tasks.Query();
		var queryTask = new esri.tasks.QueryTask("http://maps.grandriver.ca/arcgis/rest/services/CODE/IAMap2/MapServer/1");
		query.geometry = event.mapPoint;
		query.spatialRelationship = esri.tasks.Query.SPATIAL_REL_WITHIN;
		query.outSpatialReference = {wkid:102100}; 
		query.returnGeometry = true;
		query.outFields = ["*"];
		queryTask.execute(query, addPointsToMap);
	});

	var country = new Bloodhound({
	  datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.NAME); },
	  queryTokenizer: Bloodhound.tokenizers.whitespace,
	  local: countries
	});

	country.initialize();
	 
	_typeahead = $('.typeahead').typeahead({
			highlight: true,
			autoselect: true,
			minLength: 1
		}
		,{
			name: "NAME",
			displayKey: 'NAME',
			valueKey: 'NAME',
			source: country.ttAdapter()
	}).bind('typeahead:selected', function(obj, selected, name) {
		search();
	    return false;
	}).off('blur');
}

function search(){
	var val = _.where(countries, {NAME: _typeahead.typeahead("val")});
	if(val[0]){

		$("#searchButton").button("loading");

		var query = new esri.tasks.Query();
		var queryTask = new esri.tasks.QueryTask("http://maps.grandriver.ca/arcgis/rest/services/CODE/IAMap2/MapServer/1");
		query.where = "ISO3 = '" + val[0].ISO3  + "'";
		query.outSpatialReference = {wkid:102100}; 
		query.returnGeometry = true;
		query.outFields = ["*"];
		queryTask.execute(query, addPointsToMap);
	}
	else{
		$("#searchButton").button("reset");
	}
}

var _iso3 = "";

function addPointsToMap(features){
	try{
		features.features[0].setSymbol(new esri.symbol.SimpleFillSymbol(esri.symbol.SimpleFillSymbol.STYLE_SOLID,
		    new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,
		    new dojo.Color("#0088CC"), 2), new dojo.Color([160, 160, 160, 0.50])));
		map.graphics.clear();
	    map.graphics.add(features.features[0]);
	    _typeahead.typeahead("val",features.features[0].attributes.NAME);
	    _typeahead.typeahead("close");
	    var point = new esri.geometry.Point(parseFloat(features.features[0].attributes.LON),
	    	parseFloat(features.features[0].attributes.LAT), new esri.SpatialReference({ wkid: 4326 }));

	    var geom = esri.geometry.geographicToWebMercator(point);
	    map.centerAndZoom(geom,3);

	    _iso3 = features.features[0].attributes.ISO3;

		if (totalchart) $("#totalchartNode").hide();
		if (rankingchart) $("#rankingChartNode").hide();
		if (nearbychart) $("#nearbyChartNode").hide();

		if(!isPanelOpen){
			menuCollapseExpand();
		}
	    getFlag(features.features[0].attributes.ISO2, features.features[0].attributes.NAME);
	    handleTabChange();
	}
	catch(e){
		console.log("search error: " + e.message);
	}
	
	$("#searchButton").button("reset");
}

function clearMap(){
	map.graphics.clear();
	_typeahead.typeahead("val","");
}