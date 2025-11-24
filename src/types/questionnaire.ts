export interface Questionnaire {
  id: string;
  name: string;
  shortHandle: string;
  description: string;
  publicationYear: number;
  authors: string[];
  categories: string[];
  references: Reference[];
}

export interface Reference {
  label: string;
  url: string;
}
