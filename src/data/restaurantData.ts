import { MenuItem, SignatureDish, Testimonial, Award, GalleryItem, EventPackage } from '../types';

export const RESTAURANT_INFO = {
  name: "Maharaja's Table",
  subtitle: "Ultra Luxury Indian Dining",
  tagline: "Where Royalty Meets Flavor",
  established: 1998,
  founder: "Master Chef Vikram Singh",
  phone: "+91 11 2345 6789",
  conciergePhone: "+91 11 2345 6790",
  email: "reservations@maharajastable.com",
  eventsEmail: "royalevents@maharajastable.com",
  address: "15, Janpath Lane, Connaught Place, New Delhi 110001, India",
  hours: {
    lunch: "12:00 PM – 2:30 PM",
    dinner: "7:00 PM – 11:30 PM",
    days: "Monday through Sunday (Open Daily)",
    highTea: "3:30 PM – 5:30 PM (Weekends)"
  },
  dressCode: "Smart Regal / Formal (Jackets recommended for gentlemen, collared attire required)",
  valetParking: "Complimentary White-Glove Valet & Chauffeured Concierge Service"
};

export const MENU_ITEMS: MenuItem[] = [
  // Appetizers
  {
    id: 'app-1',
    category: 'appetizers',
    name: 'Tandoori Jumbo Prawns',
    hindiName: 'तन्दूरी झींगा',
    price: 1850,
    formattedPrice: '₹1,850',
    desc: 'Bay of Bengal tiger prawns infused with yellow mustard, Kashmiri chili paste, Greek hung curd, and roasted cumin, charred over live charcoal.',
    dietary: ['Gluten-Free', 'Halal', 'Chef Special'],
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop&q=80',
    spiceLevel: 2,
    originRegion: 'Coastal Bengal & Punjab',
    pairingWine: 'Domaine Leflaive Puligny-Montrachet (Chardonnay)',
    chefNote: 'Flash-cooked at 480°C in our bespoke clay tandoor for a smoky crust and succulent tender bite.',
    ingredients: ['Tiger Prawns', 'Kashmiri Saffron', 'Mustard Oil', 'Hung Yogurt', 'Kasuri Methi'],
    isSignature: true
  },
  {
    id: 'app-2',
    category: 'appetizers',
    name: 'Awadhi Galouti Kebab',
    hindiName: 'गलौटी कबाब',
    price: 1650,
    formattedPrice: '₹1,650',
    desc: 'The legendary Lucknowi royal court kebab. Minced tender young lamb blended with 32 hand-ground royal spices and smoked with cloves, melting effortlessly on a mini saffron sheermal.',
    dietary: ['Halal', 'Chef Special'],
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800&auto=format&fit=crop&q=80',
    spiceLevel: 2,
    originRegion: 'Lucknow, Uttar Pradesh',
    pairingWine: 'Château Margaux Premier Grand Cru (Bordeaux Blend)',
    chefNote: 'Originally perfected for the toothless Nawab Asad-ud-Daula in 1784; texture achieves pure velvety decadence.',
    ingredients: ['Lamb Mince', 'Potli Masala (32 spices)', 'Raw Papaya', 'Desi Ghee', 'Saffron Sheermal']
  },
  {
    id: 'app-3',
    category: 'appetizers',
    name: 'Royal Saffron Pani Puri Flight',
    hindiName: 'शाही पानी पूरी',
    price: 1200,
    formattedPrice: '₹1,200',
    desc: 'Artisanal crisp hollow spheres filled with spiced edamame, pomegranate pearls, and potato mousse, served with 4 bespoke infusions: Saffron Mint, Smoked Raw Mango, Spiced Kokum, and Tamarind Jaggery.',
    dietary: ['Vegetarian', 'Vegan'],
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80',
    spiceLevel: 2,
    originRegion: 'Banaras & Old Delhi',
    pairingWine: 'Veuve Clicquot La Grande Dame Champagne',
    chefNote: 'An elevated sensory exploration of Indian street luxury with molecular spheres of spiced waters.',
    ingredients: ['Crisp Puris', 'Edamame', 'Pomegranate', 'Himalayan Black Salt', 'Kashmiri Mint Elixir']
  },
  {
    id: 'app-4',
    category: 'appetizers',
    name: 'Truffled Paneer Shaslik',
    hindiName: 'ट्रफल पनीर टिक्का',
    price: 1450,
    formattedPrice: '₹1,450',
    desc: 'Farm-fresh organic cottage cheese cubes stuffed with sundried tomato and almond paste, coated in crushed Tellicherry black pepper and infused with Umbrian white truffle oil.',
    dietary: ['Vegetarian', 'Gluten-Free'],
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&auto=format&fit=crop&q=80',
    spiceLevel: 1,
    originRegion: 'Punjab & Italian Alps Fusion',
    pairingWine: 'Cloudy Bay Sauvignon Blanc, Marlborough',
    chefNote: 'Our paneer is made in-house twice daily from grass-fed A2 Gir cow milk.',
    ingredients: ['A2 Gir Cow Paneer', 'Italian White Truffle Oil', 'Tellicherry Pepper', 'Charred Bell Peppers']
  },

  // Main Course
  {
    id: 'main-1',
    category: 'main',
    name: 'Mughlai Butter Chicken 1947',
    hindiName: 'शाही मुर्ग मक्खनी',
    price: 2400,
    formattedPrice: '₹2,400',
    desc: 'Charcoal-smoked tandoori chicken simmered in an heirloom 18-hour reduction of vine-ripened San Marzano and Delhi plum tomatoes, cultured white butter, cashew cream, and dried fenugreek.',
    dietary: ['Gluten-Free', 'Halal', 'Chef Special'],
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&auto=format&fit=crop&q=80',
    spiceLevel: 2,
    originRegion: 'Daryaganj, Old Delhi',
    pairingWine: 'Penfolds Grange Shiraz, South Australia',
    chefNote: 'Our signature gravy uses no refined sugar — sweetened naturally with soaked makhana paste and organic honeycomb.',
    ingredients: ['Tandoori Chicken', 'Cultured White Butter', 'Kasoori Methi', 'Plum Tomatoes', 'Cashew Cream'],
    isSignature: true
  },
  {
    id: 'main-2',
    category: 'main',
    name: 'Kashmiri Nalli Rogan Josh',
    hindiName: 'कश्मीरी नल्ली रोगन जोश',
    price: 2650,
    formattedPrice: '₹2,650',
    desc: 'Prime New Zealand lamb shanks braised slow-and-low for 10 hours in an aromatic broth infused with Kashmiri Ratan Jot (alkanet root), dried ginger powder, green cardamom, and fennel seeds.',
    dietary: ['Gluten-Free', 'Halal'],
    image: 'https://images.unsplash.com/photo-1545247181-516773cae7be?w=800&auto=format&fit=crop&q=80',
    spiceLevel: 3,
    originRegion: 'Srinagar Valley, Kashmir',
    pairingWine: 'Barolo DOCG, Pio Cesare (Nebbiolo)',
    chefNote: 'The bone marrow melts into the sauce, creating an incomparable silkiness without onion or garlic.',
    ingredients: ['Lamb Shank', 'Ratan Jot Root', 'Saunf (Fennel)', 'Sonth (Dry Ginger)', 'Kashmiri Mirch']
  },
  {
    id: 'main-3',
    category: 'main',
    name: 'Smoked Dal Maharaja (36 Hours)',
    hindiName: 'शाही दाल महाराजा',
    price: 1550,
    formattedPrice: '₹1,550',
    desc: 'Whole black lentils, kidney beans, and yellow split grams slow-simmered over glowing charcoal embers for 36 continuous hours with churned cow ghee, hand-crushed tomatoes, and fresh clotted cream.',
    dietary: ['Vegetarian', 'Gluten-Free', 'Chef Special'],
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80',
    spiceLevel: 1,
    originRegion: 'Royal Kitchens of Patiala',
    pairingWine: 'Brunello di Montalcino DOCG, Biondi-Santi',
    chefNote: 'Gently tempered with aromatic dhungar (hickory wood and ghee smoke) right at your table.',
    ingredients: ['Urad Black Dal', 'A2 Desi Cow Ghee', 'Fresh Cream', 'Plum Tomatoes', 'Smoked Cloves']
  },
  {
    id: 'main-4',
    category: 'main',
    name: 'Malabar Coastal Sea Bass Curry',
    hindiName: 'मालाबार मछली करी',
    price: 2300,
    formattedPrice: '₹2,300',
    desc: 'Pan-seared Chilean sea bass bathed in a silky, golden coconut milk stew with crushed fresh turmeric, tamarind pulp, toasted curry leaves, and tempered mustard seeds.',
    dietary: ['Gluten-Free'],
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&auto=format&fit=crop&q=80',
    spiceLevel: 2,
    originRegion: 'Malabar Coast, Kerala',
    pairingWine: 'Meursault Premier Cru, Domaine des Comtes Lafon',
    chefNote: 'Finished with a drizzle of virgin cold-pressed coconut oil extracted from freshly harvested green coconuts.',
    ingredients: ['Chilean Sea Bass', 'Fresh Coconut Milk', 'Kodampuli Tamarind', 'Curry Leaves', 'Mustard Seeds']
  },
  {
    id: 'main-5',
    category: 'main',
    name: 'Paneer Lababdar Kesar Mahal',
    hindiName: 'पनीर लबाबदार केसर महल',
    price: 1950,
    formattedPrice: '₹1,950',
    desc: 'Charred batons of artisan paneer layered in a velvety onion-tomato velouté with saffron strands, crushed melon seeds, and royal mace spice.',
    dietary: ['Vegetarian', 'Gluten-Free'],
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&auto=format&fit=crop&q=80',
    spiceLevel: 2,
    originRegion: 'Rampur, Uttar Pradesh',
    pairingWine: 'Chablis Grand Cru, William Fèvre',
    chefNote: 'Garnished with 24-karat edible gold leaf (varq) and toasted pine nuts.',
    ingredients: ['Fresh Malai Paneer', 'Kashmir Kesar (Saffron)', 'Melon Seed Paste', 'Mace & Nutmeg']
  },

  // Biryani
  {
    id: 'biryani-1',
    category: 'biryani',
    name: 'Nizami Dum Mutton Biryani',
    hindiName: 'निज़ामी दम बिरयानी',
    price: 2800,
    formattedPrice: '₹2,800',
    desc: 'Aged long-grain Dehradun Basmati rice sealed in a traditional clay handi with tender baby goat cuts, saffron strands, fresh mint, caramelised onions, and rose water, baked over low flame.',
    dietary: ['Halal', 'Chef Special'],
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80',
    spiceLevel: 3,
    originRegion: 'Hyderabad Deccan, Telangana',
    pairingWine: 'Châteauneuf-du-Pape, Château de Beaucastel',
    chefNote: 'Served with Burani Garlic Raita and Mirchi Ka Salan (curried Anaheim chili and peanut gravy).',
    ingredients: ['2-Year Aged Basmati Rice', 'Baby Goat Meat', 'Kashmiri Saffron', 'Barista Onions', 'Atta Dough Seal'],
    isSignature: true
  },
  {
    id: 'biryani-2',
    category: 'biryani',
    name: 'Subz Chilman Parda Biryani',
    hindiName: 'सब्ज़ चिलमन पर्दा बिरयानी',
    price: 1950,
    formattedPrice: '₹1,950',
    desc: 'Seasonal exotic vegetables, water chestnuts, morels (guchhi), and paneer layered with fragrant kewra-infused basmati rice, baked under a flaky puff pastry dome.',
    dietary: ['Vegetarian'],
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&auto=format&fit=crop&q=80',
    spiceLevel: 2,
    originRegion: 'Awadh, Uttar Pradesh',
    pairingWine: 'Riesling Grand Cru, Trimbach Clos Sainte Hune',
    chefNote: 'The pastry dome is sliced open table-side, releasing an intoxicating cloud of royal aromas.',
    ingredients: ['Himalayan Morels (Guchhi)', 'Basmati Rice', 'Kewra Water', 'Green Cardamom', 'Puff Crust']
  },

  // Tandoor & Grills
  {
    id: 'tandoor-1',
    category: 'tandoor',
    name: 'Grand Maharaja Tandoori Platter',
    hindiName: 'शाही तन्दूरी थाल',
    price: 3400,
    formattedPrice: '₹3,400',
    desc: 'An opulent feast of Murgh Malai Tikka, Bhatti Ka Jheenga, Lamb Boti Kebab, and Charred Lamb Chops marinated in raw papaya, roasted cumin, and black cardamom.',
    dietary: ['Halal', 'Chef Special'],
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=80',
    spiceLevel: 3,
    originRegion: 'North-West Frontier',
    pairingWine: 'Opus One, Napa Valley Red Blend',
    chefNote: 'Includes trio of signature chutneys: Raw Mango Mint, Smoked Walnut Anardana, and Sweet Date Tamarind.',
    ingredients: ['Tiger Prawns', 'Lamb Chops', 'Chicken Morsels', 'Yellow Mustard', 'Kasuri Methi']
  },
  {
    id: 'tandoor-2',
    category: 'tandoor',
    name: 'Kashmiri Morel (Guchhi) Kebabs',
    hindiName: 'कश्मीरी गुच्छी कबाब',
    price: 2200,
    formattedPrice: '₹2,200',
    desc: 'Rare wild Himalayan morels sourced from the pir panjal peaks, stuffed with herbed goat cheese, crushed pistachios, and saffron, delicately grilled in our tandoor.',
    dietary: ['Vegetarian', 'Gluten-Free'],
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80',
    spiceLevel: 1,
    originRegion: 'Pir Panjal Range, Kashmir',
    pairingWine: 'Louis Latour Corton-Charlemagne Grand Cru',
    chefNote: 'Guchhi are among the rarest mushrooms in the world, hand-harvested by local villagers after spring snow melts.',
    ingredients: ['Wild Himalayan Guchhi', 'Goat Cheese', 'Iranian Saffron', 'Pistachio Kernels']
  },

  // Breads
  {
    id: 'breads-1',
    category: 'breads',
    name: 'Black Truffle & Gruyère Naan',
    hindiName: 'ट्रफल नान',
    price: 850,
    formattedPrice: '₹850',
    desc: 'Hand-stretched sourdough naan stuffed with aged Swiss Gruyère, brushed with Italian black summer truffle butter and sea salt crystals.',
    dietary: ['Vegetarian'],
    image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=800&auto=format&fit=crop&q=80',
    spiceLevel: 1,
    originRegion: 'Modern Royal Fusion',
    pairingWine: 'Bollinger La Grande Année Champagne',
    chefNote: 'Baked in seconds at high heat to achieve blistered pockets of molten cheese.',
    ingredients: ['Organic Flour', 'Black Truffle Butter', 'Gruyère Cheese', 'Fresh Parsley']
  },
  {
    id: 'breads-2',
    category: 'breads',
    name: 'Kashmiri Bakarkhani & Saffron Sheermal',
    hindiName: 'बाकरखानी और शीरमाल',
    price: 650,
    formattedPrice: '₹650',
    desc: 'Pair of traditional royal breads: flaky puff-layered Bakarkhani and warm milk-kneaded Sheermal fragrant with saffron and cardamom.',
    dietary: ['Vegetarian'],
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&auto=format&fit=crop&q=80',
    spiceLevel: 1,
    originRegion: 'Old Delhi & Srinagar',
    pairingWine: 'Sauternes, Château d\'Yquem',
    chefNote: 'Sweetened gently and traditionally paired with rich meat gravies and kebabs.',
    ingredients: ['Refined Flour', 'Whole Milk', 'Saffron', 'Pure Ghee', 'Cardamom']
  },
  {
    id: 'breads-3',
    category: 'breads',
    name: 'Smoked Garlic & Rosemary Naan',
    hindiName: 'गार्लिक नान',
    price: 550,
    formattedPrice: '₹550',
    desc: 'Classic tandoor-baked flatbread infused with charred roasted garlic cloves, fresh garden rosemary, and churned butter.',
    dietary: ['Vegetarian'],
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80',
    spiceLevel: 1,
    originRegion: 'Punjab',
    pairingWine: 'Pinot Noir, Domaine Dujac',
    ingredients: ['Roasted Garlic', 'Fresh Rosemary', 'Organic Butter', 'Wheat Flour']
  },

  // Desserts
  {
    id: 'dessert-1',
    category: 'desserts',
    name: 'Gold-Leaf Shahi Gulab Jamun',
    hindiName: 'शाही स्वर्ण गुलाब जामुन',
    price: 950,
    formattedPrice: '₹950',
    desc: 'Reduced milk spheres stuffed with green pistachio praline, soaked in wild Kashmiri rose petal and green cardamom syrup, crowned with 24K edible gold foil and paired with saffron rabdi.',
    dietary: ['Vegetarian', 'Chef Special'],
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=800&auto=format&fit=crop&q=80',
    spiceLevel: 1,
    originRegion: 'Mughal Imperial Courts',
    pairingWine: 'Royal Tokaji 5 Puttonyos Aszú, Hungary',
    chefNote: 'Our mawa is hand-churned from organic A2 milk and fried at precise 160°C in pure cow ghee.',
    ingredients: ['A2 Milk Khoya', 'Pistachio Core', 'Damask Rose Petal Syrup', '24K Edible Gold Leaf'],
    isSignature: true
  },
  {
    id: 'dessert-2',
    category: 'desserts',
    name: 'Alphonso Mango & Saffron Kesar Kulfi',
    hindiName: 'केसर आम कुल्फी',
    price: 850,
    formattedPrice: '₹850',
    desc: 'Slow-condensed whole milk infused with Ratnagiri Alphonso mango nectar, strands of Pampore saffron, and crushed green pistachios on a bed of chilled falooda.',
    dietary: ['Vegetarian', 'Gluten-Free'],
    image: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=800&auto=format&fit=crop&q=80',
    spiceLevel: 1,
    originRegion: 'Ratnagiri & Delhi',
    pairingWine: 'Icewine, Inniskillin Vidal (Canada)',
    ingredients: ['Alphonso Mango Pulp', 'Pampore Saffron', 'Condensed Milk', 'Pistachios', 'Falooda']
  },
  {
    id: 'dessert-3',
    category: 'desserts',
    name: 'Dark Valrhona Chocolate & Cardamom Samosa',
    hindiName: 'चॉकलेट इलायची समोसा',
    price: 900,
    formattedPrice: '₹900',
    desc: 'Crisp hand-folded golden pastry pockets filled with 70% Guanaja dark chocolate ganache and crushed cardamom, served with a tart raspberry coulis and vanilla bean gelato.',
    dietary: ['Vegetarian'],
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&auto=format&fit=crop&q=80',
    spiceLevel: 1,
    originRegion: 'Modern Royal Patisserie',
    pairingWine: 'Taylor Fladgate 20 Year Old Tawny Port',
    ingredients: ['Valrhona 70% Chocolate', 'Green Cardamom', 'Crisp Pastry', 'Raspberry Coulis']
  },

  // Beverages
  {
    id: 'bev-1',
    category: 'beverages',
    name: 'The Maharaja Saffron & Gold Cocktail',
    hindiName: 'शाही स्वर्ण कॉकटेल',
    price: 1650,
    formattedPrice: '₹1,650',
    desc: 'Aged Single Malt scotch infused with Kashmir saffron, smoked clove smoke, honey liqueur, fresh citrus, and floating 24K gold flakes.',
    dietary: ['Chef Special'],
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&auto=format&fit=crop&q=80',
    spiceLevel: 1,
    originRegion: 'Cocktail Salon',
    pairingWine: 'N/A (Digestif / Aperitif)',
    ingredients: ['Aged Single Malt', 'Kashmiri Saffron', 'Smoked Clove', '24K Gold Flakes', 'Honey Elixir']
  },
  {
    id: 'bev-2',
    category: 'beverages',
    name: 'Kashmiri Royal Kehwa (Hot Infusion)',
    hindiName: 'कश्मीरी शाही कहवा',
    price: 650,
    formattedPrice: '₹650',
    desc: 'Green tea leaves brewed with crushed green cardamom, cinnamon quills, saffron strands, and garnished with slivered sweet almonds.',
    dietary: ['Vegan', 'Gluten-Free'],
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80',
    spiceLevel: 1,
    originRegion: 'Kashmir Valley',
    pairingWine: 'N/A (Tea Experience)',
    ingredients: ['Kashmir Green Tea', 'Pampore Saffron', 'Slivered Almonds', 'Cinnamon', 'Cardamom']
  }
];

