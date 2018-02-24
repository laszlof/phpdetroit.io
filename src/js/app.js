window.app = ((app) => {
  app = app || {}
  app.speakers = [];
  app.schedule = [];
  app.riot = riot
  riot.util.misc.extend(app, riot)

  app.conference = {
    date: 1532606400000,
    cfp: true,
    name: 'PHPDetroit Conference',
    location: {
      venue: 'Detroit Marriott Livonia',
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
  }

  return app
})(window.app)
