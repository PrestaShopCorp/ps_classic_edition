export enum PromoBannerVariants {
  BLUE = "blue",
  PURPLE = "purple",
  YELLOW = "yellow",
  GREEN = "green",
}

export interface PromoBannerLink {
  url: string;
  text: string;
}

export interface PromoBannerPromo {
  icon?: string;
  text: string;
  link?: PromoBannerLink;
}

export interface PromoBannerProps {
  variant?: PromoBannerVariants;
  closable?: boolean;
  promos: PromoBannerPromo[];
}
