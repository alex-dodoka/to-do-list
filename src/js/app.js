// function toDo() {
//     let task = $('input').val();
//     if (task !== "") {
//         let elem = $('<li></li>').text(task);
//         $(elem).append('<button class="remove-task-tag btn small alert-danger">X</button>');
//         $('#some_tasks').append(elem);
//         $('input').val("");
//
//         $('.remove-task-tag').on('click', function () {
//             let what = $(this).parent();
//             $(what).css('textDecoration', 'line-through');
//             $('#some_tasks').append($(what));
//
//         })
//     }
// }
// toDO need to refactor and create Wrap function.
function addNewTask(task,print) {
    if (addToHtml!==""){
        createTaskHtmlTag(newTaskDescription);
    }

}

function newTaskDescription() {
    const newTask = $('input').val();
    return newTask;
}

function createTaskHtmlTag(taskText) {
    return $('<li></li>').text(taskText)
}


function removeTask(deleteThisTask,) {
    $('.remove-task-tag').on('click', function () {
        deleteThisTask = $(this).parent();
        $(deleteThisTask).css('textDecoration', 'line-through');
        $('#plase_for_task').append($(deleteThisTask));

    })
}

function clearInput() {
    $('input').val("");
}
