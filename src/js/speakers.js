app.speakers = {
  calevans: {
    ident: 'calevans',
    name: 'Cal Evans',
    bio: '',
    image: 'assets/images/speakers/cal_evans.jpg',
    title: 'Nexcess',
    social: {
      twitter: 'https://twitter.com/CalEvans',
      linkedin: 'https://www.linkedin.com/in/calevans/',
      joindin: 'https://joind.in/user/calevans',
    },
  },
  joeferguson: {
    ident: 'joeferguson',
    name: 'Joe Ferguson',
    bio: '',
    image: 'assets/images/speakers/joe_ferguson.jpg',
    title: 'Ministry Brands',
    social: {
      twitter: 'https://twitter.com/joepferguson',
      joindin: 'https://joind.in/user/Svpernova09',
    },
  },
  christankersley: {
    ident: 'christankersley',
    name: 'Chris Tankersley',
    bio: '',
    image: 'assets/images/speakers/chris_tankersley.jpg',
    title: 'InQuest, LLC',
    social: {
      twitter: 'https://twitter.com/dragonmantank',
      joindin: 'https://joind.in/user/dragonmantank',
    },
  },
  margaretstaples: {
    ident: 'margaretstaples',
    name: 'Margaret Staples',
    bio: '',
    image: 'assets/images/speakers/margaret_staples.jpg',
    title: 'Twilio',
    social: {
      twitter: 'https://twitter.com/dead_lugosi',
      joindin: 'https://joind.in/user/deadlugosi',
    },
  },
  ryanweaver: {
    ident: 'ryanweaver',
    name: 'Ryan Weaver',
    bio: '',
    image: 'assets/images/speakers/ryan_weaver.jpg',
    title: 'KnpUniversity',
    social: {
      twitter: 'https://twitter.com/weaverryan',
    },
  },
  chrishartjes: {
    ident: 'chrishartjes',
    name: 'Chris Hartjes',
    bio: '',
    image: 'assets/images/speakers/chris_hartjes.jpg',
    title: 'Grumpy Learning Inc.',
    social: {
      twitter: 'https://twitter.com/grmpyprogrammer',
      joindin: 'https://joind.in/user/chartjes',
    },
  },
};

Object.keys(app.speakers).forEach((key) => {
  let speaker = app.speakers[key]
  $.get(`/assets/md/bio/${speaker.ident}.md`, (data) => {
    app.speakers[speaker.ident].bio = data
  }, 'text')
})
