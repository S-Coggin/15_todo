// click off specific todos by clicking
$('ul').on('click', 'li', function () {
    $(this).toggleClass('completed');
});

//click on X to delete todo
$('ul').on('click', 'span', function () {

    $(this).parent().fadeOut(500, function (event) {
        $(this).remove();
    });

    event.stopPropegation();
});

$('input[type="text"]').keypress(function (event) {
    if (event.which === 13) {
        // grabbing new todo text from input
        var todoText = $(this).val();
        // create a new li and add to ul
        $('ul').append('<li><span><i class="fas fa-trash-alt"></i></span> ' + todoText + '<li>');
    }

});


// toggle input feild
$('#toggle-form').click(function () {
    $('input[type="text"]').slideToggle();
});