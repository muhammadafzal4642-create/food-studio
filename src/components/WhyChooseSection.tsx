import {UtensilsCrossed, ChefHat, Tag, MessageCircle} from 'lucide-react';

const FEATURES = [
  {
    id: 'delicious-food',
    title: 'Delicious Food',
    description: 'A variety of flavorful meals for every craving.',
    Icon: UtensilsCrossed,
  },
  {
    id: 'variety-of-choices',
    title: 'Variety of Choices',
    description: 'From biryani to noodles and Indian specialties.',
    Icon: ChefHat,
  },
  {
    id: 'great-value',
    title: 'Great Value',
    description: 'Enjoy attractive lunch combo offers.',
    Icon: Tag,
  },
  {
    id: 'easy-ordering',
    title: 'Easy Ordering',
    description: 'Contact and order directly through WhatsApp.',
    Icon: MessageCircle,
  },
];

export function WhyChooseSection() {
  return (
    <section id="why-us" className="bg-[#F7F0E7] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-wide text-[#570B13]">
            Eat Good &bull; Feel Good
          </p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#320609] leading-tight [text-wrap:balance]">
            Why Choose The Food Studio?
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map(({id, title, description, Icon}) => (
            <div
              key={id}
              className="group p-6 rounded-2xl bg-white border border-[#320609]/10 shadow-sm hover:shadow-md hover:border-[#F5BE36] transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-xl bg-[#570B13] text-[#F5BE36] flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                <Icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-bold text-[#320609]">
                {title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#5E282D] leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
