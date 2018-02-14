window.app = (function initApp (app) {
  app = app || {}
  app.riot = riot
  riot.util.misc.extend(app, riot)

  app.conference = {
    date: 1533182400000
  }

  return app;
})(window.app)
