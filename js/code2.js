var arr = function(data) {
    var template = Handlebars.compile($('#template').html());
    $('.services').append(template(data));
};


var rq = new XMLHttpRequest();
rq.open('GET', 'base2.json', true);

rq.onload = function() {
    if (rq.status == 200) {
        var data = JSON.parse(rq.responseText);
        arr(data);
    } else {
        console.log("error")
    }
};
rq.onerror = function() {
    // There was a connection error of some sort
};
