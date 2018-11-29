// tableau qui contiendra toutes les sessions du BreizhCamp
let talks = [];
const request = require('request-promise-native');

module.exports = class Service {
  constructor() {
    this.talks = []
  }

  init() {
    return Promise.all(
      ['http://2018.breizhcamp.org/json/talks.json',
      'http://2018.breizhcamp.org/json/others.json']
      .map(url => request(url, { json: true } )))
      .then(tabtab => {
            this.talks = tabtab[0].concat(tabtab[1])
            return this.talks.length
      })
    }
    listerSessions() {
      return Promise.resolve(this.talks)
    }
  }










  
  // méthodes avec un callback
/*
exports.init = (callback) => {

  request('http://2018.breizhcamp.org/json/talks.json', { json: true },
    (err, res, body) => {
      if (err) { return console.log(err); }

      talks = talks.concat(body)

      request('http://2018.breizhcamp.org/json/others.json', { json: true },
        (err, res, body2) => {
          if (err) { return console.log(err); }

          talks = talks.concat(body2)

          callback(talks.length);
        }
      )

    }
  )
};

exports.listerSessions = (callback) => {
  request(
    'http://2018.breizhcamp.org/json/talks.json',
    { json: true },
    (err, res, body) => {
      if (err) { return console.log('Erreur', err); }

      body.forEach(function (el) {
        console.log(el.speakers)
      }
      )

      request('http://2018.breizhcamp.org/json/others.json', { json: true },
        (err, res, body2) => {
          if (err) { return console.log(err); }

          body2.forEach(function (el) {
            console.log(el.speakers)
          }
          )
        }
      )
    }
  )
}
*/