export type MediaItem =
  | { type: "image"; src: string; alt?: string }
  | { type: "pdf"; src: string; filename?: string }
  | { type: "video"; src: string; caption?: string };

export interface PortfolioItem {
  title: string;
  description: string;
  longDescription?: string;
  image: MediaItem;
  modal?: {
    description?: string;
    media?: MediaItem[];
  };
}
