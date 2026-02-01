export interface Project {
  year: string;
  type: string;
  name: string;
  field?: string[];
  url: string;
  img?: string;
  subImages?: string[];
  description?: string;
}

export enum Tab {
  PRJ = 'PRJ',
  WHO = 'WHO',
  MSG = 'MSG'
}

export interface NavItem {
  id: Tab;
  label: string;
}