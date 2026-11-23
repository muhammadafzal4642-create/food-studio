export type MenuCategory =
  | 'Biryani Specials'
  | 'Indian Main Course'
  | 'Rice & Noodles'
  | 'Special Combos';

export interface LunchCombo {
  id: string;
  title: string;
  shortTitle: string;
  includedItems: string[];
  price: string;
  image: string;
  imageAlt: string;
  description: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  description: string;
  price?: string;
  image: string;
  imageAlt: string;
  featuredNote?: string;
}

export interface SignatureBiryani {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  categoryLabel: string;
  image: string;
  imageAlt: string;
  orderLabel: string;
}

export const IMAGES = {
  heroFeast: '/src/assets/images/hero_biryani_feast_1795419344367.jpg',
  hyderabadiChicken: '/src/assets/images/hyderabadi_chicken_biryani_1795419344434.jpg',
  hyderabadiMutton: '/src/assets/images/hyderabadi_mutton_biryani_1795419344876.jpg',
  thalasseryDum: '/src/assets/images/thalassery_dum_biryani_1795419343834.jpg',
  butterChickenCombo: '/src/assets/images/butter_chicken_combo_1795419344431.jpg',
  chilliChickenFriedRice: '/src/assets/images/chilli_chicken_fried_rice_1795419344138.jpg',
  alfahamBiryaniCombo: '/src/assets/images/alfaham_biryani_combo_1795419344213.jpg',
  chilliGarlicNoodles: '/src/assets/images/chilli_garlic_noodles_1795419343828.jpg',
} as const;

export const LUNCH_COMBOS: LunchCombo[] = [
  {
    id: 'combo-butter-chicken',
    title: 'Butter Chicken + Steam Rice + Soft Drink',
    shortTitle: 'Butter Chicken Combo',
    includedItems: ['Butter Chicken', 'Steam Rice', 'Soft Drink'],
    price: '1.9',
    image: IMAGES.butterChickenCombo,
    imageAlt: 'Butter Chicken served with steamed rice and a chilled soft drink',
    description:
      'Rich, comforting butter chicken paired with fluffy steamed rice and a refreshing soft drink.',
  },
  {
    id: 'combo-chilli-chicken',
    title: 'Chilli Chicken + Fried Rice + Soft Drink',
    shortTitle: 'Chilli Chicken Combo',
    includedItems: ['Chilli Chicken', 'Fried Rice', 'Soft Drink'],
    price: '1.9',
    image: IMAGES.chilliChickenFriedRice,
    imageAlt: 'Chilli Chicken served alongside aromatic fried rice and a soft drink',
    description:
      'Flavorful wok-tossed chilli chicken served alongside savory fried rice and a cold soft drink.',
  },
  {
    id: 'combo-alfaham-biryani',
    title: 'Alfaham Biryani + Soft Drink',
    shortTitle: 'Alfaham Biryani Combo',
    includedItems: ['Alfaham Biryani', 'Soft Drink'],
    price: '1.9',
    image: IMAGES.alfahamBiryaniCombo,
    imageAlt: 'Alfaham Biryani platter with grilled chicken, spiced rice, and a soft drink',
    description:
      'Fragrant spiced biryani topped with flavorful grilled Alfaham chicken and a chilled soft drink.',
  },
  {
    id: 'combo-noodles',
    title: 'Chilli Garlic Noodles + Honey Chilli Potato + Soft Drink',
    shortTitle: 'Chilli Garlic Noodles Combo',
    includedItems: ['Chilli Garlic Noodles', 'Honey Chilli Potato', 'Soft Drink'],
    price: '1.9',
    image: IMAGES.chilliGarlicNoodles,
    imageAlt: 'Chilli Garlic Noodles paired with Honey Chilli Potato and a chilled soft drink',
    description:
      'Bold chilli garlic noodles paired with crispy honey chilli potato and a refreshing soft drink.',
  },
];

export const MENU_CATEGORIES: MenuCategory[] = [
  'Biryani Specials',
  'Indian Main Course',
  'Rice & Noodles',
  'Special Combos',
];

/**
 * Editable restaurant menu items.
 * Add prices only when confirmed; leave price undefined to prompt WhatsApp confirmation.
 */
