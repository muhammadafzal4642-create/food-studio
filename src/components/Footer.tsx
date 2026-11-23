import {MapPin, Phone} from 'lucide-react';
import {MENU_CATEGORIES, type MenuCategory} from '../data/menuData';
import {
  RESTAURANT_CONFIG,
  buildGeneralWhatsAppUrl,
  buildWhatsAppUrl,
} from '../data/restaurantConfig';
import {WhatsAppIcon} from './WhatsAppIcon';

interface FooterProps {
  onSelectMenuCategory: (category: MenuCategory) => void;
}

const QUICK_LINKS = [
  {label: 'Home', href: '#home'},
  {label: 'Special Offers', href: '#offers'},
  {label: 'Explore Menu', href: '#menu'},
  {label: 'Signature Biryanis', href: '#biryanis'},
  {label: 'About Us', href: '#about'},
  {label: 'Gallery', href: '#gallery'},
  {label: 'Contact', href: '#contact'},
];

export function Footer({onSelectMenuCategory}: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleCategoryClick = (category: MenuCategory) => {
    onSelectMenuCategory(category);
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <footer className="bg-[#320609] text-[#FFF5E5] border-t border-[#F5BE36]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a
              href="#home"
              className="font-serif text-2xl font-bold text-white hover:text-[#F5BE36] transition-colors"
            >
              {RESTAURANT_CONFIG.name}
            </a>
            <p className="mt-2 text-sm font-semibold text-[#F5BE36]">
              {RESTAURANT_CONFIG.tagline}
            </p>
            <p className="mt-1 text-sm text-[#FFF5E5]/75">
              {RESTAURANT_CONFIG.secondaryTagline}
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-[#FFF5E5]/85">
              <MapPin className="w-4 h-4 text-[#F5BE36] shrink-0" aria-hidden="true" />
              <span>{RESTAURANT_CONFIG.location}</span>
            </p>
          </div>

          <div>
            <h3 className="font-serif text-base font-bold text-white">
              Quick Navigation
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-[#FFF5E5]/80">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#F5BE36] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-bold text-white">
              Menu Categories
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-[#FFF5E5]/80">
              {MENU_CATEGORIES.map((category) => (
                <li key={category}>
                  <button
                    type="button"
                    onClick={() => handleCategoryClick(category)}
                    className="text-left hover:text-[#F5BE36] transition-colors"
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-bold text-white">
              Order &amp; Contact
            </h3>
            <ul className="mt-3 space-y-2.5 text-sm text-[#FFF5E5]/85">
              <li>
                <a
                  href={RESTAURANT_CONFIG.primaryPhoneHref}
                  className="inline-flex items-center gap-2 hover:text-[#F5BE36] transition-colors tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#F5BE36]" aria-hidden="true" />
                  <span>{RESTAURANT_CONFIG.primaryPhoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={RESTAURANT_CONFIG.secondaryPhoneHref}
                  className="inline-flex items-center gap-2 hover:text-[#F5BE36] transition-colors tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#F5BE36]" aria-hidden="true" />
                  <span>{RESTAURANT_CONFIG.secondaryPhoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={buildGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#F5BE36] font-semibold hover:underline"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Order via WhatsApp</span>
                </a>
              </li>
              {RESTAURANT_CONFIG.socialLinks.map((social) => (
                <li key={social.id}>
                  <a
                    href={
                      social.href === '#contact'
                        ? buildWhatsAppUrl(
                            'Hello The Food Studio! Please share your social media links.'
                          )
                        : social.href
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFF5E5]/80 hover:text-[#F5BE36] transition-colors"
                  >
                    {social.label} ({social.handle})
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#F5BE36]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#FFF5E5]/65">
          <p>
            &copy; {currentYear} {RESTAURANT_CONFIG.name}. All rights reserved.
          </p>
          <p>{RESTAURANT_CONFIG.location}</p>
        </div>
      </div>
    </footer>
  );
}
