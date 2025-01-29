export interface Feature {
  name: string;
  hebrewName?: string;
  arabicName?: string;
  spanishName?: string;
  competitor: boolean | string;
  hebrewCompetitor?: string;
  arabicCompetitor?: string;
  spanishCompetitor?: string;
  timeliner: boolean | string;
  hebrewTimeliner?: string;
  arabicTimeliner?: string;
  spanishTimeliner?: string;
  keyTakeaways?: {
    type: 'positive' | 'negative';
    text: string;
    hebrewText?: string;
    arabicText?: string;
    spanishText?: string;
  }[];
}

export interface Competitor {
  id: string;
  name: string;
  logo?: string;
  features: Feature[];
}