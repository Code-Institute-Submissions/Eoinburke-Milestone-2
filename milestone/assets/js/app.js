
function getData(callback) {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://hotels4.p.rapidapi.com/get-meta-data",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "a31d4df07bmsh96320001ced0244p1169dfjsnd0bf8d0a37ef",
            "x-rapidapi-host": "hotels4.p.rapidapi.com"
        }
    };

    $.ajax(settings).done(callback).fail((jqXHR, textStatus) => {
        console.log(jqXHR.responseJson);
   
    });
}

function writeToDocument(type) {
    getData(type, function (data) {
        document.getElementById("data").innerHTML = data;
    });
}

function start() {
    let content = '';
    getData((response) => {
        console.log(response);
        response.forEach(location => {
        content += `<div>${location.name}${location.posName}`
        })  
         document.getElementById('data').innerHTML = content;
    });
};

function loadProperties() {
    let content = '';
    getPropertyData((response) => {/*
        console.log('XXX')
        console.log(response.data);
        response.data.body.searchResults.results.forEach(location => {
        content += `<div>${location.name}${location.posName}`
        })
         document.getElementById('data').innerHTML = content;*/
    });
};

function getPropertyData(callback) {
    const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://hotels4.p.rapidapi.com/properties/list?adults1=1&pageNumber=1&destinationId=1506246&pageSize=25&checkOut=2020-01-15&checkIn=2020-01-08&sortOrder=PRICE&locale=en_US&currency=USD",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a31d4df07bmsh96320001ced0244p1169dfjsnd0bf8d0a37ef",
		"x-rapidapi-host": "hotels4.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
    let content = '';

    console.log('XXX')
    console.log(response.data);
    content += `<h1>${response.data.body.header}</h1>`
    response.data.body.searchResults.results.forEach(location => {
    content += `<div>${location.name}</div>`
    })
        document.getElementById('data').innerHTML = content;
    });
}

var destinationId;
var searchVal;

function getData(callback) {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://hotels4.p.rapidapi.com/get-meta-data",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "a31d4df07bmsh96320001ced0244p1169dfjsnd0bf8d0a37ef",
            "x-rapidapi-host": "hotels4.p.rapidapi.com"
        }
    };

    $.ajax(settings).done(callback).fail((jqXHR, textStatus) => {
        console.log(jqXHR.responseJson);
   
    });
}

function writeToDocument(type) {
    getData(type, function (data) {
        document.getElementById("data").innerHTML = data;
    });
}

function start() {
    let content = '';
    getData((response) => {
        console.log(response);
        response.forEach(location => {
        content += `<div>${location.name}${location.posName}`
        })  
         document.getElementById('data').innerHTML = content;
    });
};

//Search locations functionality
function searchLocations() {
    searchVal = document.getElementById('search').value;
    let content = '';
    getLocationsData((response) => {
        console.log(response.data);
        response.data.body.searchResults.results.forEach(location => {
        content += `<div>${location.name}${location.posName}`
        })
         document.getElementById('data').innerHTML = content;
    });
};

function getLocationsData(callback) {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://hotels4.p.rapidapi.com/locations/search?query=" + searchVal + "&locale=en_US",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "a31d4df07bmsh96320001ced0244p1169dfjsnd0bf8d0a37ef",
            "x-rapidapi-host": "hotels4.p.rapidapi.com"
        }
    };

$.ajax(settings).done(function (response) {
        console.log(response);
        if(response.suggestions[0].entities.length == 0) {
            let content = `<h3>No results found for '${searchVal}'</h3>`;
            document.getElementById('data').innerHTML = content;
        }
        else {
            destinationId = response.suggestions[0].entities[0].destinationId;
            getHotels();
        }        
    });
}

//Search hotels functionality
function getHotels() {
    let content = '';
    getHotelsData((response) => {
        console.log(response);
        response.data.body.searchResults.results.forEach(location => {
        content += `<div>${location.name}${location.posName}`
        })
        document.getElementById('data').innerHTML = content;
    });
};

function getHotelsData(callback) {
    var urlString = "https://hotels4.p.rapidapi.com/properties/list?adults1=1&pageNumber=1&destinationId=" + destinationId + "&pageSize=25&checkOut=2020-01-15&checkIn=2020-01-08&sortOrder=PRICE&locale=en_US&currency=EUR";
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": urlString,
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "a31d4df07bmsh96320001ced0244p1169dfjsnd0bf8d0a37ef",
            "x-rapidapi-host": "hotels4.p.rapidapi.com"
        }
    };

$.ajax(settings).done(function (response) {
        let content = '';
        content += `<h2>${response.data.body.header}</h2>`
        console.log(response);
        response.data.body.searchResults.results.forEach(location => {
            const thumbnailString = location.optimizedThumbUrls.srpDesktop;
            content += `<div class='hotelDiv'><p>${location.name}</p><img src=`+thumbnailString+`></div>`
        })
        document.getElementById('data').innerHTML = content;52

    });
}
