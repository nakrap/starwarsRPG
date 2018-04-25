
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
  
    const $kids = $('#player-zone').children();

        $kids.on('click', event => {
        $(event.currentTarget).appendTo('#hero');
        $(event.currentTarget).addClass('myHero');
        $kids.siblings().addClass(".enemiesAvail");
        

        // $(this).siblings();
        // $(event.currentTarget).css('border', '5px solid red');
        // $('$kids').removeClass('.characters');

    });
 
    }




});
