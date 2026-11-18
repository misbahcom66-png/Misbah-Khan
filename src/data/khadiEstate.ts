export interface EstateSpace {
  id: string;
  name: string;
  seatedCapacity: number;
  cocktailCapacity: number;
  dimensions: string;
  ceilingNote: string;
  image: string;
  imageAlt: string;
  summary: string;
  architecturalDetails: string[];
}

export interface WeddingPackage {
  id: string;
  name: string;
  seasonNote: string;
  startingRate: string;
  guestRange: string;
  inclusions: string[];
}

export interface CoupleStory {
  couple: string;
  eventDate: string;
  guestCount: number;
  spaceUsed: string;
  quote: string;
}

export const HERO_ESTATE_IMAGE =
  '/src/assets/images/venue_grand_estate_1794908538757.jpg';

export const TABLETOP_DETAIL_IMAGE =
  '/src/assets/images/venue_dining_detail_1794908541171.jpg';

export const ESTATE_SPACES: EstateSpace[] = [
  {
    id: 'great-vaulted-hall',
    name: 'The Great Vaulted Hall',
    seatedCapacity: 320,
    cocktailCapacity: 450,
    dimensions: '6,800 sq ft',
    ceilingNote: '34 ft vaulted ceiling',
    image: '/src/assets/images/venue_grand_estate_1794908538757.jpg',
    imageAlt:
      'The Great Vaulted Hall at Khadi with arched limestone windows, crystal chandeliers, and long ivory linen banquet tables',
    summary:
      'Carved honey limestone ribs rise thirty-four feet above honed stone floors, bathed in golden afternoon light through gothic-arched windows and evening candlelight from three heirloom chandeliers.',
    architecturalDetails: [
      'Three tiered crystal chandeliers on theatrical warm-dim circuits',
      'Private terrace doors opening directly onto the Fizagat riverside promenade',
      'Acoustically tuned limestone masonry for live ensembles and speeches',
    ],
  },
  {
    id: 'south-lawn-cloister',
    name: 'South Lawn & Cloister',
    seatedCapacity: 180,
    cocktailCapacity: 240,
    dimensions: '4,200 sq ft',
    ceilingNote: 'Open-air stone colonnade',
    image: '/src/assets/images/khadi_south_cloister_1794908843920.jpg',
    imageAlt:
      'South Lawn and carved stone cloister at Khadi arranged with wooden chairs and cypress trees for an outdoor ceremony',
    summary:
      'Framed by towering cypress trees and a shaded limestone colonnade, the South Lawn captures late-afternoon Swat Valley light for outdoor Nikah ceremonies, welcomes, and twilight receptions.',
    architecturalDetails: [
      'West-facing ceremony axis timed for golden hour mountain light in Fizagat',
      'Covered limestone loggia for shaded seating or weather shelter',
      'Concealed stone power conduits for acoustic amplification',
    ],
  },
  {
    id: 'drawing-parlor',
    name: 'The Drawing Parlor',
    seatedCapacity: 60,
    cocktailCapacity: 95,
    dimensions: '1,450 sq ft',
    ceilingNote: '16 ft coffered oak ceiling',
    image: '/src/assets/images/khadi_drawing_parlor_1794908844556.jpg',
    imageAlt:
      'The Drawing Parlor at Khadi with oak millwork, carved fireplace, tall garden windows, and champagne tables',
    summary:
      'An intimate oak-paneled salon anchored by a carved limestone hearth and tall garden doors, ideal for rehearsal dinners, champagne welcomes, or late-night digestifs.',
    architecturalDetails: [
      'Working wood-burning limestone fireplace with brass candelabra',
      'Direct private corridor to the North Bridal Dressing Suite',
      'French doors opening onto the rose and lavender parterre',
    ],
  },
];

export const WEDDING_PACKAGES: WeddingPackage[] = [
  {
    id: 'full-estate-weekend',
    name: 'Full Estate Weekend',
    seasonNote: 'Friday Evening – Sunday Noon',
    startingRate: '$18,500',
    guestRange: 'Up to 320 Seated',
    inclusions: [
      'Exclusive weekend access to all three reception halls and estate grounds',
      'Five-course plated dinner service with estate sommelier wine pairing',
      'Dedicated wedding concierge, valet arrival service, and evening stewards',
      'Heirloom brass candleholders, Belgian ivory linens, and stoneware settings',
    ],
  },
  {
    id: 'candlelight-grand-reception',
    name: 'Candlelight Grand Reception',
    seasonNote: 'Single-Day Exclusive Hire',
    startingRate: '$12,000',
    guestRange: '120 – 260 Guests',
    inclusions: [
      '10-hour private access to The Great Vaulted Hall and South Cloister',
      'Cocktail hour passed seasonal canapes and botanical aperitif bar',
      'Private bridal dressing suite with natural north-facing light',
      'Architectural uplighting package and discreet acoustic audio rigging',
    ],
  },
];

export const COUPLE_STORIES: CoupleStory[] = [
  {
    couple: 'Clara & Thomas Vance',
    eventDate: 'October 2025',
    guestCount: 240,
    spaceUsed: 'South Lawn & The Great Vaulted Hall',
    quote:
      'When our guests stepped through the arched stone doors at dusk, the candlelight against the limestone felt unforgettable. The Khadi hospitality team paced 240 plated dinners without a single pause.',
  },
  {
    couple: 'Nadia & Julian Mercer',
    eventDate: 'June 2025',
    guestCount: 175,
    spaceUsed: 'South Cloister & Drawing Parlor',
    quote:
      'Transitioning from vows beneath the cypress colonnade to champagne beside the fireplace in the Drawing Parlor gave our wedding an effortless rhythm our families still talk about.',
  },
];
