$(document).ready(function(){
// Declaring global variables
var topics = ["Motorcycle", "Surfing", "Beer", "Kobe"];

    function createButtons(){
        $("#buttons").empty();
        for (i=0; i<topics.length; i++){
            var buttons = $("<button>" + topics[i] + "</button>");
            buttons.attr("data-topic", topics[i]);
            buttons.addClass("buttons");
            $("#buttons").append(buttons);
        };
        gif();
    };
    createButtons();
    function gif(){
        $(".buttons").on("click", function(){
        $("#container").empty();
            var input = $(this).attr("data-topic");
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=CZ8vxp5Pfp9BIkVCEdK9Mu5Sg6FC9HW6";
            $.ajax({
              url: queryURL,
              method: "GET"
            }).done(function(response){
                console.log(queryURL);
                console.log(response);
                var data = response.data;
                for (i=0; i<10; i++){
                    var topicDiv = $("<div>");
                    // var p = $("<p>").text("Rating: " + data[i].rating);
                    var rating = data[i].rating;
                    var topicImage = $("<img>");
                    topicImage.attr("src", data[i].images.fixed_height.url);
                    topicImage.attr("data-state", data[i].images.fixed_height.url)
                    topicImage.attr("data-still", data[i].images.fixed_height_still.url)
                    topicDiv.append(rating);
                    topicDiv.append(topicImage);
                    $("#container").prepend(topicImage);
                    $("#container").prepend("<br> Rating: " + rating);
                }
            })
        })
    }
    $("#submit").on("click", function(){
        event.preventDefault();
        $("#container").empty();
        var userClick = $("#search").val().trim();
        topics.push(userClick);
        createButtons();
    })
});
