export interface Widget {
  id: string;
  title: string;
  description: string;
  type: string;
  data: any;
}

export interface TypeWidget {
  type: string;
  title: string;
  image?: string;
  example?: any;
}