function initMap() {
  var latitud,longitud;
  var coordsPeru={latitud:-12.0453, longitud: -77.0311};
  var mapa= new google.maps.Map(document.getElementById('mapa'),{
            zoom:4,
            center:coordsPeru
  });

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

  var directionsService= new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;

  function calcRoute(directionsService, directionsDisplay) {
    var request = {
      origin: inputOrigen.value,
      destination: inputDestino.value,
      travelMode: 'DRIVING'
    };
    directionsService.route(request, function(result, status) {
      if (status == 'OK') {
        var distance = result.routes[0].legs[0].distance.value/1000;
        var duration = result.routes[0].legs[0].duration.text;

        tarifa.classList.remove("display-none");
        var cost = distance * 1.75;
        tarifa.appendChild(document.createTextNode(`Costo del viaje: S/. ${parseInt(cost)}`));
        tarifa.appendChild(document.createTextNode(`\n Llegaras en: ${duration} aprox.`));
        directionsDisplay.setDirections(result);
      } else {
        window.alert("No encontramos una ruta.");
      }
    });
  }
  directionsDisplay.setMap(mapa);

  var trazarRuta = function(e) {
    e.preventDefault();
    calcRoute(directionsService, directionsDisplay);
  }

  window.addEventListener('load',miUbicacion);
  document.getElementById('trazarRuta').addEventListener('click',trazarRuta);
}
