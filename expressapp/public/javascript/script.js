var finder = require('../../node_modules/@medv/finder/finder.js');

var frame=document.getElementById("webFrame");

frame.addEventListener('click', event => {
    const selector = finder(event.target);
    console.log(selector);
});


$(document).ready(function () {
    $('.spec-choice').click(function () {
        var inputValue = $(this).attr("value");
        var target = $("#" + inputValue + "-detail");
        $(".spec-detail").not(target).hide();
        $(target).show();
    });
});

function frameUrl() {
    var urlText = document.getElementById("urlinput");
    if (urlText.value == "") {
        alert("You must enter an url");
    }
    else {
        var frame = document.getElementById("webFrame");
        frame.src = urlText.value;
        document.getElementById('webFrame').src = document.getElementById('webFrame').src;
    }
}