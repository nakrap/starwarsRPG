
$(document).ready(function() {


//Yoda object
var yoda = {
    health: 100,
    attack: 8,
};

// maul object
var luke = {
    health: 130,
    attack: 10,
};

// yoda object
var darth = {
    health: 150,
    attack: 2,
};

// kilo object
var storm = {
    health: 80,
    attack: 7,
};



//List of available characters
var availableCharacter = [yoda, luke, darth, storm];

// Array of strings with characters nick names
var characters = [];
var $hero;
var $enemy;
//Hero's health and attack
var heroHealth;
var heroAttack;
//Enemy's health and attack
var enemyHealth = 0;
var enemyAttack = 0;

var counter = 0;
var mathAttack = 0;
var isThereOpponent = false;





function startGame() {
    // new Audio('assets/sound-effects/battle-of-the-heroes.mp3').play()
    chooseHero();
    chooseEnemy();
    fight();
}


function pickYourCharacter() {
    // TODO
    // this function should pick your character and then automaticaly make the other charaters enemies.
    $('.character').on('click', function() {
        $('#characters').empty();
        $('#characters').append('<div class="title">Your Character</div>')

        $yourCharacter = $(this);
        $yourCharacter.addClass('yourCharacter');
        $yourCharacter.removeClass('col-md-3 character');

        yourHealth = parseInt($yourCharacter.attr('data_health'));
        yourAttack = parseInt($yourCharacter.attr('data_attack'));

        $('#characters').append($yourCharacter);

        $('#remainingEnemies').append('<div class="title">Pick Your Enemy</div>');

        // remove the chosen character and then run the createCharacters function again to recreate the 'enemies'
        var indexRemove = characters.indexOf($yourCharacter.attr('data_nickName'))
        charactersObjects.splice(indexRemove, 1);

        // call createCharacters function again, but this time there are only 3
        createCharacters(charactersObjects);

    });
};






})
