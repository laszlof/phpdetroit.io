app.speakers = {
  // franklaszlo: {
  //   name: 'Frank Laszlo',
  //   image: 'assets/images/speakers/placeholder.png',
  //   title: 'CEO - Testing, Inc',
  //   social: {
  //     twitter: 'https://twitter.com/FrankLaszlo',
  //     linkedin: 'https://linkedin.com/in/laszlof',
  //     joindin: 'https://joind.in/speaker',
  //   },
  // },
};

app.speakers.get = ident => app.speakers[ident] || {
  name: 'TBD',
  image: 'assets/images/speakers/placeholder.png',
  title: '',
  social: {
    twitter: '',
    linkedin: '',
    joindin: '',
  },
};
