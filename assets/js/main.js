function initMap() {

  var positionEvent = {
    lat: -23.288552,
    lng: -47.651122
  };

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: positionEvent,
    scrollwheel: false,
    streetViewControl: false
  });

  var marker = new google.maps.Marker({
    position: positionEvent,
    map: map
  });
}
