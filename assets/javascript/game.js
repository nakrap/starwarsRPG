
$(document).ready(function() {


//Creating 1 object for all of the characters.
var allCharacters = [
{   name: "yoda",
    health: 100,
    attack: 25,
    image: "../starwarsRPG/assets/images/yoda.png"
    },
    
{   name: "luke",
    health: 120,
    attack: 30,
    image: "../starwarsRPG/assets/images/luke.png"
    },
   
{   name: "darth",
    health: 150,
    attack: 33,
    image: "../starwarsRPG/assets/images/darthVader.png"
    },

{   name: "storm",
    health: 10,
    attack: 5,
    image: "../starwarsRPG/assets/images/stormTrooper.png"
    }
];
    
// $('.characters').click(function() {

// });


//Loop through the object and add everything needed for each character.
for (var i = 0; i < allCharacters.length; i++) {
    //Create a div for each character to live in.
    var playerDiv = $('<div>');
    playerDiv.addClass('.characters');
    playerDiv.attr('attack', allCharacters[i].attack);
    playerDiv.attr('health', allCharacters[i].health);
  
    //Create a header with the name of the character in it.
    var playerName = $('<h2>');
    playerName.text(allCharacters[i].name);
    //Create another header with the health of the character.
    var playerHealth = $('<h3>');
    playerHealth.text(allCharacters[i].health);
    //Create a header with the amount of attack of the character.
    var playerAttack = $('<h3>');
    playerAttack.text(allCharacters[i].attack);
    //Add the image to be seen with the character.
    var playerImage = $('<img>');
    playerImage.attr('src', allCharacters[i].image);
    playerImage.addClass('img-container');
  
    //Create the order of how each character shows up to the user.
    playerDiv.prepend(playerAttack);
    playerDiv.prepend(playerHealth);
    playerDiv.prepend(playerImage);
    playerDiv.prepend(playerName);
  
    //Write it to the correct place on the page.
    $('#player-zone').prepend(playerDiv);
  
  };
  
  $('#player1').on('click', function() {
    player2.health -= currentPlayer.attack;
  
    if(parseInt(player2.health )< 0) {
      document.write("You Win!");
    } else {
      currentPlayer.health -= player2.attack;
    }
  
  });
  
  var player1 = allCharacters[2];
  var player2 = allCharacters[3];
  var currentPlayer = player1;

});






























