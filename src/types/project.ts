import type { SanityImageSource } from "@sanity/image-url";
import { PortableTextBlock } from 'sanity';

export interface Project {
  _id: string;
  title: string;
  role: string;
  recognition?: PortableTextBlock[];
  challenge: PortableTextBlock[];
  solution: PortableTextBlock[];
  impact: PortableTextBlock[];
  stack: string[];
  links?: {
    label: string;
    url: string;
  }[];
  imageCallout?: PortableTextBlock[];
  mainImage: SanityImageSource;
  thumbnailImage: SanityImageSource;
  order: number;
}