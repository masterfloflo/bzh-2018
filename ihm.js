var service = require('./service');

exports.start = function () {

    (console.log(`*************************
    1. Rafraichir les données
    2. Lister les sessions
    99. Quitter
    Choisissez un nombre puis appuyez sur Entrée`))

    var readline = require('readline');

    var menu = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });


    var menumenu = menu.question("", function (saisie) {
        if (`${saisie}` == 1) {
            service.init(function (nb) {
                console.log(nb, 'Données mises à jour')
            }),
                menu.close();

        }
        else if (`${saisie}` == 2) {
            service.listerSessions(function (nb) {
                console.log(nb, 'voici la liste')
            })
            menu.close();

        }
        else if (`${saisie}` == 99) {
            menu.close();
        }
        else {
            console.log("Ce chiffre ne renvoie rien, try again")
        }
    })

}
