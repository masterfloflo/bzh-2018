const Service = require('./service');
const service = new Service()

exports.start = function () {
menuPrincipal();
    function menuPrincipal() {

    (console.log(`*************************
    1. Rafraichir les données
    2. Lister les sessions
    99. Quitter
    Choisissez un nombre puis appuyez sur Entrée`))

    const readline = require('readline');

    let menu = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });


    let menumenu = menu.question("", saisie => {
        if (`${saisie}` == 1) {
            service.init().then(nb => {
                console.log(nb, 'Données mises à jour')
            }),
                menu.close();

        }
        else if (`${saisie}` == 2) {
            console.log('voici la liste des formateurs :')
            service.listerSessions()
            .then(liste => liste.forEach(el => {
                console.log(el.name, el.speakers)
            }))
                            menu.close();

        }
        else if (`${saisie}` == 99) {
            menu.close();
            return ""
        }
        else {
            console.log("Ce chiffre ne renvoie rien, try again")
        }
        menuPrincipal()
    })
    }
}
