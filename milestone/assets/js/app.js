var searchVal;
var hotelId;
var hotelName;
const rapidApiKey = 'a31d4df07bmsh96320001ced0244p1169dfjsnd0bf8d0a37ef';

function getData(callback) {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://hotels4.p.rapidapi.com/get-meta-data",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": rapidApiKey,
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
            content += `<div>${location.name}${location.posName}</div>`
        });
        document.getElementById('data').innerHTML = content;
    });
};

/**
 * 
 * @param {*} event 
 */
function searchLocations(event) {
    searchVal = document.getElementById('search').value;
    if (searchVal !== '') {
        executeAjaxCall({
            "async": true,
            "crossDomain": true,
            "url": "https://hotels4.p.rapidapi.com/locations/search?query=" + searchVal + "&locale=en_US",
            "method": "GET",
            "headers": {
                "x-rapidapi-key": rapidApiKey,
                "x-rapidapi-host": "hotels4.p.rapidapi.com"
            }
        }, (response) => {
            console.log(response.data);
            if (response.suggestions[0].entities.length == 0) {
                document.getElementById('data').innerHTML = `<h3>No results found for '${searchVal}'</h3>`;
            }
            else {
                const destinationId = response.suggestions[0].entities[0].destinationId;
                getHotels(destinationId);
            }
        });
    }

    // Prevent the form to execute its default behaviour
    event.preventDefault();
}

function executeAjaxCall(settings, callback) {
    document.getElementById('loader').style.visibility = 'visible';
    $.ajax(settings).done((response) => {
        document.getElementById('loader').style.visibility = 'hidden';
        callback(response);
    }).fail((jqXHR, textStatus) => {
        document.getElementById('loader').style.visibility = 'hidden';
        console.log(jqXHR.responseJSON);
    });
}

//Search hotels functionality
function getHotels(destinationId) {
    let content = '<div id="loader" class="loader"></div>';

    var urlString = "https://hotels4.p.rapidapi.com/properties/list?adults1=1&pageNumber=1&destinationId=" + destinationId + "&pageSize=25&checkOut=2020-01-15&checkIn=2020-01-08&sortOrder=PRICE&locale=en_US&currency=EUR";
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": urlString,
        "method": "GET",
        "headers": {
            "x-rapidapi-key": rapidApiKey,
            "x-rapidapi-host": "hotels4.p.rapidapi.com"
        }
    };

    // Retreive hotel data
    executeAjaxCall(settings, (response) => {
        renderHotelData(response.data);
    });
}

function renderHotelData(data) {
    console.log(data);
    let content = `<h2>${data.body.header}</h2>
        <div id='hotelsContainer'>`;
    data.body.searchResults.results.forEach((location, index) => {
        const thumbnailString = location.optimizedThumbUrls.srpDesktop;
        content += `<a href="#">
                        <div id="${location.id}" class="hotelDiv">
                            <p class="hotelName black">${location.name}</p>
                            <img class="hotelImg" src="${thumbnailString}">
                        </div>
                    </a>`;
    })
    content += `</div>`;
    document.getElementById('data').innerHTML = content;
}

//GET Hotel Photos functionality
document.addEventListener("click", function (e) {
    console.log(e.target);
    if (e.target.classList.contains("hotelDiv")) {
        hotelId = e.target.id;
        getHotelPhotos();
    } else if (e.target.classList.contains("hotelImg") || e.target.classList.contains("hotelName")) {
        hotelId = e.target.parentElement.id;
        getHotelPhotos();
    }
});


function getHotelPhotos() {

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://hotels4.p.rapidapi.com/properties/get-hotel-photos?id=" + hotelId + "",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "1ea6bfd4b2msh7c485e1aa3729c4p19834cjsn034c9cf4366f",
            "x-rapidapi-host": "hotels4.p.rapidapi.com"
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        let content = '<div id="loader" class="loader"></div> <a href="/book.html"><img id="x" src="https://static.vecteezy.com/system/resources/thumbnails/001/192/549/small/x.png"></a>';
        response.hotelImages.forEach(image => {
            console.log(image);
            console.log(image.baseUrl);
            var thumbnailString = image.baseUrl;
            replaceArray = ['size'],
                replaceWith = ['b'];
            for (var i = 0; i < replaceArray.length; i++) {
                thumbnailString = thumbnailString.replace(new RegExp('{' + replaceArray[i] + '}', 'gi'), replaceWith[i]);
            }
            console.log("baseurl: " + thumbnailString);
            content += `<div class='picDiv'>
                                <img class='picImg' src=`+ thumbnailString + `>
                                </div>`
        })


        console.log("content:");
        console.log(content);
        document.getElementById('data').innerHTML = content;
    });
}


//keypress search functionality
$("#search").keyup(function (event) {
    if (event.keyCode === 13) {
        $("search-btn").click();
    }
});

// Add the onsubmit event listener
const form = document.getElementById('searchForm');
form.addEventListener('submit', searchLocations);