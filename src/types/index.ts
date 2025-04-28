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