export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'hyderabadi-chicken-biryani',
    name: 'Hyderabadi Chicken Biryani',
    category: 'Biryani Specials',
    description:
      'Aromatic layered rice and tender spiced chicken garnished with crisp fried onions and fresh herbs.',
    image: IMAGES.hyderabadiChicken,
    imageAlt: 'Steaming Hyderabadi Chicken Biryani with raita',
    featuredNote: 'House Favorite',
  },
  {
    id: 'hyderabadi-mutton-biryani',
    name: 'Hyderabadi Mutton Biryani',
    category: 'Biryani Specials',
    description:
      'Succulent mutton layered with fragrant saffron-tinted rice and balanced warm spices.',
    image: IMAGES.hyderabadiMutton,
    imageAlt: 'Hyderabadi Mutton Biryani served in a copper pot',
    featuredNote: 'Rich & Savory',
  },
  {
    id: 'thalassery-dum-biryani',
    name: 'Thalassery Dum Biryani',
    category: 'Biryani Specials',
    description:
      'Fragrant Kerala-style dum biryani crafted with delicate spices, golden cashews, and caramelized onions.',
    image: IMAGES.thalasseryDum,
    imageAlt: 'Authentic Thalassery Dum Biryani with cashews and curry leaves',
    featuredNote: 'Regional Classic',
  },
  {
    id: 'butter-chicken',
    name: 'Butter Chicken',
    category: 'Indian Main Course',
    description:
      'Tender chicken simmered in a smooth, velvety tomato and butter gravy with subtle aromatic spices.',
    image: IMAGES.butterChickenCombo,
    imageAlt: 'Creamy Butter Chicken served in a traditional brass bowl',
  },
  {
    id: 'chilli-chicken',
    name: 'Chilli Chicken',
    category: 'Indian Main Course',
    description:
      'Savory crispy chicken tossed with bell peppers, onions, and a tangy, spiced Indo-Asian glaze.',
    image: IMAGES.chilliChickenFriedRice,
    imageAlt: 'Chilli Chicken with colorful bell peppers and scallions',
  },
  {
    id: 'fried-rice',
    name: 'Fried Rice',
    category: 'Rice & Noodles',
    description:
      'Light, aromatic wok-tossed rice cooked with crisp vegetables and balanced savory seasonings.',
    image: IMAGES.chilliChickenFriedRice,
    imageAlt: 'Steaming savory fried rice garnished with spring onions',
  },
  {
    id: 'chilli-garlic-noodles',
    name: 'Chilli Garlic Noodles',
    category: 'Rice & Noodles',
    description:
      'Tossed noodles infused with roasted garlic, red chilli warmth, and crisp garden greens.',
    image: IMAGES.chilliGarlicNoodles,
    imageAlt: 'Wok-tossed Chilli Garlic Noodles topped with roasted garlic and scallions',
  },
  {
    id: 'menu-combo-butter-chicken',
    name: 'Butter Chicken Combo',
    category: 'Special Combos',
    description: 'Butter Chicken + Steam Rice + Soft Drink.',
    price: '1.9',
    image: IMAGES.butterChickenCombo,
    imageAlt: 'Butter Chicken Combo with steamed rice and soft drink',
    featuredNote: 'Special Lunch Offer',
  },
  {
    id: 'menu-combo-chilli-chicken',
    name: 'Chilli Chicken Combo',
    category: 'Special Combos',
    description: 'Chilli Chicken + Fried Rice + Soft Drink.',
    price: '1.9',
    image: IMAGES.chilliChickenFriedRice,
    imageAlt: 'Chilli Chicken Combo with fried rice and soft drink',
    featuredNote: 'Special Lunch Offer',
  },
  {
    id: 'menu-combo-alfaham-biryani',
    name: 'Alfaham Biryani Combo',
    category: 'Special Combos',
    description: 'Alfaham Biryani + Soft Drink.',
    price: '1.9',
    image: IMAGES.alfahamBiryaniCombo,
    imageAlt: 'Alfaham Biryani Combo with soft drink',
    featuredNote: 'Special Lunch Offer',
  },
  {
    id: 'menu-combo-chilli-garlic-noodles',
    name: 'Chilli Garlic Noodles Combo',
    category: 'Special Combos',
    description: 'Chilli Garlic Noodles + Honey Chilli Potato + Soft Drink.',
    price: '1.9',
    image: IMAGES.chilliGarlicNoodles,
    imageAlt: 'Chilli Garlic Noodles Combo with Honey Chilli Potato and soft drink',
    featuredNote: 'Special Lunch Offer',
  },
];

