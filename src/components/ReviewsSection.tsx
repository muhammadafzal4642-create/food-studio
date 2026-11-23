import {MessageSquareHeart} from 'lucide-react';
import {RESTAURANT_CONFIG, buildWhatsAppUrl} from '../data/restaurantConfig';
import {WhatsAppIcon} from './WhatsAppIcon';

export function ReviewsSection() {
  const reviews = RESTAURANT_CONFIG.reviews;
  const feedbackWhatsAppUrl = buildWhatsAppUrl(
    'Hello The Food Studio! I would like to share my feedback about my meal.'
  );

  return (
    <section id="reviews" className="bg-[#FFF5E5] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-wide text-[#570B13]">
            Guest Feedback
          </p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#320609] leading-tight [text-wrap:balance]">
            Customer Reviews
          </h2>
          <p className="mt-3 text-base text-[#5E282D]">
            Genuine feedback shared by guests of {RESTAURANT_CONFIG.name}.
          </p>
        </div>

        {reviews.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <blockquote
                key={review.id}
                className="p-6 rounded-2xl bg-white border border-[#320609]/10 shadow-sm flex flex-col justify-between"
              >
                <p className="text-base text-[#320609] leading-relaxed">
                  &ldquo;{review.comment}&rdquo;
                </p>
                <footer className="mt-5 pt-4 border-t border-[#320609]/10">
                  <p className="font-serif text-base font-bold text-[#320609]">
                    {review.customerName}
                  </p>
                  <p className="text-xs text-[#5E282D] mt-0.5">
                    {review.context}
                    {review.dateLabel ? ` · ${review.dateLabel}` : ''}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
        ) : (
          <div className="mt-10 max-w-3xl mx-auto rounded-2xl bg-white border border-[#320609]/10 p-8 sm:p-10 text-center shadow-sm">
            <div className="w-12 h-12 mx-auto rounded-xl bg-[#F7F0E7] text-[#570B13] flex items-center justify-center">
              <MessageSquareHeart className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="mt-4 font-serif text-2xl font-bold text-[#320609]">
              Verified Guest Stories Appear Here
            </h3>
            <p className="mt-2.5 text-sm sm:text-base text-[#5E282D] max-w-xl mx-auto leading-relaxed">
              We publish only genuine customer reviews received directly from
              our diners. Tried our biryanis or lunch combos recently? Send us a
              quick note on WhatsApp—we&apos;d love to hear from you.
            </p>
            <div className="mt-6">
              <a
                href={feedbackWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#570B13] text-[#FFF5E5] text-sm font-semibold hover:bg-[#320609] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#F5BE36]" />
                <span>Share Your Feedback on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
