import React from 'react';
import { Shield, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { useGSAP } from '../hooks/useGSAP';

const Footer = () => {
  const footerRef = useGSAP();

  return (
    <footer ref={footerRef} className="bg-gray-900 dark:bg-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">ComplianceAI</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming complex AI regulations into simple, actionable compliance strategies for businesses worldwide.
            </p>
            
            {/* Trust Badges */}
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span className="text-gray-300">SOC 2 Type II Certified</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span className="text-gray-300">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span className="text-gray-300">GDPR Compliant</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-all hover:translate-x-1">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-all hover:translate-x-1">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-all hover:translate-x-1">API Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-all hover:translate-x-1">Integrations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-all hover:translate-x-1">Security</a></li>
            </ul>
          </div>

          {/* Regulations */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Regulations</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-all hover:translate-x-1 flex items-center">
                  EU AI Act
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-all hover:translate-x-1 flex items-center">
                  Colorado AI Act
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-all hover:translate-x-1 flex items-center">
                  California AI Laws
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-all hover:translate-x-1">Regulatory Updates</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-all hover:translate-x-1">Compliance Guides</a></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact & Support</h4>
            <ul className="space-y-4 mb-6">
              <li><a href="#" className="text-gray-300 hover:text-white transition-all hover:translate-x-1">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-all hover:translate-x-1">Live Chat</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-all hover:translate-x-1">Contact Sales</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-all hover:translate-x-1">Book a Demo</a></li>
            </ul>

            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3" />
                <span className="text-sm">support@complianceai.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-3" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 dark:border-gray-700">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2025 ComplianceAI. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-all hover:translate-x-1">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-all hover:translate-x-1">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-all hover:translate-x-1">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;