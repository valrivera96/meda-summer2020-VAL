$(document).ready(function () {

    $("#activate").click( function () {

        $("#activate").attr("disabled", "disabled");
     
       var nameSubmission = $("#contestants").val();

       var contestants = nameSubmission.split(",");

       console.log(contestants);

       var winner = Math.random() * contestants.length;

       var winnerIndex = Math.floor(winner);

       console.log(winnerIndex);

       var winnerName = contestants[winnerIndex];

       console.log(winnerName);

       $("#winnerBox").html("<p>" + winnerName + "</p>");

    } );

});
