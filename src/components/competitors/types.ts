export interface Feature {
  name: string;
  competitor: boolean | string;
  timeliner: boolean | string;
  description?: string;
}

export interface Competitor {
  id: string;
  name: string;
  logo?: string;
  features: Feature[];
}