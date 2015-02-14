$(".expandible").click(function() {
    $expan = $(this);
    $form = $expan.next();
    $form.slideToggle(200);
});

