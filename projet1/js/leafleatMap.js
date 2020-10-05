let mymap = L.map('mapid').setView([13.7542529, 100.493087], 3);
let mapSource = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";
// let mapSource = "http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png";


L.tileLayer(mapSource, {
  attribution: '',
  maxZoom: 18,
  tileSize: 512,
  zoomOffset: -1,
}).addTo(mymap)

countriesDatabase.forEach(function (item) {
L.marker([item.latitude,item.longitude]).addTo(mymap).bindPopup('<h3>'+item.name+'</h3>.<p>'+item.text+'</p><div class="center"><a href="'+item.url+'" class="btn btn-default">En Voir plus</a></div>');
});




