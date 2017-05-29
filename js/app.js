function initMap() {
  var latitud,longitud;
  var mapa= new google.maps.Map(document.getElementById('mapa'));

  var inputOrigen = document.getElementById('origen');
  var inputDestino = document.getElementById('destino');

  new google.maps.places.Autocomplete(inputOrigen);
  new google.maps.places.Autocomplete(inputDestino);

  function miUbicacion(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(showMarker);
    }else {
      alert("Your browser no support geolocation API");
    }
  }
  function showMarker(position){
    latitud = position.coords.latitude;
    longitud = position.coords.longitude;

    var marker = new google.maps.Marker({
          position: {lat:latitud, lng:longitud},
          map: mapa
    });
    mapa.setZoom(18);
    mapa.setCenter({lat:latitud, lng:longitud});
  }

  window.addEventListener('load',miUbicacion);
}
