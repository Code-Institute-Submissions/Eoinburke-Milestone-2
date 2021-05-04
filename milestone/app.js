const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://hotels4.p.rapidapi.com/locations/search?query=new%20york&locale=en_US",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a31d4df07bmsh96320001ced0244p1169dfjsnd0bf8d0a37ef",
		"x-rapidapi-host": "hotels4.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});