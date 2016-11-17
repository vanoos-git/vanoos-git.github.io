var arr = function(data) {
    var template = Handlebars.compile($('#template').html());
    $('.services').append(template(data));
};

var jqxhr = $.getJSON("base2.json", function() {
        console.log("success");
    })
    .done(function(data) {
            var template = Handlebars.compile($('#template').html());
            $('.services').append(template(data));
        });
    .fail(function() {
        console.log("Base2.json error");
    })
    .always(function() {
        console.log("Base2.json complete");
    });
