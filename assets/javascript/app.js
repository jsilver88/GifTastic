var topics = ['Luke Skywalker', 'Han Solo', 'R2-D2', 'C-3PO', 'Princess Leia', 'Yoda', 'Chewbacca', 'Darth Vader', 'Boba Fett'];


function createButtons() {
    $('.buttons').empty();

    for (var i = 0; i < topics.length; i++) {
        var button = $('<button>')
            if (i%2 === 0) {
                button.attr('class', 'btn btn-primary btn-lg btn-block');
            } else {
                button.attr('class', 'btn btn-warning btn-lg btn-block');
            }
            button.attr('data-name', topics[i]).text(topics[i]);
            $('.buttons').append(button)
    }
}

function showGif() {
    var allGifs = $(this).attr('data-name')
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + allGifs + "&limit=10&api_key=f2NfQkvAxd52Oie3dFu13vgaj44Wnnah";

    $('.gifs').empty()
    $.ajax({
        url: queryURL,
        Method: "GET"
    }).then(function(response) {
        console.log(response.data)

        for (var i = 0; i < response.data.length; i++) {
            var rating = response.data[i].rating
            var title = response.data[i].title
            
            var div = $('<div class="newgifs">')
            var img = $('<img>').addClass('images')
            var p = $('<p class="rating">Rating: ' + rating + '</p>')
            var titles = $('<p class="title">Title: ' + title + '</p>')

            div.append(img, p, titles)
            img.attr('src', response.data[i].images.fixed_height_still.url).attr('data-still', response.data[i].images.fixed_height_still.url).attr('data-animate', response.data[i].images.fixed_height.url)

            $('.gifs').append(div)
        }
    })

}

$('.submit').on('click', function (event){
    event.preventDefault();
    var input = $('.user-input').val().trim()

    if (!input) {
        alert('The force is not strong with you');
    } else {
        topics.push(input);
        createButtons();
    }
})

createButtons();
$(document).on('click', '.btn', showGif)