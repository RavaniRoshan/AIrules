import React from 'react';
import { AlertTriangle, BookOpen, Clock, DollarSign, CheckCircle, Zap, Shield } from 'lucide-react';
import { useGSAP, useGSAPStagger } from '../hooks/useGSAP';

const ProblemSolution = () => {
  const sectionRef = useGSAP();
  const problemsRef = useGSAPStagger('.problem-card', 0.2);
  const solutionsRef = useGSAPStagger('.solution-card', 0.2);

  const problems = [
    {
      icon: AlertTriangle,
      title: "Complex Legal Jargon",
      description: "AI regulations are written in dense legalese that's impossible for non-lawyers to understand."
    },
    {
      icon: Clock,
      title: "Time-Consuming Research",
      description: "Months spent trying to decode what applies to your specific AI use case and business."
    },
    {
      icon: DollarSign,
      title: "Expensive Legal Fees",
      description: "$500-2000/hour for compliance lawyers, making it unaffordable for small businesses."
    }
  ];

  const solutions = [
    {
      icon: CheckCircle,
      title: "Plain English Translation",
      description: "AI-powered translation converts complex regulations into clear, actionable language."
    },
    {
      icon: Zap,
      title: "5-Minute Assessment",
      description: "Get your personalized compliance checklist in minutes, not months of research."
    },
    {
      icon: Shield,
      title: "Always Current",
      description: "Stay updated automatically as regulations evolve with real-time monitoring."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Problem Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              The AI Compliance <span className="text-red-600">Problem</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Small businesses are drowning in complex AI regulations while competitors gain unfair advantages
            </p>
          </div>

          <div ref={problemsRef} className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="problem-card bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all transform hover:scale-105">
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <problem.icon className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{problem.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our AI-Powered <span className="text-emerald-600">Solution</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transform regulatory complexity into clear, actionable compliance steps
            </p>
          </div>

          <div ref={solutionsRef} className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="solution-card bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all group transform hover:scale-105">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/50 transition-colors">
                  <solution.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{solution.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;