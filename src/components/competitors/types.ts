export interface Feature {
  name: string;
  competitor: boolean | string;
  timeliner: boolean | string;
  keyTakeaways?: {
    type: 'positive' | 'negative';
    text: string;
  }[];
}

export interface Competitor {
  id: string;
  name: string;
  logo?: string;
  features: Feature[];
}