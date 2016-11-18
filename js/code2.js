var jqxhr = $.getJSON("base2.json")
    .done(function(data) {
        var template = Handlebars.compile($('#template').html());
        $('.services').append(template(data));
    })
    .fail(function() {
        console.log("Base2.json error");
    })
    .always(function() {
        console.log("Base2.json complete");
    });
