export interface Tool {
  feature: string;
  replaces: string;
  cost: string;
}

export interface Feature {
  name: string;
  competitor: boolean | string;
  timeliner: boolean | string;
}

export interface Competitor {
  id: string;
  name: string;
  logo?: string;
  features: Feature[];
}