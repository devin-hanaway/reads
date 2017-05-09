exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('author').del()
    .then(function () {
      // Inserts seed entries
      return knex('author').insert([
        {first_name: "Alex",
         last_name: 'Martelli',
         bio: 'Alex Martelli spent 8 years with IBM Research, winning three Outstanding Technical Achievement ',
         auth_pic: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/alex_martelli.jpg'
        },
        {first_name: "Anna",
         last_name: 'Ravenscroft',
         bio: "Anna Martelli Ravenscroft is an experienced speaker and trainer, with diverse background developing curricula for church, regional transit, disaster preparedness; developing web applications for therapy, learning, fitness; writing technical books, articles and presentations; active member of Open Source community; skilled at translating between IT professionals and end users.",
         auth_pic: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/anna_ravenscroft.jpg'
        },
        {first_name: "Steve",
         last_name: 'Holden',
         bio: "Steve Holden Is a consultant, advising clients on system and network architectures and the design and implementation of programmed web systems. He also teaches classes on TCP/IP, network security, database and programming topics, and is the author of 'Python Web Programming', the O'Reilly School of Technology's 'Certificate series in Python' and O'Reilly Media's 'Intermediate Python' video series.",
         auth_pic: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/steve_holden.jpg'
        },
        {first_name: "Allen B.",
         last_name: 'Downey',
         bio: "Allen Downey is a Professor of Computer Science at Olin College of Engineering. He has taught at Wellesley College, Colby College and U.C. Berkeley. He has a Ph.D. in Computer Science from U.C. Berkeley and Master's and Bachelor's degrees from MIT.",
         auth_pic: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/allen_downey.jpg'
        },
        {first_name: "Bonnie",
         last_name: 'Eisenman',
         bio: "Bonnie Eisenman is a software engineer at Codecademy, with previous experience at Fog Creek Software and Google. She has spoken at several conferences on topics ranging from ReactJS to musical programming and Arduinos. In her spare time, she enjoys building electronic musical instruments, tinkering with hardware projects, and laser-cutting chocolate. Find her on Twitter as @brindelle.",
         auth_pic: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/bonnie_eisenman.jpg'
         },
         {first_name: "Kyle",
          last_name: 'Simpson',
          bio: "Kyle Simpson is an Open Web Evangelist who's passionate about all things JavaScript. He's an author, workshop trainer, tech speaker, and OSS contributor/leader.",
          auth_pic: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/kyle_simpson.jpg'
        }
      ]);
    });
};
