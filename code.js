var arrange = function(data) {
    var flex = document.getElementById("flex");
    data.flexblocks.forEach(function(item, i, arr) {
      var block = document.createElement("div");
      var btext = document.createElement("div");
      var btext2 = document.createElement("div");
      var bc = document.createElement("div")
      var bimg = document.createElement("img");
        block.className = "fimg";
        btext.className = "fcaption";
        btext2.className = "fcaption2";
        bimg.className = "cimg";
        bc.className = "bc";
        bc.background = item.url;
        console.log(item.url);
          btext.innerHTML = item.text1;
        btext2.innerHTML = item.text2;
        bc.style.backgroundImage="url(item.url)";
    // 	   bc.appendChild(bimg);
        block.appendChild(bc);
        block.appendChild(btext);
        block.appendChild(btext2);
        flex.appendChild(block);
    });
}

var request = new XMLHttpRequest();
request.open('GET', 'base.json', true);

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
