function addNewTask() {
    const getNewTaskDescription = $('input').val();

    if (getNewTaskDescription !== "") {
        let newElement = createTaskHtmlTag(getNewTaskDescription);
        createBtn(newElement);
        addElement(newElement);
        clearInput();
        removeTask();
    }
}


function createBtn(newTask) {
    return $(newTask).append('<span class="remove-task-tag">X</span>');
}

function addElement(element) {
     $('#plase_for_task').append(element);
}

function createTaskHtmlTag(taskText) {
    return $('<li></li>').text(taskText)
}

function clearInput() {
    $('input').val("");
}

function removeTask() {
    $('.remove-task-tag').on('click', function () {
        const parent = $(this).parent();
        $(parent).css('textDecoration', 'line-through');
        $('#plase_for_task').append($(parent));

    });
}