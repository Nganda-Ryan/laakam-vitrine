export interface Service {
    description: string;
    icon: React.JSX.Element;
    link?: string;
    title: string;
}

export interface CounterProps {
    end: number
    suffix?: string
    duration?: number
}

export interface DevProcessCardType {
    title: string,
    description: string,
    items: string [],
}

export interface StackType {
    title: string;
    technologies: string[];
}

export interface PlanType {
    name: string;
    description: string;
    price: string;
    features: {
        name: string;
        included: boolean;
    }[];
}

export interface ComplexeCaseStudyType {
    title: string;
    image: string;
    description: string;
    metrics: string[];
    client: string;
    link: string;
}

  export type AOSAnimationSide =
  | "fade"
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade-up-right"
  | "fade-up-left"
  | "fade-down-right"
  | "fade-down-left"
  | "flip-left"
  | "flip-right"
  | "flip-up"
  | "flip-down"
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"
  | "zoom-in"
  | "zoom-in-up"
  | "zoom-in-down"
  | "zoom-in-left"
  | "zoom-in-right"
  | "zoom-out"
  | "zoom-out-up"
  | "zoom-out-down"
  | "zoom-out-left"
  | "zoom-out-right";