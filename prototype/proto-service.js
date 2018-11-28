var service = require('../service')
// je vais pouvoir faire un init qui prends en paramètre une fonction EN ASYNCHRONE
service.init(function(nb) {
    console.log('[init]', nb, 'sessions trouvées.')
});

//SYNCHRONE
/*
var nbElements = service.init()
console.log("J'ai reçu", nbElements, "éléments") */