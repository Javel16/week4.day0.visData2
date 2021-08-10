const url =""https://randomuser.me/api";
let date;
fetch(url)
    .then(function(response) {
        console.log(response);
        return response.json();
    })
    .then(function(myJson) {
        date = myjson;
        console.log(myJson);
        console.log(data);
    });


