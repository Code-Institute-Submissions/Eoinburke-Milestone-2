
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
}

