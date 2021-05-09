// Create a request variable and assign a new XMLHttpRequest object to it.
var xhr = new XMLHttpRequest();
var data;

xhr.open('GET', 'https://hotels4.p.rapidapi.com/get-meta-data/?rapidapi-key=a31d4df07bmsh96320001ced0244p1169dfjsnd0bf8d0a37ef');
xhr.send();

function setData(jsonData) {
    data = jsonData;
    console.log(data);
}

xhr.onreadystatechange = function() {
    console.log(this.readyState);
    if(this.readyState == 4 && this.status == 200) {
        data = this.responseText;
        setData(JSON.parse(this.responseText));
    }
};

setTimeout(function() {
console.log(data);
}, 800);