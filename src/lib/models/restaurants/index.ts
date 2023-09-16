export interface RestaurantRequestData {
  name: string;
  logo: string;
  language: string;
  modulesAvailables: string[];
}

export interface Restaurant {
  id: string;
  name: string;
  logo?: string;
  language?: string;
  modulesAvailables: string[];
}
