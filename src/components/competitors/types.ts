export interface Feature {
  name: string;
  hebrewName?: string;
  spanishName?: string;
  competitor: boolean | string;
  hebrewCompetitor?: string;
  spanishCompetitor?: string;
  timeliner: boolean | string;
  hebrewTimeliner?: string;
  spanishTimeliner?: string;
  keyTakeaways?: {
    type: 'positive' | 'negative';
    text: string;
    hebrewText?: string;
    spanishText?: string;
  }[];
}

export interface Competitor {
  id: string;
  name: string;
  logo?: string;
  features: Feature[];
}