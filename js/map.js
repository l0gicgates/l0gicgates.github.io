(function initMap() {
    $(document).ready(function () {
        $('#projectMap').DataTable({"scrollX": true, "pageLength": 5} );


        mapboxgl.accessToken = 'pk.eyJ1IjoianVhbGluMjg5IiwiYSI6ImNrNzNuYnV3ZTBkMmkzbHFxcjNlNnhzZnMifQ.dOEEFE00vYryzLt-Go6W6A';
        var map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/mapbox/light-v10', //hosted style id
            center: [-89.38, 39], // starting position
            zoom: 3 // starting zoom
        });

        map.scrollZoom.disable();
        map.addControl(new mapboxgl.NavigationControl());
        map.addControl(new mapboxgl.FullscreenControl());


        // Washington, DC:  -77.032, 38.913
        // Miami:           -80.191788, 25.761681
        // Ft Lauderdale:   -80.133591, 26.139412 
        // Key Largo: 	    -80.447281, 25.086515 
        // Las Vegas: 	    -115.172813, 36.114647
        // LA: 	            -118.243683, 34.052235
        // NYC:             -73.935242, 40.730610
        // Portland:        -122.676483, 45.523064 
        // Gold Beach:      -124.421776, 42.407333	
        // Florence, OR     -124.099838, 43.982620	
        // Stuart, FL:      -80.243057, 27.192223 
        // Tallahassee:     -84.253334, 30.455000 
        // Tampa:           -82.452606, 27.964157
        // West Palm:       -80.064163, 26.709723	

        map.on('load', function () {
            var projects = {
                type: 'FeatureCollection',
                features: [{
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-80.191788, 25.761681] // Miami Area
                    },
                    properties: {
                        title: 'Miami',
                        description: 'Riviera Country Club<br>Doral Police Facility<br>Jackson Healthcare West Campus<br>Brickell City Center North West Block Connection Design<br>Fairholme Museum<br>Miami World Center Luma Amentities Structure<br>Baptist Hospital Clinical Chasis Expansion<br>Miami Cancer Insitute<br>UM Frost'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-80.133591, 26.139412]
                    },
                    properties: {
                        title: 'Ft Lauderdale',
                        description: 'Aquablu'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-124.421776, 42.407333]
                    },
                    properties: {
                        title: 'Gold Beach, OR',
                        description: 'Curry Public Library Addition'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-124.099838, 43.982620]
                    },
                    properties: {
                        title: 'Florence, OR',
                        description: 'Florence City Hall Addition'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-80.447281, 25.086515]
                    },
                    properties: {
                        title: 'Key Largo',
                        description: 'St. Peters Church'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-115.172813, 36.114647]
                    },
                    properties: {
                        title: 'Las Vegas, NV',
                        description: 'UFC Headquarters'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-118.243683, 34.052235]
                    },
                    properties: {
                        title: 'Los Angeles',
                        description: 'LAX terminal 3 Concourse/Connector (Delta)<br>LAX terminal 3 Satellite (Delta)<br>LAX Terminal 4 (American)'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-73.935242, 40.730610]
                    },
                    properties: {
                        title: 'New York City',
                        description: 'NYC Southferry Subway Station'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-122.676483, 45.523064]
                    },
                    properties: {
                        title: 'Portland, OR',
                        description: 'Dement Floating House<br>Hotel Chamberlain<br>Jupiter Hotel<br>L and L Hostel<br>Matanky Floating House'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-84.253334, 30.455000]
                    },
                    properties: {
                        title: 'Tallahassee, FL',
                        description: 'Collegetown Phase II<br>Doak Campbell Stadium - South End Zone Renovations<br>Doak Campbell Stadium - Structural Condition Assesment<br>Donald L. Tucker Center - Facility Upgrades<br>FSU Housing II, Seminole Boosters Inc - Champions Hall'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-82.452606, 27.964157]
                    },
                    properties: {
                        title: 'Tampa, FL',
                        description: 'Publix Channel Club'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-77.032, 38.913]
                    },
                    properties: {
                        title: 'Washington, DC',
                        description: 'Audi Field (Connection Design)'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-80.064163, 26.709723]
                    },
                    properties: {
                        title: 'Palm Beach',
                        description: 'Canopy Hotel <br> PBSO Evidence Facility<br>Florida Oceanographic Society Marine Center<br>WPB Spring Training Facility<br>ISTF Westlake'
                    }
                }]
            };

            map.addSource('places', {
                'type': 'geojson',
                'data': projects
            });

            map.addLayer({
                'id': 'places',
                'type': 'symbol',
                'source': 'places',
                'layout': {
                    'icon-image': 'rocket-15',
                    'icon-allow-overlap': true
                }
            });

            var fixButton = document.getElementById('resizeMap');

            fixButton.onclick = function() {
                console.log("resizing");
                map.flyTo({center: [-89.38, 39], // starting position
                    zoom: 3, pitch:0});
            }   


            map.on('click', 'places', function (e) {
                var coordinates = e.features[0].geometry.coordinates.slice();
                var description = e.features[0].properties.description;
                var title = e.features[0].properties.title;

                

                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }

                new mapboxgl.Popup()
                    .setLngLat(coordinates)
                    .setHTML('<h3>' + title + '</h3><p style="text-align:left">' + description + '</p>')
                    .addTo(map);

                    map.flyTo({ center: e.features[0].geometry.coordinates, zoom: 6, pitch: 30 });


            });

        });


        // projects.features.forEach(function (marker) {

        //     // create a HTML element for each feature
        //     var el = document.createElement('div');
        //     el.className = 'marker';

        //     new mapboxgl.Marker(el)
        //         .setLngLat(marker.geometry.coordinates)
        //         .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
        //             .setHTML('<h3>' + marker.properties.title + '</h3><p style="text-align:left">' + marker.properties.description + '</p>'))
        //         .addTo(map);
        // });




    });
})()