export const SIGNATURE_DISHES: SignatureDish[] = [
  {
    id: 'sig-1',
    name: 'Mughlai Butter Chicken 1947',
    tagline: 'The Crown Jewel of Old Delhi',
    desc: 'Slow-cooked in an 18-hour velvety reduction of vine tomatoes, cultured white butter, cashew cream, and sun-dried kasoori methi.',
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&auto=format&fit=crop&q=80',
    price: '₹2,400',
    origin: 'Royal Delhi Court Recipe (Circa 1947)',
    cookingTime: '18 Hours Slow Reduction',
    keySpices: ['Kashmiri Mirch', 'Kasoori Methi', 'Green Cardamom', 'Mace'],
    winePairing: 'Penfolds Grange Shiraz'
  },
  {
    id: 'sig-2',
    name: 'Royal Nizami Dum Biryani',
    tagline: 'Sealed In Handi, Smoked Over Charcoal',
    desc: 'Aged 2-year Dehradun Basmati rice layered with prime baby goat, saffron, barista onions, and rose essence, sealed under an atta dough crust.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80',
    price: '₹2,800',
    origin: 'Hyderabad Nizami Archives',
    cookingTime: '4 Hours Charcoal Dum',
    keySpices: ['Iranian Saffron', 'Shahi Jeera', 'Star Anise', 'Rose Water'],
    winePairing: 'Châteauneuf-du-Pape'
  },
  {
    id: 'sig-3',
    name: 'Grand Maharaja Tandoori Thaal',
    tagline: 'Charcoal Flames & Royal Marinades',
    desc: 'Jumbo tiger prawns, lamb boti, murgh malai, and New Zealand lamb chops charred to perfection in clay tandoors at 480°C.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=80',
    price: '₹3,400',
    origin: 'North-West Frontier Heritage',
    cookingTime: 'Charcoal Grilled to Order',
    keySpices: ['Yellow Mustard', 'Tellicherry Pepper', 'Smoked Paprika', 'Cloves'],
    winePairing: 'Opus One Napa Valley'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: "An extraordinary culinary temple. The 36-hour Dal Maharaja and Nizami Biryani are nothing short of transcendent. It sets the worldwide gold standard for Indian haute cuisine.",
    author: "Raj Mehta",
    role: "Lead Inspector",
    publication: "Michelin Guide & Gastronomy International",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    dishLoved: "Mughlai Butter Chicken 1947"
  },
  {
    id: 'test-2',
    quote: "From the golden scent of saffron when you cross the threshold to the curated 500-label wine pairings, Maharaja’s Table is an intoxicating royal fantasy brought to life.",
    author: "Priya Sharma",
    role: "Senior Food & Wine Editor",
    publication: "Condé Nast Traveler & Vogue Living",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    dishLoved: "Kashmiri Nalli Rogan Josh"
  },
  {
    id: 'test-3',
    quote: "Chef Vikram Singh elevates Indian heritage recipes with breathtaking technical precision. Easily one of the top five dining experiences on the Asian continent.",
    author: "Sir James O'Brien",
    role: "Culinary Connoisseur & Director",
    publication: "World’s 50 Best Discovery & Forbes Luxury",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    dishLoved: "Awadhi Galouti Kebab"
  }
];

