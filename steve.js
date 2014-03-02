//Near
function getNearAxisInfo(iso3, year){
  var queryTask = new esri.tasks.QueryTask("http://maps.grandriver.ca/arcgis/rest/services/CODE/IAMap2/MapServer/0/query");
  var query = new esri.tasks.Query();
  query.returnGeometry = false;
  query.outFields = [
    "NAME","RANK","ISO3","TOTAL","ISO3List", "YEAR"
  ];
  query.where = "ISO3='" + iso3 + "' and  YEAR='" + year + "'";
  //console.log(query.where);
  queryTask.execute(query, showNearResults);
}

function showNearResults (results) {
  var iso3list = "";
  var year;
  var resultCount = results.features.length;
  for (var i = 0; i < resultCount; i++) {
    var featureAttributes = results.features[i].attributes;
    //console.log(featureAttributes.ISO3List);
    iso3list = featureAttributes.ISO3List;
  year = featureAttributes.YEAR;
  }
  executeNearResults(iso3list,year);
}
 
function executeNearResults (iso3list,year) {
  var strs = iso3list.split(",");
  var where = "ISO3 IN (";
  for (var j = 0; j < strs.length; j++) {
    //console.log(strs[j]);
    where = where + "'" + (strs[j]) + "'";
    if(j<strs.length-1){
      where = where + ",";
    }
  }
  where = where + ") and  YEAR='" + year.toString() + "'";

  var queryTask = new esri.tasks.QueryTask("http://maps.grandriver.ca/arcgis/rest/services/CODE/IAMap2/MapServer/0/query");
  var query = new esri.tasks.Query();
  query.returnGeometry = false;
  query.outFields = [
    "NAME","RANK","ISO3","TOTAL","ISO3List"
  ];
  query.where = where;
  //console.log(query.where);
  queryTask.execute(query, showNearResultsChart);
}

function showNearResultsChart (results) {
  var xaxis = [];
  var yaxis = [];
  var resultCount = results.features.length;
  for (var i = 0; i < resultCount; i++) {
    var featureAttributes = results.features[i].attributes;
    //console.log(featureAttributes.ISO3);
    //console.log(featureAttributes.TOTAL);
    xaxis.push(featureAttributes.ISO3);
    yaxis.push(featureAttributes.TOTAL);
  }
  renderNearbyChart(xaxis,yaxis);
}

//Ranking
function getRankingAxisInfo(iso3, year){
  var queryTask = new esri.tasks.QueryTask("http://maps.grandriver.ca/arcgis/rest/services/CODE/IAMap2/MapServer/0/query");
  var query = new esri.tasks.Query();
  query.returnGeometry = false;
  query.outFields = [
    "NAME","RANK","ISO3","TOTAL"
  ];
  query.where = "ISO3='" + iso3 + "' and  YEAR='" + year + "'";
  //console.log(query.where);
  queryTask.execute(query, showRankingResults);
}

function showRankingResults (results) {
  var resultCount = results.features.length;
  for (var i = 0; i < resultCount; i++) {
    var featureAttributes = results.features[i].attributes;
    //console.log(featureAttributes.RANK);
  var rank = featureAttributes.RANK;
  }
  executeRankResults(rank);
}
 
function executeRankResults (rank) {
  var fullRank = rank.toString();
  var rankVal = fullRank.substring(4);
  var ids = [];
  var r = parseInt(rankVal);
  for (var j = -4; j <= 4; j++) {
    var strRank = (r + j).toString();
    //console.log(strRank);
    for(var i=2001;i<=2012;i++){
      var val = i.toString() + strRank; 
      //console.log(val);
      ids.push(val);
    }
  }
  var where = "RANK IN (" + ids.join(",") + ")";
  var queryTask = new esri.tasks.QueryTask("http://maps.grandriver.ca/arcgis/rest/services/CODE/IAMap2/MapServer/0/query");
  var query = new esri.tasks.Query();
  query.returnGeometry = false;
  query.outFields = [
    "NAME","RANK","ISO3","TOTAL"
  ];
  query.where = where;
  //console.log(query.where);
  queryTask.execute(query, showRankResultsChart);
}

function showRankResultsChart (results) {
  var xaxis = [];
  var yaxis = [];
  var labels = [];
  var resultCount = results.features.length;
  for (var i = 0; i < resultCount; i++) {
    var featureAttributes = results.features[i].attributes;
    //console.log(featureAttributes.RANK);
    //console.log(featureAttributes.TOTAL);
    var fullRank = featureAttributes.RANK.toString();
    var rankVal = fullRank.substring(4);
    xaxis.push(parseInt(rankVal));
    //xaxis.push(featureAttributes.ISO3);
    yaxis.push(featureAttributes.TOTAL);
    labels.push(featureAttributes.NAME);
  }
  renderRankingChart(xaxis,yaxis,labels);
}
