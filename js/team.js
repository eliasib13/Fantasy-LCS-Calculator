// Multipliers
var WIN = 2;
var BARONS = 2;
var DRAGONS = 1;
var FIRST_BLOOD = 2;
var TOWERS = 1;
var _30MINS = 2;

// Calculate score
function scoreTeam() {
    var sum = parseInt($("#dragons").val()) * DRAGONS + 
              parseInt($("#barons").val()) * BARONS +
              parseInt($("#towers").val()) * TOWERS;
    //console.log(sum);
    $("#win").prop("checked") ? sum += WIN : sum += 0;
    $("#firstblood").prop("checked") ? sum += FIRST_BLOOD : sum += 0;
    $("#_30mins").prop("checked") ? sum += _30MINS : sum += 0;
    
    return sum;
}

// Show score
function showTeamScore() {
    var calc = scoreTeam();
    //console.log(calc);
    
    if (calc.toString() == "NaN")
        alert("Please, fill all numeric fields.");
    else {
        $("#res_team").html('<center class="score"><table><tr><td class="int">'+calc+'<td><td class="dec">.00</td></tr></table></center>');
        if ($("#res_team").css('display') == 'none')
            $("#res_team").slideToggle(200);
    }
}

// Clear score and form

function clearTeamScore() {
    $("#win").prop("checked", false);
    $("#dragons").val("");
    $("#barons").val("");
    $("#firstblood").prop("checked", false);
    $("#towers").val("");
    $("#_30mins").prop("checked", false);
    
    if ($("#res_team").css('display') != 'none')
        $("#res_team").slideToggle(200);
}