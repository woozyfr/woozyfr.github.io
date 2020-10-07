let mymap = L.map('mapid').setView([13.7542529, 100.493087], 3);
let mapSource = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";
// let mapSource = "http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png";


L.tileLayer(mapSource, {
  attribution: '',
  maxZoom: 18,
  tileSize: 512,
  zoomOffset: -1,
}).addTo(mymap)


for (var i in countriesV2) {
  console.log(countriesV2);
  L.marker([countriesV2[i].gps.latitude,countriesV2[i].gps.longitude]).addTo(mymap).bindPopup('<h3>'+ countriesV2[i].name+'</h3>.<p>'+countriesV2[i].slide.text+'</p><div class="center"><a href="'+countriesV2[i].url+'" class="btn btn-default">En Voir plus</a></div>');
}






