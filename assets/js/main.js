//quand la page est chargée (ready)
$(document).ready(function () {
    //si j'appuie sur hide
    $("#hide").click(function () {
        //je fais disparaitre le paragraphe text
        $("#text").hide();
    });
    //si j'appuie sur show
    $("#show").click(function () {
        //je fais reapparaitre le paragraphe text
        $("#text").show();
    });
});
