function HBcompile(data, template, mclass) {
    var template = Handlebars.compile($(template).html());
    $(mclass).append(template(data));
}
var ERR = 0;

function getjson(json, pfunc, template, mclass) {
    var r = $.Deferred();
    var jqxhr = $.getJSON(json)
        .done(function(data) {
            ERR = 0;
            pfunc(data, template, mclass);

        })
        .fail(function() {
            ERR = 1;
            console.log(json + " error");

        });
    setTimeout(function() {

        r.resolve();
    }, 500);
    return r;
}

$(document).ready(function() {
        $('#hl').click(function() {
            $('.b-popup').fadeOut(500);
            $('#hl').fadeOut(500);
        });

        var Second = function() {
            $('button.fbutton').prop("disabled", false).click(function() {
                var caller = $(this);
                $('.b-popup').remove();
                getjson("JSON/" + caller.data("num") + ".json", HBcompile, "#ShowJson", ".services").done(function() {
                    if (ERR === 0) {
                        $('.b-popup').fadeIn(500);
                        $('#hl').fadeIn(500);
                        $('.b-popup').click(function() {
                            $('.b-popup').fadeOut(500);
                            $('#hl').fadeOut(500);
                        });
                    }
                });
            });

        });
}
getjson("JSON/base2.json", HBcompile, "#template", ".services").done(Second);
});
