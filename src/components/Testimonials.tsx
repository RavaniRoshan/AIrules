import React, { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { gsap } from 'gsap';
import { useGSAP } from '../hooks/useGSAP';

const Testimonials = () => {
  const sectionRef = useGSAP();
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CTO",
      company: "HealthTech Solutions",
      avatar: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      content: "ComplianceAI saved us months of legal research. We went from confusion to confidence in our EU AI Act compliance in just one afternoon.",
      rating: 5,
      highlight: "Saved 6 months of research"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Founder & CEO",
      company: "RetailBot AI",
      avatar: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      content: "The personalized compliance checklist was exactly what we needed. Clear, actionable steps that our team could actually follow.",
      rating: 5,
      highlight: "Crystal clear guidance"
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      role: "Head of AI Ethics",
      company: "FinanceForward",
      avatar: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      content: "Finally, a service that translates complex regulations into plain English. Our compliance team loves the real-time updates.",
      rating: 5,
      highlight: "Plain English translations"
    },
    {
      id: 4,
      name: "James Liu",
      role: "VP of Engineering",
      company: "AutoDrive Systems",
      avatar: "https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      content: "The Colorado AI Act requirements were overwhelming until we found ComplianceAI. Now we're fully compliant and confident.",
      rating: 5,
      highlight: "Full compliance achieved"
    },
    {
      id: 5,
      name: "Maria Gonzalez",
      role: "Chief Legal Officer",
      company: "DataFlow Inc",
      avatar: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      content: "Incredible platform that makes AI compliance accessible to non-lawyers. The automated updates keep us ahead of regulatory changes.",
      rating: 5,
      highlight: "Always up-to-date"
    },
    {
      id: 6,
      name: "David Park",
      role: "Product Manager",
      company: "SmartAnalytics",
      avatar: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      content: "ComplianceAI turned our biggest regulatory headache into our competitive advantage. We're now the most compliant in our industry.",
      rating: 5,
      highlight: "Competitive advantage"
    }
  ];

  // Duplicate testimonials for seamless loop
  const row1Testimonials = [...testimonials, ...testimonials];
  const row2Testimonials = [...testimonials.slice(3), ...testimonials.slice(0, 3), ...testimonials.slice(3), ...testimonials.slice(0, 3)];

  useEffect(() => {
    if (!row1Ref.current || !row2Ref.current) return;

    // Row 1 - Left to right
    gsap.to(row1Ref.current, {
      x: "-50%",
      duration: 30,
      ease: "none",
      repeat: -1,
    });

    // Row 2 - Right to left
    gsap.fromTo(row2Ref.current, 
      { x: "-50%" },
      {
        x: "0%",
        duration: 30,
        ease: "none",
        repeat: -1,
      }
    );
  }, []);

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="flex-shrink-0 w-80 mx-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 relative h-full">
        {/* Quote Icon */}
        <div className="absolute -top-3 left-6 bg-blue-600 rounded-full p-2">
          <Quote className="h-4 w-4 text-white" />
        </div>

        {/* Rating */}
        <div className="flex items-center mb-4 pt-2">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
          ))}
        </div>

        {/* Content */}
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm">
          "{testimonial.content}"
        </p>

        {/* Highlight */}
        <div className="bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 rounded-lg p-2 mb-4">
          <div className="text-emerald-700 dark:text-emerald-400 font-semibold text-xs">
            💡 {testimonial.highlight}
          </div>
        </div>

        {/* Author */}
        <div className="flex items-center">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
          <div>
            <div className="font-semibold text-gray-900 dark:text-white text-sm">{testimonial.name}</div>
            <div className="text-gray-600 dark:text-gray-400 text-xs">
              {testimonial.role} at {testimonial.company}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden relative">
      {/* Fade overlays */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-blue-50 dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-blue-50 dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Trusted by AI Innovators
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join thousands of businesses who've transformed their AI compliance approach
          </p>
        </div>
      </div>

      {/* Row 1 - Moving Left */}
      <div className="mb-8">
        <div ref={row1Ref} className="flex items-center">
          {row1Testimonials.map((testimonial, index) => (
            <TestimonialCard key={`row1-${testimonial.id}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Row 2 - Moving Right */}
      <div className="mb-16">
        <div ref={row2Ref} className="flex items-center">
          {row2Testimonials.map((testimonial, index) => (
            <TestimonialCard key={`row2-${testimonial.id}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="text-center relative z-20">
        <div className="inline-flex items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full px-6 py-3">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 fill-current mr-2" />
              <span className="text-gray-700 dark:text-gray-300 font-semibold">4.9/5 rating</span>
            </div>
            <div className="h-4 w-px bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">2,000+</span> happy customers
            </div>
            <div className="h-4 w-px bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">98%</span> recommend us
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;