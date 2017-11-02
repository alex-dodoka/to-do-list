function toDo() {
    let task = $('input').val();
    if (task !== "") {
        let elem = $('<li></li>').text(task);
        $(elem).append('<button class="rem btn small alert-danger">X</button>');
        $('#some_tasks').append(elem);
        $('input').val("");

        $('.rem').on('click', function () {
            let what = $(this).parent();
            $(what).css('textDecoration', 'line-through');
            $('#some_tasks').append($(what));

        })

    }

}