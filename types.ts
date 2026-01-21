
export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface LPData {
  id: string;
  label: string;
  strategy: string;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  authority: {
    title: string;
    items: string[];
  };
  painPoints: {
    title: string;
    items: { question: string; answer: string }[];
  };
  features: Feature[];
  pricing: {
    initial: string;
    monthly: string;
    offer: string;
  };
  closing: {
    title: string;
    subtitle: string;
    cta: string;
  };
}
