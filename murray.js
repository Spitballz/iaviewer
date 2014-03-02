
var totalchart = null;
var rankingchart = null;
var nearbychart = null;

	function getCountryTotals(iso3){		

			if (iso3 != ""){
				var queryTask, query;
				queryTask = new esri.tasks.QueryTask("http://maps.grandriver.ca/arcgis/rest/services/CODE/IAMap2/MapServer/0");

				//build query filter
				query = new esri.tasks.Query();
				query.returnGeometry = false;
				//query.geometry = evt.mapPoint;
				query.outFields = ["TOTAL","Recipient","YEAR"];
				query.where = "ISO3 = '" + iso3 + "'";
				query.orderByFields = ["YEAR"];

				queryTask.execute(query, function(resultfeatures){
					var yearArray = [];
					var totalArray = [];
					var i;
					var results = resultfeatures.features;
					for (i=0; i<results.length; i++) {
						var feature = results[i];
						yearArray.push(feature.attributes.YEAR);
						totalArray.push(feature.attributes.TOTAL);
					}
					renderTotalChart(yearArray,totalArray);
				});	
			}
		}
		
	function getFlag(iso2, country_name) { 
		var fldiv = dojo.byId('flagDiv');
		fldiv.innerHTML = "<img src='./img/" + iso2 + ".png' alt=''/>" + country_name;
	}		

	function renderTotalChart(yearArray,totalArray){
	    // Define the data
	    if(totalArray.length == 0) return;
		var chartData = totalArray;
 
		// Create the chart within it's "holding" node
		if (!totalchart){
			totalchart = new dojox.charting.Chart2D("totalchartNode", {title: "Canadian Assistance 2001-2012",titleFont: "normal normal bold 12pt Arial",titleGap: 15});
			totalchart.setTheme(dojox.charting.themes.MiamiNice);
		 
			// Add the only/default plot
			totalchart.addPlot("default", {
				type: dojox.charting.plot2d.Columns,
				markers: true,
				gap: 5
			});
			
			var labelsjson =  [];
			var i;
			for ( i=0; i<yearArray.length; i++) {
				var thelabel = {};
				thelabel.value = i+1;
				thelabel.text = yearArray[i];
				labelsjson.push(thelabel);
			}
		 
			//totalchart.addAxis("x", {labels: labelsjson});	//fix bug when no data for all years
			totalchart.addAxis("x", {labels: [{value: 1, text: "2001"}, {value: 2, text: "2002"},
				{value: 3, text: "2003"}, {value: 4, text: "2004"},
				{value: 5, text: "2005"}, {value: 6, text: "2006"},
				{value: 7, text: "2007"}, {value: 8, text: "2008"},
				{value: 9, text: "2009"}, {value: 10, text: "2010"},
				{value: 11, text: "2011"}, {value: 12, text: "2012"}]
			});	
			totalchart.addAxis("y", { vertical: true, fixLower: "major", fixUpper: "major" });
		 
			// Add the series of data
			totalchart.addSeries("Assistance History",chartData);
			
			var tip = new dojox.charting.action2d.Tooltip(totalchart, "default", {
			    text : function(o) {
			        return (dojo.currency.format(o.y, {currency : "USD", places : 0}));
			    }
			});
			//new dojox.charting.action2d.Highlight(totalchart,"default");
			
		
		}else{
			totalchart.updateSeries("Assistance History",chartData);
		}
	 
		// Render the chart!
		$("#totalchartNode").show();
		totalchart.render();
	}
	
	function renderRankingChart(yearArray,totalArray, labelArray){
	    // Define the data
		//var chartData = totalArray;
	    if(totalArray.length == 0) return;

		var y;
		var newarray = [];
		for (y=0; y<totalArray.length; y++) {
			var v = {};
			v.y = totalArray[y];
			v.x = yearArray[y];
			v.tooltip = labelArray[y] + "\n" + dojo.currency.format(totalArray[y],{currency: "USD"});
			newarray.push(v);
		}		
		
		var chartData = newarray;

		//hack
		//dojo.empty("rankingChartNode");
	 
		// Create the chart within it's "holding" node
		if (rankingchart){
			rankingchart.destroy();
		}
		rankingchart = new dojox.charting.Chart2D("rankingChartNode", {title: "Canadian Assistance Ranking",titleFont: "normal normal bold 12pt Arial",titleGap: 15});
		rankingchart.setTheme(dojox.charting.themes.MiamiNice);
	 
		// Add the only/default plot
		rankingchart.addPlot("default", {
			type: dojox.charting.plot2d.Lines,
			markers: true
		});
		
		var labelsjson =  [];
		var i;
		for ( i=0; i<yearArray.length; i++) {
			var thelabel = {};
			thelabel.value = i+1;
			thelabel.text = yearArray[i];
			labelsjson.push(thelabel);
		}

		rankingchart.addAxis("x", {labels: labelsjson});		
		rankingchart.addAxis("y", { vertical: true, fixLower: "major", fixUpper: "major" });
	 
		// Add the series of data
		rankingchart.addSeries("Assistance Ranking",chartData);
		
		var tip = new dojox.charting.action2d.Tooltip(rankingchart, "default");
		// var tip = new dojox.charting.action2d.Tooltip(rankingchart, "default", {
		//     text : function(o) {
		//         return (dojo.currency.format(o.y, {currency : "USD", places : 0}));
		//     }
		// });

		var h = new dojox.charting.action2d.Highlight(rankingchart,"default");

	 
		// Render the chart!
		$("#rankingChartNode").show();
		rankingchart.render();
	}	
	
	function renderNearbyChart(yearArray,totalArray){
	    if(totalArray.length == 0) return;

	    // Define the data
		var chartData = totalArray;
		//hack
		//dojo.empty("nearbyChartNode");
	 
		// Create the chart within it's "holding" node
		if (nearbychart){
			nearbychart.destroy();
		}
		nearbychart = new dojox.charting.Chart2D("nearbyChartNode", {title: "Assistance to Near by Countries ",titleFont: "normal normal bold 12pt Arial",titleGap: 15});
		nearbychart.setTheme(dojox.charting.themes.MiamiNice);
	 
		// Add the only/default plot
		nearbychart.addPlot("default", {
			type: dojox.charting.plot2d.Lines,
			markers: true
		});
		
		var labelsjson =  [];
		var i;
		for (i=0; i<yearArray.length; i++) {
			var thelabel = {};
			thelabel.value = i+1;
			thelabel.text = yearArray[i];
			labelsjson.push(thelabel);
		}

		nearbychart.addAxis("x", {labels: labelsjson});		
		nearbychart.addAxis("y", { vertical: true, fixLower: "major", fixUpper: "major" });
	 
		// Add the series of data
		nearbychart.addSeries("Assistance Ranking",chartData);
		
		//var tip = new dojox.charting.action2d.Tooltip(nearbychart, "default");
		var tip = new dojox.charting.action2d.Tooltip(nearbychart, "default", {
		    text : function(o) {
		        return (dojo.currency.format(o.y, {currency : "USD", places : 0}));
		    }
		});


		var h = new dojox.charting.action2d.Highlight(nearbychart,"default");
			
	 
		// Render the chart!
		$("#nearbyChartNode").show();
		nearbychart.render();
	}	
	
    

		



