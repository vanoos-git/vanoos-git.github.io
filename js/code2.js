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

Handlebars.registerHelper('information', function(items, options) {
      var out = "<ul>";

      for(var i=0, l=items.length; i<l; i++) {
        out = out + "<li>" + options.fn(items[i]) + "</li>";
      }

      return out + "</ul>";
    });

function show() {
  this.
}
