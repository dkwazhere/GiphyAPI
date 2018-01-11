$(document).ready(function(){
  //****************************************************
// Declaring global variables
//******************************************************
var topics = ["Motorcycle", "Surfing", "Beer"];
//******************************************************
// Declaring functions
//******************************************************
    function createButton(){
        for (i=0; i<topics.length; i++){
            $(".buttons").append($("<button>" + topics[i]+ "</button>"));
        }
    }
    $("#submit").on("click", function(){
        event.preventDefault();
        var input = $("#search").val().trim();
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=CZ8vxp5Pfp9BIkVCEdK9Mu5Sg6FC9HW6";
        topics.push(input);
        $(".buttons").append("<button>" + input + "</button>");
//********************************************************
// Ajax
//********************************************************
        $.ajax({
          url: queryURL,
          method: 'GET'
        }).done(function(response){
            console.log(queryURL);
            console.log(input);
      })
  })
// Calling functions
    createButton();
});
