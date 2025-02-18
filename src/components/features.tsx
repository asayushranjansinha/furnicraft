import React from "react";
import { Lock, PhoneCall, Ticket, Truck } from "lucide-react";

interface Feature {
  Icon: React.ElementType;
  title: string;
  description: string;
  bgColor: string;
  iconBgColor: string;
}

const FeatureCard: React.FC<Feature> = ({
  Icon,
  title,
  description,
  bgColor,
  iconBgColor,
}) => (
  <article
    className={`${bgColor} rounded-2xl p-6 transition-all hover:brightness-95`}
    aria-labelledby={`feature-${title}`}
  >
    <div className="flex items-center space-x-4">
      <div className={`${iconBgColor} p-3 rounded-full`}>
        <Icon size={24} className="text-primary"  />
      </div>
      <div>
        <h3
          id={`feature-${title}`}
          className="text-lg font-semibold mb-1 text-gray-900"
        >
          {title}
        </h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  </article>
);

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      Icon: Truck,
      title: "Free Shipping",
      description: "Order above $200",
      bgColor: "bg-blue-50",
      iconBgColor: "bg-blue-100",
    },
    {
      Icon: Ticket,
      title: "Money-back",
      description: "30 days guarantee",
      bgColor: "bg-green-50",
      iconBgColor: "bg-green-100",
    },
    {
      Icon: Lock,
      title: "Secure Payments",
      description: "Secured by Stripe",
      bgColor: "bg-purple-50",
      iconBgColor: "bg-purple-100",
    },
    {
      Icon: PhoneCall,
      title: "24/7 Support",
      description: "Phone and Email support",
      bgColor: "bg-orange-50",
      iconBgColor: "bg-orange-100",
    },
  ];

  return (
    <section
      id="features"
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8"
      aria-labelledby="our-features-heading"
    >
      <h2
        id="our-features-heading"
        className="text-2xl font-medium sm:text-3xl tracking-tight mb-4"
      >
        Our Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
