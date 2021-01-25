"use strict";
var $ = function(id) {
    return document.getElementById(id);
};

var toggle = function() {
    var h2 = this; // this refers to the clicked h2 tag
    var div = h2.nextElementSibling; // div = h2's sibling div

    //toggle + and - image in h2 elements by adding or removing a class
    if (h2.hasAttribute("class")) {
        h2.removeAttribute("class");
    } else {
        h2.setAttribute("class", "minus");
    }

    //toggle visibility by adding or removing classes
    if (div.className == "open") {
        div.className = "description";
    } else {
        div.className = "open";
    }
}

window.onload = function() {
    // get the h2 tags
    var faqs = $("intro");
    var h2Elements = faqs.getElementsByTagName("h2");

    //attach event handler for each h2 tag
    for (var i = 0; i < h2Elements.length; i++) {
        h2Elements[i].onclick = toggle;
    }
}