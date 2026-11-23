import {SIGNATURE_BIRYANIS} from '../data/menuData';
import {buildDishWhatsAppUrl, buildWhatsAppUrl} from '../data/restaurantConfig';
import {FoodImage} from './FoodImage';
import {WhatsAppIcon} from './WhatsAppIcon';

export function SignatureBiryaniSection() {
  const biryaniInquiryUrl = buildWhatsAppUrl(
    'Hello The Food Studio! I would like to order from your Signature Biryanis.'
  );

  return (
    <section
      id="biryanis"
      className="bg-[#320609] text-[#FFF5E5] py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-[#F5BE36]">
              Our Signature Biryanis
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-white leading-tight [text-wrap:balance]">
              Experience the Magic of Authentic Biryani
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#FFF5E5]/85 leading-relaxed">
              From flavorful Hyderabadi biryani to aromatic Thalassery dum
              biryani, discover delicious meals prepared to satisfy your
              cravings.
            </p>
          </div>

          <a
            href={biryaniInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-[#F5BE36] text-[#320609] font-bold text-sm sm:text-base hover:bg-[#ffd05b] active:scale-[0.98] transition-all duration-150 whitespace-nowrap shrink-0 self-start lg:self-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFF5E5]"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span>Order Biryani on WhatsApp</span>
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-7">
          {SIGNATURE_BIRYANIS.map((biryani) => (
            <article
              key={biryani.id}
              className="group flex flex-col rounded-2xl bg-[#570B13] border border-[#F5BE36]/25 overflow-hidden shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#240305]">
                <FoodImage
                  src={biryani.image}
                  alt={biryani.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#320609]/85 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />
                <p className="absolute bottom-3.5 left-5 text-xs font-semibold tracking-wide text-[#F5BE36]">
                  {biryani.subtitle}
                </p>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-serif text-2xl font-bold text-white leading-snug">
                  {biryani.name}
                </h3>
                <p className="mt-2.5 text-sm sm:text-base text-[#FFF5E5]/85 leading-relaxed">
                  {biryani.description}
                </p>

                <div className="mt-auto pt-6">
                  <a
                    href={buildDishWhatsAppUrl(biryani.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[#F5BE36]/60 text-[#F5BE36] text-sm font-semibold hover:bg-[#F5BE36] hover:text-[#320609] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFF5E5]"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Order {biryani.name}</span>
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
