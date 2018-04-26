
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
    
    var hero = {};
    var enemy = {};
    
    var charactersSelectable = true;
    
    
    
    $(document).ready(function() {
    
    var heroSelected = false;
    var enemySelected = false;
    var characterState;
    
    //Creating 1 object for all of the characters.
    
    
    function generateNickname(character) {
      var nickname = "";
      for(var i = 0; i < character.name.length; i++) {
        nickname += character.name[i];
        if(character.name[i] === ' ') {
          character.nickname = nickname.toLowerCase();
          return nickname;
        }
      }
    
      character.nickname = nickname.toLowerCase();
      return nickname;
    }
    
    
    
    function setUpCharacters() {
    
      characterState = $('<h2>').addClass('p1');
      characterState.attr('id', 'game-state');
      characterState.text('Available Characters');
    
      $('#player-zone').append(characterState);
    
      for (var i = 0; i < allCharacters.length; i++) {
          //Create a div for each character to live in.
          generateNickname(allCharacters[i]);
          var playerDiv = $('<div>');
          playerDiv.addClass('characters');
          playerDiv.attr({
            attack: allCharacters[i].attack,
            health: allCharacters[i].health,
            nickname: allCharacters[i].nickname
          });
    
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
    
        }
    
        $('#player-zone').on('click', '.characters', function() {
          if(charactersSelectable) {
              if(heroSelected === false) {
                hero = findCharacter($(this).attr('nickname'));
                heroSelected = true;
                var heroHeader = $('<h2>').text('Your Character');
                $('#hero-zone').append(heroHeader);
                $('#hero-zone').append($(this));
                characterState.text('Remaining Characters');
    
              } else if (enemySelected  === false) {
                enemy = findCharacter($(this).attr('nickname'));
                enemySelected  = true;
                var enemyHeader = $('<h2>').text('Your Enemy Character');
                $('#enemy-zone').append(enemyHeader);
                $('#enemy-zone').append($(this));
                charactersSelectable = false;
                makeAttackButton();
    
              } else {
                characterState.remove();
    
              }
            }});
          }
    
    //Loop through the object and add everything needed for each character.
    
    
    
    
      function playGame(){
        setUpCharacters();
        pickHero();
    
      }
    
      function makeAttackButton() {
        var attackBtn = $('<button>').text('Attack');
        attackBtn.insertAfter('#hero-zone');
    
        attackBtn.on('click', function() {
          hero
        });
      }
    
      function pickHero() {
    
      }
    
      function findCharacter(nickname) {
        var character = {};
        for(var i = 0; i < allCharacters.length; i++) {
          if(allCharacters[i].nickname === nickname) {
            character = allCharacters[i];
          }
        }
    
        return character;
      }
    
      $('#attack').hide();
    
      $('#start').on("click", function(){
        $(this).remove();
        playGame();
    
    
    
    
      });
    
    
    
    });
    