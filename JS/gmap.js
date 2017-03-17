$(function () {

  function initMap() {
    var location = new google.maps.LetLng(48.990401, 22.154548);
    var mapCanvas = document.getElementById('mapp');
    var mapOptions = {
      center: location,
      zoom: 16,
      panControl: false,
      mapTypeId: google.maps.mapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
  }

  google.map.events.addDomListener(window, 'load', initMap);
})
