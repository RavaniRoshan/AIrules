import React from 'react';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import { useGSAP, useGSAPStagger } from '../hooks/useGSAP';

const Hero = () => {
  const heroRef = useGSAP();
  const staggerRef = useGSAPStagger('.stagger-item', 0.2);

  return (
    <section ref={heroRef} className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 dark:bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/20 dark:bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div ref={staggerRef} className="relative container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Social Proof Badge */}
          <div className="stagger-item inline-flex items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 mb-8">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
            </div>
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">Trusted by 2,000+ businesses</span>
          </div>

          {/* Main Headline */}
          <h1 className="stagger-item text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Transform Complex
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              {' '}AI Regulations
            </span>
            <br />
            Into Simple Checklists
          </h1>

          {/* Subheadline */}
          <p className="stagger-item text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Navigate EU AI Act, Colorado AI Act, and California AI laws with confidence. 
            Get personalized compliance roadmaps in minutes, not months.
          </p>

          {/* Value Props */}
          <div className="stagger-item flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <CheckCircle className="h-5 w-5 text-emerald-500 mr-2" />
              <span>No legal expertise required</span>
            </div>
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <CheckCircle className="h-5 w-5 text-emerald-500 mr-2" />
              <span>Always up-to-date regulations</span>
            </div>
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <CheckCircle className="h-5 w-5 text-emerald-500 mr-2" />
              <span>Get results in 5 minutes</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="stagger-item flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Your Free Compliance Check
              <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg font-semibold">
              Watch 2-min demo →
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="stagger-item flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <strong className="text-gray-700 dark:text-gray-300">SOC 2 Type II</strong> Certified
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <strong className="text-gray-700 dark:text-gray-300">GDPR</strong> Compliant
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <strong className="text-gray-700 dark:text-gray-300">ISO 27001</strong> Certified
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;