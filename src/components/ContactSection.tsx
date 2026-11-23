import {MapPin, Phone, Clock, Navigation, Instagram} from 'lucide-react';
import {
  RESTAURANT_CONFIG,
  buildGeneralWhatsAppUrl,
  buildWhatsAppUrl,
} from '../data/restaurantConfig';
import {WhatsAppIcon} from './WhatsAppIcon';

export function ContactSection() {
  const secondaryWaUrl = `https://wa.me/968${RESTAURANT_CONFIG.secondaryPhoneDisplay}?text=${encodeURIComponent(
    'Hello The Food Studio! I would like to inquire about your menu and orders.'
  )}`;

  return (
    <section id="contact" className="bg-[#F7F0E7] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-[#570B13]">
            Visit or Contact Us
          </p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#320609] leading-tight [text-wrap:balance]">
            Location &amp; Direct Ordering
          </h2>
          <p className="mt-3 text-base text-[#5E282D] leading-relaxed">
            Find {RESTAURANT_CONFIG.name} in {RESTAURANT_CONFIG.location} or
            reach out directly by phone or WhatsApp.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          <div className="lg:col-span-7 rounded-2xl bg-white border border-[#320609]/10 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-2.5 text-[#570B13] font-semibold text-sm">
                  <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Restaurant Address</span>
                </div>
                <h3 className="mt-2 font-serif text-xl font-bold text-[#320609]">
                  {RESTAURANT_CONFIG.name}
                </h3>
                <p className="mt-1 text-base text-[#5E282D]">
                  {RESTAURANT_CONFIG.location}
                </p>

                <div className="mt-6 flex items-center gap-2.5 text-[#570B13] font-semibold text-sm">
                  <Clock className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Opening Hours</span>
                </div>
                <div className="mt-2 space-y-1">
                  {RESTAURANT_CONFIG.openingHours.map((entry) => (
                    <div key={entry.days} className="text-sm text-[#5E282D]">
                      <p className="font-semibold text-[#320609]">
                        {entry.days}
                      </p>
                      <p>{entry.hours}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2.5 text-[#570B13] font-semibold text-sm">
                  <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Call Directly</span>
                </div>

                <div className="mt-3 flex flex-col gap-2.5">
                  <a
                    href={RESTAURANT_CONFIG.primaryPhoneHref}
                    className="min-h-[44px] inline-flex items-center justify-between px-4 py-2.5 rounded-lg bg-[#FFF5E5] border border-[#320609]/15 text-[#320609] font-semibold text-sm hover:border-[#570B13] hover:bg-[#F7F0E7] transition-colors tabular-nums"
                  >
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#570B13]" aria-hidden="true" />
                      <span>Call {RESTAURANT_CONFIG.primaryPhoneDisplay}</span>
                    </span>
                    <span className="text-xs text-[#570B13]">Primary</span>
                  </a>

                  <a
                    href={RESTAURANT_CONFIG.secondaryPhoneHref}
                    className="min-h-[44px] inline-flex items-center justify-between px-4 py-2.5 rounded-lg bg-[#FFF5E5] border border-[#320609]/15 text-[#320609] font-semibold text-sm hover:border-[#570B13] hover:bg-[#F7F0E7] transition-colors tabular-nums"
                  >
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#570B13]" aria-hidden="true" />
                      <span>Call {RESTAURANT_CONFIG.secondaryPhoneDisplay}</span>
                    </span>
                    <span className="text-xs text-[#5E282D]">Alternative</span>
                  </a>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-[#570B13]">
                    Social &amp; Updates
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2.5">
                    {RESTAURANT_CONFIG.socialLinks.map((social) => (
                      <a
                        key={social.id}
                        href={
                          social.href === '#contact'
                            ? buildWhatsAppUrl(
                                'Hello The Food Studio! Please share your Instagram profile link.'
                              )
                            : social.href
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[40px] inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[#320609]/15 text-sm font-medium text-[#320609] hover:border-[#570B13] hover:bg-[#FFF5E5] transition-colors"
                      >
                        <Instagram className="w-4 h-4 text-[#570B13]" aria-hidden="true" />
                        <span>{social.label}</span>
                        <span className="text-xs text-[#5E282D]">
                          ({social.handle})
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#320609]/10 flex flex-col sm:flex-row gap-3">
              <a
                href={buildGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-h-[46px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#570B13] text-[#FFF5E5] text-sm font-bold hover:bg-[#320609] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#F5BE36]" />
                <span>WhatsApp ({RESTAURANT_CONFIG.primaryPhoneDisplay})</span>
              </a>

              <a
                href={secondaryWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-h-[46px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-[#570B13]/30 text-[#570B13] text-sm font-bold hover:bg-[#FFF5E5] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp ({RESTAURANT_CONFIG.secondaryPhoneDisplay})</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl bg-[#320609] text-[#FFF5E5] p-6 sm:p-8 border border-[#F5BE36]/30 flex flex-col justify-between shadow-sm">
            <div>
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#570B13] text-[#F5BE36]">
                <Navigation className="w-6 h-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-serif text-2xl font-bold text-white">
                Find Us in {RESTAURANT_CONFIG.location}
              </h3>
              <p className="mt-2.5 text-sm sm:text-base text-[#FFF5E5]/80 leading-relaxed">
                Open Google Maps for directions to {RESTAURANT_CONFIG.location}{' '}
                or message us on WhatsApp and we&apos;ll send you our live
                location pin right away.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <a
                href={RESTAURANT_CONFIG.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-[#F5BE36] text-[#320609] text-sm sm:text-base font-bold hover:bg-[#ffd05b] transition-colors"
              >
                <Navigation className="w-4 h-4" aria-hidden="true" />
                <span>Get Directions</span>
              </a>

              <a
                href={buildWhatsAppUrl(
                  'Hello The Food Studio! Please send me your exact Google Maps location pin in Falaj, Oman.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-[#FFF5E5]/25 text-[#FFF5E5] text-sm font-semibold hover:bg-[#570B13] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#F5BE36]" />
                <span>Request Location Pin on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
