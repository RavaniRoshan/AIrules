import React from 'react';
import { Check, Star, ArrowRight, Shield, Zap } from 'lucide-react';
import { useGSAP, useGSAPStagger } from '../hooks/useGSAP';

const Pricing = () => {
  const sectionRef = useGSAP();
  const cardsRef = useGSAPStagger('.pricing-card', 0.2);

  const plans = [
    {
      name: "Starter",
      price: "49",
      period: "month",
      description: "Perfect for small businesses getting started with AI compliance",
      features: [
        "1 compliance assessment per month",
        "Basic regulatory coverage (EU, CA, CO)",
        "Email support",
        "Compliance checklist templates",
        "Basic risk assessment"
      ],
      limitations: [
        "Limited to 1 AI system",
        "No priority support"
      ],
      cta: "Start Free Trial",
      popular: false,
      color: "gray"
    },
    {
      name: "Professional",
      price: "149",
      period: "month",
      description: "Comprehensive compliance management for growing AI companies",
      features: [
        "Unlimited compliance assessments",
        "Complete regulatory coverage",
        "Priority email & chat support",
        "Custom compliance roadmaps",
        "Advanced risk analytics",
        "Automated compliance monitoring",
        "Integration support",
        "Quarterly compliance reviews"
      ],
      limitations: [],
      cta: "Start Free Trial",
      popular: true,
      color: "blue"
    },
    {
      name: "Enterprise",
      price: "499",
      period: "month",
      description: "Full-scale compliance management with dedicated support",
      features: [
        "Everything in Professional",
        "Dedicated compliance manager",
        "White-label reporting",
        "API access",
        "Custom integrations",
        "24/7 phone support",
        "Legal review sessions",
        "Compliance audit preparation",
        "Multi-team management",
        "Advanced analytics dashboard"
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false,
      color: "emerald"
    }
  ];

  const getColorClasses = (color: string, isPopular: boolean) => {
    const colors = {
      gray: {
        border: isPopular ? 'border-gray-300' : 'border-gray-200',
        bg: 'bg-white',
        price: 'text-gray-900',
        cta: 'bg-gray-900 hover:bg-gray-800 text-white'
      },
      blue: {
        border: isPopular ? 'border-blue-500 ring-2 ring-blue-200' : 'border-blue-200',
        bg: 'bg-white',
        price: 'text-blue-600',
        cta: 'bg-blue-600 hover:bg-blue-700 text-white'
      },
      emerald: {
        border: isPopular ? 'border-emerald-300' : 'border-emerald-200',
        bg: 'bg-white',
        price: 'text-emerald-600',
        cta: 'bg-emerald-600 hover:bg-emerald-700 text-white'
      }
    };
    return colors[color as keyof typeof colors] || colors.gray;
  };

  return (
    <section ref={sectionRef} id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your compliance needs. All plans include a 14-day free trial.
          </p>
          
          {/* Pricing Toggle */}
          <div className="inline-flex bg-white dark:bg-gray-800 rounded-lg p-1 border border-gray-200 dark:border-gray-700">
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md">
              Monthly
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
              Annual (Save 20%)
            </button>
          </div>
        </div>

        <div ref={cardsRef} className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const colors = getColorClasses(plan.color, plan.popular);
            
            return (
              <div
                key={index}
                className={`pricing-card relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 ${colors.border} border-2 ${
                  plan.popular ? 'transform lg:scale-105' : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-gray-900 dark:text-white">${plan.price}</span>
                    <span className="text-gray-600 dark:text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Billed monthly, cancel anytime</p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-4">
                    What's included
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Limitations */}
                  {plan.limitations.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                        Limitations
                      </h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, limitIndex) => (
                          <li key={limitIndex} className="flex items-start">
                            <span className="text-gray-400 dark:text-gray-500 mr-3 text-sm">•</span>
                            <span className="text-gray-500 dark:text-gray-400 text-sm">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-200 hover:transform hover:scale-105 ${colors.cta}`}>
                  {plan.cta}
                  {plan.cta !== "Contact Sales" && (
                    <ArrowRight className="inline ml-2 h-4 w-4" />
                  )}
                </button>

                {/* Additional Info */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {plan.cta === "Contact Sales" ? "Custom pricing available" : "14-day free trial • No credit card required"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Signals */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-2" />
              Enterprise-grade security
            </div>
            <div className="flex items-center">
              <Zap className="h-4 w-4 mr-2" />
              99.9% uptime guarantee
            </div>
            <div>SOC 2 Type II certified</div>
            <div>GDPR compliant</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;