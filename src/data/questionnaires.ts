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
  }
];

export const allCategories = Array.from(
  new Set(questionnaires.flatMap((q) => q.categories))
).sort();
