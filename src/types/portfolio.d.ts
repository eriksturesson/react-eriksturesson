export type MediaItem =
  | { type: "image"; src: string; alt?: string }
  | { type: "pdf"; src: string; filename?: string }
  | { type: "video"; src: string; caption?: string };

export interface PortfolioItem {
  title: string;
  description: string;
  image: MediaItem;
  tags: PortfolioTags;
  modal?: {
    description?: string;
    media?: MediaItem[];
  };
}

export interface PortfolioTags {
  techStack: string[]; // ex: TypeScript, React, Node.js
  architecture: string[]; // ex: Firebase Auth, GCP, Docker
  productFocus: string[]; // ex: API-integrationer, SaaS-utveckling
}
