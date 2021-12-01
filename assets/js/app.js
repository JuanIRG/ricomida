"use strict"



$(document).ready(function () {
    $("#btn-mail").click(function () {
        alert("Haz enviado un mail");
    });
});

$(document).ready(function () {
    $("#titulo-ingredientes , #titulo-preparacion").dblclick(function () {
        $(this).css({
            "color": "red"
        });
    });
});

$(document).ready(function () {
    $(".cardtitle").click(function () {
        $(".cardcontenido").toggle("slow");
    });
});