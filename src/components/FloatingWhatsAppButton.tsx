import {buildGeneralWhatsAppUrl} from '../data/restaurantConfig';
import {WhatsAppIcon} from './WhatsAppIcon';

export function FloatingWhatsAppButton() {
  return (
    <a
      href={buildGeneralWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 h-12 sm:h-12 px-3.5 sm:px-5 rounded-full bg-[#F5BE36] text-[#320609] font-bold text-sm shadow-xl border-2 border-[#320609]/15 hover:bg-[#ffd05b] active:scale-95 transition-all duration-150 inline-flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#320609]"
    >
      <WhatsAppIcon className="w-5 h-5 shrink-0" />
      <span className="hidden sm:inline whitespace-nowrap">
        Order on WhatsApp
      </span>
    </a>
  );
}
