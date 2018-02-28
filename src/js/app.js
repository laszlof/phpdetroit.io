window.app = ((app) => {
  app = app || {}
  app.speakers = [];
  app.schedule = [];
  app.riot = riot
  riot.util.misc.extend(app, riot)

  app.conference = {
    date: 1532606400000,
    cfp: false,
    name: 'PHPDetroit Conference',
    location: {
      url: 'http://www.marriott.com/hotels/travel/dtwli-detroit-marriott-livonia/',
      venue: 'Detroit Marriott Livonia',
      phone: '+1 734-462-3100',
      city: 'Livonia',
      state: 'Michigan',
      country: 'USA',
      address: '17100 N. Laurel Park Dr.',
      zip: '48152',
    },
    tickets: 200,
  }

  app.social = {
    twitter: 'https://twitter.com/phpdet',
    facebook: 'https://www.facebook.com/detconf',
    slack: 'https://phpdetroit-slack.herokuapp.com/',
    joindin: 'https://joind.in/event/phpdetroit-conference-2018',
  }

  app.getSpeaker = ident => app.speakers[ident] || {
    name: 'TBD',
    image: 'assets/images/speakers/placeholder.png',
    title: '',
    social: {
      twitter: '',
      linkedin: '',
      joindin: '',
    },
  }

  return app
})(window.app)
