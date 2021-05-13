
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
