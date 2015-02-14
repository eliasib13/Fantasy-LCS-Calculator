$(".expandible").click(function() {
    $expan = $(this);
    $form = $expan.next();
    $form.slideToggle(200);
});

$("#player").click(function() {
    if ($("#form_team").css('display') != 'none')
        $("#form_team").slideToggle(200);
});

$("#team").click(function() {
    if ($("#form_player").css('display') != 'none')
        $("#form_player").slideToggle(200);
});