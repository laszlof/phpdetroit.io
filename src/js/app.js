window.app = (function initApp (app) {
  app = app || {}
  app.riot = riot
  riot.util.misc.extend(app, riot)

  app.conference = {
    date: 1533214800000,
    name: 'PHPDetroit',
    location: {
      city: 'Detroit',
      state: 'Michigan',
      country: 'USA',
      address: '',
      zip: ''
    },
    tickets: 150
  }

  return app
})(window.app)
