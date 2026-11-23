import {useState, useEffect} from 'react';
import {Menu, X} from 'lucide-react';
import {RESTAURANT_CONFIG, buildGeneralWhatsAppUrl} from '../data/restaurantConfig';
import {WhatsAppIcon} from './WhatsAppIcon';

const NAV_ITEMS = [
  {label: 'Home', href: '#home'},
  {label: 'Menu', href: '#menu'},
  {label: 'Special Offers', href: '#offers'},
  {label: 'About Us', href: '#about'},
  {label: 'Gallery', href: '#gallery'},
  {label: 'Contact', href: '#contact'},
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const generalWaUrl = buildGeneralWhatsAppUrl();

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 border-b ${
        scrolled
          ? 'bg-[#320609]/95 backdrop-blur-md border-[#F5BE36]/20 shadow-sm'
          : 'bg-[#320609] border-[#F5BE36]/15'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        <a
          href="#home"
          className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#FFF5E5] hover:text-[#F5BE36] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5BE36]"
        >
          {RESTAURANT_CONFIG.name}
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-7"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#FFF5E5]/90 hover:text-[#F5BE36] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#F5BE36] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5BE36]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={generalWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#F5BE36] text-[#320609] text-sm font-semibold hover:bg-[#ffd05b] active:scale-[0.98] transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFF5E5]"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Order on WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#FFF5E5] hover:bg-[#570B13] transition-colors focus-visible:outline-2 focus-visible:outline-[#F5BE36]"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden bg-[#320609] border-t border-[#F5BE36]/15 px-4 py-4"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="min-h-[44px] flex items-center px-3 rounded-lg text-base font-medium text-[#FFF5E5] hover:bg-[#570B13] hover:text-[#F5BE36] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-[#F5BE36]/15">
            <a
              href={generalWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="w-full min-h-[46px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#F5BE36] text-[#320609] text-sm font-bold hover:bg-[#ffd05b] transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
