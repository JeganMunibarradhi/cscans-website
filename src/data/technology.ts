import { TechnologyHighlight } from '../types';

export const TECHNOLOGY_HIGHLIGHTS: TechnologyHighlight[] = [
  {
    id: 'high-resolution',
    title: 'High-Resolution Imaging',
    description: 'Fine voxel resolution captures fine anatomical structures, bone patterns, and subtle root details required for diagnostic precision.',
    iconName: 'Maximize'
  },
  {
    id: 'radiation-optimisation',
    title: 'Radiation Exposure Optimisation',
    description: 'Pulsed X-ray generation and collimation protocols designed around the ALARA principle to deliver diagnostic quality with optimised exposure.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'fast-acquisition',
    title: 'Fast Scan Acquisition',
    description: 'Rapid scan cycles minimise patient positioning time and reduce the likelihood of movement artifacts during exposure.',
    iconName: 'Timer'
  },
  {
    id: 'digital-workflow',
    title: 'Digital Imaging Workflow',
    description: 'Direct digital capture enables prompt electronic delivery of reports and standard DICOM datasets to consulting doctors.',
    iconName: 'Cpu'
  },
  {
    id: 'treatment-planning',
    title: 'Treatment Planning Support',
    description: 'True-scale volumetric reconstructions support pre-surgical assessment, implant placement planning, and orthodontic evaluation.',
    iconName: 'Crosshair'
  }
];
