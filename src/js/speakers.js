app.speakers = [
  {
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
  {
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
  {
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
  {
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
  {
    ident: 'ryanweaver',
    name: 'Ryan Weaver',
    bio: '',
    image: 'assets/images/speakers/ryan_weaver.jpg',
    title: 'KnpUniversity',
    social: {
      twitter: 'https://twitter.com/weaverryan',
    },
  },
  {
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
  {
    ident: 'jessicamauerhan',
    name: 'Jessica Mauerhan',
    bio: '',
    image: 'assets/images/speakers/jessica_mauerhan.jpg',
    title: 'Help Scout',
    social: {
      twitter: 'https://twitter.com/JessicaMauerhan',
      joindin: 'https://joind.in/user/JessicaMauerhan',
    },
  },
  {
    ident: 'adamculp',
    name: 'Adam Culp',
    bio: '',
    image: 'assets/images/speakers/adam_culp.jpg',
    title: 'Rogue Wave Software',
    social: {
      twitter: 'https://twitter.com/adamculp',
      joindin: 'https://joind.in/user/adamculp',
    },
  },
  {
    ident: 'larrygarfield',
    name: 'Larry Garfield',
    bio: '',
    image: 'assets/images/speakers/larry_garfield.jpg',
    title: 'Platform.sh',
    social: {
      twitter: 'https://twitter.com/crell',
    },
  },
  {
    ident: 'ianlittman',
    name: 'Ian Littman',
    bio: '',
    image: 'assets/images/speakers/ian_littman.jpg',
    title: 'Cloudy Hills',
    social: {
      twitter: 'https://twitter.com/iansltx',
    },
  },
  {
    ident: 'mikestowe',
    name: 'Mike Stowe',
    bio: '',
    image: 'assets/images/speakers/mike_stowe.jpg',
    title: 'RingCentral',
    social: {
      twitter: 'https://twitter.com/mikegstowe',
      joindin: 'https://joind.in/user/mikegstowe',
      linkedin: 'https://www.linkedin.com/in/mikestowe/',
    },
  },
  {
    ident: 'philipsharp',
    name: 'Philip Sharp',
    bio: '',
    image: 'assets/images/speakers/philip_sharp.jpg',
    title: 'SmugMug',
    social: {
      twitter: 'https://twitter.com/philipsharp',
    },
  },
  {
    ident: 'jdflynn',
    name: 'J.D. Flynn',
    bio: '',
    image: 'assets/images/speakers/jd_flynn.jpg',
    title: 'isobar',
    social: {
      twitter: 'https://twitter.com/JDDoesDev',
      linkedin: 'https://linkedin.com/in/jflynn8',
    },
  },
  {
    ident: 'andrewrota',
    name: 'Andrew Rota',
    bio: '',
    image: 'assets/images/speakers/andrew_rota.jpg',
    title: 'Wayfair',
    social: {
      twitter: 'https://twitter.com/andrewrota',
      linkedin: 'https://www.linkedin.com/in/andrewrota/',
      joindin: 'https://joind.in/user/andrewrota',
    },
  },
  {
    ident: 'stevegrunwell',
    name: 'Steve Grunwell',
    bio: '',
    image: 'assets/images/speakers/steve_grunwell.jpg',
    title: 'LiquidWeb',
    social: {
      twitter: 'https://twitter.com/stevegrunwell',
      linkedin: 'https://linkedin.com/in/stevegrunwell',
      joindin: 'https://joind.in/user/stevegrunwell',
    },
  },
];

app.speakers.forEach((speaker, idx) => {
  app.util.loadFile(`/assets/md/bio/${speaker.ident}.md`, (data) => {
    app.speakers[idx].bio = data.responseText
  })
})
