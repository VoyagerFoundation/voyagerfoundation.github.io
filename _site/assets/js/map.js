var map_wrapper = 'map_container';	
var longitude = 51.5074;
var latitude = -0.1278;
var bubble_content =	"<p class='map_contacts'>" +
						"<span>Address : </span>" +
						"London" +
						"</p>";





function initialize() {
	var mapOptions = {
		zoom: 08,
		center: new google.maps.LatLng(longitude, latitude),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: false,
		streetViewControl:false,
		scrollwheel : false,
		zoomControlOptions: {
	      style: google.maps.ZoomControlStyle.SMALL
	    }
	};

	var map = new google.maps.Map(document.getElementById(map_wrapper),mapOptions);

	// var marker = new google.maps.Marker({
	//   position:  new google.maps.LatLng(longitude, latitude),
	//   map: map,
	//   icon     : "assets/img/marker.png"
	// });

	var infowindow = new google.maps.InfoWindow({
			content: bubble_content
		});

	google.maps.event.addListener(marker, 'click', function() {
	  infowindow.open(map,marker);
	});
}

google.maps.event.addDomListener(window, 'load', initialize);