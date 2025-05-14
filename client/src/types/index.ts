export interface Festival {
  _id: string;
  name: string;
  description: string;
  region: string;
  type: "religious" | "tribal" | "harvest" | "seasonal";
  startDate: string;
  endDate: string;
  location: {
    city: string;
    state: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  images: Array<{
    url: string;
    caption: string;
  }>;
  culturalSignificance: string;
  touristInfo: {
    crowdLevel: "low" | "medium" | "high";
    budgetLevel: "budget" | "moderate" | "luxury";
    bestTimeToVisit: string;
    accessibility: string;
  };
  localExperiences: Array<{
    name: string;
    description: string;
    type: string;
  }>;
  weatherConditions: {
    temperature: {
      min: number;
      max: number;
    };
    rainfall: number;
    humidity: number;
  };
  isHiddenGem: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface FestivalFilters {
  region?: string;
  type?: string;
  startDate?: string;
  endDate?: string;
  crowdLevel?: string;
  budgetLevel?: string;
  isHiddenGem?: boolean;
}
