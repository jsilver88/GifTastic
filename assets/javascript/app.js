var topics = ['Luke Skywalker', 'Han Solo', 'R2-D2', 'C-3PO', 'Princess Leia', 'Yoda', 'Chewbacca', 'Darth Vader', 'Boba Fett'];

gi
function createButtons() {
    $('.buttons').empty();

    for (var i = 0; i < topics.length; i++) {
        var button = $('<button>')
            if (i%2 === 0) {
                button.attr('class', 'btn btn-primary btn-lg btn-block');
            } else {
                button.attr('class', 'btn btn-danger btn-lg btn-block');
            }
            button.attr('data-name', topics[i].text(topics[i]));
            $('.buttons').append(button)
    }
}

function showGif() {
    var allGifs = $(this).attr('data-name')
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + allGifs + "&limit=10&api_key=f2NfQkvAxd52Oie3dFu13vgaj44Wnnah";

    $('.gifs').empty()
    $.ajax({
        
    })

}