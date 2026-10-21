export interface Branch {
  id: string;
  name: string;
  city: string;
  address: string;
  landmark?: string;
  phones: string[];
  email: string;
  whatsapp?: string;
  timings?: {
    weekdays: string;
    sunday?: string;
  };
  googleMapsEmbedUrl?: string;
  googleMapsDirectionsUrl?: string;
  image?: string;
  isConfirmed: boolean;
  statusNote?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  indications: string[];
}

export interface TechnologyHighlight {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface WhyChoosePoint {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface AppointmentFormData {
  patientName: string;
  mobile: string;
  email: string;
  branch: string;
  scanRequired: string;
  preferredDate: string;
  message: string;
}
