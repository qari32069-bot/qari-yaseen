# Bao Di Sajji — World Unique Sajji (Kamoke)

Official responsive restaurant website for **Bao Di Sajji**, located on Main GT Road, Kamoke, Pakistan. Crafted with a premium black-and-gold visual identity, high-resolution food photography, and direct phone, WhatsApp, and TikTok integrations.

---

## 1. Restaurant Information

- **Restaurant Name:** Bao Di Sajji
- **Brand Tagline:** World Unique Sajji
- **Location:** Opposite HFC, near New Pizza Bank, Main GT Road, Kamoke, Pakistan
- **Phone Number:** 03090111218 (Click-to-call: `tel:03090111218`)
- **Official TikTok:** Bao Di Sajji (Kamoke)
- **WhatsApp:** `+92 309 0111218`
- **Rating Theme:** 5-Star Sajji Experience

---

## 2. Central Configuration File (`src/config/restaurant.ts`)

All restaurant contact info, addresses, map URLs, social links, and the 8 unique flavour items are centralized in `src/config/restaurant.ts`. You can change any detail in one single place:

```typescript
export const RESTAURANT_CONFIG = {
  name: 'Bao Di Sajji',
  tagline: 'World Unique Sajji',
  
  // Update location text and Google Maps query
  location: {
    address: 'Opposite HFC, near New Pizza Bank, Main GT Road, Kamoke, Pakistan',
    mapSearchUrl: 'https://www.google.com/maps/search/?api=1&query=...',
  },

  // Update phone numbers
  contact: {
    phoneDisplay: '0309 0111218',
    phoneCall: '03090111218',
    whatsappNumber: '923090111218',
    whatsappDefaultMessage: 'Assalam-o-Alaikum Bao Di Sajji! I would like to ask about your sajji menu.',
  },

  // Update TikTok link
  social: {
    tiktokName: 'Bao Di Sajji (Kamoke)',
    tiktokUrl: 'https://www.tiktok.com/search?q=Bao%20Di%20Sajji%20Kamoke',
  },

  // Custom Logo Override: Set to an image URL or keep null to use the royal gold vector emblem
  logoUrl: null,

  // 8 Unique Flavours (update names, descriptions, or prices)
  menu: [
    {
      id: 'masala-sajji',
      name: 'Masala Sajji',
      price: null, // Set to a number (e.g. 1400) to show prices, or keep null to hide
      ...
    },
    ...
  ]
};
```

---

## 3. How to Add or Replace Restaurant Photos & Logo

### Adding a Custom Logo:
1. Place your transparent PNG or SVG logo inside `/src/assets/logo.png`.
2. In `src/config/restaurant.ts`, set:
   ```typescript
   logoUrl: '/src/assets/logo.png',
   ```
3. The navbar, hero, modal, and footer will immediately update to your uploaded logo.

### Adding Actual Food Photos:
1. Place your new photos in `src/assets/images/` (e.g. `masala_sajji_real.jpg`).
2. In `src/config/restaurant.ts`, update the `image` path for that dish in `menu` or `gallery`:
   ```typescript
   image: '/src/assets/images/masala_sajji_real.jpg',
   isPresentationImagery: false, // Turn off presentation badge once real photo is used
   ```

---

## 4. Installation & Local Development

Run the following commands in terminal:

```bash
# 1. Install dependencies
npm install

# 2. Run unit tests
npm test # or npx tsx --test src/config/restaurant.test.ts

# 3. Start development server
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## 5. Production Build & Deployment

To compile for production:

```bash
npm run build
```

This creates an optimized, static production bundle in `dist/`. You can deploy this to Cloud Run, Vercel, Netlify, or any standard web host.

---

## 6. Tested Features Checklist

- [x] **Top Navigation Bar:** Sticky header with logo, 3-zone contract, clean typography links, and click-to-call button.
- [x] **Mobile Drawer:** Accessible responsive hamburger menu with phone and WhatsApp buttons ($\ge 44\text{px}$ touch targets).
- [x] **Hero Section:** “BAO DI SAJJI — WORLD UNIQUE SAJJI”, supporting text, and 3 working action buttons (Explore Flavours, Call Now, Get Directions).
- [x] **8 Unique Flavours Grid:** Masala Sajji, Black Pepper Sajji, Karemi Sajji, Cheezy Sajji, Makne Sajji, Pare Pare Sajji, Malai Sajji, White Pepper Sajji.
- [x] **Price Transparency:** Optional price field remains hidden until actual rates are configured; no fabricated prices.
- [x] **Presentation Disclosures:** Illustrative food photos labeled with subtle "Presentation Imagery" badges.
- [x] **Interactive Flavour Modal:** Full details view with keyboard navigation (Escape key), and direct order triggers.
- [x] **About Section:** "The Taste of World Unique Sajji", highlighting Main GT Road Kamoke access and 8 flavours.
- [x] **5-Star Brand Experience:** Quality positioning section communicating roasting standards without fake ratings.
- [x] **Food Gallery & Lightbox:** 4 high-resolution photo showcases with full-screen zoom, keyboard arrows, and caption support.
- [x] **Location & Directions:** Exact address on Main GT Road, Google Maps embed, one-click "Get Directions", and clipboard address copy.
- [x] **Contact & TikTok:** Clickable `tel:03090111218`, direct TikTok follow button for `Bao Di Sajji (Kamoke)`, and prefilled WhatsApp message composer.
- [x] **Mobile Sticky Cap:** Fixed floating mobile bar + top bar complies strictly with the $\le 15\%$ viewport cap.
- [x] **SEO & Schema.org:** Restaurant JSON-LD structured data with Pakistani cuisine tags and Kamoke postal address.
