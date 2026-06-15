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
