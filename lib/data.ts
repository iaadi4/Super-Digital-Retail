export type Product = {
  id: string;
    title: string;
  brandName: string;
  brandLogo: string;
  originalPrice: number;
  salePrice: number;
  rating: number;
  reviewsCount: number;
  soldCount: number;
  imageUrl: string;
  category: string;
  description?: string;
  features?: string[];
  additionalImages?: string[];
  flipkartUrl?: string;
};

export const categories = [
  "Electronics",
  "Home Decor",
  "Home & Kitchen",
  "Accessories",
  "Clothes",
  "Bags",
  "Food",
  "Furniture",
  "Baby Care",
  "Beauty & Makeup",
  "Stationery",
  "Grocery",
  "Books",
];

export const products: Product[] = [
  {
    id: "1",
    title: "Sapra Chopper to Chop and Cut Fruits, Vegetables(PACK OF 1) Vegetable & Fruit Chopper",
    brandName: "Flipkart Seller",
    brandLogo: "https://i.pravatar.cc/150?u=0",
    originalPrice: 999,
    salePrice: 237,
    rating: 0,
    reviewsCount: 0,
    soldCount: 0,
    imageUrl: "https://rukmini1.flixcart.com/image/1500/1500/xif0q/chopper/b/u/2/plastic-alloy-steel-quick-and-powerful-manual-hand-press-large-original-imaghq6hpfhz7xhz.jpeg?q=70",
    category: "Home & Kitchen",
    description: "The Sapra Chopper is a quick and powerful manual hand-press chopper. Ideal for slicing and dicing fruits and vegetables, it saves you time in the kitchen while maintaining safety. A perfect companion for home cooking.",
    features: ["Quick and powerful manual operation", "Durable plastic and alloy steel construction", "Compact design for easy storage", "Easy to clean and maintain"],
    additionalImages: [],
    flipkartUrl: "https://www.flipkart.com/sapra-chopper-chop-cut-fruits-vegetables-pack-1-vegetable-fruit/p/itm2c634c05a1caf?pid=CPRGHP3AZEADX5YS"
  },
  {
    id: "2",
    title: "DS99 KT-125 Dynamic Thunder Sound With High Bass & Mobile Stand 10 W Bluetooth Speaker",
    brandName: "Flipkart Seller",
    brandLogo: "https://i.pravatar.cc/150?u=1",
    originalPrice: 2699,
    salePrice: 389,
    rating: 2.3,
    reviewsCount: 3,
    soldCount: 4,
    imageUrl: "https://rukmini1.flixcart.com/image/1500/1500/xif0q/speaker/mobile-tablet-speaker/g/l/u/kt-125-dynamic-thunder-sound-with-high-bass-mobile-stand-ds99-original-imagayh9qzyac8rz.jpeg?q=70",
    category: "Electronics",
    description: "Experience dynamic thunder sound with the DS99 KT-125 Bluetooth Speaker. Featuring high bass output and a convenient mobile stand, it is designed for hands-free entertainment on the go.",
    features: ["10W High Bass Output", "Integrated Mobile Stand", "Wireless Bluetooth Connectivity", "Portable and lightweight design"],
    additionalImages: [],
    flipkartUrl: "https://www.flipkart.com/ds99-kt-125-dynamic-thunder-sound-high-bass-mobile-stand-10-w-bluetooth-speaker/p/itm1ef55b7259ddf?pid=ACCGH9YRAA5H4ZBD"
  },
  {
    id: "3",
    title: "DS99 High Power Sound Blast, Mini, Thunder Sound Wireless Bluetooth",
    brandName: "Flipkart Seller",
    brandLogo: "https://i.pravatar.cc/150?u=2",
    originalPrice: 1999,
    salePrice: 297,
    rating: 0,
    reviewsCount: 0,
    soldCount: 0,
    imageUrl: "https://rukminim2.flixcart.com/image/1000/1340/xif0q/speaker/mobile-tablet-speaker/q/i/2/a005-ds99-original-imah667efpzbruay.jpeg?q=60",
    category: "Electronics",
    description: "Compact yet powerful, the DS99 Mini Bluetooth Speaker delivers thunderous sound in a small package. Perfect for outdoor trips or intimate gatherings, ensuring reliable audio performance anywhere.",
    features: ["Miniature size with high power sound", "Wireless Bluetooth enabled", "Thunder Sound technology", "Long-lasting battery life"],
    additionalImages: [],
    flipkartUrl: "https://www.flipkart.com/ds99-high-power-sound-blast-mini-thunder-wireless-bluetooth-speaker-3-w/p/itm24f186769c19a?pid=ACCGZXW5BHK77YZV"
  },
  {
    id: "4",
    title: "ZEBRONICS 4 Port ZEB-90HB USB Hub",
    brandName: "Flipkart Seller",
    brandLogo: "https://i.pravatar.cc/150?u=3",
    originalPrice: 1999,
    salePrice: 198,
    rating: 3.7,
    reviewsCount: 10241,
    soldCount: 15361,
    imageUrl: "https://rukmini1.flixcart.com/image/1500/1500/ksgehzk0/usb-gadget/q/c/q/usb-hub-zeb-90hb-zebronics-original-imag6ymzfeyuevmt.jpeg?q=70",
    category: "Electronics",
    description: "Expand your connectivity with the ZEBRONICS 4 Port ZEB-90HB USB Hub. Seamlessly connect multiple USB peripherals to your laptop or desktop with fast data transfer speeds.",
    features: ["4 USB ports for expanded connectivity", "Compact and travel-friendly design", "High-speed data transmission", "Plug-and-play setup"],
    additionalImages: [],
    flipkartUrl: "https://www.flipkart.com/zebronics-4-port-zeb-90hb-usb-hub/p/itm040238e390e8d?pid=USGG4Z3KEWHYW2MG"
  },
  {
    id: "5",
    title: "sdt Decorative Showpiece - 13 cm",
    brandName: "Flipkart Seller",
    brandLogo: "https://i.pravatar.cc/150?u=4",
    originalPrice: 1099,
    salePrice: 132,
    rating: 0,
    reviewsCount: 0,
    soldCount: 0,
    imageUrl: "https://rukmini1.flixcart.com/image/1500/1500/xif0q/showpiece-figurine/f/0/k/11-11-porcelain-adiyogi-shiva-lord-shankar-idol-black-sdt-13-original-imagg5qyh6umhrhh.jpeg?q=70",
    category: "Home Decor",
    description: "Enhance your home interior with this elegantly crafted SDT Decorative Adiyogi Shiva Idol. Designed with premium porcelain, it brings a peaceful and spiritual aura to any living space.",
    features: ["Intricate porcelain craftsmanship", "13 cm ideal size for tables", "Matte black finish", "Perfect for meditation spaces or gifting"],
    additionalImages: [],
    flipkartUrl: "https://www.flipkart.com/sdt-decorative-showpiece-13-cm/p/itm1417305b6c610?pid=SHIGG5QZRNCZJSNZ"
  },
  {
    id: "6",
    title: "SPKR Couple Legs hanging statue gift for Girlfriend /boyfriend Decorative Showpiece - 5 cm",
    brandName: "Flipkart Seller",
    brandLogo: "https://i.pravatar.cc/150?u=5",
    originalPrice: 2499,
    salePrice: 539,
    rating: 0,
    reviewsCount: 0,
    soldCount: 0,
    imageUrl: "https://rukmini1.flixcart.com/image/1500/1500/xif0q/showpiece-figurine/h/7/g/7-19-showpiece-spkr-5-original-imagg94cktpra7gp.jpeg?q=70",
    category: "Home Decor",
    description: "A charming Couple Legs hanging statue by SPKR. This creative piece makes for a whimsical and romantic gift for your significant other, adding a playful touch to shelves or ledges.",
    features: ["Unique hanging legs design", "Perfect romantic gift", "Durable resin material", "Hand-painted finish"],
    additionalImages: [],
    flipkartUrl: "https://www.flipkart.com/spkr-couple-legs-hanging-statue-gift-girlfriend-boyfriend-decorative-showpiece-5-cm/p/itm7681bf4344bda?pid=SHIGG94CV9KB6YTZ"
  },
  {
    id: "7",
    title: "Shilp Saga Lord Ganesha Idol on Decorative Handcrafted Plate for Home and Car - 20 cm",
    brandName: "Flipkart Seller",
    brandLogo: "https://i.pravatar.cc/150?u=6",
    originalPrice: 1999,
    salePrice: 235,
    rating: 4.2,
    reviewsCount: 573,
    soldCount: 859,
    imageUrl: "https://rukmini1.flixcart.com/image/1500/1500/xif0q/showpiece-figurine/w/k/a/6-14-sd45-shilp-saga-20-original-imahc55rqrg9taqx.jpeg?q=70",
    category: "Home Decor",
    description: "Bring prosperity and good luck with the Shilp Saga Lord Ganesha Idol. Placed on a beautiful handcrafted plate, it is perfectly sized for home altars or car dashboards.",
    features: ["Beautifully handcrafted decorative plate", "Premium finish Ganesha Idol", "Suitable for car dashboard or home", "Auspicious gifting option"],
    additionalImages: [],
    flipkartUrl: "https://www.flipkart.com/shilp-saga-lord-ganesha-idol-decorative-handcrafted-plate-home-car-showpiece-20-cm/p/itm4b55fa07fdee4?pid=SHIG4U44XUFTPWAD"
  },
  {
    id: "8",
    title: "SPKR Ganesha Idol, Vinayaka Statue, Ganpati Decorative Statue Showpiece - 3 cm",
    brandName: "Flipkart Seller",
    brandLogo: "https://i.pravatar.cc/150?u=7",
    originalPrice: 999,
    salePrice: 175,
    rating: 0,
    reviewsCount: 0,
    soldCount: 0,
    imageUrl: "https://rukmini1.flixcart.com/image/1500/1500/xif0q/showpiece-figurine/5/u/2/5-7-mu0001-spkr-3-original-imagg8sdqgq4xgzx.jpeg?q=70",
    category: "Home Decor",
    description: "A miniature SPKR Ganpati Decorative Statue to invite blessings. Its very compact size makes it incredibly versatile, easily fitting on a small work desk, a car dashboard, or a subtle shelf spot.",
    features: ["Ultra-compact 3 cm height", "Detailed Vinayaka carving", "Sturdy base", "Ideal for small spaces"],
    additionalImages: [],
    flipkartUrl: "https://www.flipkart.com/spkr-ganesha-idol-vinayaka-statue-ganpati-decorative-statue-showpiece-3-cm/p/itm01fb4c0e006c6?pid=SHIGG8SDQAPQGYSP"
  },
  {
    id: "9",
    title: "SDR Front & Back Case for Airpods 1/2 Dots Protective Cover",
    brandName: "Flipkart Seller",
    brandLogo: "https://i.pravatar.cc/150?u=8",
    originalPrice: 999,
    salePrice: 353,
    rating: 0,
    reviewsCount: 0,
    soldCount: 0,
    imageUrl: "https://rukmini1.flixcart.com/image/1500/1500/xif0q/cases-covers/front-back-case/h/b/i/back-cover-for-airpods-dots-protective-cover-airpods-earphone-original-imagjcry6hfgpyu2.jpeg?q=70",
    category: "Accessories",
    description: "Protect your AirPods with the stylish SDR Front & Back Case. Designed with a cute dots pattern, it offers shock resistance and prevents scratches without adding bulk.",
    features: ["Compatible with AirPods 1 & 2", "Shock-absorbent protective material", "Stylish dots design", "Easy access to charging port"],
    additionalImages: [],
    flipkartUrl: "https://www.flipkart.com/sdr-front-back-case-airpods-1-2-dots-protective-cover-earphone-cases/p/itmcf0a5d3a757eb?pid=ACCGJCRYNJZPYGZG"
  },
  {
    id: "10",
    title: "Sapra LCD Writing Screen Tablet Drawing Board for Kids/Adults, 8.5 Inch",
    brandName: "Flipkart Seller",
    brandLogo: "https://i.pravatar.cc/150?u=9",
    originalPrice: 4800,
    salePrice: 150,
    rating: 0,
    reviewsCount: 0,
    soldCount: 0,
    imageUrl: "https://rukmini1.flixcart.com/image/1500/1500/xif0q/learning-toy/p/y/e/lcd-writing-screen-tablet-drawing-board-for-kids-adults-8-5-inch-original-imagztqfd3whhekh.jpeg?q=70",
    category: "Electronics",
    description: "An eco-friendly alternative to paper, the Sapra 8.5-inch LCD Writing Tablet is perfect for sketching, taking notes, or keeping kids entertained on the go. One-touch erase makes it endlessly reusable.",
    features: ["8.5-inch responsive LCD screen", "One-touch erase button", "Lightweight and portable", "Eco-friendly, saves paper"],
    additionalImages: [],
    flipkartUrl: "https://www.flipkart.com/sapra-lcd-writing-screen-tablet-drawing-board-kids-adults-8-5-inch/p/itma07255fa84e58?pid=ETYGZTQFFNVYERGR"
  },
  {
    id: "11",
    title: "Tejash enterprises Dream Catcher Wall Hanging blue 25 cm Feather",
    brandName: "Flipkart Seller",
    brandLogo: "https://i.pravatar.cc/150?u=10",
    originalPrice: 825,
    salePrice: 140,
    rating: 3.8,
    reviewsCount: 28,
    soldCount: 42,
    imageUrl: "https://rukmini1.flixcart.com/image/1500/1500/kolsscw0/wind-chime/l/u/x/mini-blue-goldy-traders-original-imag3yzmqzwqhgg5.jpeg?q=70",
    category: "Home Decor",
    description: "Add a boho touch to your bedroom with this Tejash Enterprises Blue Dream Catcher. Woven carefully and adorned with beautiful feathers, it brings a calming and peaceful aesthetic.",
    features: ["Handwoven intricate design", "Beautiful blue feathers", "25 cm optimal wall hanging size", "Brings positive energy and aesthetic appeal"],
    additionalImages: [],
    flipkartUrl: "https://www.flipkart.com/tejash-enterprises-dream-catcher-wall-hanging-bluee-25-cm-feather/p/itm16b0f9a556009?pid=WCHFYCEPSUWDB2ER"
  },
  {
    id: "12",
    title: "Sapra Lord Buddha Statue Sculpture Home Decor Showpiece - 29 cm",
    brandName: "Flipkart Seller",
    brandLogo: "https://i.pravatar.cc/150?u=11",
    originalPrice: 1999,
    salePrice: 425,
    rating: 0,
    reviewsCount: 0,
    soldCount: 0,
    imageUrl: "https://rukmini1.flixcart.com/image/1500/1500/xif0q/showpiece-figurine/6/s/q/2-11-sdr001-sapra-29-original-imagh2yppjsf5hgf.jpeg?q=70",
    category: "Home Decor",
    description: "The Sapra Lord Buddha Statue creates a serene and tranquil focal point in your home. Standing at 29 cm, its detailed craftsmanship makes it an excellent centerpiece for living spaces.",
    features: ["Large 29 cm statement size", "Serene Lord Buddha sculpture", "High-quality, durable material", "Enhances interior zen aesthetics"],
    additionalImages: [],
    flipkartUrl: "https://www.flipkart.com/sapra-lord-buddha-statue-sculpture-home-decor-decorative-showpiece-29-cm/p/itmcaa0c7ca50e15?pid=SHIGH2YPGEFGKRJG"
  },
  {
    id: "13",
    title: "ZEBRONICS USB Type C Cable 2 A 1 m ZEB-TT20V",
    brandName: "Flipkart Seller",
    brandLogo: "https://i.pravatar.cc/150?u=12",
    originalPrice: 999,
    salePrice: 249,
    rating: 0,
    reviewsCount: 0,
    soldCount: 0,
    imageUrl: "https://rukmini1.flixcart.com/image/1500/1500/xif0q/data-cable/usb-type-c-cable/b/u/d/zeb-tt20v-zebronics-original-imagg6vxgycbyqja.jpeg?q=70",
    category: "Electronics",
    description: "Keep your devices powered up safely with the ZEBRONICS ZEB-TT20V Type C Cable. Offering reliable 2A charging and data sync capabilities over a convenient 1m length.",
    features: ["2A fast charging support", "1 meter optimal cable length", "Durable outer jacket", "Reliable data synchronization"],
    additionalImages: [],
    flipkartUrl: "https://www.flipkart.com/zebronics-usb-type-c-cable-2-1-m-zeb-tt20v/p/itm26ad8d22e6f12?pid=ACCGG6VXNUFYTUME"
  },
  {
    id: "14",
    title: "DS99 TG 113 5 W Bluetooth Speaker",
    brandName: "Flipkart Seller",
    brandLogo: "https://i.pravatar.cc/150?u=13",
    originalPrice: 2399,
    salePrice: 360,
    rating: 3.7,
    reviewsCount: 6,
    soldCount: 9,
    imageUrl: "https://rukmini1.flixcart.com/image/1500/1500/xif0q/speaker/mobile-tablet-speaker/x/7/o/tg113-ds99-original-imahfzg2hngqyffg.jpeg?q=70",
    category: "Electronics",
    description: "Take your music everywhere with the DS99 TG 113 Bluetooth Speaker. With 5W of clear audio output and a rugged splash-proof design, it's the ideal outdoor companion.",
    features: ["5W clear audio output", "Splash-proof exterior", "Built-in rechargeable battery", "Bluetooth & AUX compatibility"],
    additionalImages: [],
    flipkartUrl: "https://www.flipkart.com/ds99-tg-113-5-w-bluetooth-speaker/p/itm558c7625fb5c3?pid=ACCGH5YUGY2JM42X"
  },
  {
    id: "15",
    title: "curious lifestyle Meditating Sitting Buddha Statue Home Decor - 25.4 cm",
    brandName: "Flipkart Seller",
    brandLogo: "https://i.pravatar.cc/150?u=14",
    originalPrice: 1299,
    salePrice: 144,
    rating: 4,
    reviewsCount: 11914,
    soldCount: 17871,
    imageUrl: "https://rukmini1.flixcart.com/image/1500/1500/xif0q/showpiece-figurine/p/y/e/10-17-78-buddha-home-deocr-s-curious-lifestyle-25-4-original-imahkrcbjgktfmvb.jpeg?q=70",
    category: "Home Decor",
    description: "The Curious Lifestyle Meditating Buddha brings tranquility and peace. An intricately designed masterpiece perfect for elevating the ambiance of any living room, study, or meditation corner.",
    features: ["Meditating pose for peaceful vibe", "25.4 cm height", "Premium detailing and finish", "Excellent gifting item"],
    additionalImages: [],
    flipkartUrl: "https://www.flipkart.com/curious-lifestyle-meditating-sitting-buddha-statue-showpiece-idol-home-decor-items-living-room-decorative-25-4-cm/p/itm7874f687e4117?pid=SHIFPPS34GZDH6R9"
  },
  {
    id: "16",
    title: "Sapra Lord Ganesha Decorated by Stone with Wooden Base - 13.5 cm",
    brandName: "Flipkart Seller",
    brandLogo: "https://i.pravatar.cc/150?u=15",
    originalPrice: 999,
    salePrice: 261,
    rating: 0,
    reviewsCount: 0,
    soldCount: 0,
    imageUrl: "https://rukmini1.flixcart.com/image/1500/1500/xif0q/showpiece-figurine/z/5/h/8-7-tg-001-sapra-13-5-original-imah9rv2udhhh3h5.jpeg?q=70",
    category: "Home Decor",
    description: "A beautifully decorated Lord Ganesha statue by Sapra. Featuring stone embellishments and a sturdy wooden base, it's a divine and artistic addition to your home decor.",
    features: ["Stone embellishments", "Elegant wooden base", "13.5 cm height", "Handcrafted details"],
    additionalImages: [],
    flipkartUrl: "https://www.flipkart.com/sapra-lord-ganesha-decorated-stone-wooden-base-decorative-tree-showpiece-13-5-cm/p/itm3377f06b3cb15?pid=SHIGH6V3PGEEZE5W"
  }
];