export const AWARDS: Award[] = [
  {
    id: 'aw-1',
    title: 'Two Michelin Stars',
    organization: 'Michelin Guide',
    years: '2023 · 2024 · 2025 · 2026',
    iconName: 'Star',
    desc: 'Awarded for exceptional culinary mastery, timeless heritage recipes, and flawless consistency.'
  },
  {
    id: 'aw-2',
    title: 'Best Indian Fine Dining',
    organization: 'World Culinary Awards',
    years: '2024 & 2025 Global Winner',
    iconName: 'Trophy',
    desc: 'Voted #1 luxury dining establishment across South Asia by international epicureans.'
  },
  {
    id: 'aw-3',
    title: 'Best of Award of Excellence',
    organization: 'Wine Spectator',
    years: '2022 · 2023 · 2024 · 2025',
    iconName: 'Wine',
    desc: 'Honoring our 500+ label sommelier cellar featuring rare Bordeaux, Burgundies, and Super Tuscans.'
  },
  {
    id: 'aw-4',
    title: 'AAA Five Diamond Award',
    organization: 'American Automobile Association',
    years: '2024 · 2025',
    iconName: 'Diamond',
    desc: 'Recognizing ultimate luxury, sophisticated ambiance, and personalized royal hospitality.'
  },
  {
    id: 'aw-5',
    title: 'Royal Heritage Gastronomy',
    organization: 'Indian Culinary Foundation',
    years: 'Lifetime Honor 2025',
    iconName: 'Crown',
    desc: 'For preserving and resurrecting forgotten 18th-century court recipes of Jaipur and Lucknow.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: "Maharaja's Grand Dining Hall",
    category: 'hall',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&auto=format&fit=crop&q=80',
    caption: 'Handcrafted crystal chandeliers, hand-carved jharokhas, and silk velvet banquettes.'
  },
  {
    id: 'gal-2',
    title: 'The Royal Plating Artistry',
    category: 'dishes',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1000&auto=format&fit=crop&q=80',
    caption: 'Masterpiece creations garnished with 24K edible gold leaf and fresh saffron infusions.'
  },
  {
    id: 'gal-3',
    title: 'The Saffron & Gold Cocktail Bar',
    category: 'bar',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1000&auto=format&fit=crop&q=80',
    caption: 'Curated mixology featuring Indian botanicals, rare Single Malts, and vintage Champagnes.'
  },
  {
    id: 'gal-4',
    title: 'Gold-Leaf Shahi Dessert Course',
    category: 'dishes',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=1000&auto=format&fit=crop&q=80',
    caption: 'Handcrafted desserts served on custom silver tableware.'
  },
  {
    id: 'gal-5',
    title: "The Emperor's Vault Private Salon",
    category: 'private',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1000&auto=format&fit=crop&q=80',
    caption: 'Secluded private dining for up to 16 guests with a dedicated sommelier and live sitar.'
  },
  {
    id: 'gal-6',
    title: 'Tandoor Mastery in Action',
    category: 'dishes',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1000&auto=format&fit=crop&q=80',
    caption: 'Live clay tandoors running at 480°C with organic hickory and charcoal.'
  }
];

