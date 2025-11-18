import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: "Starter",
    price: "0",
    period: "forever",
    description: "Perfect for side projects and prototypes.",
    features: [
      "500 voice minutes / month",
      "3 standard voices",
      "English only",
      "Community support",
      "Standard latency (~800ms)"
    ],
    cta: "Start Building",
    highlight: false
  },
  {
    name: "Growth",
    price: "99",
    period: "month",
    description: "For scaling businesses needing reliability.",
    features: [
      "5,000 voice minutes / month",
      "20+ premium voices",
      "10 languages",
      "Priority email support",
      "Low latency (~500ms)",
      "Call recording"
    ],
    cta: "Start Free Trial",
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Full control for high-volume needs.",
    features: [
      "Unlimited minutes",
      "Voice cloning",
      "All 95+ languages",
      "Dedicated success manager",
      "Ultra-low latency (~300ms)",
      "On-premise deployment"
    ],
    cta: "Contact Sales",
    highlight: false
  }
];

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-slate-50 relative border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-slate-900">Simple, predictable pricing</h2>
          <p className="text-slate-600 text-lg mb-8">Pay as you grow. No hidden setup fees.</p>
          
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isYearly ? 'text-slate-900' : 'text-slate-500'}`}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-7 bg-slate-200 rounded-full relative p-1 transition-colors hover:bg-slate-300"
            >
              <div className={`w-5 h-5 bg-white shadow-sm rounded-full transition-transform duration-200 ${isYearly ? 'translate-x-7' : ''}`} />
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-slate-900' : 'text-slate-500'}`}>
              Yearly <span className="text-primary-600 text-xs ml-1 font-bold">-20%</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 rounded-3xl border flex flex-col ${
                plan.highlight 
                  ? 'bg-white border-primary-200 ring-1 ring-primary-100 shadow-2xl shadow-primary-900/5' 
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary-600 to-purple-600 text-white text-xs font-bold rounded-full shadow-lg shadow-primary-600/20">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm h-10">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">
                    {plan.price === "Custom" ? "Custom" : `$${isYearly && plan.price !== "0" ? (parseInt(plan.price) * 0.8).toFixed(0) : plan.price}`}
                  </span>
                  {plan.price !== "Custom" && <span className="text-slate-500">/{plan.period}</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check className="w-5 h-5 text-primary-600 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all ${
                plan.highlight 
                  ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/10' 
                  : 'bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;