export const testimonials = [
  {
    id: "t1",
    name: "Aarav Mehta",
    rating: 5,
    quote: "Bought the Adiyogi statue and a Buddha showpiece for my living room. The detail is stunning and it arrived safely packaged!",
    brandRef: "Home Decor",
  },
  {
    id: "t2",
    name: "Priya Sharma",
    avatar: "https://i.pravatar.cc/150?u=priya",
    rating: 5,
    quote: "The manual hand press chopper is a lifesaver in the kitchen. Very sharp blades and sturdy build. Delivery was super quick!",
    brandRef: "Kitchen Essentials",
  },
  {
    id: "t3",
    name: "Rohan Das",
    rating: 5,
    quote: "Ordered the Zebronics USB hub and Type-C cables. Excellent build quality, works perfectly with my laptop, and prices are unbeatable.",
    brandRef: "Tech & Accessories",
  },
  {
    id: "t4",
    name: "Ananya Iyer",
    avatar: "https://i.pravatar.cc/150?u=ananya",
    rating: 4,
    quote: "Love the DS99 Bluetooth speaker! The bass is amazing for its size, and the mobile stand is very convenient.",
    brandRef: "Audio Gear",
  },
];

export function getProductSlug(product: Product): string {
  return product.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') + '-' + product.id;
}

