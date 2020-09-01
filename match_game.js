alert("Hello World! Welcome to Matching Game. Click 'ok' to start");

var lettersArray = ["a","b","c","a","b","c","r"];
var score = 0;
var previousScore = 0;

	checkIf();

	function checkIf(){
		while (lettersArray.length>1){
			var guess1 = prompt("Input 1st value here:");
			var guess2 = prompt("Input 2nd value here:");

			checkMatch(lettersArray[guess1],lettersArray[guess2]); 	
		}
			alert("Congrats you finished! Your final score is: " + score)

	}

	function checkMatch(guess1,guess2){
		if(guess1 === guess2){
			if(previousScore>0){ 						//is there such a thing as variables that are specifically tied only to functions?
				alert("That's 2 wins in a row! +20 pts!!!");
				score += 20;
				previousScore = 0;
			}
			else{
				alert("Match! You won 10pts");
				score += 10;
				previousScore += 10;
			}	
			
			lettersArray.splice(lettersArray.indexOf(guess1),1);
			lettersArray.splice(lettersArray.indexOf(guess2),1);
		}
			
		else{
			if(guess1 ==="r" || guess2 === "r"){ 
				alert("You chose a joker. You lost 10 pts");    //does this || work?       
				score -= 10
			}
			else{
				if(guess1 != guess2){
					alert("No Match... Guess Again")
				}
			}
		}
	shuffle(lettersArray);		
	}
	

	function shuffle(lettersArray){									
		var newPos = 0;
		var temp = 0;
		for(var i=lettersArray.length -1; i>0; i--) {
			newPos = Math.floor(Math.random() * (i+1));
			temp = lettersArray[newPos];
			lettersArray[newPos] = lettersArray[i];
			lettersArray[i] = temp;
		}

	}

