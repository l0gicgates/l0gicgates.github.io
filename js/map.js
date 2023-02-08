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
                        coordinates: [-80.337244, 25.687209] // Miami Area
                    },
                    properties: {
                        title: 'Miami, FL',
                        description: 'Miami Cancer Institute',
                        img: 'img/projects/cancer.jpg'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-80.192242, 25.782329] // Miami Area
                    },
                    properties: {
                        title: 'Miami, FL',
                        description: 'Miami World Center Luma Amentities Structure',
                        img: 'img/projects/luma.jpg'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-80.359059, 25.833409] // Miami Area
                    },
                    properties: {
                        title: 'Doral, FL',
                        description: 'Doral Police Facility'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-80.323373, 25.800245] // Miami Area
                    },
                    properties: {
                        title: 'Miami, FL',
                        description: 'Jackson Healthcare West Campus',
                        img: 'img/projects/jackson-west.jpg'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-80.192557, 25.767410] // Miami Area
                    },
                    properties: {
                        title: 'Miami, FL',
                        description: 'Brickell City Center NW Connection Design'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-80.1862, 25.7859] // Miami Area
                    },
                    properties: {
                        title: 'Miami, FL',
                        description: 'Fairholme Museum',
                        img: 'img/projects/FairholmeMuseum.jpg'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-80.0581, 26.7753 ] // Miami Area
                    },
                    properties: {
                        title: 'Palm Beach, FL',
                        description: 'Riviera Country Club',
                        img: 'img/projects/Riviera.jpg'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-80.053450, 26.707010]
                    },
                    properties: {
                        title: 'Palm Beach, FL',
                        description: 'Canopy Hotel',
                        img: 'img/projects/canopy.jpg'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-80.1096, 26.1357]
                    },
                    properties: {
                        title: 'Ft Lauderdale, FL',
                        description: 'Aquablu',
                        img: 'img/projects/aquablu.jpg' 
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
                        description: 'Curry Public Library Addition',
                        
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
                        description: 'UFC Headquarters',
                        img: 'img/projects/UFC_HQ.jpg' 

                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-118.243683, 34.052235]
                    },
                    properties: {
                        title: 'Los Angeles, CA',
                        description: 'LAX Terminal 3 Concourse, Connector and Satellite<br>LAX Terminal 4 (American)',
                        'marker-symbol': 'rocket'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-73.935242, 40.730610]
                    },
                    properties: {
                        title: 'New York City, NY',
                        description: 'NYC Southferry Subway Station',
                        img: 'img/projects/southferry.jpg' 

                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-122.649071, 45.522884]
                    },
                    properties: {
                        title: 'Portland, OR',
                        description: 'L and L Hostel'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-122.715788, 45.555851]
                    },
                    properties: {
                        title: 'Portland, OR',
                        description: 'Dement and Matanky Floating Houses',
                        img: 'img/projects/dement.jpg'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-122.661450, 45.519010]
                    },
                    properties: {
                        title: 'Portland, OR',
                        description: 'Hotel Chamberlain',
                        img: 'img/projects/chaimberlain.png'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-122.656960, 45.522549]
                    },
                    properties: {
                        title: 'Portland, OR',
                        description: 'Jupiter Hotel',
                        img: 'img/projects/jupiter.jpg'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-84.295710, 30.436220]
                    },
                    properties: {
                        title: 'Tallahassee, FL',
                        description: 'Collegetown Phase II',
                        img: 'img/projects/collegetown.png'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-84.304655, 30.436461]
                    },
                    properties: {
                        title: 'Tallahassee, FL',
                        description: 'Doak Campbell Stadium - South End Zone'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-84.284781, 30.438748]
                    },
                    properties: {
                        title: 'Tallahassee, FL',
                        description: 'Donald L. Tucker Center - Facility Upgrades'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-84.308100, 30.440160]
                    },
                    properties: {
                        title: 'Tallahassee, FL',
                        description: 'FSU Housing II - Champions Hall',
                        img: 'img/projects/champions.png'
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
                        description: 'Publix Channel Club',
                        img: 'img/projects/publixChannelClub.png' 

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
                        description: 'Audi Field (Connection Design)',
                        img: 'img/projects/audi.jpg'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-80.093700, 26.670990]
                    },
                    properties: {
                        title: 'West Palm Beach, FL',
                        description: 'PBSO Evidence Facility',
                        img: 'img/projects/westpalm.jpg'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-80.178130, 27.215500]
                    },
                    properties: {
                        title: 'Stuart, FL',
                        description: 'Florida Oceanographic Society Marine Center'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-80.122398, 26.598949]
                    },
                    properties: {
                        title: 'West Palm Beach, FL',
                        description: 'WPB Spring Training Facility'
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
                    'icon-image': 'marker-15',
                    'icon-size': 1,
                    'icon-allow-overlap': true
                }
            });

            var fixButton = document.getElementById('resizeMap');
            var flMap = document.getElementById('flMap');
            var caMap = document.getElementById('caMap');
            var nyMap = document.getElementById('nyMap');
            var orMap = document.getElementById('orMap');
            var waMap = document.getElementById('waMap');


            fixButton.onclick = function() {
                map.fire('closeAllPopups');
                console.log(map);
                map.flyTo({center: [-89.38, 39], // starting position
                    zoom: 3, pitch:0});
            } 
            flMap.onclick = function() {
                map.fire('closeAllPopups');
                console.log(map);
                map.flyTo({center: [-81.3792, 28.5383], // starting position
                    zoom: 5, pitch:0});
            } 
            orMap.onclick = function() {
                map.fire('closeAllPopups');
                console.log(map);
                map.flyTo({center: [-120.8345, 44.0998], // starting position
                    zoom: 6, pitch:0});
            }
            caMap.onclick = function() {
                map.fire('closeAllPopups');
                console.log(map);
                map.flyTo({center: [-121.2908, 37.9577], // starting position
                    zoom: 5, pitch:0});
            }
            nyMap.onclick = function() {
                map.fire('closeAllPopups');
                console.log(map);
                map.flyTo({center: [-73.7562, 42.6526], // starting position
                    zoom: 6, pitch:0});
            }

            waMap.onclick = function() {
                map.fire('closeAllPopups');
                console.log(map);
                map.flyTo({center: [-77.032, 38.913], // starting position
                    zoom: 15, pitch:0});
            }

            projects.features.forEach(function(marker) {

                // create a HTML element for each feature
                var el = document.createElement('div');
                el.className = 'marker';
              
                // make a marker for each feature and add to the map
                new mapboxgl.Marker(el)
                  .setLngLat(marker.geometry.coordinates)
                  .addTo(map);
              });


            map.on('click', 'places', function (e) {
                var coordinates = e.features[0].geometry.coordinates.slice();
                var description = e.features[0].properties.description;
                var title = e.features[0].properties.title;
                var img = e.features[0].properties.img;

                if(!img) {
                    img= "img/placeholder.png";
                }

                

                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                // while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                //     coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                // }

                const popup = new mapboxgl.Popup({})
                    .setLngLat(coordinates)
                    .setHTML('<img class="img-fluid" src="'+img+'"> <p style="text-align:left; font-size: 1.5em;" class="p-0 m-0"> <strong>' + description + '</strong></p> <p style="font-size:1em;" class="p-0 m-0">' +title+'</p>')
                    .addTo(map);

                    // e.features[0]._geometry.coordinates[1] = e.features[0]._geometry.coordinates[1] - 0.025;
                    var zoom = 10;
                    console.log("zooming to " + zoom);

                    if(map.getZoom() >10) {
                        zoom =map.getZoom();
                    }
                    map.flyTo({ center: e.features[0].geometry.coordinates, zoom: zoom });

                map.on('closeAllPopups', () => {
                    popup.remove();
                });
                    


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


