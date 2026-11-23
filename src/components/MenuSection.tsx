import {MENU_CATEGORIES, MENU_ITEMS, type MenuCategory} from '../data/menuData';
import {buildDishWhatsAppUrl} from '../data/restaurantConfig';
import {FoodImage} from './FoodImage';
import {WhatsAppIcon} from './WhatsAppIcon';

export type MenuFilter = 'All' | MenuCategory;

interface MenuSectionProps {
  activeCategory: MenuFilter;
  onSelectCategory: (category: MenuFilter) => void;
}

const FILTER_OPTIONS: MenuFilter[] = ['All', ...MENU_CATEGORIES];

export function MenuSection({
  activeCategory,
  onSelectCategory,
}: MenuSectionProps) {
  const filteredItems =
    activeCategory === 'All'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="bg-[#FFF5E5] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-[#570B13]">
              Explore Our Menu
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#320609] leading-tight [text-wrap:balance]">
              Biryanis, Indian Specialties &amp; Asian Favorites
            </h2>
            <p className="mt-3 text-base text-[#5E282D] leading-relaxed">
              Browse by category and message us on WhatsApp to confirm current
              availability and place your order.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter menu by category"
            className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-[#F7F0E7] border border-[#320609]/10"
          >
            {FILTER_OPTIONS.map((category) => {
              const isSelected = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => onSelectCategory(category)}
                  className={`min-h-[40px] px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#570B13] ${
                    isSelected
                      ? 'bg-[#570B13] text-[#FFF5E5] shadow-sm'
                      : 'text-[#320609]/80 hover:text-[#320609] hover:bg-white/70'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col rounded-2xl bg-white border border-[#320609]/10 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F7F0E7]">
                <FoodImage
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-xs font-medium text-[#570B13]/80">
                  <span>{item.category}</span>
                  {item.featuredNote && (
                    <>
                      <span aria-hidden="true">&middot;</span>
                      <span>{item.featuredNote}</span>
                    </>
                  )}
                </div>

                <div className="mt-2 flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-xl font-bold text-[#320609] leading-snug">
                    {item.name}
                  </h3>
                  {item.price && (
                    <span className="font-serif text-xl font-bold text-[#570B13] tabular-nums shrink-0">
                      {item.price}
                    </span>
                  )}
                </div>

                <p className="mt-2.5 text-sm text-[#5E282D] leading-relaxed">
                  {item.description}
                </p>

                {!item.price && (
                  <p className="mt-3 text-xs font-medium text-[#5E282D]/80">
                    Price &amp; availability confirmed on WhatsApp
                  </p>
                )}

                <div className="mt-auto pt-5">
                  <a
                    href={buildDishWhatsAppUrl(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#570B13] text-[#FFF5E5] text-sm font-semibold hover:bg-[#320609] active:scale-[0.98] transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#570B13]"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#F5BE36]" />
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