export const SIGNATURE_BIRYANIS: SignatureBiryani[] = [
  {
    id: 'sig-hyderabadi-chicken',
    name: 'Hyderabadi Chicken Biryani',
    subtitle: 'Fragrant & Layered',
    description:
      'Long-grain rice and seasoned chicken brought together with caramelized onions, mint, and inviting warmth.',
    image: IMAGES.hyderabadiChicken,
    imageAlt: 'Hyderabadi Chicken Biryani garnished with fried onions and mint',
  },
  {
    id: 'sig-hyderabadi-mutton',
    name: 'Hyderabadi Mutton Biryani',
    subtitle: 'Hearty & Satisfying',
    description:
      'Tender cuts of mutton paired with deeply aromatic rice for a rich, memorable meal.',
    image: IMAGES.hyderabadiMutton,
    imageAlt: 'Hyderabadi Mutton Biryani in a traditional copper serving vessel',
  },
  {
    id: 'sig-thalassery-dum',
    name: 'Thalassery Dum Biryani',
    subtitle: 'Aromatic Coastal Classic',
    description:
      'Delicately spiced rice accented with roasted cashews, raisins, and curry leaves for a comforting finish.',
    image: IMAGES.thalasseryDum,
    imageAlt: 'Thalassery Dum Biryani with roasted cashews and curry leaves',
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Hyderabadi Chicken Biryani',
    categoryLabel: 'Biryani Specials',
    image: IMAGES.hyderabadiChicken,
    imageAlt: 'Hyderabadi chicken biryani served in a dark stoneware bowl',
    orderLabel: 'Hyderabadi Chicken Biryani',
  },
  {
    id: 'gal-2',
    title: 'Hyderabadi Mutton Biryani',
    categoryLabel: 'Biryani Specials',
    image: IMAGES.hyderabadiMutton,
    imageAlt: 'Hyderabadi mutton biryani served in an artisanal copper pot',
    orderLabel: 'Hyderabadi Mutton Biryani',
  },
  {
    id: 'gal-3',
    title: 'Thalassery Dum Biryani',
    categoryLabel: 'Biryani Specials',
    image: IMAGES.thalasseryDum,
    imageAlt: 'Thalassery dum biryani topped with cashews and curry leaves',
    orderLabel: 'Thalassery Dum Biryani',
  },
  {
    id: 'gal-4',
    title: 'Butter Chicken & Steam Rice Platter',
    categoryLabel: 'Indian Main Course & Lunch Combo',
    image: IMAGES.butterChickenCombo,
    imageAlt: 'Butter chicken in a brass bowl with steamed rice and chilled drink',
    orderLabel: 'Butter Chicken + Steam Rice + Soft Drink',
  },
  {
    id: 'gal-5',
    title: 'Chilli Chicken & Fried Rice',
    categoryLabel: 'Indo-Asian & Lunch Combo',
    image: IMAGES.chilliChickenFriedRice,
    imageAlt: 'Chilli chicken alongside steaming fried rice and soft drink',
    orderLabel: 'Chilli Chicken + Fried Rice + Soft Drink',
  },
  {
    id: 'gal-6',
    title: 'Alfaham Biryani Lunch Platter',
    categoryLabel: 'Lunch Combo Platter',
    image: IMAGES.alfahamBiryaniCombo,
    imageAlt: 'Alfaham grilled chicken over fragrant biryani rice with soft drink',
    orderLabel: 'Alfaham Biryani + Soft Drink',
  },
  {
    id: 'gal-7',
    title: 'Chilli Garlic Noodles & Honey Chilli Potato',
    categoryLabel: 'Rice & Noodles',
    image: IMAGES.chilliGarlicNoodles,
    imageAlt: 'Chilli garlic noodles alongside honey chilli potatoes and soft drink',
    orderLabel: 'Chilli Garlic Noodles + Honey Chilli Potato + Soft Drink',
  },
  {
    id: 'gal-8',
    title: 'The Food Studio Spread',
    categoryLabel: 'Indian & Asian Specialties',
    image: IMAGES.heroFeast,
    imageAlt: 'Full dining table spread of biryani, butter chicken, chilli chicken, and naan',
    orderLabel: 'your menu items',
  },
];
