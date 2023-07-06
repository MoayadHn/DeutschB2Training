const vocabulary = [
  {
    question: 'Die Höhe der Stromkosten hängt ........ Verbrauch ab.',
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
    question: 'Achten Sie bei Bank-Angeboten .............. den Zins!',
  choices: ['auf', 'für', 'bei', 'mit'],
    correctAnswerIndex: 0
  },
  {
    question: 'Lassen Sie uns ............. der Sitzung anfangen!',
  choices: ['auf', 'für', 'bei', 'mit'],
    correctAnswerIndex: 3
  },
  {
    question: 'Es kommt nur ............. dich selbst an, ob du Erfolg hast.',
  choices: ['auf', 'für', 'bei', 'mit'],
    correctAnswerIndex: 0
  },
  question: 'Ich antworte dem Chef morgen ........... seine E-Mail, heute habe ich keine Lust mehr.',
choices: ['auf', 'für', 'bei', 'mit'],
  correctAnswerIndex: 0
},
  question: '......... dem Text sollten Sie noch arbeiten.',
choices: ['auf', 'an', 'bei', 'mit'],
  correctAnswerIndex: 1
},
  question: 'Er ärgert sich ............. seinen Kollegen, der immer viel zu laut telefoniert.',
choices: ['auf', 'an', 'über', 'mit'],
  correctAnswerIndex: 2
},
  question: 'Die Personalabteilung fordert die Mitarbeiter .......... der Abgabe der Urlaubsanträge auf.',
choices: ['zu', 'an', 'bei', 'mit'],
  correctAnswerIndex: 0
},
  question: 'Endlich hat mein Kollege ......... dem Rauchen aufgehört.',
choices: ['auf', 'an', 'bei', 'mit'],
  correctAnswerIndex: 3
},
  question: 'Der Journalist will die Bürger ........... den Plan des Politikers aufklären.',
choices: ['auf', 'mit', 'über', 'an'],
  correctAnswerIndex: 2
},
  question: 'Kannst du ............ meinen Hund aufpassen, während ich im Urlaub bin?',
choices: ['auf', 'mit', 'über', 'an'],
  correctAnswerIndex: 0
},
  question: 'Meine Kollegin regt sich immer .......... meine Unpünktlichkeit auf.',
choices: ['auf', 'mit', 'über', 'an'],
  correctAnswerIndex: 2
},
  question: 'Unsere Firma sollte das Geld besser .......... neue Computer ausgeben.',
choices: ['zu', 'mit', 'über', 'für'],
  correctAnswerIndex: 3
},

  {
    question: 'Ich möchte mich bei Ihnen ............ Ihre Hilfe bedanken.',
  choices: ['auf', 'für', 'bei', 'mit'],
    correctAnswerIndex: 1
  },
  {
    question: 'Die deutsche Zentrale befindet sich ............. Frankfurt.',
  choices: ['auf', 'in', 'am', 'ab'],
    correctAnswerIndex: 1
  },
  question: 'In fünf Minuten beginnen wir ........... der Besprechung! Wenn Frau Müller dann noch nicht da ist ...',
choices: ['auf', 'für', 'bei', 'mit'],
  correctAnswerIndex: 3
},
  question: 'Ich bemühe mich .......... einen Kredit bei der Bank. Hoffentlich klappt es.',
choices: ['auf', 'an', 'um', 'über'],
  correctAnswerIndex: 2
},
  question: 'Er hat damit keine Erfahrung. Deshalb berät er sich ........... seiner Kollegin.',
choices: ['auf', 'für', 'über', 'mit'],
  correctAnswerIndex: 3
},
  question: 'Alle Zeitungen berichten zurzeit ........... die verschiedenen Krisen in Europa.',
choices: ['über', 'an', 'für', 'mit'],
  correctAnswerIndex: 0
},
  question: 'Brigitte Schär beschäftigt sich ............ den Finanzen der Firma.',
choices: ['auf', 'an', 'bei', 'mit'],
  correctAnswerIndex: 3
},
  question: 'Der Gast beschwert sich ........... Hotelmanager ......... den unfreundlichen Kellner.',
choices: ['auf - um', 'über - für', 'beim - über', 'bei - mit'],
  correctAnswerIndex: 2
},
  question: 'Unsere Backwaren bestehen nur .......... den besten Zutaten.',
choices: ['auf', 'mit', 'aus', 'bei'],
  correctAnswerIndex: 2
},
  question: 'Ich beteilige mich .......... dem Geschenk für die Kollegin ......... drei Euro.',
choices: ['auf - über', 'aus - für', 'über - bei', 'an - mit'],
  correctAnswerIndex: 3
},
  question: 'Bewirb dich doch .......... das Praktikum.',
choices: ['zu', 'um', 'über', 'für'],
  correctAnswerIndex: 1
},
  {
    question: 'Ich beziehe mich ........... Ihren Brief vom 3. Mai.',
  choices: ['auf', 'für', 'bei', 'mit'],
    correctAnswerIndex: 0
  },
  {
    question: 'Darf ich Sie ........ Ihre Hilfe bitten?',
  choices: ['um', 'für', 'bei', 'mit'],
    correctAnswerIndex: 0
  },
  {
    question: 'Ich danke dir .......... deine Hilfe.',
  choices: ['auf', 'für', 'bei', 'mit'],
    correctAnswerIndex: 1
  },
  {
    question: 'Sie denkt .......... den netten Kollegen aus der Vertriebsabteilung.',
  choices: ['auf', 'für', 'an', 'mit'],
    correctAnswerIndex: 2
  },
  question: '„Dieser hier", antwortet er und deutet .......... den Hebel links unten.',
choices: ['auf', 'für', 'bei', 'mit'],
  correctAnswerIndex: 0
},
  question: 'Ich muss ständig .......... meinem Kollegen .......... seine Aufgaben in unserem Projekt diskutieren.',
choices: ['auf - mit', 'bei - auf', 'für - an', 'mit - über'],
  correctAnswerIndex: 3
},
  question: 'Hier dreht sich alles nur ........ den Preis! Und was ist mit der Qualität?',
choices: ['auf', 'um', 'über', 'mit'],
  correctAnswerIndex: 1
},
  question: 'Welche Fortbildung würde sich ........... Sie am besten eignen?',
choices: ['für', 'auf', 'bei', 'mit'],
  correctAnswerIndex: 0
},
  question: 'Sie konnten sich nicht ......... einen neuen Termin einigen.',
choices: ['auf', 'an', 'bei', 'mit'],
  correctAnswerIndex: 0
},
  question: 'Dürfen wir Sie heute Abend .......... dem Essen einladen?',
choices: ['auf', 'mit', 'über', 'zu'],
  correctAnswerIndex: 3
},
  // Add more questions...
];

export default vocabulary;

