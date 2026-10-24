/**
 * Bao Di Sajji - Central Restaurant Configuration
 * 
 * Edit this file to update the phone number, address, social media links,
 * pricing, and menu items without modifying component logic.
 */

export interface MenuItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number | null; // Set to a number (e.g., 1400) when actual prices are announced, or null to hide
  badge?: string;
  category: 'Traditional' | 'Creamy & Rich' | 'Zesty & Spicy';
  spiceLevel: 'Mild' | 'Medium' | 'Signature Spiced' | 'Rich & Mild';
  image: string;
  isPresentationImagery: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  image: string;
  tag: string;
  isPresentationImagery: boolean;
}

export const RESTAURANT_CONFIG = {
  name: 'Bao Di Sajji',
  tagline: 'World Unique Sajji',
  urduTagline: 'باؤ دی سجی — ورلڈ یونیک سجی',
  ratingTheme: '5-Star Sajji Experience',
  
  // Location Details
  location: {
    address: 'Opposite HFC, near New Pizza Bank, Main GT Road, Kamoke, Pakistan',
    landmark: 'Opposite HFC, near New Pizza Bank',
    street: 'Main GT Road',
    city: 'Kamoke',
    region: 'Punjab',
    country: 'Pakistan',
    mapSearchUrl: 'https://www.google.com/maps/search/?api=1&query=Bao+Di+Sajji+Opposite+HFC+Main+GT+Road+Kamoke+Pakistan',
    embedMapUrl: 'https://maps.google.com/maps?q=Main%20GT%20Road%20Kamoke%20Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed',
  },

  // Contact Details
  contact: {
    phoneDisplay: '0309 0111218',
    phoneCall: '03090111218',
    phoneInternational: '+923090111218',
    whatsappNumber: '923090111218',
    whatsappDefaultMessage: 'Assalam-o-Alaikum Bao Di Sajji! I would like to ask about your sajji menu.',
  },

  // Social Links
  social: {
    tiktokName: 'Bao Di Sajji (Kamoke)',
    tiktokUrl: 'https://www.tiktok.com/search?q=Bao%20Di%20Sajji%20Kamoke', // Editable profile/search URL
  },

  // Optional custom logo image URL. If null or empty, the built-in gold vector emblem is used.
  logoUrl: null as string | null,

  // Eight Unique Sajji Flavours (Exact names as requested)
  menu: [
    {
      id: 'masala-sajji',
      name: 'Masala Sajji',
      tagline: 'Signature Heritage Spices',
      description: 'Slow-roasted chicken infused with our signature aromatic ground masala blend, toasted spices, and a crisp, roasted golden skin.',
      price: null, // Hidden until actual price is configured
      badge: 'Bestseller',
      category: 'Traditional',
      spiceLevel: 'Signature Spiced',
      image: '/src/assets/images/sajji_masala_closeup_1792828683845.jpg',
      isPresentationImagery: true,
    },
    {
      id: 'black-pepper-sajji',
      name: 'Black Pepper Sajji',
      tagline: 'Robust & Peppery Crunch',
      description: 'Coarsely crushed aromatic black peppercorns paired with roasted hints of garlic and lime for a bold, savory, warming bite.',
      price: null,
      badge: 'Popular',
      category: 'Traditional',
      spiceLevel: 'Medium',
      image: '/src/assets/images/hero_sajji_roast_1792828683064.jpg',
      isPresentationImagery: true,
    },
    {
      id: 'karemi-sajji',
      name: 'Karemi Sajji',
      tagline: 'Silky Cream Infusion',
      description: 'A luxurious creamy marinade that seeps deep into tender cuts of roasted chicken, giving every mouthful a delicate, melt-in-the-mouth texture.',
      price: null,
      category: 'Creamy & Rich',
      spiceLevel: 'Mild',
      image: '/src/assets/images/sajji_platter_presentation_1792828682816.jpg',
      isPresentationImagery: true,
    },
    {
      id: 'cheezy-sajji',
      name: 'Cheezy Sajji',
      tagline: 'Rich Molten Indulgence',
      description: 'Freshly roasted sajji chicken crowned with rich melted cheese and savoury seasonings for an irresistible modern Pakistani feast.',
      price: null,
      badge: 'Specialty',
      category: 'Creamy & Rich',
      spiceLevel: 'Rich & Mild',
      image: '/src/assets/images/sajji_platter_presentation_1792828682816.jpg',
      isPresentationImagery: true,
    },
    {
      id: 'makne-sajji',
      name: 'Makne Sajji',
      tagline: 'Golden Buttery Glaze',
      description: 'A traditional makhni touch, glazed with pure golden butter and mild roasted seasonings for unmatched succulence and aroma.',
      price: null,
      category: 'Creamy & Rich',
      spiceLevel: 'Mild',
      image: '/src/assets/images/hero_sajji_roast_1792828683064.jpg',
      isPresentationImagery: true,
    },
    {
      id: 'pare-pare-sajji',
      name: 'Pare Pare Sajji',
      tagline: 'Zesty Tang & Fiery Kick',
      description: 'A vibrant peri-peri inspired marinade featuring crushed bird-eye chillies, zesty citrus notes, and garlic-infused fire.',
      price: null,
      badge: 'Spicy',
      category: 'Zesty & Spicy',
      spiceLevel: 'Signature Spiced',
      image: '/src/assets/images/sajji_masala_closeup_1792828683845.jpg',
      isPresentationImagery: true,
    },
    {
      id: 'malai-sajji',
      name: 'Malai Sajji',
      tagline: 'Velvety & Tender',
      description: 'Delicately steeped in fresh dairy cream, cardamom essence, and white spices, roasted gently to preserve maximum natural tenderness.',
      price: null,
      category: 'Creamy & Rich',
      spiceLevel: 'Mild',
      image: '/src/assets/images/sajji_platter_presentation_1792828682816.jpg',
      isPresentationImagery: true,
    },
    {
      id: 'white-pepper-sajji',
      name: 'White Pepper Sajji',
      tagline: 'Subtle Heat & Sophisticated Aroma',
      description: 'Refined white pepper seasoning combined with mild herb infusions, offering a clean, distinct warmth that highlights the natural roasted meat.',
      price: null,
      category: 'Traditional',
      spiceLevel: 'Medium',
      image: '/src/assets/images/sajji_skewers_fire_1792828684351.jpg',
      isPresentationImagery: true,
    },
  ] as MenuItem[],

  // Gallery Showcase
  gallery: [
    {
      id: 'gal-1',
      title: 'Traditional Wood-Fire Sajji Rotisserie',
      caption: 'Whole marinated chickens gently roasted over open firewood and charcoal embers.',
      image: '/src/assets/images/hero_sajji_roast_1792828683064.jpg',
      tag: 'Craft & Roast',
      isPresentationImagery: true,
    },
    {
      id: 'gal-2',
      title: 'Full Sajji Dawaat Platter',
      caption: 'Sliced succulent roast chicken served with aromatic pulao, clay-pot mint raita, and hot naan.',
      image: '/src/assets/images/sajji_platter_presentation_1792828682816.jpg',
      tag: 'Platters',
      isPresentationImagery: true,
    },
    {
      id: 'gal-3',
      title: 'Signature Masala Crust & Lemon Drizzle',
      caption: 'Golden roasted chicken leg with fresh cilantro and glistening spice crunch.',
      image: '/src/assets/images/sajji_masala_closeup_1792828683845.jpg',
      tag: 'Spices',
      isPresentationImagery: true,
    },
    {
      id: 'gal-4',
      title: 'Heritage Skewer Ring Roasting',
      caption: 'The authentic time-honoured technique of skewering chicken around a central woodfire hearth.',
      image: '/src/assets/images/sajji_skewers_fire_1792828684351.jpg',
      tag: 'Heritage',
      isPresentationImagery: true,
    },
  ] as GalleryItem[],
};

/**
 * Builds a valid WhatsApp click-to-chat URL with prefilled text
 */
export function buildWhatsAppUrl(phone: string, text?: string): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(text || RESTAURANT_CONFIG.contact.whatsappDefaultMessage);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

/**
 * Builds a direct telephone link
 */
export function buildTelUrl(phone: string): string {
  const cleanPhone = phone.replace(/[^0-9+]/g, '');
  return `tel:${cleanPhone}`;
}
