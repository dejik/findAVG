$(document).ready(function()
{

	function printToPage (msg)
	{
		var message = "<p>" + msg + "<\p>";
		$("#mainSection").append (message);
	}

	// list of quiz scores
	var scores = [46, 41, 34, 33, 30, 30, 28, 27, 25, 21];

	// this function takes in a scores array and base or max score
	// it iterates over all scores determining the grade, adds all the scores and returns 
	// the average of all scores
	function determineAverage(scores)	{
		for (var i = 0; i < scores.length; i++) {
                       scores[i] / 50;
}
		
	}

	printToPage ("average result is " +  determineAverage(scores) + "%");

});