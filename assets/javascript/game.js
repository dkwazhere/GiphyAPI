$(document).ready(function(){
// Declaring global variables
var topics = ["Motorcycle", "Surfing", "Beer"];
// Declaring functions
    function motoButtons(){
        $("#moto").on("click", function(){
            event.preventDefault();
            var a = "https://api.giphy.com/v1/gifs/search?q=Motorcycle&api_key=CZ8vxp5Pfp9BIkVCEdK9Mu5Sg6FC9HW6";
            $.ajax({
              url: a,
              method: "GET"
            }).done(function(response){
                for (k=0; k<10; k++){
                console.log(topics);
                $("#container").append("<img src='"+response.data[k].images.fixed_height.url+"'></img>");
                }
            })
        })
    }
    function surfButtons(){
        $("#surf").on("click", function(){
            event.preventDefault();
            var b = "https://api.giphy.com/v1/gifs/search?q=Surfing&api_key=CZ8vxp5Pfp9BIkVCEdK9Mu5Sg6FC9HW6";
            $.ajax({
              url: b,
              method: "GET"
            }).done(function(response){
                for (k=0; k<10; k++){
                console.log(topics);
                $("#container").append("<img src='"+response.data[k].images.fixed_height.url+"'></img>");
                }
            })
        })
    }
    function beerButtons(){
        $("#beer").on("click", function(){
            event.preventDefault();
            var c = "https://api.giphy.com/v1/gifs/search?q=Beer&api_key=CZ8vxp5Pfp9BIkVCEdK9Mu5Sg6FC9HW6"
            $.ajax({
              url: c,
              method: "GET"
            }).done(function(response){
                    for (k=0; k<10; k++){
                    console.log(topics);
                    $("#container").append("<img src='"+response.data[k].images.fixed_height.url+"'></img>");
                    }
            })
        })
    }
    function onClick(){
        $("#submit").on("click", function(){
        event.preventDefault();
        var input = $("#search").val().trim();
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=CZ8vxp5Pfp9BIkVCEdK9Mu5Sg6FC9HW6";
        topics.push(input);
        $(".buttons").append("<button>" + input + "</button>");
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response){
                for (k=0; k<10; k++){
                console.log(topics);
                $("#container").append("<img src='"+response.data[k].images.fixed_height.url+"'></img>");
                }
            })
        })
    };
    onClick();
    motoButtons();
    surfButtons();
    beerButtons();
});