export const EVENT_PACKAGES: EventPackage[] = [
  {
    id: 'ev-1',
    title: 'Imperial Wedding & Sangeet Banquets',
    capacity: '50 to 300 Guests',
    desc: 'Celebrate in regal splendor with bespoke multi-course royal thalis, floral artistry with fragrant Mogra & Marigolds, and dedicated butler service.',
    icon: 'Crown',
    features: [
      'Bespoke 7-course royal tasting menu customized with Chef Vikram',
      'Exclusive sommelier champagne & wine pairing bar',
      'Traditional Shenai & Sitar welcoming ensemble',
      'Silver plated dining ware & custom embroidered napkins'
    ],
    priceStarting: '₹12,000 / Guest'
  },
  {
    id: 'ev-2',
    title: 'Executive Diplomatic & Corporate Galas',
    capacity: '10 to 80 Guests',
    desc: 'Host high-stakes summits and VIP corporate celebrations with seamless white-glove discretion in our Saffron Private Salon or Grand Hall.',
    icon: 'Briefcase',
    features: [
      'Private AV projection & discreet acoustic soundproofing',
      'Curated business luncheon or 5-course dinner',
      'Pre-dinner cocktail reception with canapés',
      'Dedicated event concierge and coat check'
    ],
    priceStarting: '₹8,500 / Guest'
  },
  {
    id: 'ev-3',
    title: 'Sommelier Wine & Spice Masterclass Dinners',
    capacity: 'Up to 24 Guests',
    desc: 'An intimate monthly epicurean masterclass pairing 6 grand cru vintages with the intricate spice profiles of Awadhi and Kashmiri cuisine.',
    icon: 'Wine',
    features: [
      'Guided tasting by Head Sommelier Pierre De Villiers',
      'Rare library vintage bottles opened table-side',
      'Interactive spice blending sensory gift kit',
      'Signed tasting booklet & souvenir gift'
    ],
    priceStarting: '₹15,000 / Guest'
  }
];

