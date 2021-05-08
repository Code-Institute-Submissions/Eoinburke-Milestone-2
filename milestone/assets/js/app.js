window.onload = function (){ 
    let apiUrl = proccess.env.API_URL;
    

    $.getJSON(apiUrl, function(data){
        let term = data.term;

        let latitude = data.suggestions [0].entities[0].latitude;
         $('.lat').html("latiude: " + latitude);

        $('.term').html("Term: " + term);
    });
}