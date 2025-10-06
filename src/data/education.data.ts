export interface EducationDataRaw {
  id: string;
  titleKey: string;
  schoolKey: string;
  locationKey?: string;
  periodKey: string;
  descriptionKey?: string;
  honorsKey?: string;
}

export const educationData: EducationDataRaw[] = [
  {
    id: 'master',
    titleKey: 'education.diplomas.master.title',
    schoolKey: 'education.diplomas.master.school',
    locationKey: 'education.diplomas.master.location',
    periodKey: 'education.diplomas.master.period',
  },
  {
    id: 'rncp7',
    titleKey: 'education.diplomas.rncp7.title',
    schoolKey: 'education.diplomas.rncp7.school',
    locationKey: 'education.diplomas.rncp7.location',
    periodKey: 'education.diplomas.rncp7.period',
  },
];
