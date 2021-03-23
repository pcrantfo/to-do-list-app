function newItem() {
    let userInput = $('#input').val();
    let elementButton = $('<button>X</button>');
    let listItem = $('<li></li>');

    if (userInput === '') {
        alert('Write something, lazy.');
    } else {
        listItem.append(userInput, elementButton);
        $('#list').append(listItem);
    }

    elementButton.on('click', function(event) {
        listItem.remove();
    });

    listItem.dblclick(function(event) {
        listItem.toggleClass('strike');
    });

    $('#list').sortable();
}