(() => {
  const mixin = {
    timeSince(timestamp) {
      return moment.unix(timestamp / 1000).fromNow()
    },
    dateFormat(timestamp, format) {
      return moment.unix(timestamp / 1000).format(format)
    },
    timeElapsed(timestamp) {
      const now = moment().unix()
      const diff = Math.abs(now - timestamp)
      return moment().subtract(diff, 'seconds').fromNow()
    },
  }

  app.mixin('time', mixin)
})()
