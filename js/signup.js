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

var processEntries = function() {
    var header = "";
    var html = "";
    var required = "<span>Required field</span>";
    var msg = "Please review your entries and complete all required fields.";

    var email = $("email_address").value;
    var phone = $("phone").value;
    var country = $("country").value;
    var contact = "Text";
    if($("email").checked) {
        contact = "Email";
    }
    if($("none").checked) {
        contact = "None";
    }
    var terms = $("terms").checked; // return a boolean value

    //check user entries for validity
    if (email == "") {
        email = required;
        header = msg;
    }
    if (phone == "") {
        phone = required;
        header = msg;
    }
    if (country == "") {
        country = required;
        header = msg;
    }
    if (terms == false) {
        terms = required;
        header = msg;
    }
    $("registration_header").firstChild.nodeValue = header;
    if (header == msg) {
        html = html + "<tr><td>Email:</td><td>" + email + "</td></tr>";
        html = html + "<tr><td>Phone:</td><td>" + phone + "</td></tr>";
        html = html + "<tr><td>Country:</td><td>" + country + "</td></tr>";
        html = html + "<tr><td>Contact:</td><td>" + contact + "</td></tr>";
        html = html + "<tr><td>Terms:</td><td>" + terms + "</td></tr>";
        $("registration_info").innerHTML = html;
    } else {
        $("registration_info").innerHTML = "";
        // $("registration_form").submit();
    }
};

var resetForm = function() {
    $("registration_form").reset();
    $("registration_header").firstChild.nodeValue = "";
    $("registration_info").innerHTML = "";
    $("email_address").focus();
};




window.onload = function() {
    $("register").onclick = processEntries;
    $("reset_form").onclick = resetForm;
    $("email_address").focus();

    // get the h2 tags
    var faqs = $("intro");
    var h2Elements = faqs.getElementsByTagName("h2");

    //attach event handler for each h2 tag
    for (var i = 0; i < h2Elements.length; i++) {
        h2Elements[i].onclick = toggle;
    }
}