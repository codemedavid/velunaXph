import React from 'react';
import { MessageCircle, Heart, HelpCircle, Calculator, FileText, Truck, ClipboardCheck } from 'lucide-react';
import { useCOAPageSetting } from '../hooks/useCOAPageSetting';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { coaPageEnabled } = useCOAPageSetting();

  // Contact Links
  //   const whatsappMessage = encodeURIComponent('Hi! I would like to inquire about your products.');
  //   const whatsappUrl = `https://wa.me/639062349763?text=${whatsappMessage}`;

  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">

          {/* Brand Section */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-100">
              <img
                src="/assets/logo.jpeg"
                alt="VelunaXph"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <div className="font-bold text-theme-text text-lg tracking-tight">
                VelunaXph
              </div>
              <div className="text-xs text-gray-500">Premium Peptide Solutions</div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-sm">
            <span className="text-xs font-medium text-gray-400 uppercase">Contact Us:</span>
            <a
              href="tel:09778132630"
              className="text-gray-600 hover:text-theme-accent transition-colors flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              09778132630
            </a>
            <a
              href="https://wa.me/639778132630"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600 transition-colors flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <a
              href="mailto:velunaxph@gmail.com"
              className="text-gray-600 hover:text-theme-accent transition-colors flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              velunaxph@gmail.com
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-4 justify-center md:justify-end">
            {/* Lab Reports & FAQ Removed */}
            {/* WhatsApp Removed */}
            <a
              href="/track-order"
              className="text-gray-500 hover:text-theme-accent transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <Truck className="w-4 h-4" />
              Track Order
            </a>
            <a
              href="/calculator"
              className="text-gray-500 hover:text-theme-accent transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <Calculator className="w-4 h-4" />
              Calculator
            </a>
            {coaPageEnabled && (
              <a
                href="/coa"
                className="text-gray-500 hover:text-theme-accent transition-colors flex items-center gap-2 text-sm font-medium"
              >
                <FileText className="w-4 h-4" />
                Lab Tests
              </a>
            )}
            <a
              href="/faq"
              className="text-gray-500 hover:text-theme-accent transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <HelpCircle className="w-4 h-4" />
              FAQ
            </a>
            <a
              href="/assessment"
              className="text-gray-500 hover:text-theme-accent transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <ClipboardCheck className="w-4 h-4" />
              Assessment
            </a>
            <a
              href="https://t.me/+k3SfL4WjnMQ3NGRl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#0088cc] transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              Join Community
            </a>
            <a
              href="https://www.tiktok.com/@peptidepulse20?_r=1&_t=ZS-92SrpIepm5s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
              TikTok
            </a>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-100 pt-6 text-center">
          <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
            Made with
            <Heart className="w-3 h-3 text-theme-secondary fill-theme-secondary" />
            © {currentYear} VelunaXph.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
