export interface GalleryItem {
  id: string;
  title: string;
  category: 'CBCT Machines' | 'Imaging Equipment' | 'Centre Facilities' | 'Reception Area' | 'Diagnostic Setup';
  imageUrl: string;
  description: string;
  location?: string;
}

export const GALLERY_CATEGORIES = [
  'All',
  'CBCT Machines',
  'Imaging Equipment',
  'Centre Facilities',
  'Reception Area',
  'Diagnostic Setup'
] as const;

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Modern 3D CBCT Machine',
    category: 'CBCT Machines',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    description: 'Specialised dental Cone Beam CT unit with multi-field of view capability.',
    location: 'Salem Centre'
  },
  {
    id: 'gal-2',
    title: 'Digital Panoramic OPG & Ceph Unit',
    category: 'Imaging Equipment',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
    description: 'Panoramic imaging suite equipped with dedicated cephalometric arm.',
    location: 'Karur Centre'
  },
  {
    id: 'gal-3',
    title: 'Patient Imaging Suite',
    category: 'Centre Facilities',
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    description: 'Clean and accessible diagnostic scanning bay with certified radiation shielding.',
    location: 'Salem Centre'
  },
  {
    id: 'gal-4',
    title: 'Patient Reception & Waiting Lounge',
    category: 'Reception Area',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    description: 'Comfortable, air-conditioned reception area for quick registration.',
    location: 'Karur Centre'
  },
  {
    id: 'gal-5',
    title: 'Diagnostic Review Workstation',
    category: 'Diagnostic Setup',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    description: 'High-contrast calibrated displays for detailed 3D multiplanar image review.',
    location: 'Diagnostic Bay'
  },
  {
    id: 'gal-6',
    title: 'Intraoral Digital Sensor System',
    category: 'Imaging Equipment',
    imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80',
    description: 'Direct digital sensor setup for instant periapical and bitewing images.',
    location: 'Salem Centre'
  },
  {
    id: 'gal-7',
    title: 'Volumetric Reconstruction Console',
    category: 'Diagnostic Setup',
    imageUrl: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1200&q=80',
    description: 'Software workstation for cross-sectional views and nerve tracing.',
    location: 'Karur Centre'
  },
  {
    id: 'gal-8',
    title: 'Open-Gantry Scanning Bay',
    category: 'CBCT Machines',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    description: 'Open design scanner providing relaxed, comfortable positioning for all patients.',
    location: 'Salem Centre'
  }
];