export const TASTING_COURSES = [
  {
    courseNumber: 1,
    name: "Amuse-Bouche: Saffron & Kokum Sphere",
    desc: "Molecular sphere of spiced kokum juice topped with saffron gel and crispy sev.",
    pairing: "Dom Pérignon Vintage Champagne 2013"
  },
  {
    courseNumber: 2,
    name: "The Royal Kebab: Awadhi Galouti",
    desc: "Velvety lamb kebab with 32 spices on saffron sheermal.",
    pairing: "Château Margaux 2015"
  },
  {
    courseNumber: 3,
    name: "From the Coast: Malabar Chilean Sea Bass",
    desc: "Seared sea bass in golden coconut-tamarind broth with fresh curry leaves.",
    pairing: "Meursault Premier Cru 2020"
  },
  {
    courseNumber: 4,
    name: "Palate Cleanser: Wild Himalayan Mint & Pomegranate Granita",
    desc: "Frozen shaved ice of wild mountain mint with pomegranate pearls.",
    pairing: "Kashmir Rose Water Mist"
  },
  {
    courseNumber: 5,
    name: "The Imperial Main: Butter Chicken 1947 & Truffle Naan",
    desc: "18-hour tomato cream reduction paired with Gruyère truffle sourdough naan.",
    pairing: "Penfolds Grange Shiraz 2018"
  },
  {
    courseNumber: 6,
    name: "The Dum Handi: Nizami Lamb Biryani",
    desc: "Baked under clay seal with saffron-infused aged Dehradun basmati rice.",
    pairing: "Châteauneuf-du-Pape 2019"
  },
  {
    courseNumber: 7,
    name: "Grand Finale: 24K Gold Shahi Gulab Jamun & Alphonso Mango Kulfi",
    desc: "Pistachio stuffed dumplings with edible gold leaf and Alphonso mango kulfi.",
    pairing: "Château d'Yquem Sauternes 2016"
  }
];
