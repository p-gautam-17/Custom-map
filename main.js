function myMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      center: {lat: 18.4726, lng: 73.8860}, // Center on Jyoti Hotel
      zoom: 18,
      map_id: '0x3bc2c12766e8b9b9:0xb5ecacebb8db3b78'
    });

    var jyotiMarker = {
      url: "https://cdn1.iconfinder.com/data/icons/3d-isometric-color/256/map-pin-iso-color.png",
      scaledSize: new google.maps.Size(50, 50),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0)
    };

    var mosqueMarker = {
      url: "https://cdn3.iconfinder.com/data/icons/clinical-3/96/medic-128.png",
      scaledSize: new google.maps.Size(30, 30),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0)
    };

    var iceCreamMarker = {
      url: "https://cdn3.iconfinder.com/data/icons/travel-vacation-28/256/Hotel.png",
      scaledSize: new google.maps.Size(30, 30),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0)
    };

    var hotelMarker = {
      url: "https://cdn2.iconfinder.com/data/icons/3d-transport/256/Train.png",
      scaledSize: new google.maps.Size(30, 30),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0)
    };

    // Marker for Jyoti Hotel
    new google.maps.Marker({
      position: {lat: 18.4726, lng: 73.8860},
      map: map,
      icon: jyotiMarker,
      title: "Jyoti Hotel"
    });

    // Marker for Kausarbaugh Mosque
    new google.maps.Marker({
      position: {lat: 18.4729, lng: 73.8870},
      map: map,
      icon: mosqueMarker,
      title: "Kausarbaugh Mosque"
    });

    // Marker for Meridian Ice Cream
    new google.maps.Marker({
      position: {lat: 18.4715, lng: 73.8865},
      map: map,
      icon: iceCreamMarker,
      title: "Meridian Ice Cream"
    });

    // Marker for Sampan Hotel
    new google.maps.Marker({
      position: {lat: 18.4730, lng: 73.8855},
      map: map,
      icon: hotelMarker,
      title: "Sampan Hotel"
    });
  }

  window.initMap = myMap;
