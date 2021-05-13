const baseURL = "https://hotels4.p.rapidapi.com/get-meta-data/?rapidapi-key=a31d4df07bmsh96320001ced0244p1169dfjsnd0bf8d0a37ef";

function getData(type, cb) {
    // Create a request variable and assign a new XMLHttpRequest object to it.
    var xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL + type + "/");
    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

/**
 * 
 * @param {Function} callback is a function that has as parameter the resulting response one 
 */
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
    getData((response) => {
        console.log(response);
    });
}

