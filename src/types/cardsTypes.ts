export interface ServiceCardType {
    description: string;
    icon: React.JSX.Element;
    link: string;
    title: string;
}

export interface CaseStudyCardType {
    image: string;
    title: string;
    description: string;
    category: string;
    link: string;
}

export interface PlanCardProps {
    name: string;
    description: string;
    price: string;
    features: {
        name: string;
        included: boolean;
    }[];
}

export interface DevProcessCardProps {
    title: string,
    description: string,
    items: string [],
    index: number,
}

export interface TechStackCardProps {
    title: string;
    technologies: string[];
}

export interface SimpleTestimonialCardProps {
    quote: string
    author: string,
    position: string,
    company: string,
    image: string
}

export interface MetricCardProps {
    value: number
    suffix?: string
    label: string
    description: string
    icon: React.JSX.Element
}