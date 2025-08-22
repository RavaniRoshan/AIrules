import React from 'react';
import { Shield, MapPin, Building2, Star } from 'lucide-react';
import { useGSAP, useGSAPStagger } from '../hooks/useGSAP';

const RegulationBadges = () => {
  const sectionRef = useGSAP();
  const cardsRef = useGSAPStagger('.regulation-card', 0.2);

  const regulations = [
    {
      id: 'eu-ai-act',
      name: 'EU AI Act',
      region: 'European Union',
      status: 'Active',
      coverage: '100%',
      icon: '🇪🇺',
      color: 'from-blue-600 to-blue-700',
      description: 'Comprehensive AI regulation covering high-risk AI systems',
      features: ['Risk-based approach', 'Prohibited AI practices', 'Transparency requirements']
    },
    {
      id: 'colorado-ai',
      name: 'Colorado AI Act',
      region: 'Colorado, USA',
      status: 'Active',
      coverage: '100%',
      icon: '🏔️',
      color: 'from-emerald-600 to-emerald-700',
      description: 'State-level AI regulation focusing on algorithmic discrimination',
      features: ['Bias testing', 'Impact assessments', 'Consumer notifications']
    },
    {
      id: 'california-ai',
      name: 'California AI Laws',
      region: 'California, USA',
      status: 'Active',
      coverage: '95%',
      icon: '☀️',
      color: 'from-orange-600 to-orange-700',
      description: 'Multiple AI-related laws including privacy and automated decision-making',
      features: ['Data privacy', 'Automated decisions', 'Bot disclosure']
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Complete Regulatory Coverage
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay compliant across all major AI jurisdictions with real-time updates and expert interpretations
          </p>
        </div>

        <div ref={cardsRef} className="grid lg:grid-cols-3 gap-8 mb-16">
          {regulations.map((regulation) => (
            <div key={regulation.id} className="regulation-card group relative">
              {/* Main Card */}
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="text-3xl mr-3">{regulation.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{regulation.name}</h3>
                      <div className="flex items-center mt-1">
                        <MapPin className="h-4 w-4 text-gray-400 dark:text-gray-500 mr-1" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">{regulation.region}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                      {regulation.status}
                    </span>
                  </div>
                </div>

                {/* Coverage */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Coverage Completeness</span>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">{regulation.coverage}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className={`bg-gradient-to-r ${regulation.color} h-2 rounded-full`}
                      style={{ width: regulation.coverage }}
                    ></div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {regulation.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide">Key Areas</h4>
                  {regulation.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Shield className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-3 -right-3 bg-yellow-400 text-yellow-900 rounded-full p-2 shadow-lg">
                <Star className="h-4 w-4 fill-current" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/30 rounded-2xl p-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Major Jurisdictions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">127</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Regulatory Requirements</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Updates Monitoring</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Accuracy Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegulationBadges;