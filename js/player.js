// Multipliers
var KILLS = 2;
var DEATHS = -0.5;
var ASSISTS = 1.5;
var CS = 0.01;
var TRIPLES = 2;
var QUADRAS = 5;
var PENTAS = 10;

// Calculate score
function scorePlayer() {
    var k = $("#kills").val();
    var a = $("#assists").val();
    var sum = parseInt(k) * KILLS +
              parseInt($("#deaths").val()) * DEATHS + 
              parseInt(a) * ASSISTS + 
              parseInt($("#cs").val()) * CS +
              parseInt($("#triple").val()) * TRIPLES +
              parseInt($("#quadra").val()) * QUADRAS +
              parseInt($("#penta").val()) * PENTAS;
    
    return (k >= 10 || a >= 10) ? sum + 2 : sum;
}

// Show score
function showPlayerScore() {
    var calc = scorePlayer();
    
    if (calc.toString() == "NaN")
        alert("Please, fill all numeric fields.");
    else {
        var int = parseInt(calc);
        var dec = "" + (Math.round((calc - int)*100)/100);

        $("#res_player").html('<center class="score"><table><tr><td class="int">'+int+'<td><td class="dec">.'+dec.substring(2)+'</td></tr></table></center>');
        if ($("#res_player").css('display') == 'none')
            $("#res_player").slideToggle(200);
    }
}

// Clear score and form

function clearPlayerScore() {
    $("#kills").val("");
    $("#deaths").val("");
    $("#assists").val("");
    $("#cs").val("");
    $("#triple").val("");
    $("#quadra").val("");
    $("#penta").val("");
    
    if ($("#res_player").css('display') != 'none')
        $("#res_player").slideToggle(200);
}