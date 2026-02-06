import { Questionnaire } from "@/types/questionnaire";

export const questionnaires: Questionnaire[] = [
  {
    id: "1",
    name: "System Usability Scale",
    shortHandle: "SUS",
    description: "A widely used 10-item scale giving a global view of subjective assessments of usability. The SUS yields a single number representing a composite measure of the overall usability of the system being studied.",
    publicationYear: 1996,
    authors: ["John Brooke"],
    categories: ["Usability", "General Purpose", "Post-Study"],
    references: [
      {
        label: "Original Paper",
        url: "https://doi.org/10.1201/9781498710411-35"
      }
    ]
  },
  {
    id: "2",
    name: "User Experience Questionnaire",
    shortHandle: "UEQ",
    description: "A questionnaire to measure user experience of interactive products. It allows a quick assessment of the user experience with 26 items. The data analysis is performed online via a data analysis tool.",
    publicationYear: 2008,
    authors: ["Martin Schrepp", "Andreas Hinderks", "Jörg Thomaschewski"],
    categories: ["User Experience", "General Purpose", "Post-Study"],
    references: [
      {
        label: "Official Website",
        url: "https://www.ueq-online.org/"
      },
      {
        label: "Handbook",
        url: "https://www.ueq-online.org/Material/Handbook.pdf"
      }
    ]
  },
  {
    id: "3",
    name: "NASA Task Load Index",
    shortHandle: "NASA-TLX",
    description: "A subjective, multidimensional assessment tool that rates perceived workload in order to assess a task, system, or team's effectiveness or other aspects of performance. It was developed by the Human Performance Group at NASA's Ames Research Center.",
    publicationYear: 1988,
    authors: ["Sandra G. Hart", "Lowell E. Staveland"],
    categories: ["Workload", "Task-Specific", "Post-Study"],
    references: [
      {
        label: "Original Paper",
        url: "https://doi.org/10.1016/S0166-4115(08)62386-9"
      },
      {
        label: "Official Website",
        url: "https://humansystems.arc.nasa.gov/groups/tlx/"
      }
    ]
  },
  {
    id: "4",
    name: "AttrakDiff",
    shortHandle: "AttrakDiff",
    description: "A questionnaire for measuring the attractiveness of interactive products. It is based on the assumption that the perception of interactive products has pragmatic and hedonic qualities. The pragmatic quality (PQ) describes the usability of a product and enables users to reach their goals.",
    publicationYear: 2003,
    authors: ["Marc Hassenzahl", "Michael Burmester", "Franz Koller"],
    categories: ["User Experience", "Attractiveness", "Post-Study"],
    references: [
      {
        label: "Official Website",
        url: "http://www.attrakdiff.de/"
      },
      {
        label: "Paper",
        url: "https://doi.org/10.1007/978-3-540-24624-4_25"
      }
    ]
  },
  {
    id: "5",
    name: "Computer System Usability Questionnaire",
    shortHandle: "CSUQ",
    description: "A 19-item questionnaire designed to assess user satisfaction with computer system usability in the context of scenario-based usability studies. It includes questions about system usefulness, information quality, and interface quality.",
    publicationYear: 1995,
    authors: ["James R. Lewis"],
    categories: ["Usability", "General Purpose", "Post-Study"],
    references: [
      {
        label: "Original Paper",
        url: "https://doi.org/10.1518/001872095779049732"
      }
    ]
  },
  {
    id: "6",
    name: "Questionnaire for User Interaction Satisfaction",
    shortHandle: "QUIS",
    description: "A tool designed to assess users' subjective satisfaction with specific aspects of the human-computer interface. It was developed by a multi-disciplinary team of researchers at the University of Maryland.",
    publicationYear: 1988,
    authors: ["Kent Norman", "Ben Shneiderman"],
    categories: ["User Experience", "General Purpose", "Post-Study"],
    references: [
      {
        label: "Official Website",
        url: "http://www.lap.umd.edu/quis/"
      }
    ]
  },
  {
    id: "7",
    name: "Technology Acceptance Model Questionnaire",
    shortHandle: "TAM",
    description: "A questionnaire based on the Technology Acceptance Model, which is an information systems theory that models how users come to accept and use a technology. It focuses on perceived usefulness and perceived ease of use.",
    publicationYear: 1989,
    authors: ["Fred D. Davis"],
    categories: ["Acceptance", "Technology", "Post-Study"],
    references: [
      {
        label: "Original Paper",
        url: "https://doi.org/10.2307/249008"
      }
    ]
  },
  {
    id: "8",
    name: "Single Ease Question",
    shortHandle: "SEQ",
    description: "A single-item post-task questionnaire designed to assess how difficult users find a task. It uses a 7-point rating scale from 'Very Difficult' to 'Very Easy' and is typically administered immediately after a user completes a task.",
    publicationYear: 2009,
    authors: ["Jeff Sauro", "Joseph S. Dumas"],
    categories: ["Usability", "Task-Specific", "Post-Task"],
    references: [
      {
        label: "CHI Paper",
        url: "https://doi.org/10.1145/1518701.1518946"
      }
    ]
  },
  {
    id: "9",
    name: "Perceived Media Quality (ITU-T P.910)",
    shortHandle: "P.910",
    description: "A standardized recommendation for subjective video quality assessment methods, frequently used to evaluate perceived media quality.",
    publicationYear: 2008,
    authors: ["ITU-T"],
    categories: ["Media Quality", "Perception", "Post-Study"],
    references: [
      {
        label: "ITU-T Recommendation",
        url: "https://www.itu.int/rec/T-REC-P.910-200804-I"
      }
    ]
  },
  {
    id: "10",
    name: "Ubisoft Perceived Experience Questionnaire",
    shortHandle: "UPEQ",
    description: "A self-determination-based questionnaire designed for evaluating perceived player experience in video games.",
    publicationYear: 2018,
    authors: ["Elise Vella", "Daniel R. Johnson", "Leanne Hides"],
    categories: ["Gaming", "User Experience", "Post-Study"],
    references: [
      {
        label: "Paper",
        url: "https://www.researchgate.net/publication/327641565_UPEQ_ubisoft_perceived_experience_questionnaire_a_self-determination_evaluation_tool_for_video_games"
      }
    ]
  },
  {
    id: "11",
    name: "Patient Health Questionnaire",
    shortHandle: "PHQ-9",
    description: "A nine-item depression screening questionnaire used to assess depression severity in clinical and research settings.",
    publicationYear: 2001,
    authors: ["Robert L. Spitzer", "Janet B. W. Williams", "Kurt Kroenke"],
    categories: ["Well-being", "Mental Health", "Clinical"],
    references: [
      {
        label: "Overview",
        url: "https://patient.info/doctor/patient-health-questionnaire-phq-9"
      },
      {
        label: "Review",
        url: "http://jacobimed.org/public/Ambulatory_files/mlove/CurriculumWomenandGeri/Depression/Depression%20articles/PHQ-9ReviewKroenke.pdf"
      }
    ]
  },
  {
    id: "12",
    name: "Generalized Anxiety Disorder Scale",
    shortHandle: "GAD-7",
    description: "A seven-item self-report scale used for screening and measuring the severity of generalized anxiety symptoms.",
    publicationYear: 2006,
    authors: ["Robert L. Spitzer", "Kurt Kroenke", "Janet B. W. Williams", "Bernd Löwe"],
    categories: ["Well-being", "Mental Health", "Clinical"],
    references: [
      {
        label: "Questionnaire PDF",
        url: "https://med.dartmouth-hitchcock.org/documents/GAD-7-anxiety-screen.pdf"
      }
    ]
  },
  {
    id: "13",
    name: "Positive and Negative Affect Schedule",
    shortHandle: "PANAS",
    description: "A widely used measure of positive and negative affect to capture trait and state emotional experience.",
    publicationYear: 1988,
    authors: ["David Watson", "Lee Anna Clark", "Auke Tellegen"],
    categories: ["Well-being", "Affect", "Psychology"],
    references: [
      {
        label: "German Version (GESIS)",
        url: "https://zis.gesis.org/skala/Breyer-Bluemke-Deutsche-Version-der-Positive-and-Negative-Affect-Schedule-PANAS-(GESIS-Panel)"
      }
    ]
  },
  {
    id: "14",
    name: "Satisfaction With Life Scale",
    shortHandle: "SWLS",
    description: "A five-item global cognitive judgment measure of life satisfaction.",
    publicationYear: 1985,
    authors: ["Ed Diener", "Robert A. Emmons", "Randy J. Larsen", "Sharon Griffin"],
    categories: ["Well-being", "Life Satisfaction", "Psychology"],
    references: [
      {
        label: "Scale PDF",
        url: "https://www.researchgate.net/profile/Ed_Diener2/publication/7404119_The_Satisfaction_With_Life_Scale/links/597b725caca272d568af536d/The-Satisfaction-With-Life-Scale.pdf"
      }
    ]
  },
  {
    id: "15",
    name: "Technology-Supported Reflection Inventory",
    shortHandle: "TSRI",
    description: "A questionnaire to assess how technology supports user reflection activities.",
    publicationYear: 2021,
    authors: ["Maren B. R. Hein", "Andreas Butz", "Thomas Kosch"],
    categories: ["Self-Reflection", "Technology Perception", "Post-Study"],
    references: [
      {
        label: "Paper",
        url: "https://dl.acm.org/doi/pdf/10.1145/3411764.3445673"
      }
    ]
  },
  {
    id: "16",
    name: "iGroup Presence Questionnaire",
    shortHandle: "IPQ",
    description: "A presence questionnaire for virtual environments measuring spatial presence, involvement, and experienced realism.",
    publicationYear: 2004,
    authors: ["Thomas Schubert", "Frank Friedmann", "Holger Regenbrecht"],
    categories: ["Presence", "VR", "Immersion"],
    references: [
      {
        label: "Official Website",
        url: "http://www.igroup.org/pq/ipq/index.php"
      }
    ]
  },
  {
    id: "17",
    name: "Presence Questionnaire",
    shortHandle: "PQ",
    description: "A foundational presence instrument by Witmer and Singer for assessing user presence in virtual environments.",
    publicationYear: 1998,
    authors: ["Bob G. Witmer", "Michael J. Singer"],
    categories: ["Presence", "VR", "Immersion"],
    references: [
      {
        label: "Paper",
        url: "https://www.mitpressjournals.org/doi/10.1162/105474698565686"
      }
    ]
  },
  {
    id: "18",
    name: "Social Presence in Gaming Questionnaire",
    shortHandle: "SPGQ",
    description: "A scale for measuring social presence dimensions experienced during digital gameplay.",
    publicationYear: 2008,
    authors: ["Pim M. A. Desmet", "Wijnand A. IJsselsteijn", "Yvonne A. W. de Kort"],
    categories: ["Presence", "Gaming", "Social Connectedness"],
    references: [
      {
        label: "Publication Record",
        url: "https://www.narcis.nl/publication/RecordID/oai:pure.tue.nl:publications%2Fdf4ad4d7-ec2d-4378-b673-cdc53928de5e"
      }
    ]
  },
  {
    id: "19",
    name: "Augmented Reality Immersion Questionnaire",
    shortHandle: "ARI",
    description: "A questionnaire for assessing immersion specifically in augmented reality experiences.",
    publicationYear: 2017,
    authors: ["Nicolas Georgiou", "Ioannis Kyza", "Katerina Mania"],
    categories: ["Immersion", "AR", "User Experience"],
    references: [
      {
        label: "Paper",
        url: "https://doi.org/10.1016/j.ijhcs.2016.09.014"
      }
    ]
  },
  {
    id: "20",
    name: "Physical Activity Enjoyment Scale",
    shortHandle: "PACES",
    description: "A scale for measuring enjoyment of physical activity and exercise participation.",
    publicationYear: 1991,
    authors: ["R. W. Kendzierski", "K. J. DeCarlo"],
    categories: ["Physical Activity", "Engagement", "Well-being"],
    references: [
      {
        label: "Scale Example",
        url: "https://www.researchgate.net/figure/Physical-Activity-Enjoyment-Scale-PACES-18-items_tbl2_51666369"
      }
    ]
  },
  {
    id: "21",
    name: "Simulator Sickness Questionnaire",
    shortHandle: "SSQ",
    description: "A standard questionnaire to quantify simulator and VR sickness symptoms.",
    publicationYear: 1993,
    authors: ["Robert S. Kennedy", "Norman E. Lane", "Kevin S. Berbaum", "Michael G. Lilienthal"],
    categories: ["VR", "Well-being", "Post-Exposure"],
    references: [
      {
        label: "Paper",
        url: "https://www.tandfonline.com/doi/abs/10.1207/s15327108ijap0303_3"
      }
    ]
  },
  {
    id: "22",
    name: "User Experience in Virtual Reality Questionnaire",
    shortHandle: "UEQ-VR",
    description: "A VR-adapted user experience questionnaire variant for immersive virtual environments.",
    publicationYear: 2018,
    authors: ["Pascal Knierim", "Thomas Kosch", "Albrecht Schmidt"],
    categories: ["VR", "User Experience", "Post-Study"],
    references: [
      {
        label: "Paper",
        url: "https://dl.acm.org/doi/abs/10.1145/2927929.2927955"
      }
    ]
  },
  {
    id: "23",
    name: "Familiarity with AR/VR Devices (Single-Item)",
    shortHandle: "VR Familiarity",
    description: "A single-item 7-point Likert self-rating of familiarity with AR and VR devices.",
    publicationYear: 2021,
    authors: ["Thomas Kosch", "Paweł W. Woźniak", "Florian Mueller"],
    categories: ["VR", "Demographics", "Self-Report"],
    references: [
      {
        label: "Citation",
        url: "https://doi.org/10.1145/3472749.3474750"
      }
    ]
  },
  {
    id: "24",
    name: "Sense of Control Scale",
    shortHandle: "SOC",
    description: "A scale capturing perceived control over life outcomes and one’s environment.",
    publicationYear: 2019,
    authors: ["Stanford SPARQtools"],
    categories: ["General Context", "Psychology", "Self-Report"],
    references: [
      {
        label: "Scale PDF",
        url: "https://sparqtools.org/wp-content/uploads/2022/10/Sense-of-Control.pdf"
      }
    ]
  },
  {
    id: "25",
    name: "Intrinsic Motivation Inventory",
    shortHandle: "IMI",
    description: "A multidimensional measure to assess participants’ subjective experience related to target activities in experiments.",
    publicationYear: 1982,
    authors: ["Edward L. Deci", "Richard M. Ryan"],
    categories: ["Motivation", "Psychology", "Post-Task"],
    references: [
      {
        label: "Official Resource",
        url: "https://selfdeterminationtheory.org/intrinsic-motivation-inventory/"
      }
    ]
  },
  {
    id: "26",
    name: "Motivated Strategies for Learning Questionnaire",
    shortHandle: "MSLQ",
    description: "A self-report instrument assessing motivational orientations and learning strategies.",
    publicationYear: 1991,
    authors: ["Paul R. Pintrich", "David A. F. Smith", "Teresa Garcia", "Wilbert J. McKeachie"],
    categories: ["Motivation", "Learning", "Education"],
    references: [
      {
        label: "Instrument Overview",
        url: "http://stelar.edc.org/instruments/motivated-strategies-learning-questionnaire-mslq"
      }
    ]
  },
  {
    id: "27",
    name: "Game Engagement Questionnaire",
    shortHandle: "GEQ (Engagement)",
    description: "A questionnaire measuring engagement dimensions during digital gameplay.",
    publicationYear: 2009,
    authors: ["Charlene Jennett", "Anna L. Cox", "Paul Cairns"],
    categories: ["Engagement", "Gaming", "User Experience"],
    references: [
      {
        label: "Paper",
        url: "https://www.sciencedirect.com/science/article/abs/pii/S0022103109000444"
      }
    ]
  },
  {
    id: "28",
    name: "Game Experience Questionnaire",
    shortHandle: "GEQ",
    description: "A questionnaire for assessing multiple dimensions of player experience.",
    publicationYear: 2008,
    authors: ["Wijnand A. IJsselsteijn", "Yvonne A. W. de Kort", "Karolien Poels"],
    categories: ["Gaming", "User Experience", "Post-Study"],
    references: [
      {
        label: "Questionnaire PDF",
        url: "https://pure.tue.nl/ws/files/21666907/Game_Experience_Questionnaire_English.pdf"
      }
    ]
  },
  {
    id: "29",
    name: "Big Five Inventory-2 (Short and Extra-Short Forms)",
    shortHandle: "BFI-2-S / BFI-2-XS",
    description: "Short and extra-short versions of the Big Five personality inventory.",
    publicationYear: 2020,
    authors: ["Beatrice Rammstedt", "C. J. S. Lüdtke", "Oliver P. John"],
    categories: ["Personality", "Psychology", "General Purpose"],
    references: [
      {
        label: "Paper",
        url: "http://www.colby.edu/psych/wp-content/uploads/sites/50/2020/05/Rammstedt_et_al_2020.pdf"
      }
    ]
  },
  {
    id: "30",
    name: "Bartle Test of Gamer Psychology",
    shortHandle: "Bartle Test",
    description: "A player-type questionnaire classifying gamer motivations and play styles.",
    publicationYear: 1996,
    authors: ["Richard Bartle"],
    categories: ["Personality", "Gaming", "Motivation"],
    references: [
      {
        label: "Online Test",
        url: "https://matthewbarr.co.uk/bartle/"
      }
    ]
  },
  {
    id: "31",
    name: "Abbreviated Place Attachment Scale",
    shortHandle: "APAS",
    description: "A concise scale to assess place attachment in environmental and spatial research contexts.",
    publicationYear: 2021,
    authors: ["Marek Lewicka", "Colleen M. Raymond"],
    categories: ["Place Attachment", "Environment", "Psychology"],
    references: [
      {
        label: "Paper",
        url: "https://doi.org/10.1016/j.jenvp.2021.101577"
      }
    ]
  },
  {
    id: "32",
    name: "Sense of Place Scales",
    shortHandle: "SoP",
    description: "A family of scales used to measure emotional, cognitive, and behavioral ties to place.",
    publicationYear: 2021,
    authors: ["Anne C. M. Brocato", "Jennifer D. Hanks", "Brady Wagoner"],
    categories: ["Place Attachment", "Environment", "General Purpose"],
    references: [
      {
        label: "Scale Comparison",
        url: "https://doi.org/10.1007/s10901-020-09798-6"
      }
    ]
  },
  {
    id: "33",
    name: "DIAMONDS Situational Characteristics Taxonomy",
    shortHandle: "DIAMONDS",
    description: "A taxonomy and item set for describing psychologically relevant characteristics of situations.",
    publicationYear: 2014,
    authors: ["Christopher J. Soto", "Oliver P. John"],
    categories: ["Situational States", "Psychology", "General Purpose"],
    references: [
      {
        label: "Resource",
        url: "https://www.psycharchives.org/handle/20.500.12034/619"
      }
    ]
  },
  {
    id: "34",
    name: "Inclusion of Other in the Self Scale",
    shortHandle: "IOS",
    description: "A single-item pictorial measure of interpersonal closeness and social connectedness.",
    publicationYear: 1992,
    authors: ["Arthur Aron", "Elaine N. Aron", "Danny Smollan"],
    categories: ["Social Connectedness", "Relationships", "Single-Item"],
    references: [
      {
        label: "Scale PDF",
        url: "https://depts.washington.edu/uwcssc/sites/default/files//Inclusion%20of%20Other%20in%20Self.pdf"
      }
    ]
  },
  {
    id: "35",
    name: "Technikaffinität erfassen – Fragebogen",
    shortHandle: "TA-EG",
    description: "A German questionnaire for measuring individuals’ affinity toward technology.",
    publicationYear: 2015,
    authors: ["Carmen Bruder", "Alfred Blessing"],
    categories: ["Technology Affinity", "Personality", "German"],
    references: [
      {
        label: "Questionnaire PDF",
        url: "https://www.researchgate.net/profile/Carmen_Bruder/publication/266876811_Technikaffinitat_erfassen_-_der_Fragebogen_TA-EG/links/563c526708ae45b5d286f7d0.pdf"
      }
    ]
  },
  {
    id: "36",
    name: "Affinity for Technology Interaction Scale",
    shortHandle: "ATI",
    description: "A concise scale for assessing people’s tendency to actively engage with technology.",
    publicationYear: 2018,
    authors: ["Carmen Franke", "Carmen Attig", "Daniel Wessel"],
    categories: ["Technology Affinity", "General Purpose", "Psychology"],
    references: [
      {
        label: "Official Website",
        url: "https://ati-scale.org/"
      }
    ]
  },
  {
    id: "37",
    name: "Hedonic Information Systems Acceptance Measures",
    shortHandle: "HIS Acceptance",
    description: "Construct measures used to explain user acceptance of hedonic information systems.",
    publicationYear: 2009,
    authors: ["Jan vom Brocke", "Viswanath Venkatesh", "Fred D. Davis"],
    categories: ["Acceptance", "Technology", "Hedonic Systems"],
    references: [
      {
        label: "Paper",
        url: "https://www.jstor.org/stable/25148660"
      }
    ]
  },
  {
    id: "38",
    name: "Perceived Creepiness of Technology Scale",
    shortHandle: "PCTS",
    description: "A scale for quantifying how creepy users perceive a technology to be.",
    publicationYear: 2021,
    authors: ["Maren B. R. Hein", "Andreas Butz", "Thomas Kosch"],
    categories: ["Technology Perception", "Affect", "Post-Study"],
    references: [
      {
        label: "Paper",
        url: "https://dl.acm.org/doi/pdf/10.1145/3411764.3445299"
      }
    ]
  },
  {
    id: "39",
    name: "Internet Users' Information Privacy Concerns",
    shortHandle: "IUIPC",
    description: "A commonly used multidimensional scale for users' information privacy concerns online.",
    publicationYear: 2004,
    authors: ["Naresh K. Malhotra", "Sung S. Kim", "James Agarwal"],
    categories: ["Privacy", "Technology Perception", "General Purpose"],
    references: [
      {
        label: "Paper",
        url: "https://pubsonline.informs.org/doi/abs/10.1287/isre.1040.0032"
      }
    ]
  },
  {
    id: "40",
    name: "Concerns for Information Privacy (Generalized)",
    shortHandle: "CFIP-G",
    description: "A generalized information privacy concerns scale for modern digital contexts.",
    publicationYear: 2018,
    authors: ["Thomas Pape", "Wiebke H"],
    categories: ["Privacy", "General Purpose", "Technology Perception"],
    references: [
      {
        label: "Preprint",
        url: "https://pape.science/files/publications/HP18ssrn_cfip.pdf"
      }
    ]
  },
  {
    id: "41",
    name: "Theoretical Framework of Acceptability Questionnaire",
    shortHandle: "TFA",
    description: "A framework-derived set of constructs and items for evaluating intervention acceptability.",
    publicationYear: 2017,
    authors: ["M. Sekhon", "M. Cartwright", "J. J. Francis"],
    categories: ["Behavior Interventions", "Acceptability", "Health"],
    references: [
      {
        label: "Framework Table",
        url: "https://bmchealthservres.biomedcentral.com/articles/10.1186/s12913-022-07577-3/tables/1"
      }
    ]
  },
  {
    id: "42",
    name: "Comfort Rating Scales",
    shortHandle: "CRS",
    description: "A set of rating scales developed for assessing wearable comfort and discomfort dimensions.",
    publicationYear: 2008,
    authors: ["Karin M. Knight", "Anne Baber"],
    categories: ["Wearables", "Comfort", "Post-Study"],
    references: [
      {
        label: "Paper PDF",
        url: "https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.108.5807&rep=rep1&type=pdf"
      }
    ]
  },
  {
    id: "43",
    name: "Post-Study System Usability Questionnaire",
    shortHandle: "PSSUQ",
    description: "A post-study questionnaire for measuring user-perceived system usability across system usefulness, information quality, and interface quality.",
    publicationYear: 1992,
    authors: ["James R. Lewis"],
    categories: ["Usability", "General Purpose", "Post-Study"],
    references: [
      {
        label: "IBM Technical Report",
        url: "https://www.researchgate.net/publication/228593520_Psychometric_Evaluation_of_the_PSSUQ_Using_Data_from_Five_Years_of_Usability_Studies"
      }
    ]
  },
  {
    id: "44",
    name: "Usability Metric for User Experience",
    shortHandle: "UMUX",
    description: "A concise four-item usability questionnaire developed as a practical alternative to longer post-study usability scales.",
    publicationYear: 2010,
    authors: ["William M. F. Finstad"],
    categories: ["Usability", "General Purpose", "Post-Study"],
    references: [
      {
        label: "Original Paper",
        url: "https://doi.org/10.1177/154193121005401411"
      }
    ]
  },
  {
    id: "45",
    name: "UMUX-LITE",
    shortHandle: "UMUX-LITE",
    description: "A two-item ultra-short usability metric derived from UMUX and calibrated for benchmarking similarly to SUS.",
    publicationYear: 2013,
    authors: ["James R. Lewis", "Jeff Sauro"],
    categories: ["Usability", "Task-Specific", "Post-Study"],
    references: [
      {
        label: "Paper",
        url: "https://measuringu.com/umux-lite/"
      }
    ]
  },
  {
    id: "46",
    name: "Standardized User Experience Percentile Rank Questionnaire",
    shortHandle: "SUPR-Q",
    description: "An eight-item standardized questionnaire for website user experience covering usability, trust, appearance, and loyalty.",
    publicationYear: 2013,
    authors: ["Jeff Sauro"],
    categories: ["User Experience", "General Purpose", "Post-Study"],
    references: [
      {
        label: "Overview",
        url: "https://measuringu.com/suprq/"
      }
    ]
  },
  {
    id: "47",
    name: "User Experience Questionnaire - Short Version",
    shortHandle: "UEQ-S",
    description: "A short eight-item version of the UEQ that captures pragmatic and hedonic quality with less response effort.",
    publicationYear: 2017,
    authors: ["Martin Schrepp", "Andreas Hinderks", "Jörg Thomaschewski"],
    categories: ["User Experience", "General Purpose", "Post-Study"],
    references: [
      {
        label: "Paper",
        url: "https://www.ueq-online.org/Material/UEQS-ResSci2017.pdf"
      }
    ]
  },
  {
    id: "48",
    name: "Unified Theory of Acceptance and Use of Technology Questionnaire",
    shortHandle: "UTAUT",
    description: "A model-based questionnaire to explain technology adoption using performance expectancy, effort expectancy, social influence, and facilitating conditions.",
    publicationYear: 2003,
    authors: ["Viswanath Venkatesh", "Michael G. Morris", "Gordon B. Davis", "Fred D. Davis"],
    categories: ["Acceptance", "Technology", "Post-Study"],
    references: [
      {
        label: "Original Paper",
        url: "https://doi.org/10.2307/30036540"
      }
    ]
  },
  {
    id: "49",
    name: "Trust in Automation Scale",
    shortHandle: "Jian Trust Scale",
    description: "A widely cited scale for measuring users' trust toward automated systems and intelligent technologies.",
    publicationYear: 2000,
    authors: ["Jun Jian", "Ann M. Bisantz", "Colin G. Drury"],
    categories: ["Technology Perception", "General Purpose", "Post-Study"],
    references: [
      {
        label: "Paper",
        url: "https://doi.org/10.1016/S1071-5819(99)00017-7"
      }
    ]
  },
  {
    id: "50",
    name: "Self-Assessment Manikin",
    shortHandle: "SAM",
    description: "A quick non-verbal pictorial assessment instrument for valence, arousal, and dominance often used in HCI affective evaluations.",
    publicationYear: 1994,
    authors: ["Margaret M. Bradley", "Peter J. Lang"],
    categories: ["Affect", "Psychology", "Post-Task"],
    references: [
      {
        label: "Paper",
        url: "https://doi.org/10.1016/0005-7916(94)90063-9"
      }
    ]
  },
  {
    id: "51",
    name: "Baecke Habitual Physical Activity Questionnaire",
    shortHandle: "BPAQ / BFQS",
    description: "A short questionnaire for habitual physical activity in epidemiological and behavioral studies, covering work, sport, and leisure activity.",
    publicationYear: 1982,
    authors: ["J. A. H. Baecke", "J. Burema", "J. E. R. Frijters"],
    categories: ["Physical Activity", "General Purpose", "Self-Report"],
    references: [
      {
        label: "Original Paper",
        url: "https://doi.org/10.1093/ajcn/36.5.936"
      }
    ]
  },
  {
    id: "52",
    name: "Borg Rating of Perceived Exertion Scale",
    shortHandle: "Borg RPE",
    description: "A widely used subjective exertion rating scale (e.g., 6-20 and CR10 variants) for tracking perceived physical effort during activity and exercise.",
    publicationYear: 1982,
    authors: ["Gunnar Borg"],
    categories: ["Physical Activity", "Task-Specific", "Post-Task"],
    references: [
      {
        label: "Book",
        url: "https://psycnet.apa.org/record/1998-07101-000"
      }
    ]
  },
  {
    id: "53",
    name: "How I Use My Body: The Bodily Feedback Quality Scale",
    shortHandle: "BFQS",
    description: "A scale for assessing users’ perceived quality of bodily feedback when interacting with movement-based and physical-activity technologies.",
    publicationYear: 2025,
    authors: ["Bettina Eska", "Meagan B. Loerakker", "Jasmin Niess", "Paweł W. Woźniak"],
    categories: ["Physical Activity", "User Experience", "Post-Study"],
    references: [
      {
        label: "ACM Paper",
        url: "https://dl.acm.org/doi/10.1145/3770657"
      },
      {
        label: "DOI",
        url: "https://doi.org/10.1145/3770657"
      }
    ]
  },
  {
    id: "54",
    name: "Chatbot Usability Scale (Multilanguage Validation)",
    shortHandle: "CUS",
    description: "A validated usability scale for conversational agents/chatbots, with confirmatory factor analysis across multiple languages.",
    publicationYear: 2023,
    authors: ["Simone Borsci", "Martin Schmettow", "Alessio Malizia", "Alan Chamberlain", "Frank van der Velde"],
    categories: ["Usability", "Technology", "Post-Study"],
    references: [
      {
        label: "Springer Article",
        url: "https://link.springer.com/article/10.1007/s00779-022-01690-0"
      },
      {
        label: "DOI",
        url: "https://doi.org/10.1007/s00779-022-01690-0"
      }
    ]
  }

];

export const allCategories = Array.from(
  new Set(questionnaires.flatMap((q) => q.categories))
).sort();
