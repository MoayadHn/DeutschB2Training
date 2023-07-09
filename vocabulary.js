const vocabulary = [
  {
        question: 'Die Höhe der Stromkosten hängt ........... Verbrauch ab.',
    choices: ['vom', 'mit', 'bei', 'über'],
    correctAnswerIndex: 0
  },
  {
    question: 'Eyad soll seine Vorschläge ........... den Kolleginnen absprechen.',
  choices: ['von', 'mit', 'bei', 'über'],
    correctAnswerIndex: 1
  },
  {
  question: 'vermuten',
  choices: ['annehmen', 'erklären', 'ändern', 'verstehen'],
  correctAnswerIndex: 0
  },
  {
  question: 'etwas für glaubhaft oder wahrscheinlich halten',
  choices: ['erklären', 'vermuten', 'ändern', 'verstehen'],
  correctAnswerIndex: 1
},
  {
      question: 'Frau Meier muss ihre Urlaubspläne ........... ihrer Kollegin abstimmen.',
  choices: ['von', 'für', 'bei', 'mit'],
    correctAnswerIndex: 3
  },
  {
      question: 'Achten Sie bei Bank-Angeboten ........... den Zins!',
  choices: ['auf', 'für', 'bei', 'mit'],
    correctAnswerIndex: 0
  },
  {
      question: 'Lassen Sie uns ........... der Sitzung anfangen!',
  choices: ['auf', 'für', 'bei', 'mit'],
    correctAnswerIndex: 3
  },
  {
      question: 'Es kommt nur ........... dich selbst an, ob du Erfolg hast.',
  choices: ['auf', 'für', 'bei', 'mit'],
    correctAnswerIndex: 0
  },
  {
      question: 'Ich antworte dem Chef morgen ........... seine E-Mail, heute habe ich keine Lust mehr.',
choices: ['auf', 'für', 'bei', 'mit'],
  correctAnswerIndex: 0
},
  {
      question: ........... dem Text sollten Sie noch arbeiten.',
choices: ['auf', 'an', 'bei', 'mit'],
  correctAnswerIndex: 1
},
  {
      question: 'Er ärgert sich ........... seinen Kollegen, der immer viel zu laut telefoniert.',
choices: ['auf', 'an', 'über', 'mit'],
  correctAnswerIndex: 2
},
  {
      question: 'Die Personalabteilung fordert die Mitarbeiter ........... der Abgabe der Urlaubsanträge auf.',
choices: ['zu', 'an', 'bei', 'mit'],
  correctAnswerIndex: 0
},
  {
      question: 'Endlich hat mein Kollege ........... dem Rauchen aufgehört.',
choices: ['auf', 'an', 'bei', 'mit'],
  correctAnswerIndex: 3
},
  {
      question: 'Der Journalist will die Bürger ........... den Plan des Politikers aufklären.',
choices: ['auf', 'mit', 'über', 'an'],
  correctAnswerIndex: 2
},
  {
      question: 'Kannst du ........... meinen Hund aufpassen, während ich im Urlaub bin?',
choices: ['auf', 'mit', 'über', 'an'],
  correctAnswerIndex: 0
},
  {
      question: 'Meine Kollegin regt sich immer ........... meine Unpünktlichkeit auf.',
choices: ['auf', 'mit', 'über', 'an'],
  correctAnswerIndex: 2
},
  {
      question: 'Unsere Firma sollte das Geld besser ........... neue Computer ausgeben.',
choices: ['zu', 'mit', 'über', 'für'],
  correctAnswerIndex: 3
},

  {
      question: 'Ich möchte mich bei Ihnen ........... Ihre Hilfe bedanken.',
  choices: ['auf', 'für', 'bei', 'mit'],
    correctAnswerIndex: 1
  },
  {
      question: 'Die deutsche Zentrale befindet sich ........... Frankfurt.',
  choices: ['auf', 'in', 'am', 'ab'],
    correctAnswerIndex: 1
  },
  {
      question: 'In fünf Minuten beginnen wir ........... der Besprechung! Wenn Frau Müller dann noch nicht da ist ...',
choices: ['auf', 'für', 'bei', 'mit'],
  correctAnswerIndex: 3
},
  {
      question: 'Ich bemühe mich ........... einen Kredit bei der Bank. Hoffentlich klappt es.',
choices: ['auf', 'an', 'um', 'über'],
  correctAnswerIndex: 2
},
  {
      question: 'Er hat damit keine Erfahrung. Deshalb berät er sich ........... seiner Kollegin.',
choices: ['auf', 'für', 'über', 'mit'],
  correctAnswerIndex: 3
},
  {
      question: 'Alle Zeitungen berichten zurzeit ........... die verschiedenen Krisen in Europa.',
choices: ['über', 'an', 'für', 'mit'],
  correctAnswerIndex: 0
},
  {
      question: 'Brigitte Schär beschäftigt sich ........... den Finanzen der Firma.',
choices: ['auf', 'an', 'bei', 'mit'],
  correctAnswerIndex: 3
},
  {
      question: 'Der Gast beschwert sich ........... Hotelmanager ........... den unfreundlichen Kellner.',
choices: ['auf - um', 'über - für', 'beim - über', 'bei - mit'],
  correctAnswerIndex: 2
},
  {
      question: 'Unsere Backwaren bestehen nur ........... den besten Zutaten.',
choices: ['auf', 'mit', 'aus', 'bei'],
  correctAnswerIndex: 2
},
  {
      question: 'Ich beteilige mich ........... dem Geschenk für die Kollegin ........... drei Euro.',
choices: ['auf - über', 'aus - für', 'über - bei', 'an - mit'],
  correctAnswerIndex: 3
},
  {
      question: 'Bewirb dich doch ........... das Praktikum.',
choices: ['zu', 'um', 'über', 'für'],
  correctAnswerIndex: 1
},
  {
      question: 'Ich beziehe mich ........... Ihren Brief vom 3. Mai.',
  choices: ['auf', 'für', 'bei', 'mit'],
    correctAnswerIndex: 0
  },
  {
      question: 'Darf ich Sie ........... Ihre Hilfe bitten?',
  choices: ['um', 'für', 'bei', 'mit'],
    correctAnswerIndex: 0
  },
  {
      question: 'Ich danke dir ........... deine Hilfe.',
  choices: ['auf', 'für', 'bei', 'mit'],
    correctAnswerIndex: 1
  },
  {
      question: 'Sie denkt ........... den netten Kollegen aus der Vertriebsabteilung.',
  choices: ['auf', 'für', 'an', 'mit'],
    correctAnswerIndex: 2
  },
  {
      question: '„Dieser hier", antwortet er und deutet ........... den Hebel links unten.',
choices: ['auf', 'für', 'bei', 'mit'],
  correctAnswerIndex: 0
},
  {
      question: 'Ich muss ständig ........... meinem Kollegen ........... seine Aufgaben in unserem Projekt diskutieren.',
choices: ['auf - mit', 'bei - auf', 'für - an', 'mit - über'],
  correctAnswerIndex: 3
},
  {
      question: 'Hier dreht sich alles nur ........... den Preis! Und was ist mit der Qualität?',
choices: ['auf', 'um', 'über', 'mit'],
  correctAnswerIndex: 1
},
  {
      question: 'Welche Fortbildung würde sich ........... Sie am besten eignen?',
choices: ['für', 'auf', 'bei', 'mit'],
  correctAnswerIndex: 0
},
  {
      question: 'Sie konnten sich nicht ........... einen neuen Termin einigen.',
choices: ['auf', 'an', 'bei', 'mit'],
  correctAnswerIndex: 0
},
  {
      question: 'Dürfen wir Sie heute Abend ........... dem Essen einladen?',
choices: ['auf', 'mit', 'über', 'zu'],
  correctAnswerIndex: 3
},
  // Add more questions...


  // *******************************
    {
        question: 'Der Betriebsrat setzt sich ........... alle Mitarbeiter ein.',
        choices: ['für', 'mit', 'bei', 'über'],
        correctAnswerIndex: 0
    },
    {
        question: 'Er soll ........... seine kranke Kollegin einspringen.',
        choices: ['für', 'mit', 'bei', 'über'],
        correctAnswerIndex: 0
    },
    {
        question: 'Wir haben uns ........... diesen Wagen entschieden, weil er einen großen Kofferraum hat.',
        choices: ['von', 'für', 'bei', 'mit'],
        correctAnswerIndex: 1
    },
    {
        question: 'Der Chef hat ........... meinen Urlaubsantrag immer noch nicht entschieden.',
        choices: ['auf', 'für', 'über', 'mit'],
        correctAnswerIndex: 2
    },
    {
        question: 'Der Wirt entschuldigt sich ........... dem Gast für den schlechten Service.',
        choices: ['auf', 'für', 'bei', 'mit'],
        correctAnswerIndex: 2
    },
    {
        question: 'Wir haben ........... deinem tollen Erfolg erfahren und gratulieren dir!',
        choices: ['auf', 'für', 'von', 'mit'],
        correctAnswerIndex: 2
    },
    {
        question: 'Hast du dich ........... der Operation schon erholt?',
        choices: ['von', 'für', 'bei', 'mit'],
        correctAnswerIndex: 0
    },
    {
        question: 'Sie erinnert sich ungern ........... ihren Streit mit der Kollegin.',
        choices: ['auf', 'an', 'bei', 'mit'],
        correctAnswerIndex: 1
    },
    {
        question: 'Kann man gute Qualität ........... Preis erkennen?',
        choices: ['auf', 'an', 'beim', 'am'],
        correctAnswerIndex: 3
    },
    {
        question: 'Ich möchte mich ........... Ihnen ........... einem Flug erkundigen.',
        choices: ['mit - zu', 'auf - an', 'bei - nach', 'mit - für'],
        correctAnswerIndex: 2
    },
    {
        question: 'Ich bin ........... die hohe Rechnung erschrocken.',
        choices: ['auf', 'über', 'bei', 'mit'],
        correctAnswerIndex: 1
    },
    {
        question: 'Man hat ihn ........... einem Diebstahl erwischt.',
        choices: ['auf', 'mit', 'über', 'bei'],
        correctAnswerIndex: 3
    },
    {
        question: 'Warum willst du mir nichts ........... deinen neuen Freund erzählen?',
        choices: ['auf', 'mit', 'über', 'an'],
        correctAnswerIndex: 2
    },
    {
        question: 'Meine Kollege erzählt gern ........... seinen Urlaubsreisen.',
        choices: ['auf', 'mit', 'über', 'von'],
        correctAnswerIndex: 3
    },
    {
        question: 'Es fehlt ........... einem guten Plan für dieses Projekt.',
        choices: ['zu', 'mit', 'über', 'an'],
        correctAnswerIndex: 3
    },

    {
        question: 'Herr Müller, da fragt eine Dame ........... Ihnen.',
        choices: ['auf', 'für', 'nach', 'um'],
        correctAnswerIndex: 2
    },
    {
        question: 'Ich freue mich ........... meinen Urlaub.',
        choices: ['auf', 'in', 'am', 'ab'],
        correctAnswerIndex: 0
    },
    {
        question: 'Unser Chef hat sich sehr ........... den großen Auftrag gefreut.',
        choices: ['auf', 'über', 'bei', 'mit'],
        correctAnswerIndex: 1
    },
    {
        question: 'Die Diskussion hat ........... einem guten Ergebnis geführt.',
        choices: ['zu', 'an', 'um', 'über'],
        correctAnswerIndex: 0
    },
    {
        question: 'Seit es dem Unternehmen so schlecht geht, fürchten sich viele ........... einer Kündigung.',
        choices: ['mit', 'für', 'über', 'vor'],
        correctAnswerIndex: 3
    },
    {
        question: 'In der nächsten Besprechung geht es hauptsächlich ........... das Projekt von Herrn Braun.',
        choices: ['über', 'um', 'für', 'mit'],
        correctAnswerIndex: 1
    },
    {
        question: 'Es gehört ........... ihren Aufgaben, auf das Betriebsklima zu achten.',
        choices: ['auf', 'für', 'bei', 'zu'],
        correctAnswerIndex: 3
    },
    {
        question: 'Stempel und Unterschrift gelten ........... Quittung.',
        choices: ['als', 'über', 'um', 'für'],
        correctAnswerIndex: 0
    },
    {
        question: 'Sie muss sich erst ........... die neue Software gewöhnen.',
        choices: ['auf', 'mit', 'an', 'bei'],
        correctAnswerIndex: 2
    },
    {
        question: 'Meine Kollegin glaubt nicht mehr ........... eine Beförderung.',
        choices: ['über', 'für', 'bei', 'an'],
        correctAnswerIndex: 3
    },
    {
        question: 'Wir gratulieren dir ........... deinem Erfolg.',
        choices: ['zu', 'um', 'über', 'für'],
        correctAnswerIndex: 0
    },
    {
        question: 'Das halte ich ........... ein großes Problem.',
        choices: ['auf', 'für', 'bei', 'mit'],
        correctAnswerIndex: 1
    },
    {
        question: 'Mein Freund hält nicht viel ........... seinem neuen Chef.',
        choices: ['von', 'über', 'bei', 'mit'],
        correctAnswerIndex: 0
    },
    {
        question: 'Auch die Geschäftsleitung muss sich ........... die Betriebsvereinbarung halten.',
        choices: ['auf', 'an', 'bei', 'mit'],
        correctAnswerIndex: 1
    },
    {
        question: 'Ich habe da ein Problem. Es handelt sich ........... einen Fehler in der Rechnung.',
        choices: ['auf', 'um', 'an', 'mit'],
        correctAnswerIndex: 1
    },
    {
        question: 'Der Artikel handelt ........... unterschiedlichen Erfahrungen mit einer Weiterbildung.',
        choices: ['auf', 'für', 'bei', 'von'],
        correctAnswerIndex: 3
    },
    {
        question: 'Kann ich dir ........... der Arbeit helfen?',
        choices: ['mit', 'bei', 'an', 'über'],
        correctAnswerIndex: 1
    },
    {
        question: '........... dem Lieferschein geht hervor, dass wir richtig geliefert haben.',
        choices: ['Auf', 'Mit', 'Aus', 'Um'],
        correctAnswerIndex: 2
    },
    {
        question: 'Du kannst mich nicht ........... meinem Plan hindern.',
        choices: ['für', 'auf', 'an', 'mit'],
        correctAnswerIndex: 2
    },
    {
        question: 'Ich möchte Sie ........... das Rauchverbot in unserem Hotel hinweisen.',
        choices: ['auf', 'an', 'bei', 'mit'],
        correctAnswerIndex: 0
    },
    {
        question: 'Wir hoffen ........... ein günstiges Angebot.',
        choices: ['auf', 'für', 'über', 'zu'],
        correctAnswerIndex: 0
    },
    {
        question: 'Sie hören dann wieder ........... mir.',
        choices: ['auf', 'bei', 'über', 'von'],
        correctAnswerIndex: 3
    },
    {
        question: 'Ich werde mich ........... dem Personalchef ........... die ausgeschriebene Stelle informieren.',
        choices: ['bei - über', 'mit - nach', 'über -für ', 'von - zu'],
        correctAnswerIndex: 0
    },

    {
        question: 'Er interessiert sich sehr ........... die neuesten technischen Entwicklungen.',
        choices: ['auf', 'für', 'bei', 'mit'],
        correctAnswerIndex: 1
    },
    {
        question: 'Die Arbeiter kämpfen ........... einen besseren Lohn.',
        choices: ['auf', 'in', 'um', 'für'],
        correctAnswerIndex: 3
    },
    {
        question: 'Die Bürger kämpfen ........... den Bau der Straße.',
        choices: ['auf', 'nach', 'gegen', 'in'],
        correctAnswerIndex: 2
    },

];

export default vocabulary;