export function getCategorySlug(category: string): string {
  return category.toLowerCase().replace(/[&]/g, 'and').replace(/\s+/g, '-');
}

export function getCategoryFromSlug(slug: string): string | undefined {
  return categories.find(
    (c) => c.toLowerCase().replace(/[&]/g, 'and').replace(/\s+/g, '-') === slug
  );
}

export type CategoryMeta = {
  intro: string;
  faqs: { question: string; answer: string }[];
};

export const categoryMeta: Record<string, CategoryMeta> = {
  Electronics: {
    intro:
      "From Bluetooth speakers and USB hubs to writing tablets and cables — our Electronics collection brings you everyday tech essentials at steep discounts. Each product is sourced from trusted Flipkart sellers so you can compare specs, read real ratings, and buy with confidence.",
    faqs: [
      {
        question: "Are these electronics covered by warranty?",
        answer:
          "Warranty terms are set by each manufacturer and fulfilled through Flipkart. Check the product listing on Flipkart for specific warranty duration and coverage details before purchasing.",
      },
      {
        question: "How do I know if a product is compatible with my devices?",
        answer:
          "We include key specifications like connector type, wattage, and Bluetooth version in each product description. For detailed compatibility, refer to the full specs on the Flipkart product page.",
      },
      {
        question: "Can I return electronics purchased through your links?",
        answer:
          "Returns and replacements are handled by Flipkart under their return policy. Most electronics have a 7-10 day replacement window — check the specific product page for exact terms.",
      },
    ],
  },
  "Home Decor": {
    intro:
      "Transform your living space with our handpicked Home Decor selection. From intricately carved idol showpieces and meditation statues to boho dream catchers, each piece is chosen for its craftsmanship, aesthetic appeal, and value for money.",
    faqs: [
      {
        question: "Are the showpieces fragile? How are they packaged?",
        answer:
          "Sellers on Flipkart use bubble wrap and corrugated packaging for fragile items. If an item arrives damaged, you can request a replacement through Flipkart's return policy.",
      },
      {
        question: "What materials are the home decor items made from?",
        answer:
          "Materials vary by product — you'll find porcelain, resin, polyresin, and carved wood options. Each product listing specifies its material in the features section.",
      },
      {
        question: "Can I buy these as gifts?",
        answer:
          "Absolutely. Many of our home decor items come in attractive packaging and make excellent gifting choices for housewarmings, festivals like Diwali, or personal occasions.",
      },
    ],
  },
  "Home & Kitchen": {
    intro:
      "Make meal prep faster and kitchen work easier with our Home & Kitchen picks. From manual choppers to handy gadgets, we focus on practical tools that save time without breaking the bank.",
    faqs: [
      {
        question: "Are kitchen items food-safe?",
        answer:
          "Yes — the kitchen tools we feature are made from food-grade materials. Check individual product descriptions for specific material certifications.",
      },
      {
        question: "How do I clean and maintain the chopper?",
        answer:
          "Most manual choppers are easy to disassemble for cleaning. Hand wash the blades and body with warm soapy water. Avoid dishwashers for best longevity.",
      },
    ],
  },
  Accessories: {
    intro:
      "Protect and enhance your gadgets with our Accessories collection. From AirPods cases to tech organizers, find quality add-ons that combine style with protection at prices well below MRP.",
    faqs: [
      {
        question: "How do I check if an accessory fits my device?",
        answer:
          "Each listing specifies compatible device models. Look for the compatibility info in the product title and features section. When in doubt, check the Flipkart listing for detailed dimensions.",
      },
      {
        question: "What if the accessory doesn't fit?",
        answer:
          "If you receive an incompatible product, Flipkart's return and replacement policy will cover it. Typically you have 7 days to initiate a return.",
      },
    ],
  },
};

/** Categories that currently have at least one product */
export function getActiveCategories(): string[] {
  return categories.filter((cat) => products.some((p) => p.category === cat));
}
