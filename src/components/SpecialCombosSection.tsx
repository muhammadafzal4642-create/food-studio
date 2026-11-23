import {Check} from 'lucide-react';
import {LUNCH_COMBOS} from '../data/menuData';
import {buildComboWhatsAppUrl} from '../data/restaurantConfig';
import {FoodImage} from './FoodImage';
import {WhatsAppIcon} from './WhatsAppIcon';

export function SpecialCombosSection() {
  return (
    <section
      id="offers"
      className="bg-[#570B13] text-[#FFF5E5] py-16 sm:py-20 lg:py-24 border-y border-[#F5BE36]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-wide text-[#F5BE36]">
            Special Lunch Value
          </p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-white leading-tight [text-wrap:balance]">
            Today&apos;s Special Lunch Combos
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#FFF5E5]/85">
            Delicious Food &bull; Great Value &bull; Perfect Lunch
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {LUNCH_COMBOS.map((combo) => (
            <article
              key={combo.id}
              className="group flex flex-col rounded-2xl bg-[#320609] border border-[#F5BE36]/40 hover:border-[#F5BE36] overflow-hidden shadow-lg transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#240305]">
                <FoodImage
                  src={combo.image}
                  alt={combo.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#320609]/80 via-transparent to-black/25 pointer-events-none"
                  aria-hidden="true"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#F5BE36] text-[#320609] text-xs font-bold tracking-wide shadow-sm">
                  Special Offer
                </span>
                <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-[#320609]/95 border border-[#F5BE36]/60 text-right">
                  <span className="block text-[11px] font-medium text-[#FFF5E5]/75 leading-none">
                    Combo Price
                  </span>
                  <span className="font-serif text-xl font-bold text-[#F5BE36] tabular-nums leading-tight">
                    {combo.price}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white leading-snug">
                  {combo.title}
                </h3>

                <ul
                  aria-label={`Included in ${combo.title}`}
                  className="mt-3.5 space-y-1.5 text-sm text-[#FFF5E5]/85"
                >
                  {combo.includedItems.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check
                        className="w-4 h-4 text-[#F5BE36] shrink-0"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-5">
                  <a
                    href={buildComboWhatsAppUrl(combo.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#F5BE36] text-[#320609] text-sm font-bold hover:bg-[#ffd05b] active:scale-[0.98] transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFF5E5]"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Order on WhatsApp</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
