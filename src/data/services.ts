import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'cbct-scan',
    title: 'CBCT Scan',
    shortDescription: 'Detailed 3D imaging for implant planning and oral/maxillofacial assessment.',
    fullDescription: 'Cone Beam Computed Tomography (CBCT) provides accurate 3D volumetric images of teeth, bone morphology, nerve pathways, and surrounding anatomical structures. It supports confident implant planning, impaction evaluation, and surgical assessments.',
    iconName: 'Box',
    indications: [
      'Implant planning and bone assessment',
      'Impacted third molar (wisdom tooth) evaluation',
      'Endodontic diagnosis and root canal anatomy',
      'TMJ condylar assessment',
      'Pathology and lesion evaluation'
    ]
  },
  {
    id: 'opg-scan',
    title: 'OPG Scan',
    shortDescription: 'Panoramic imaging of the teeth and jaws.',
    fullDescription: 'An Orthopantomogram (OPG) provides a wide panoramic view of both the upper and lower jaws, dentition, and surrounding structures in a single low-dose scan. It is ideal for baseline examinations and general dental screening.',
    iconName: 'Maximize2',
    indications: [
      'Comprehensive dental health screening',
      'Orthodontic treatment baseline assessment',
      'Evaluation of dentition development',
      'Jaw and wisdom tooth screening'
    ]
  },
  {
    id: 'cephalometric-imaging',
    title: 'Cephalometric Imaging',
    shortDescription: 'Imaging used for orthodontic assessment.',
    fullDescription: 'Cephalometric radiography produces standardized lateral and frontal views of the craniofacial complex, providing reliable skeletal and soft-tissue landmarks for orthodontic diagnosis and treatment tracking.',
    iconName: 'Activity',
    indications: [
      'Orthodontic diagnostic workup and tracing',
      'Skeletal and facial growth evaluation',
      'Pre- and post-orthodontic progress comparison',
      'Airway and soft tissue profile assessment'
    ]
  },
  {
    id: 'dental-xray',
    title: 'Dental X-Ray',
    shortDescription: 'Dental imaging for diagnostic assessment.',
    fullDescription: 'Digital intraoral radiographs (IOPA and bitewings) provide quick, high-definition visualization of individual teeth, periapical bone levels, and proximal tooth surfaces with low radiation exposure.',
    iconName: 'Zap',
    indications: [
      'Periapical pathology and root condition',
      'Interproximal dental caries detection',
      'Periodontal bone level monitoring',
      'Endodontic working length verification'
    ]
  },
  {
    id: 'facial-imaging',
    title: 'Facial Imaging',
    shortDescription: 'Imaging of facial and maxillofacial structures.',
    fullDescription: 'Specialized 2D and 3D maxillofacial protocols covering the facial bones, sinus structures, and TMJ. Designed to assist oral and maxillofacial surgeons and specialists in trauma, asymmetry, and reconstruction.',
    iconName: 'Smile',
    indications: [
      'Maxillofacial trauma and fracture evaluation',
      'Surgical reconstruction planning',
      'Temporomandibular joint (TMJ) series',
      'Paranasal sinus assessment'
    ]
  },
  {
    id: 'digital-imaging',
    title: '2D & 3D Digital Imaging',
    shortDescription: 'Digital imaging solutions for dental professionals.',
    fullDescription: 'Streamlined digital imaging workflow providing open DICOM datasets, multiplanar reconstructions, and digital files compatible with standard dental CAD/CAM and treatment planning software.',
    iconName: 'Layers',
    indications: [
      'Digital treatment planning support',
      'Standard DICOM format exports',
      'Guided surgical template compatibility',
      'Electronic record archiving'
    ]
  }
];
