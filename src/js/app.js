function addNewTask(taskText) {
    if (taskText !== "") {
        const newElement = createTaskHtmlTag(newTaskDescription());
        createBtn(newElement);
        addElement(newElement);
        clearInput();
        removeTask();
    }
}

function newTaskDescription() {
    const newTask = $('input').val();
    return newTask;
}

function createBtn(newTask) {
    return $(newTask).append('<button class="remove-task-tag btn small alert-danger">X</button>');
}

function addElement(element) {
    return $('#plase_for_task').append(element);
}

function createTaskHtmlTag(taskText) {
    return $('<li></li>').text(taskText)
}

function clearInput() {
    return $('input').val("");
}

function removeTask() {
    return $('.remove-task-tag').on('click', function () {
        const parent = $(this).parent();
        $(parent).css('textDecoration', 'line-through');
        $('#plase_for_task').append($(parent));

    });
}