import { Branch } from '../types';

export const BRANCHES_DATA: Branch[] = [
  {
    id: 'salem',
    name: 'Salem Branch',
    city: 'Salem',
    address: 'No.1, Thirunavukarasu Street, Advaitha Ashram Road, Opp. New Bus Stand, Salem – 636004',
    landmark: 'Opposite New Bus Stand, Advaitha Ashram Road',
    phones: ['98437 54583', '70101 64011'],
    email: 'cscanssalem@gmail.com',
    whatsapp: '919843754583',
    timings: {
      weekdays: '8:30 AM – 8:30 PM (Mon – Sat)',
      sunday: '9:00 AM – 2:00 PM (Sunday)'
    },
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.3912642598854!2d78.140884!3d11.666687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf04fbe7d5555%3A0x8efb3684a0d9e87e!2sNew%20Bus%20Stand%2C%20Salem!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin',
    googleMapsDirectionsUrl: 'https://maps.google.com/?q=No.1+Thirunavukarasu+Street+Advaitha+Ashram+Road+Opp+New+Bus+Stand+Salem+636004',
    isConfirmed: true
  },
  {
    id: 'karur',
    name: 'Karur Branch',
    city: 'Karur',
    address: 'No.62/84, AAR Towers Underground, West Pradhakshanam Road, Karur – 2',
    landmark: 'AAR Towers Underground, West Pradhakshanam Road',
    phones: ['95546 95596', '63818 39475'],
    email: 'cscanskarur@gmail.com',
    whatsapp: '919554695596',
    timings: {
      weekdays: '9:00 AM – 8:00 PM (Mon – Sat)',
      sunday: '9:30 AM – 1:30 PM (Sunday)'
    },
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.48123456789!2d78.077!3d10.960!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2e2a1b9b1234%3A0x123456789abcdef!2sWest%20Pradhakshanam%20Rd%2C%20Karur!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin',
    googleMapsDirectionsUrl: 'https://maps.google.com/?q=No.62/84+AAR+Towers+Underground+West+Pradhakshanam+Road+Karur+2',
    isConfirmed: true
  },
  {
    id: 'erode',
    name: 'Erode Branch',
    city: 'Erode',
    address: '6(2), N.V.A. Vaniga Vazhangam, Mettur Road, Erode – 11',
    landmark: 'N.V.A. Vaniga Vazhangam, Mettur Road',
    phones: ['89256 42529', '89250 72529'],
    email: 'cscanserode@gmail.com',
    whatsapp: '918925642529',
    googleMapsDirectionsUrl: 'https://maps.google.com/?q=6(2)+NVA+Vaniga+Vazhangam+Mettur+Road+Erode+11',
    isConfirmed: true
  },
  {
    id: 'dindigul',
    name: 'Dindigul Branch',
    city: 'Dindigul',
    address: 'No. 5, Maheswari Lodge Complex, Spencer Compound, Dindigul – 1',
    landmark: 'Maheswari Lodge Complex, Spencer Compound',
    phones: ['80564 84529', '80566 84529'],
    email: 'cscansdindigul@gmail.com',
    whatsapp: '918056484529',
    googleMapsDirectionsUrl: 'https://maps.google.com/?q=No.5+Maheswari+Lodge+Complex+Spencer+Compound+Dindigul+1',
    isConfirmed: true
  }
];
