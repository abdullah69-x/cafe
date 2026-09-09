import { MenuItem, Testimonial, DailySpecial } from './types';

export const DAILY_SPECIALS: DailySpecial[] = [
  {
    id: 's1',
    title: 'Single Origin Pour-Over: Ethiopia Guji Uraga',
    badge: "Roaster's Choice",
    price: '$5.75',
    description: 'Light roast washed heirloom varietal with sparkling notes of white peach, jasmine blossom, and bergamot.',
    baristaNote: 'Best enjoyed black to taste the subtle floral finish.'
  },
  {
    id: 's2',
    title: 'Warm Cardamom & Pistachio Morning Bun',
    badge: 'Baked Fresh 6:30 AM',
    price: '$4.85',
    description: 'Laminated croissant pastry rolled with cracked green cardamom sugar and dusted with crushed Sicilian pistachios.',
    baristaNote: 'Only 36 baked daily — pairs magically with an oat cortado.'
  },
  {
    id: 's3',
    title: 'Spiced Fig & Whipped Ricotta Toast',
    badge: 'Seasonal Feature',
    price: '$11.00',
    description: 'House-whipped lemon ricotta on thick country levain, Mission figs, thyme-infused hot honey, and sea salt flakes.',
    baristaNote: 'Made with sourdough from our neighbor bakery downtown.'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // Drinks / Coffee
  {
    id: 'd1',
    name: 'Honey Lavender Cortado',
    description: 'Equal parts double shot espresso and steamed milk, sweetened with local wildflower honey and dried French lavender buds.',
    price: 5.25,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
    popular: true,
    tastingNotes: 'Wildflower honey, soft floral lavender, rich espresso',
    origin: 'House Blend (Guatemala & Colombia)'
  },
  {
    id: 'd2',
    name: 'Ceremonial Uji Matcha Latte',
    description: 'First-harvest stone ground Japanese green tea hand-whisked with bamboo chasen, served over oat or whole milk.',
    price: 6.50,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
    popular: true,
    dietary: ['Vegan', 'Gluten-Free'],
    tastingNotes: 'Sweet umami, vibrant green, creamy finish',
    origin: 'Kyoto, Japan'
  },
  {
    id: 'd3',
    name: 'Single Origin Batch Filter',
    description: 'Moccamaster brewed fresh every 30 minutes. Clean, balanced, and vibrant single-origin lot.',
    price: 4.25,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    dietary: ['Vegan', 'Gluten-Free'],
    tastingNotes: 'Milk chocolate, red apple, sweet cane sugar',
    origin: 'Huila, Colombia'
  },
  {
    id: 'd4',
    name: 'Slow-Drip Nitro Cold Brew',
    description: '18-hour cold steeped coarse beans charged with pure nitrogen for a cascading Guinness-like velvety micro-foam.',
    price: 5.50,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
    dietary: ['Vegan', 'Gluten-Free'],
    tastingNotes: 'Dark cocoa nibs, toasted hazelnut, smooth body'
  },

  // Breakfast
  {
    id: 'b1',
    name: 'Heritage Avocado Sourdough',
    description: 'Hass avocado mash, heirloom cherry tomatoes, sheep milk feta, lemon zest, toasted dukkah seeds, and pasture egg.',
    price: 12.00,
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    popular: true,
    dietary: ['Vegetarian'],
    tastingNotes: 'Creamy avocado, crunchy seeded sourdough crust, zesty lemon'
  },
  {
    id: 'b2',
    name: 'Wild Blueberry & Spelt Granola Bowl',
    description: 'Greek sheep yogurt or coconut chia pudding topped with warm compote, toasted pecans, and raw honey drizzle.',
    price: 10.50,
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80',
    dietary: ['Vegetarian', 'Gluten-Free'],
    tastingNotes: 'Tangy yogurt, sweet wild berries, earthy grains'
  },
  {
    id: 'b3',
    name: 'Truffled Egg Brioche Bun',
    description: 'Soft scrambled pasture eggs with chives, smoked aged gruyère cheese, black truffle butter on a warm toasted brioche.',
    price: 10.75,
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    popular: true,
    dietary: ['Vegetarian'],
    tastingNotes: 'Rich butter, savory truffle, velvety egg'
  },

  // Lunch
  {
    id: 'l1',
    name: 'Focaccia Chicken Pesto Melt',
    description: 'Herb roasted chicken breast, Genovese basil pesto, fior di latte mozzarella, and sun-ripened tomatoes on rosemary focaccia.',
    price: 13.75,
    category: 'lunch',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    popular: true,
    tastingNotes: 'Fragrant basil, melted cheese, crisp crust'
  },
  {
    id: 'l2',
    name: 'Roasted Squash & Farro Grain Bowl',
    description: 'Tuscan kale, maple roasted butternut squash, warm farro, pomegranate jewels, and toasted walnuts with green goddess dressing.',
    price: 12.50,
    category: 'lunch',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    dietary: ['Vegan', 'Gluten-Free'],
    tastingNotes: 'Nutty grains, sweet roasted squash, zesty herbal greens'
  },
  {
    id: 'l3',
    name: 'Charred Tomato & Basil Soup',
    description: 'Slow-simmered Roma tomatoes, sweet garlic, extra virgin olive oil, served with a crunchy grilled sourdough soldier.',
    price: 8.50,
    category: 'lunch',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    dietary: ['Vegetarian', 'Gluten-Free'],
    tastingNotes: 'Smoky sweet tomato, fresh basil, velvety comfort'
  },

  // Desserts & Pastries
  {
    id: 'ds1',
    name: 'Dark Chocolate Sea Salt Sourdough Cookie',
    description: 'Brown butter dough made with our sourdough starter discard, loaded with 72% Valrhona dark chocolate chunks and Maldon salt.',
    price: 4.25,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80',
    popular: true,
    dietary: ['Vegetarian'],
    tastingNotes: 'Gooey dark cocoa, nutty caramelized butter, flaky sea salt'
  },
  {
    id: 'ds2',
    name: 'Almond Frangipane Twice-Baked Croissant',
    description: 'Yesterday’s flaky butter croissants steeped in orange blossom syrup, stuffed with almond marzipan cream and toasted flaked almonds.',
    price: 5.50,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    dietary: ['Vegetarian'],
    tastingNotes: 'Crisp layered pastry, sweet marzipan, toasted almond'
  },
  {
    id: 'ds3',
    name: 'Burnt Basque Olive Oil Cheesecake',
    description: 'Caramelized crust with a molten, silky center made with Spanish goat cream and cold-pressed extra virgin olive oil.',
    price: 6.75,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',
    dietary: ['Vegetarian'],
    tastingNotes: 'Smoky caramel exterior, rich velvety cream, hint of floral oil'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Maya Lin',
    role: 'Ceramicist & Neighborhood Regular',
    comment: 'The Honey Lavender Cortado tastes like an actual memory. There is no fake pretense here—just genuinely kind people who care about good coffee and good conversation.',
    favoriteOrder: 'Honey Lavender Cortado & Basque Cheesecake',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 't2',
    name: 'Julian Vance',
    role: 'Freelance Editor & Table 4 Occupant',
    comment: 'I finished editing two whole manuscripts sitting at the window bench. Generous natural light, quiet acoustic music, and the smell of cardamom baking at 7 AM.',
    favoriteOrder: 'Batch Filter & Heritage Sourdough',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 't3',
    name: 'Priya Mukherjee',
    role: 'Landscape Designer',
    comment: 'Their patio plants are thriving, the oat matcha is the real deal from Kyoto, and they remember your name by your second visit. A real community gem.',
    favoriteOrder: 'Iced Uji Matcha & Cardamom Morning Bun',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80'
  }
];

export const CAFE_INFO = {
  name: 'Bean & Leaf Café',
  tagline: 'Artisanal roasts, slow mornings, and warm neighborhood hospitality',
  address: '742 Evergreen Terrace, Blossom District, CA 90210',
  phone: '+1 (555) 382-9102',
  email: 'hello@beanandleafcafe.com',
  hours: {
    weekdays: '7:00 AM – 7:00 PM',
    weekends: '8:00 AM – 6:00 PM',
    kitchenCloses: '3:00 PM (Coffee & Bakery all day)'
  },
  story: 'Bean & Leaf started with a hand-cranked roaster, a sack of green beans from Antioquia, and a desire to make a coffee shop feel like an old friend’s living room. No cold minimalist concrete, no rushed screens—just hand-thrown ceramic mugs, the gentle hiss of the espresso steam wand, and the scent of freshly crushed cardamom.'
};
