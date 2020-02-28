(function initMap() {
    
    mapboxgl.accessToken = 'pk.eyJ1IjoianVhbGluMjg5IiwiYSI6ImNrNzNuYnV3ZTBkMmkzbHFxcjNlNnhzZnMifQ.dOEEFE00vYryzLt-Go6W6A';
    var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/light-v10', //hosted style id
    center: [-89.38, 39], // starting position
    zoom: 3 // starting zoom
    });

    map.scrollZoom.disable();
    map.addControl(new mapboxgl.NavigationControl());

    $(document).ready(function() {
        $('#projectMap').DataTable();
    } );

})()
    
    
   