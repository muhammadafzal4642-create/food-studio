import {IMAGES} from '../data/menuData';
import {RESTAURANT_CONFIG, buildGeneralWhatsAppUrl} from '../data/restaurantConfig';
import {FoodImage} from './FoodImage';
import {WhatsAppIcon} from './WhatsAppIcon';

export function AboutSection() {
  return (
    <section id="about" className="bg-[#FFF5E5] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          <div className="lg:col-span-6 flex">
            <div className="relative w-full min-h-[280px] sm:min-h-[360px] rounded-2xl overflow-hidden border border-[#320609]/15 shadow-md bg-[#F7F0E7]">
              <FoodImage
                src={IMAGES.butterChickenCombo}
                alt="Butter Chicken with steamed rice and chilled beverage prepared at The Food Studio"
                className="w-full h-full lg:absolute lg:inset-0 object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-sm font-semibold tracking-wide text-[#570B13]">
              About {RESTAURANT_CONFIG.name}
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#320609] leading-tight [text-wrap:balance]">
              Good Food, Made for Good Moments.
            </h2>

            <p className="mt-5 text-base sm:text-lg text-[#5E282D] leading-relaxed">
              Welcome to The Food Studio, where great food meets great taste.
              Explore our selection of delicious biryanis, Indian specialties,
              rice dishes, noodles, and satisfying lunch combos. Whether
              you&apos;re craving a flavorful biryani or a delicious lunch,
              we&apos;re here to make your food experience enjoyable.
            </p>

            <div className="mt-8 pt-6 border-t border-[#320609]/10 flex flex-wrap items-center gap-6">
              <div>
                <p className="text-xs font-semibold tracking-wide text-[#570B13]/75">
                  Location
                </p>
                <p className="mt-0.5 text-base font-semibold text-[#320609]">
                  {RESTAURANT_CONFIG.location}
                </p>
              </div>
              <span aria-hidden="true" className="h-8 w-px bg-[#320609]/15" />
              <div>
                <p className="text-xs font-semibold tracking-wide text-[#570B13]/75">
                  Our Promise
                </p>
                <p className="mt-0.5 text-base font-semibold text-[#320609]">
                  {RESTAURANT_CONFIG.secondaryTagline}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={buildGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[46px] inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-[#570B13] text-[#FFF5E5] text-sm font-bold hover:bg-[#320609] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#570B13]"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#F5BE36]" />
                <span>Chat With Us on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
