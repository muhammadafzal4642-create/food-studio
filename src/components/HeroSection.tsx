import {ArrowDown, Utensils} from 'lucide-react';
import {RESTAURANT_CONFIG, buildGeneralWhatsAppUrl} from '../data/restaurantConfig';
import {IMAGES} from '../data/menuData';
import {FoodImage} from './FoodImage';
import {WhatsAppIcon} from './WhatsAppIcon';

export function HeroSection() {
  const generalWaUrl = buildGeneralWhatsAppUrl();

  return (
    <section
      id="home"
      className="relative bg-[#320609] text-[#FFF5E5] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-[#F5BE36] tracking-wide mb-4">
              <span>{RESTAURANT_CONFIG.tagline}</span>
              <span aria-hidden="true" className="text-[#F5BE36]/50">
                /
              </span>
              <span className="text-[#FFF5E5]/80">{RESTAURANT_CONFIG.location}</span>
            </div>

            <h1 className="font-serif text-[clamp(2.25rem,4.5vw,3.85rem)] font-bold leading-[1.08] tracking-tight text-white [text-wrap:balance]">
              Good Food. Great Taste. Happy Moments.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-[#FFF5E5]/85 leading-relaxed max-w-xl">
              Discover delicious biryanis, flavorful Indian specialties, and
              irresistible lunch combos at The Food Studio.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={generalWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#F5BE36] text-[#320609] font-bold text-base hover:bg-[#ffd05b] active:scale-[0.98] transition-all duration-150 shadow-sm whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFF5E5]"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Order on WhatsApp</span>
              </a>

              <a
                href="#menu"
                className="min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-[#FFF5E5]/30 text-[#FFF5E5] font-semibold text-base hover:bg-[#570B13] hover:border-[#F5BE36]/60 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5BE36]"
              >
                <span>Explore Our Menu</span>
                <ArrowDown className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

            <a
              href="#offers"
              className="mt-8 group flex items-center justify-between gap-4 p-4 rounded-xl bg-[#570B13] border border-[#F5BE36]/35 hover:border-[#F5BE36] transition-colors max-w-lg"
            >
              <div className="flex items-center gap-3.5">
                <span className="w-10 h-10 rounded-lg bg-[#F5BE36]/15 text-[#F5BE36] flex items-center justify-center shrink-0">
                  <Utensils className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-white">
                    Special Lunch Combo Offers Starting at{' '}
                    <span className="text-[#F5BE36] tabular-nums font-bold">1.9</span>
                  </p>
                  <p className="text-xs sm:text-sm text-[#FFF5E5]/75">
                    {RESTAURANT_CONFIG.secondaryTagline} · Tap to view all 4 lunch combos
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold text-[#F5BE36] shrink-0 group-hover:translate-x-0.5 transition-transform">
                View Offers &rarr;
              </span>
            </a>
          </div>

          <div className="lg:col-span-6 flex">
            <div className="relative w-full min-h-[280px] sm:min-h-[380px] lg:min-h-[480px] rounded-2xl overflow-hidden border border-[#F5BE36]/25 shadow-xl bg-[#570B13]">
              <FoodImage
                src={IMAGES.heroFeast}
                alt="Signature biryani in a copper handi alongside butter chicken, chilli chicken, and naan at The Food Studio"
                className="w-full h-full lg:absolute lg:inset-0 object-cover"
                eager
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#320609]/85 via-[#320609]/20 to-transparent pointer-events-none"
                aria-hidden="true"
              />
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold tracking-wide text-[#F5BE36]">
                    Indian &amp; Asian Specialties
                  </p>
                  <p className="font-serif text-lg sm:text-xl font-semibold text-white mt-0.5">
                    {RESTAURANT_CONFIG.secondaryTagline}
                  </p>
                </div>
                <span className="text-xs sm:text-sm text-[#FFF5E5]/90 font-medium whitespace-nowrap">
                  {RESTAURANT_CONFIG.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
