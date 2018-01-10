function addExcuse() {

	var myPerson = ['dog', 'best friend', 'partner', 'crush', 'granny', 'pop'];
	var action = [' ate', ' caught', ' livetweeted',  ' gave my dog', ' vomitted on', ' lost', ' misplaced', ' ebayed', ' craigslisted', ' snapchatted'];
    var myItem = ['my Sex Tape', "Zika Virus" , "Alzheimer's Disease", 'Netflix and Chill', "Avian Influenza"];

	var who = myPerson[Math.round(Math.random()*(myPerson.length-1))];
	var did = action[Math.round(Math.random()*(action.length-1))];
	var what = myItem[Math.round(Math.random()*(myItem.length-1))];
    
    

	$(document).ready (function () {
        $('#generate').click (function () {
        $("#excusesComplete").text(function(n) {
            return "My " + who + did + " my " + what + ".";
        });
        });
    });

}

