export interface CustomerReview {
  id: string;
  customerName: string;
  context: string;
  comment: string;
  dateLabel?: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  handle: string;
}

export const RESTAURANT_CONFIG = {
  name: 'The Food Studio',
  tagline: 'Eat Good • Feel Good',
  secondaryTagline: 'Delicious Food... Always!',
  location: 'Falaj, Oman',

  /**
   * Central WhatsApp ordering configuration.
   * Update whatsappPhone (international format without +) to change all WhatsApp links site-wide.
   */
  whatsappPhone: '96879165087',
  primaryPhoneDisplay: '79165087',
  primaryPhoneHref: 'tel:+96879165087',
  secondaryPhoneDisplay: '79165017',
  secondaryPhoneHref: 'tel:+96879165017',

  /**
   * Editable opening hours — update when confirmed by the restaurant.
   */
  openingHours: [
    {
      days: 'Daily (Lunch & Dinner)',
      hours: 'Hours available upon confirmation — message us on WhatsApp',
    },
  ],

  /**
   * Configurable Google Maps directions URL for Falaj, Oman.
   * Replace with exact pin coordinates or place link when confirmed.
   */
  directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Falaj,+Oman',

  /**
   * Editable social links — replace href values with live restaurant profiles.
   */
  socialLinks: [
    {
      id: 'instagram',
      label: 'Instagram',
      href: '#contact',
      handle: '@thefoodstudio.om',
    },
  ] as SocialLink[],

  /**
   * Genuine customer reviews — keep empty until verified customer feedback is supplied.
   */
  reviews: [] as CustomerReview[],
} as const;

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${RESTAURANT_CONFIG.whatsappPhone}?text=${encoded}`;
}

export function buildGeneralWhatsAppUrl(): string {
  return buildWhatsAppUrl(
    'Hello The Food Studio! I would like to know more about your menu and available offers.'
  );
}

export function buildComboWhatsAppUrl(comboTitle: string): string {
  return buildWhatsAppUrl(
    `Hello The Food Studio! I would like to order ${comboTitle}. Please share the ordering details.`
  );
}

export function buildDishWhatsAppUrl(dishName: string): string {
  return buildWhatsAppUrl(
    `Hello The Food Studio! I would like to order ${dishName}. Please share availability and ordering details.`
  );
}
