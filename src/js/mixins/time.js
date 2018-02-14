(function timeMixin() {
  var mixin = {
    timeSince: function (timestamp) {
      return moment.unix(timestamp / 1000).fromNow();
    },
    dateFormat: function (timestamp, format) {
      return moment.unix(timestamp / 1000).format(format);
    },
    timeElapsed: function (timestamp) {
      var now = moment().unix();
      var diff = Math.abs(now - timestamp);
      return moment().subtract(diff, 'seconds').fromNow();
    }
  };

  app.mixin('time', mixin);
})();
