import {IMAGES} from '../data/menuData';
import {buildGeneralWhatsAppUrl} from '../data/restaurantConfig';
import {FoodImage} from './FoodImage';
import {WhatsAppIcon} from './WhatsAppIcon';

export function FinalCtaSection() {
  return (
    <section className="relative bg-[#570B13] text-[#FFF5E5] py-16 sm:py-20 overflow-hidden border-t border-[#F5BE36]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#320609] border border-[#F5BE36]/35 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-7 p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
            <p className="text-sm font-semibold tracking-wide text-[#F5BE36]">
              Quick WhatsApp Ordering
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight [text-wrap:balance]">
              Your Favorite Food Is Just One Message Away!
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#FFF5E5]/85 leading-relaxed max-w-xl">
              Craving biryani, Indian specialties, or a delicious lunch combo?
              Contact The Food Studio and place your order today.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={buildGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[50px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#F5BE36] text-[#320609] font-bold text-base hover:bg-[#ffd05b] active:scale-[0.98] transition-all duration-150 shadow-sm"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Order Now on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[240px] sm:min-h-[300px]">
            <FoodImage
              src={IMAGES.hyderabadiMutton}
              alt="Hyderabadi Mutton Biryani ready to order from The Food Studio"
              className="w-full h-full lg:absolute lg:inset-0 object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#320609] via-[#320609]/30 to-transparent pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
