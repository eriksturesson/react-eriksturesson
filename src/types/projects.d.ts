export interface ProjectCardItem {
  image: any;
  icon: any;
  alt: string;
  height: string;
  cssClass?: any;
  headerText: string;
  descriptionText: string;
  modal?: {
    descriptionText?: string;
    callToActionText?: string;
    callToActionLink?: string;
  };
  year: number;
}
