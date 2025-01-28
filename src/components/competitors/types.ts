export interface Feature {
  name: string;
  hebrewName?: string;
  competitor: boolean | string;
  hebrewCompetitor?: string;
  timeliner: boolean | string;
  hebrewTimeliner?: string;
  keyTakeaways?: {
    type: 'positive' | 'negative';
    text: string;
    hebrewText?: string;
  }[];
}

export interface Competitor {
  id: string;
  name: string;
  logo?: string;
  features: Feature[];
}