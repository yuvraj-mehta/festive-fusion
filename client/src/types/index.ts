export interface Festival {
  id: number;
  name: string;
  description: string;
  region: string;
  type: "religious" | "tribal" | "harvest" | "seasonal";
  startDate: string;
  endDate: string;
  location: {
    city: string;
    state: string;
    coordinates: {
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

export interface PlannedVisit {
  id: number;
  festivalId: number | Festival;
  userId: string;
  visitDate: string;
  groupSize: number;
  specialRequirements?: string;
  status: "planned" | "completed" | "cancelled";
  createdAt: string;
  updatedAt: string;
}

export interface CreatePlannedVisitDto {
  festivalId: number;
  visitDate: string;
  groupSize: number;
  specialRequirements?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  preferences?: {
    categories: string[];
    regions: string[];
  };
  plannedVisits?: PlannedVisit[];
  savedFestivals?: Festival[];
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
