import React, { useState } from 'react';
import { ArrowRight, Sparkles, Users, Building, Briefcase } from 'lucide-react';
import { useGSAP } from '../hooks/useGSAP';

const ComplianceCheck = () => {
  const sectionRef = useGSAP();
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const industries = [
    { id: 'healthcare', name: 'Healthcare', icon: '🏥' },
    { id: 'finance', name: 'Financial Services', icon: '🏦' },
    { id: 'retail', name: 'Retail & E-commerce', icon: '🛍️' },
    { id: 'tech', name: 'Technology', icon: '💻' },
    { id: 'manufacturing', name: 'Manufacturing', icon: '🏭' },
    { id: 'other', name: 'Other', icon: '🏢' }
  ];

  const sizes = [
    { id: 'startup', name: '1-10 employees', icon: Users },
    { id: 'small', name: '11-50 employees', icon: Building },
    { id: 'medium', name: '51-200 employees', icon: Briefcase }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-600 to-emerald-600 dark:from-blue-800 dark:to-emerald-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white dark:border-gray-300 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white dark:border-gray-300 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 border border-white dark:border-gray-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-white mr-2" />
            <span className="text-white text-sm font-medium">Free Compliance Assessment</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get Your Personalized
            <br />
            Compliance Roadmap
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Answer 3 quick questions and receive a custom compliance checklist for your business
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
          <div className="space-y-8">
            {/* Industry Selection */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-4">
                What industry are you in?
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    onClick={() => setSelectedIndustry(industry.id)}
                    className={`p-4 rounded-lg border-2 text-left transition-all hover:shadow-md ${
                      selectedIndustry === industry.id
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                        : 'border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500'
                    }`}
                  >
                    <div className="text-2xl mb-2">{industry.icon}</div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{industry.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Company Size */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-4">
                What's your company size?
              </label>
              <div className="space-y-3">
                {sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={`w-full p-4 rounded-lg border-2 flex items-center text-left transition-all hover:shadow-md ${
                      selectedSize === size.id
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                        : 'border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500'
                    }`}
                  >
                    <size.icon className="h-6 w-6 text-gray-600 dark:text-gray-300 mr-3" />
                    <span className="font-medium text-gray-900 dark:text-white">{size.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                disabled={!selectedIndustry || !selectedSize}
                className={`w-full py-4 px-6 rounded-lg text-lg font-semibold transition-all group ${
                  selectedIndustry && selectedSize
                    ? 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 shadow-lg hover:shadow-xl'
                    : 'bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                }`}
              >
                Get My Free Compliance Report
                <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-3">
                No credit card required • Results in 30 seconds
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceCheck;