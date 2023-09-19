import { type MODULES_AVAILABLES } from "~/lib/constants";

export interface ContactInformation {
  email?: string;
  phoneNumbers?: string[];
  website?: string;
  facebook?: string;
  instagram?: string;
}

export interface TaxesInformation {
  invoiceNumber?: string;
  vatNumber?: string;
  taxRate?: number;
  taxType?: string;
  taxExempt: boolean;
}

export interface RestaurantRequestData {
  name: string;
  logo: string;
  language: string;
  modulesAvailables: MODULES_AVAILABLES[];
  branches: number;
  contactInformation: ContactInformation;
  taxesInformation: TaxesInformation;
}

export interface Restaurant {
  id: string;
  name: string;
  logo?: string;
  language?: string;
  modulesAvailables: MODULES_AVAILABLES[];
  branches: number;
  contactInformation: ContactInformation;
  taxesInformation: TaxesInformation;
}
