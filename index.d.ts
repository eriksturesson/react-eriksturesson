declare module "*.jpg";
declare module "*.JPG";
declare module "*.PNG";
declare module "*.png";
declare module "*.mp4";
declare module "*.webm";
declare module "*.webp";
declare module "*.svg";

interface Window {
  dataLayer: any[];
  gtag: (...args: any[]) => void;
}
