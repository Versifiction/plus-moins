var app = {
  init: function() {
    $('#bouton').on('click', app.startGame);
  },
  startGame: function() {
    window.alert('Le but du jeu est de trouver le chiffre entier exact : situé entre 1 et 100. Si vous ne le trouvez pas, il vous sera indiqué si le chiffre mystère est plus petit ou plus grand que celui que vous avez entré. Mais attention, vous n\'avez que 7 chances !');
    var attempts = 0;
    var win = false;
    console.log(win);

    var randomNumber = Math.floor(Math.random() * (101 - 1) + 1);

    do {
      var userNumber = window.prompt('Entrez un chiffre entre 1 et 100');

      attempts++;

      console.log('à trouver : ' + randomNumber);
      console.log('nombre choisi : ' + userNumber);

      if (userNumber < 1 || userNumber > 100) {
        window.alert('Vous devez rentrer un chiffre entre 1 et 100 !');
      }

      if (userNumber < randomNumber) {
        window.alert('Le chiffre mystère est plus grand ! (reste ' + (7-attempts) + ' tentatives)');
      } else if (userNumber > randomNumber) {
        window.alert('Le chiffre mystère est plus petit ! (reste ' + (7-attempts) + ' tentatives)');
      }

      if (userNumber == randomNumber) {
        var win = true;
        console.log(win);
        window.alert('Bravo ! Vous avez trouvé le chiffre mystère : ' + randomNumber);
        break;
      }
    } while (userNumber !== randomNumber && attempts < 7)

    if (!win) {
      window.alert('Désolé, il ne vous reste plus de tentatives : vous avez perdu ! Le chiffre mystère était : ' + randomNumber);
    }
  },
};

document.addEventListener('DOMContentLoaded', app.init);
