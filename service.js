var request = require('request');
// tableau qui contiendra toutes les sessions du BreizhCamp
var talks = [];


exports.init = function (callback) {

  request('http://2018.breizhcamp.org/json/talks.json', { json: true },
    function (err, res, body) {
      if (err) { return console.log(err); }

      talks = talks.concat(body)

      request('http://2018.breizhcamp.org/json/others.json', { json: true },
      function (err, res, body2) {
        if (err) { return console.log(err); }
  
        talks = talks.concat(body2)

        callback(talks.length);
      }
    )

    }
  )

};
exports.listerSessions = function (callback) {
  request(
    'http://2018.breizhcamp.org/json/talks.json', 
    { json: true }, 
    function(err, res, body) {
    if (err) { return console.log('Erreur', err); }

    body.forEach(function(el)
    {
        console.log(el.speakers)
      }
    )

    request('http://2018.breizhcamp.org/json/others.json', { json: true },
    function (err, res, body2) {
      if (err) { return console.log(err); }

      body2.forEach(function(el)
    {
        console.log(el.speakers)
      }
    )
      }
    )
    }
  )
}
