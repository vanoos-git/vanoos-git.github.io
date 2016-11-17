var arrange = function(data) {
    var template = Handlebars.compile($('#template').html());
    $('.services').append(template(data));
};


var request = new XMLHttpRequest();
request.open('GET', 'base2.json', true);

request.onload = function() {
    if (request.status == 200) {
        var data = JSON.parse(request.responseText);
        arrange(data);
    } else {
        console.log("error")
    }
};
request.onerror = function() {
    // There was a connection error of some sort
};

request.send();
