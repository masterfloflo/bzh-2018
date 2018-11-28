// importation de la librairie request
// recherche par défaut dans le répertoire node_modules
var request = require('request')

// Envoie de la requête http
request(
    // param 1 : l'URL d'accès (un exemple)
    'http://2018.breizhcamp.org/json/talks.json', 
    // options : on spécifie que ce sera du json
    { json: true }, 
    // unne fonction de callback qui sera executé (3 paramètres : erreur, reponse et tableau du corps de la réponse)
    function(err, res, body) {
    if (err) { return console.log('Erreur', err); }

    // body contient les données récupérées
    console.log('Ok', body);

    //ici je demande dans la liste seulement les noms
    /*body.forEach(function(el)
    {
        console.log(el.name)
    })*/
        

    });
