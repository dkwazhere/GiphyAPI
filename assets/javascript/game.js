$(document).ready(function(){
// Declaring global variables
var topics = ["Motorcycle", "Surfing", "Beer"];
var putHere = [];

// Declaring functions
    function createButton(){
        for (i=0; i<topics.length; i++){
            $(".buttons").append($("<button>" + topics[i]+ "</button>"));
        }
    }
    $("#submit").on("click", function(){
        event.preventDefault();
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + putHere + "&api_key=CZ8vxp5Pfp9BIkVCEdK9Mu5Sg6FC9HW6";
        var input = $("#search").val();
        topics.push(input);
        putHere.push(input);

        $.ajax({
          url: queryURL,
          method: 'GET'
        }).done(function(response){
            console.log(queryURL);
            console.log(input);
            console.log(putHere);
        })
    })
    createButton();
});
