
$(document).ready(function() {


//Creating 1 object for all of the characters.
var allCharacters = [
{   name: "Yoda",
    health: 100,
    attack: 25,
    image: "../starwarsRPG/assets/images/yoda.png"
    },
    
{   name: "Luke Skywalker",
    health: 120,
    attack: 30,
    image: "../starwarsRPG/assets/images/luke.png"
    },
   
{   name: "Darth Vader",
    health: 150,
    attack: 33,
    image: "../starwarsRPG/assets/images/darthVader.png"
    },

{   name: "Storm Trooper",
    health: 10,
    attack: 5,
    image: "../starwarsRPG/assets/images/stormTrooper.png"
    }
];


//Loop through the object and add everything needed for each character.
for (var i = 0; i < allCharacters.length; i++) {
    //Create a div for each character to live in.
    var playerDiv = $('<div>');
    playerDiv.addClass('characters');
    playerDiv.attr('attack', allCharacters[i].attack);
    playerDiv.attr('health', allCharacters[i].health);
  
    //Create a header with the name of the character in it.
    var playerName = $('<h2>');
    playerName.text(allCharacters[i].name);
    //Create another header with the health of the character.
    var playerHealth = $('<h3>');
    playerHealth.text('Health:' + allCharacters[i].health);
    //Create a header with the amount of attack of the character.
    var playerAttack = $('<h3>');
    playerAttack.text('Attack:' + allCharacters[i].attack);
    //Add the image to be seen with the character.
    var playerImage = $('<img>');
    playerImage.attr('src', allCharacters[i].image);
    playerImage.addClass('btn');
  
    //Create the order of how each character shows up to the user.
    playerDiv.prepend(playerAttack);
    playerDiv.prepend(playerHealth);
    playerDiv.prepend(playerImage);
    playerDiv.prepend(playerName);
  
    //Write it to the correct place on the page.
    $('#player-zone').append(playerDiv);
  
  };




  
  $('#start').on("click", function(){
        playGame();
        $('#attack').hide();
        
        
});	

function playGame(){
    // console.log('show me something');
        $('.btn').on("click", function(){
            $('.btn').attr('hero', allCharacters[i]);
              console.log('show me something');
        });
        // $('.characters').on("click", function(){
        //     if(enemyChosen == false){
        //         chooseOpponent(luke);
        //     }

        // });



//         $('#player-zone').on("click", "img[id = vader]", function(){
//             chooseChar(vader);
//         });
//         $('#pane').on("click", "img[id = vader]", function(){
//             if(enemyChosen == false){
//                 chooseOpponent(vader);
//                 $('img[id=vader]').fadeTo("slow", 0.0);
//             }
//         })
//         $('#player-zone').on("click", "img[id = storm]", function(){
//             chooseChar(storm);
//         });
//         $('#pane').on("click", "img[id = storm]", function(){
//             if(enemyChosen == false){
//                 chooseOpponent(storm);
//                 $('img[id=maul]').fadeTo("slow", 0.0);
//             }
//         })
//         $('#player-zone').on("click", "img[id = yoda]", function(){
//             chooseChar(yoda);
//         });
//         $('#pane').on("click", "img[id = yoda]", function(){
//             if(enemyChosen == false){
//                     chooseOpponent(yoda);
//                     $('img[id=yoda]').fadeTo("slow", 0.0);
//             }
//         })





//         $('#attack').on("click", function(){
//             if(enemyChosen == true){
//                 attack(character, opponent)
//             }
//             else if (enemyCount == 0){
//                 winner(character);
//             }
//         });	
    }





//     function chooseChar(char){
// 		characterChosen = true; 
// 		character = char;
// 		battle(char);

// 	}
// //Chooses your opponent for the round
// 	function chooseOpponent(char){
// 		if(enemyChosen == false){
// 			opponent = char; 
// 			enemyChosen = true; 
// 			$('#enemy').empty(); 
// 			$('#attack').empty();
// 			$('#enemy').append("<div id = 'opponent'>"+char.defendImage+"<br><h4>"+char.name+"<br>Attack Power: "+char.attack+"<br>Health: "+char.health+"</h4></div>");
// 			$('#attack').append("<button class = 'btn btn-danger attackButton'>ATTACK!</button>");

// 		}
//     }
    
//     function battle(char){
// 		$('#player-zone').append("<div id = 'enemies'></div>");
// 		$('#message').append("<div class = 'feedcontainer'><div id = 'feed'><p>Welcome to the battle, Jedi. Choose an enemy above to begin attacking. May for the force be with you, always.</p></div></div>");
// 		$("#hero").append("<div id = 'player'>"+char.image+"<br><h4>"+char.name+"<br>Attack Power: "+char.attack+"<br>Health: "+char.health+"</h4></div>");
// 		//for loop that goes through the enemies and makes sure thta each is added. 
// 		for(var i = 0; i < characters.length; i++){
// 			var enemy = "enemy"+i;  
// 			if(characters[i].name != char.name){
// 				$('#enemies').append("<div id ="+enemy+">"+characters[i].image+"</div>");
// 			}
// 		}
// 	};








  
//   $('#attack').on('click', function() {
//     player2.health -= currentPlayer.attack;
  
//     if(parseInt(player2.health )< 0) {
//       document.write("You Win!");
//     } else {
//       currentPlayer.health -= player2.attack;
//     }
  
//   });
  
//   var player1 = allCharacters[2];
//   var player2 = allCharacters[3];
//   var currentPlayer = player1;

});
