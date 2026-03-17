// types.ts
export type PortfolioCategory = "mobile" | "web" | "frontend" | "crm" | "unity" | "cms" | "others";

export interface PortfolioProps {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  keyFeature?: string[];
  icon?: string;
  image: string;
  techStack: string;
  link: string;
  caseStudyLink?: string;
  catagory: PortfolioCategory;
  caseStudy?: string;
  tools?: string[];
}
