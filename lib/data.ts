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
    title: "MacBook Pro 13\" Big Discount",
    brandName: "Tech Haven",
    brandLogo: "https://i.pravatar.cc/150?u=techhaven",
    originalPrice: 1999.0,
    salePrice: 1799.0,
    rating: 4.9,
    reviewsCount: 120,
    soldCount: 850,
    imageUrl: "https://picsum.photos/seed/macbook/400/300",
    category: "Electronics",
    description: "The new MacBook Pro delivers game-changing performance for pro users. With the powerful M-series chip to supercharge pro-level workflows while getting amazing battery life, it's a completely new experience.",
    features: ["Apple M-series chip for a giant leap in CPU, GPU, and machine learning performance", "Up to 20 hours of battery life to keep you going all day", "8-core CPU delivers up to 2.8x faster performance to fly through workflows quicker than ever", "16-core Neural Engine for advanced machine learning"],
    additionalImages: ["https://picsum.photos/seed/macbook1/400/300", "https://picsum.photos/seed/macbook2/400/300", "https://picsum.photos/seed/macbook3/400/300"],
    flipkartUrl: "https://www.flipkart.com/dummy-macbook-pro"
  },
  {
    id: "2",
    title: "Mavic Air Phantom 4 Pro",
    brandName: "Drone Zone",
    brandLogo: "https://i.pravatar.cc/150?u=dronezone",
    originalPrice: 1299.0,
    salePrice: 1099.0,
    rating: 4.8,
    reviewsCount: 95,
    soldCount: 420,
    imageUrl: "https://picsum.photos/seed/drone/400/300",
    category: "Electronics",
    description: "Capture the world from above with the stunning 4K video resolution of the Phantom 4 Pro. Built for creators and professionals who need top-tier image quality and stable flight dynamics.",
    features: ["1-inch 20MP Exmor R CMOS sensor", "4K video at 60fps", "5-direction obstacle sensing", "Up to 30 minutes flight time"],
    additionalImages: ["https://picsum.photos/seed/drone1/400/300", "https://picsum.photos/seed/drone2/400/300", "https://picsum.photos/seed/drone3/400/300"],
    flipkartUrl: "https://www.flipkart.com/dummy-drone"
  },
  {
    id: "3",
    title: "Nikon D7500 20.9 Mp Touchscreen",
    brandName: "Eshop Spot",
    brandLogo: "https://i.pravatar.cc/150?u=eshopspot",
    originalPrice: 1199.0,
    salePrice: 999.0,
    rating: 4.7,
    reviewsCount: 88,
    soldCount: 315,
    imageUrl: "https://picsum.photos/seed/camera/400/300",
    category: "Electronics",
    description: "Born from a desire for flagship performance and innovation in a more compact and streamlined connected camera, the D7500 delivers the game-changing resolution, ISO range, image processing and energy efficiency of the award-winning D500.",
    features: ["20.9MP DX-Format CMOS Sensor", "EXPEED 5 Image Processor", "3.2\" 922k-Dot Tilting Touchscreen LCD", "4K UHD Video Recording at 30 fps"],
    additionalImages: ["https://picsum.photos/seed/camera1/400/300", "https://picsum.photos/seed/camera2/400/300", "https://picsum.photos/seed/camera3/400/300"],
    flipkartUrl: "https://www.flipkart.com/dummy-camera"
  },
  {
    id: "4",
    title: "Apple AirPods Pro White",
    brandName: "Audio Plus",
    brandLogo: "https://i.pravatar.cc/150?u=audioplus",
    originalPrice: 249.0,
    salePrice: 199.0,
    rating: 4.9,
    reviewsCount: 340,
    soldCount: 1500,
    imageUrl: "https://picsum.photos/seed/airpods/400/300",
    category: "Electronics",
    description: "AirPods Pro have been designed to deliver Active Noise Cancellation for immersive sound, Transparency mode so you can hear your surroundings, and a customizable fit for all-day comfort.",
    features: ["Active Noise Cancellation blocks outside noise", "Transparency mode for hearing and interacting with the world around you", "Spatial audio with dynamic head tracking", "Adaptive EQ automatically tunes music to your ears"],
    additionalImages: ["https://picsum.photos/seed/airpods1/400/300", "https://picsum.photos/seed/airpods2/400/300", "https://picsum.photos/seed/airpods3/400/300"],
    flipkartUrl: "https://www.flipkart.com/dummy-airpods"
  },
  {
    id: "5",
    title: "Apple iMac Retina 5K 27\"",
    brandName: "Tech Haven",
    brandLogo: "https://i.pravatar.cc/150?u=techhaven",
    originalPrice: 1799.0,
    salePrice: 1599.0,
    rating: 4.8,
    reviewsCount: 65,
    soldCount: 220,
    imageUrl: "https://picsum.photos/seed/imac/400/300",
    category: "Electronics",
    description: "The all-in-one for all. If you can dream it, you can do it on iMac. It's beautifully designed, incredibly intuitive, and packed with powerful tools that let you take any idea to the next level.",
    features: ["27-inch (diagonal) 5120-by-2880 Retina 5K display", "10th-generation Intel Core i5 processor", "Radeon Pro 5300 graphics", "Ultrafast SSD storage"],
    additionalImages: ["https://picsum.photos/seed/imac1/400/300", "https://picsum.photos/seed/imac2/400/300", "https://picsum.photos/seed/imac3/400/300"],
    flipkartUrl: "https://www.flipkart.com/dummy-imac"
  },
  {
    id: "6",
    title: "Mesh Wi-Fi Router System",
    brandName: "NetGear Pro",
    brandLogo: "https://i.pravatar.cc/150?u=netgearpro",
    originalPrice: 299.0,
    salePrice: 249.0,
    rating: 4.6,
    reviewsCount: 112,
    soldCount: 600,
    imageUrl: "https://picsum.photos/seed/router/400/300",
    category: "Electronics",
    description: "Experience fast, reliable WiFi everywhere in your home with this Mesh WiFi system. Designed to eliminate dead zones and buffering, it provides seamless coverage for multiple devices.",
    features: ["Whole home WiFi coverage up to 4,500 sq. ft.", "Tri-band technology for maximum speed", "Easy setup with the companion app", "Advanced cybersecurity protection built-in"],
    additionalImages: ["https://picsum.photos/seed/router1/400/300", "https://picsum.photos/seed/router2/400/300", "https://picsum.photos/seed/router3/400/300"],
    flipkartUrl: "https://www.flipkart.com/dummy-router"
  },
  {
    id: "7",
    title: "Joystick Game Controller",
    brandName: "Gamer Hub",
    brandLogo: "https://i.pravatar.cc/150?u=gamerhub",
    originalPrice: 69.0,
    salePrice: 49.0,
    rating: 4.5,
    reviewsCount: 420,
    soldCount: 2100,
    imageUrl: "https://picsum.photos/seed/controller/400/300",
    category: "Electronics",
    description: "Take your gaming to the next level with this ergonomic, highly responsive game controller. Featuring customizable buttons and precision thumbsticks for competitive play.",
    features: ["Wireless Bluetooth connectivity", "Up to 40 hours of battery life", "Textured grip for comfort", "Customizable button mapping"],
    additionalImages: ["https://picsum.photos/seed/controller1/400/300", "https://picsum.photos/seed/controller2/400/300", "https://picsum.photos/seed/controller3/400/300"],
    flipkartUrl: "https://www.flipkart.com/dummy-controller"
  },
  {
    id: "8",
    title: "Over-Ear Noise Cancelling Headphones",
    brandName: "Audio Plus",
    brandLogo: "https://i.pravatar.cc/150?u=audioplus",
    originalPrice: 349.0,
    salePrice: 299.0,
    rating: 4.9,
    reviewsCount: 210,
    soldCount: 950,
    imageUrl: "https://picsum.photos/seed/headphones/400/300",
    category: "Electronics",
    description: "Lose yourself in the music with industry-leading noise cancellation. These premium over-ear headphones deliver exceptional sound quality and all-day comfort for the ultimate listening experience.",
    features: ["Industry-leading Active Noise Cancellation", "High-resolution audio support", "Up to 30 hours of battery life with quick charge", "Touch sensor controls for easy operation"],
    additionalImages: ["https://picsum.photos/seed/headphones1/400/300", "https://picsum.photos/seed/headphones2/400/300", "https://picsum.photos/seed/headphones3/400/300"],
    flipkartUrl: "https://www.flipkart.com/dummy-headphones"
  },
];

export const testimonials = [
  {
    id: "t1",
    name: "Sarah Jenkins",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    rating: 5,
    quote: "I found the most amazing premium bag here. The quality is incredible and shipping was so fast!",
    brandRef: "Eshop Spot",
  },
  {
    id: "t2",
    name: "David Chen",
    avatar: "https://i.pravatar.cc/150?u=david",
    rating: 5,
    quote: "Got my new MacBook from Tech Haven here at a brilliant price. Authentic brands make all the difference for peace of mind.",
    brandRef: "Tech Haven",
  },
  {
    id: "t3",
    name: "Emma Watson",
    avatar: "https://i.pravatar.cc/150?u=emma",
    rating: 4,
    quote: "The best place to find unique electronics and audio gear. Audio Plus always has great deals and fast shipping.",
    brandRef: "Audio Plus",
  },
  {
    id: "t4",
    name: "Michael Ross",
    avatar: "https://i.pravatar.cc/150?u=michael",
    rating: 5,
    quote: "Started shopping for my custom tech here last month. The platform is incredibly fast and intuitive.",
    brandRef: "Keyboard Custom",
  },
];
