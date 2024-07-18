import {
  ProductListViewOptionType,
  ProductListViewNameEnum,
  ProductCategory,
  ProductCategoryValue,
  SortOption,
  Product,
} from "@/types";

export const productListViewOptions: ProductListViewOptionType[] = [
  {
    name: ProductListViewNameEnum.GridView,
    icon: (
      <img
        src="assets/svg/grid-icon.svg"
        alt="Grid view icon"
        className="w-5 h-5"
      />
    ),
  },
  {
    name: ProductListViewNameEnum.ListView,
    icon: (
      <img
        src="assets/svg/list-icon.svg"
        alt="List view icon"
        className="w-5 h-5"
      />
    ),
  },
  {
    name: ProductListViewNameEnum.CompactView,
    icon: (
      <img
        src="assets/svg/compact-icon.svg"
        alt="Compact view icon"
        className="w-5 h-5"
      />
    ),
  },
  {
    name: ProductListViewNameEnum.DetailedView,
    icon: (
      <img
        src="assets/svg/detailed-icon.svg"
        alt="Detailed view icon"
        className="w-5 h-5"
      />
    ),
  },
];

export const productCategories: ProductCategory[] = [
  { value: ProductCategoryValue.All, label: "All Categories" },
  { value: ProductCategoryValue.LivingRoom, label: "Living Room" },
  { value: ProductCategoryValue.Bedroom, label: "Bedroom" },
  { value: ProductCategoryValue.Dining, label: "Dining" },
  { value: ProductCategoryValue.Office, label: "Office" },
  { value: ProductCategoryValue.Outdoor, label: "Outdoor" },
  { value: ProductCategoryValue.Kitchen, label: "Kitchen" },
  { value: ProductCategoryValue.Bathroom, label: "Bathroom" },
  { value: ProductCategoryValue.Decor, label: "Home Decor" },
  { value: ProductCategoryValue.Lighting, label: "Lighting" },
  { value: ProductCategoryValue.Storage, label: "Storage" },
  { value: ProductCategoryValue.Mattresses, label: "Mattresses" },
  { value: ProductCategoryValue.Rugs, label: "Rugs" },
  { value: ProductCategoryValue.Curtains, label: "Curtains" },
];

export const sortOptions = [
  { value: SortOption.Newest, label: "Newest" },
  { value: SortOption.Oldest, label: "Oldest" },
  { value: SortOption.PriceLowToHigh, label: "Price: Low to High" },
  { value: SortOption.PriceHighToLow, label: "Price: High to Low" },
  { value: SortOption.Rating, label: "Rating" },
];

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Armchair",
    price: 499.99,
    description: "Comfortable and stylish armchair for your living room",
    category: "Furniture",
    currentDiscount: 10,
    brand: "HomeComfort",
    stock: 20,
    rating: 4.5,
    images: [
      "/assets/images/armchair-1.jpg",
      "/assets/images/armchair-2.jpg",
      "armchair-3.jpg",
    ],
    weight: 25,
    sku: "HC-ARM-001",
    reviews: [
      {
        name: "Emily Thompson",
        rating: 5,
        comment:
          "This product exceeded my expectations! It's exactly what I needed.",
      },
      {
        name: "Priya Patel",
        rating: 5,
        comment: "यह उत्कृष्ट उत्पाद है! मैं इसे अपने दोस्तों को भी सुझाएंगी।",
      },
      {
        name: "Michael Smith",
        rating: 4,
        comment:
          "Very good quality and fast delivery. Impressed with the service!",
      },
      {
        name: "Sophia Lee",
        rating: 5,
        comment:
          "I love this product! It's made a huge difference in my daily routine.",
      },
      {
        name: "David Johnson",
        rating: 4,
        comment: "Great value for the price. I would definitely buy it again.",
      },
      {
        name: "Arun Kumar",
        rating: 5,
        comment:
          "I am really happy with this purchase! It exceeded my expectations.",
      },
      {
        name: "Meera Reddy",
        rating: 4,
        comment: "Great product for the price. It's been very useful for me.",
      },
      {
        name: "Vikram Singh",
        rating: 5,
        comment: "Excellent service and product quality. I'm impressed!",
      },
    ],
  },
  {
    id: 2,
    name: "Dining Table",
    price: 799.99,
    description: "Elegant dining table made from solid wood",
    category: "Furniture",
    currentDiscount: 15,
    brand: "ElegantHomes",
    stock: 15,
    rating: 4.7,
    images: [
      "/assets/images/dining-table-1.jpg",
      "/assets/images/dining-table-2.jpg",
    ],
    weight: 45,
    sku: "EH-DT-002",
    reviews: [
      {
        name: "Emily Thompson",
        rating: 5,
        comment:
          "This product exceeded my expectations! It's exactly what I needed.",
      },
      {
        name: "Priya Patel",
        rating: 5,
        comment: "यह उत्कृष्ट उत्पाद है! मैं इसे अपने दोस्तों को भी सुझाएंगी।",
      },
      {
        name: "Michael Smith",
        rating: 4,
        comment:
          "Very good quality and fast delivery. Impressed with the service!",
      },
      {
        name: "Sophia Lee",
        rating: 5,
        comment:
          "I love this product! It's made a huge difference in my daily routine.",
      },
      {
        name: "David Johnson",
        rating: 4,
        comment: "Great value for the price. I would definitely buy it again.",
      },
      {
        name: "Arun Kumar",
        rating: 5,
        comment:
          "I am really happy with this purchase! It exceeded my expectations.",
      },
      {
        name: "Meera Reddy",
        rating: 4,
        comment: "Great product for the price. It's been very useful for me.",
      },
      {
        name: "Vikram Singh",
        rating: 5,
        comment: "Excellent service and product quality. I'm impressed!",
      },
    ],
  },
  {
    id: 3,
    name: "Bed Frame",
    price: 399.99,
    description: "Sturdy bed frame with a modern design",
    category: "Furniture",
    currentDiscount: 20,
    brand: "DreamBeds",
    stock: 10,
    rating: 4.3,
    images: [
      "/assets/images/bed-frame-1.jpg",
      "/assets/images/bed-frame-2.jpg",
      "/assets/images/bed-frame-3.jpg",
      "/assets/images/bed-frame-4.jpg",
      "/assets/images/bed-frame-5.jpg",
    ],
    weight: 50,
    sku: "DB-BF-003",
    reviews: [
      {
        name: "Emily Thompson",
        rating: 5,
        comment:
          "This product exceeded my expectations! It's exactly what I needed.",
      },
      {
        name: "Priya Patel",
        rating: 5,
        comment: "यह उत्कृष्ट उत्पाद है! मैं इसे अपने दोस्तों को भी सुझाएंगी।",
      },
      {
        name: "Michael Smith",
        rating: 4,
        comment:
          "Very good quality and fast delivery. Impressed with the service!",
      },
      {
        name: "Sophia Lee",
        rating: 5,
        comment:
          "I love this product! It's made a huge difference in my daily routine.",
      },
      {
        name: "David Johnson",
        rating: 4,
        comment: "Great value for the price. I would definitely buy it again.",
      },
      {
        name: "Arun Kumar",
        rating: 5,
        comment:
          "I am really happy with this purchase! It exceeded my expectations.",
      },
      {
        name: "Meera Reddy",
        rating: 4,
        comment: "Great product for the price. It's been very useful for me.",
      },
      {
        name: "Vikram Singh",
        rating: 5,
        comment: "Excellent service and product quality. I'm impressed!",
      },
    ],
  },
  {
    id: 4,
    name: "Bookshelf",
    price: 149.99,
    description: "Spacious bookshelf for all your books and decor",
    category: "Furniture",
    currentDiscount: 5,
    brand: "SmartStorage",
    stock: 25,
    rating: 4.1,
    images: [
      "/assets/images/bookshelf-1.jpg",
      "/assets/images/bookshelf-2.jpg",
      "/assets/images/bookshelf-3.jpg",
      "/assets/images/bookshelf-4.jpg",
      "/assets/images/bookshelf-5.jpg",
    ],
    weight: 30,
    sku: "SS-BS-004",
    reviews: [
      {
        name: "Emily Thompson",
        rating: 5,
        comment:
          "This product exceeded my expectations! It's exactly what I needed.",
      },
      {
        name: "Priya Patel",
        rating: 5,
        comment: "यह उत्कृष्ट उत्पाद है! मैं इसे अपने दोस्तों को भी सुझाएंगी।",
      },
      {
        name: "Michael Smith",
        rating: 4,
        comment:
          "Very good quality and fast delivery. Impressed with the service!",
      },
      {
        name: "Sophia Lee",
        rating: 5,
        comment:
          "I love this product! It's made a huge difference in my daily routine.",
      },
      {
        name: "David Johnson",
        rating: 4,
        comment: "Great value for the price. I would definitely buy it again.",
      },
      {
        name: "Arun Kumar",
        rating: 5,
        comment:
          "I am really happy with this purchase! It exceeded my expectations.",
      },
      {
        name: "Meera Reddy",
        rating: 4,
        comment: "Great product for the price. It's been very useful for me.",
      },
      {
        name: "Vikram Singh",
        rating: 5,
        comment: "Excellent service and product quality. I'm impressed!",
      },
    ],
  },
  {
    id: 5,
    name: "Recliner Chair",
    price: 299.99,
    description: "Comfortable recliner chair with adjustable settings",
    category: "Furniture",
    currentDiscount: 25,
    brand: "RelaxSeating",
    stock: 12,
    rating: 4.8,
    images: [
      "/assets/images/recliner-chair-1.jpg",
      "/assets/images/recliner-chair-2.jpg",
      "/assets/images/recliner-chair-3.jpg",
      "/assets/images/recliner-chair-4.jpg",
      "/assets/images/recliner-chair-5.jpg",
    ],
    weight: 35,
    sku: "RS-RC-005",
    reviews: [
      {
        name: "Emily Thompson",
        rating: 5,
        comment:
          "This product exceeded my expectations! It's exactly what I needed.",
      },
      {
        name: "Priya Patel",
        rating: 5,
        comment: "यह उत्कृष्ट उत्पाद है! मैं इसे अपने दोस्तों को भी सुझाएंगी।",
      },
      {
        name: "Michael Smith",
        rating: 4,
        comment:
          "Very good quality and fast delivery. Impressed with the service!",
      },
      {
        name: "Sophia Lee",
        rating: 5,
        comment:
          "I love this product! It's made a huge difference in my daily routine.",
      },
      {
        name: "David Johnson",
        rating: 4,
        comment: "Great value for the price. I would definitely buy it again.",
      },
      {
        name: "Arun Kumar",
        rating: 5,
        comment:
          "I am really happy with this purchase! It exceeded my expectations.",
      },
      {
        name: "Meera Reddy",
        rating: 4,
        comment: "Great product for the price. It's been very useful for me.",
      },
      {
        name: "Vikram Singh",
        rating: 5,
        comment: "Excellent service and product quality. I'm impressed!",
      },
    ],
  },
  {
    id: 6,
    name: "Coffee Table",
    price: 199.99,
    description: "Modern coffee table with a glass top",
    category: "Furniture",
    currentDiscount: 10,
    brand: "ModernLiving",
    stock: 30,
    rating: 4.2,
    images: [
      "/assets/images/coffee-table-1.jpg",
      "/assets/images/coffee-table-2.jpg",
      "/assets/images/coffee-table-3.jpg",
      "/assets/images/coffee-table-4.jpg",
    ],
    weight: 20,
    sku: "ML-CT-006",
    reviews: [
      {
        name: "Emily Thompson",
        rating: 5,
        comment:
          "This product exceeded my expectations! It's exactly what I needed.",
      },
      {
        name: "Priya Patel",
        rating: 5,
        comment: "यह उत्कृष्ट उत्पाद है! मैं इसे अपने दोस्तों को भी सुझाएंगी।",
      },
      {
        name: "Michael Smith",
        rating: 4,
        comment:
          "Very good quality and fast delivery. Impressed with the service!",
      },
      {
        name: "Sophia Lee",
        rating: 5,
        comment:
          "I love this product! It's made a huge difference in my daily routine.",
      },
      {
        name: "David Johnson",
        rating: 4,
        comment: "Great value for the price. I would definitely buy it again.",
      },
      {
        name: "Arun Kumar",
        rating: 5,
        comment:
          "I am really happy with this purchase! It exceeded my expectations.",
      },
      {
        name: "Meera Reddy",
        rating: 4,
        comment: "Great product for the price. It's been very useful for me.",
      },
      {
        name: "Vikram Singh",
        rating: 5,
        comment: "Excellent service and product quality. I'm impressed!",
      },
    ],
  },
  {
    id: 7,
    name: "Wardrobe",
    price: 699.99,
    description: "Spacious wardrobe with sliding doors",
    category: "Furniture",
    currentDiscount: 15,
    brand: "ClosetMasters",
    stock: 8,
    rating: 4.6,
    images: [
      "/assets/images/wardrobe-1.avif",
      "/assets/images/wardrobe-2.jpg",
      "/assets/images/wardrobe-3.avif",
    ],
    weight: 80,
    sku: "CM-WD-007",
    reviews: [
      {
        name: "Emily Thompson",
        rating: 5,
        comment:
          "This product exceeded my expectations! It's exactly what I needed.",
      },
      {
        name: "Priya Patel",
        rating: 5,
        comment: "यह उत्कृष्ट उत्पाद है! मैं इसे अपने दोस्तों को भी सुझाएंगी।",
      },
      {
        name: "Michael Smith",
        rating: 4,
        comment:
          "Very good quality and fast delivery. Impressed with the service!",
      },
      {
        name: "Sophia Lee",
        rating: 5,
        comment:
          "I love this product! It's made a huge difference in my daily routine.",
      },
      {
        name: "David Johnson",
        rating: 4,
        comment: "Great value for the price. I would definitely buy it again.",
      },
      {
        name: "Arun Kumar",
        rating: 5,
        comment:
          "I am really happy with this purchase! It exceeded my expectations.",
      },
      {
        name: "Meera Reddy",
        rating: 4,
        comment: "Great product for the price. It's been very useful for me.",
      },
      {
        name: "Vikram Singh",
        rating: 5,
        comment: "Excellent service and product quality. I'm impressed!",
      },
    ],
  },
  {
    id: 8,
    name: "Office Chair",
    price: 149.99,
    description: "Ergonomic office chair with lumbar support",
    category: "Furniture",
    currentDiscount: 20,
    brand: "OfficeComfort",
    stock: 40,
    rating: 4.0,
    images: [
      "/assets/images/office-chair-3.jpg",
      "/assets/images/office-chair-1.jpg",
      "/assets/images/office-chair-2.jpg",
      "/assets/images/office-chair-4.jpg",
      "/assets/images/office-chair-5.jpg",
    ],
    weight: 15,
    sku: "OC-CH-008",
    reviews: [
      {
        name: "Emily Thompson",
        rating: 5,
        comment:
          "This product exceeded my expectations! It's exactly what I needed.",
      },
      {
        name: "Priya Patel",
        rating: 5,
        comment: "यह उत्कृष्ट उत्पाद है! मैं इसे अपने दोस्तों को भी सुझाएंगी।",
      },
      {
        name: "Michael Smith",
        rating: 4,
        comment:
          "Very good quality and fast delivery. Impressed with the service!",
      },
      {
        name: "Sophia Lee",
        rating: 5,
        comment:
          "I love this product! It's made a huge difference in my daily routine.",
      },
      {
        name: "David Johnson",
        rating: 4,
        comment: "Great value for the price. I would definitely buy it again.",
      },
      {
        name: "Arun Kumar",
        rating: 5,
        comment:
          "I am really happy with this purchase! It exceeded my expectations.",
      },
      {
        name: "Meera Reddy",
        rating: 4,
        comment: "Great product for the price. It's been very useful for me.",
      },
      {
        name: "Vikram Singh",
        rating: 5,
        comment: "Excellent service and product quality. I'm impressed!",
      },
    ],
  },
  {
    id: 9,
    name: "TV Stand",
    price: 249.99,
    description: "Stylish TV stand with multiple compartments",
    category: "Furniture",
    currentDiscount: 5,
    brand: "MediaHub",
    stock: 18,
    rating: 4.4,
    images: [
      "/assets/images/tv-stand-1.jpg",
      "/assets/images/tv-stand-2.jpg",
      "/assets/images/tv-stand-3.jpg",
      "/assets/images/tv-stand-4.jpg",
      "/assets/images/tv-stand-5.jpg",
    ],
    weight: 40,
    sku: "MH-TV-009",
    reviews: [
      {
        name: "Emily Thompson",
        rating: 5,
        comment:
          "This product exceeded my expectations! It's exactly what I needed.",
      },
      {
        name: "Priya Patel",
        rating: 5,
        comment: "यह उत्कृष्ट उत्पाद है! मैं इसे अपने दोस्तों को भी सुझाएंगी।",
      },
      {
        name: "Michael Smith",
        rating: 4,
        comment:
          "Very good quality and fast delivery. Impressed with the service!",
      },
      {
        name: "Sophia Lee",
        rating: 5,
        comment:
          "I love this product! It's made a huge difference in my daily routine.",
      },
      {
        name: "David Johnson",
        rating: 4,
        comment: "Great value for the price. I would definitely buy it again.",
      },
      {
        name: "Arun Kumar",
        rating: 5,
        comment:
          "I am really happy with this purchase! It exceeded my expectations.",
      },
      {
        name: "Meera Reddy",
        rating: 4,
        comment: "Great product for the price. It's been very useful for me.",
      },
      {
        name: "Vikram Singh",
        rating: 5,
        comment: "Excellent service and product quality. I'm impressed!",
      },
    ],
  },
  {
    id: 10,
    name: "Nightstand",
    price: 99.99,
    description: "Compact nightstand with a drawer and shelf",
    category: "Furniture",
    currentDiscount: 25,
    brand: "BedsideEssentials",
    stock: 35,
    rating: 4.1,
    images: [
      "/assets/images/nightstand-1.jpg",
      "/assets/images/nightstand-2.jpg",
      "/assets/images/nightstand-3.jpg",
      "/assets/images/nightstand-4.jpg",
      "/assets/images/nightstand-5.jpg",
    ],
    weight: 10,
    sku: "BE-NS-010",
    reviews: [
      {
        name: "Emily Thompson",
        rating: 5,
        comment:
          "This product exceeded my expectations! It's exactly what I needed.",
      },
      {
        name: "Priya Patel",
        rating: 5,
        comment: "यह उत्कृष्ट उत्पाद है! मैं इसे अपने दोस्तों को भी सुझाएंगी।",
      },
      {
        name: "Michael Smith",
        rating: 4,
        comment:
          "Very good quality and fast delivery. Impressed with the service!",
      },
      {
        name: "Sophia Lee",
        rating: 5,
        comment:
          "I love this product! It's made a huge difference in my daily routine.",
      },
      {
        name: "David Johnson",
        rating: 4,
        comment: "Great value for the price. I would definitely buy it again.",
      },
      {
        name: "Arun Kumar",
        rating: 5,
        comment:
          "I am really happy with this purchase! It exceeded my expectations.",
      },
      {
        name: "Meera Reddy",
        rating: 4,
        comment: "Great product for the price. It's been very useful for me.",
      },
      {
        name: "Vikram Singh",
        rating: 5,
        comment: "Excellent service and product quality. I'm impressed!",
      },
    ],
  },
  {
    id: 11,
    name: "Sofa",
    price: 899.99,
    description: "Luxury leather sofa with seating for three",
    category: "Furniture",
    currentDiscount: 20,
    brand: "ComfortLiving",
    stock: 10,
    rating: 4.7,
    images: [
      "/assets/images/sofa-1.jpg",
      "/assets/images/sofa-2.jpg",
      "/assets/images/sofa-3.jpg",
      "/assets/images/sofa-4.jpg",
      "/assets/images/sofa-5.jpg",
    ],
    weight: 70,
    sku: "CL-SF-011",
    reviews: [
      {
        name: "Emily Thompson",
        rating: 5,
        comment:
          "This product exceeded my expectations! It's exactly what I needed.",
      },
      {
        name: "Priya Patel",
        rating: 5,
        comment: "यह उत्कृष्ट उत्पाद है! मैं इसे अपने दोस्तों को भी सुझाएंगी।",
      },
      {
        name: "Michael Smith",
        rating: 4,
        comment:
          "Very good quality and fast delivery. Impressed with the service!",
      },
      {
        name: "Sophia Lee",
        rating: 5,
        comment:
          "I love this product! It's made a huge difference in my daily routine.",
      },
      {
        name: "David Johnson",
        rating: 4,
        comment: "Great value for the price. I would definitely buy it again.",
      },
      {
        name: "Arun Kumar",
        rating: 5,
        comment:
          "I am really happy with this purchase! It exceeded my expectations.",
      },
      {
        name: "Meera Reddy",
        rating: 4,
        comment: "Great product for the price. It's been very useful for me.",
      },
      {
        name: "Vikram Singh",
        rating: 5,
        comment: "Excellent service and product quality. I'm impressed!",
      },
    ],
  },
  {
    id: 12,
    name: "Patio Set",
    price: 599.99,
    description: "Outdoor patio set with table and chairs",
    category: "Outdoor",
    currentDiscount: 15,
    brand: "OutdoorElegance",
    stock: 5,
    rating: 4.5,
    images: [
      "/assets/images/patio-set-1.jpg",
      "/assets/images/patio-set-2.jpg",
      "/assets/images/patio-set-3.jpg",
    ],
    weight: 55,
    sku: "OE-PS-012",
    reviews: [
      {
        name: "Emily Thompson",
        rating: 5,
        comment:
          "This product exceeded my expectations! It's exactly what I needed.",
      },
      {
        name: "Priya Patel",
        rating: 5,
        comment: "यह उत्कृष्ट उत्पाद है! मैं इसे अपने दोस्तों को भी सुझाएंगी।",
      },
      {
        name: "Michael Smith",
        rating: 4,
        comment:
          "Very good quality and fast delivery. Impressed with the service!",
      },
      {
        name: "Sophia Lee",
        rating: 5,
        comment:
          "I love this product! It's made a huge difference in my daily routine.",
      },
      {
        name: "David Johnson",
        rating: 4,
        comment: "Great value for the price. I would definitely buy it again.",
      },
      {
        name: "Arun Kumar",
        rating: 5,
        comment:
          "I am really happy with this purchase! It exceeded my expectations.",
      },
      {
        name: "Meera Reddy",
        rating: 4,
        comment: "Great product for the price. It's been very useful for me.",
      },
      {
        name: "Vikram Singh",
        rating: 5,
        comment: "Excellent service and product quality. I'm impressed!",
      },
    ],
  },
  {
    id: 13,
    name: "Bar Stool",
    price: 129.99,
    description: "Adjustable height bar stool with cushioned seat",
    category: "Furniture",
    currentDiscount: 10,
    brand: "BarEssentials",
    stock: 25,
    rating: 4.3,
    images: [
      "/assets/images/bar-stool-1.jpg",
      "/assets/images/bar-stool-2.jpg",
      "/assets/images/bar-stool-3.jpg",
    ],
    weight: 8,
    sku: "BE-BS-013",
    reviews: [
      {
        name: "Emily Thompson",
        rating: 5,
        comment:
          "This product exceeded my expectations! It's exactly what I needed.",
      },
      {
        name: "Priya Patel",
        rating: 5,
        comment: "यह उत्कृष्ट उत्पाद है! मैं इसे अपने दोस्तों को भी सुझाएंगी।",
      },
      {
        name: "Michael Smith",
        rating: 4,
        comment:
          "Very good quality and fast delivery. Impressed with the service!",
      },
      {
        name: "Sophia Lee",
        rating: 5,
        comment:
          "I love this product! It's made a huge difference in my daily routine.",
      },
      {
        name: "David Johnson",
        rating: 4,
        comment: "Great value for the price. I would definitely buy it again.",
      },
      {
        name: "Arun Kumar",
        rating: 5,
        comment:
          "I am really happy with this purchase! It exceeded my expectations.",
      },
      {
        name: "Meera Reddy",
        rating: 4,
        comment: "Great product for the price. It's been very useful for me.",
      },
      {
        name: "Vikram Singh",
        rating: 5,
        comment: "Excellent service and product quality. I'm impressed!",
      },
    ],
  },
  {
    id: 14,
    name: "Desk Lamp",
    price: 49.99,
    description: "Modern desk lamp with adjustable brightness",
    category: "Lighting",
    currentDiscount: 5,
    brand: "BrightLights",
    stock: 50,
    rating: 4.2,
    images: [
      "/assets/images/desk-lamp-1.jpg",
      "/assets/images/desk-lamp-2.jpg",
      "/assets/images/desk-lamp-3.jpg",
      "/assets/images/desk-lamp-4.jpg",
      "/assets/images/desk-lamp-5.jpg",
      "/assets/images/desk-lamp-6.jpg",
      "/assets/images/desk-lamp-7.jpg",
      "/assets/images/desk-lamp-8.jpg",
    ],
    weight: 2,
    sku: "BL-DL-014",
    reviews: [
      {
        name: "Emily Thompson",
        rating: 5,
        comment:
          "This product exceeded my expectations! It's exactly what I needed.",
      },
      {
        name: "Priya Patel",
        rating: 5,
        comment: "यह उत्कृष्ट उत्पाद है! मैं इसे अपने दोस्तों को भी सुझाएंगी।",
      },
      {
        name: "Michael Smith",
        rating: 4,
        comment:
          "Very good quality and fast delivery. Impressed with the service!",
      },
      {
        name: "Sophia Lee",
        rating: 5,
        comment:
          "I love this product! It's made a huge difference in my daily routine.",
      },
      {
        name: "David Johnson",
        rating: 4,
        comment: "Great value for the price. I would definitely buy it again.",
      },
      {
        name: "Arun Kumar",
        rating: 5,
        comment:
          "I am really happy with this purchase! It exceeded my expectations.",
      },
      {
        name: "Meera Reddy",
        rating: 4,
        comment: "Great product for the price. It's been very useful for me.",
      },
      {
        name: "Vikram Singh",
        rating: 5,
        comment: "Excellent service and product quality. I'm impressed!",
      },
    ],
  },
  {
    id: 15,
    name: "Area Rug",
    price: 199.99,
    description: "Soft area rug with geometric patterns",
    category: "Decor",
    currentDiscount: 20,
    brand: "HomeDecor",
    stock: 20,
    rating: 4.4,
    images: [
      "/assets/images/area-rug-1.jpg",
      "/assets/images/area-rug-2.jpg",
      "/assets/images/area-rug-3.jpg",
    ],
    weight: 5,
    sku: "HD-AR-015",
    reviews: [
      {
        name: "Emily Thompson",
        rating: 5,
        comment:
          "This product exceeded my expectations! It's exactly what I needed.",
      },
      {
        name: "Priya Patel",
        rating: 5,
        comment: "यह उत्कृष्ट उत्पाद है! मैं इसे अपने दोस्तों को भी सुझाएंगी।",
      },
      {
        name: "Michael Smith",
        rating: 4,
        comment:
          "Very good quality and fast delivery. Impressed with the service!",
      },
      {
        name: "Sophia Lee",
        rating: 5,
        comment:
          "I love this product! It's made a huge difference in my daily routine.",
      },
      {
        name: "David Johnson",
        rating: 4,
        comment: "Great value for the price. I would definitely buy it again.",
      },
      {
        name: "Arun Kumar",
        rating: 5,
        comment:
          "I am really happy with this purchase! It exceeded my expectations.",
      },
      {
        name: "Meera Reddy",
        rating: 4,
        comment: "Great product for the price. It's been very useful for me.",
      },
      {
        name: "Vikram Singh",
        rating: 5,
        comment: "Excellent service and product quality. I'm impressed!",
      },
    ],
  },
  {
    id: 16,
    name: "Wall Art",
    price: 79.99,
    description: "Abstract wall art to enhance your living space",
    category: "Decor",
    currentDiscount: 10,
    brand: "ArtisticTouch",
    stock: 15,
    rating: 4.5,
    images: [
      "/assets/images/wall-art-1.jpg",
      "/assets/images/wall-art-2.jpg",
      "/assets/images/wall-art-3.jpg",
      "/assets/images/wall-art-4.jpg",
      "/assets/images/wall-art-5.jpg",
    ],
    weight: 1,
    sku: "AT-WA-016",
    reviews: [
      {
        name: "Emily Thompson",
        rating: 5,
        comment:
          "This product exceeded my expectations! It's exactly what I needed.",
      },
      {
        name: "Priya Patel",
        rating: 5,
        comment: "यह उत्कृष्ट उत्पाद है! मैं इसे अपने दोस्तों को भी सुझाएंगी।",
      },
      {
        name: "Michael Smith",
        rating: 4,
        comment:
          "Very good quality and fast delivery. Impressed with the service!",
      },
      {
        name: "Sophia Lee",
        rating: 5,
        comment:
          "I love this product! It's made a huge difference in my daily routine.",
      },
      {
        name: "David Johnson",
        rating: 4,
        comment: "Great value for the price. I would definitely buy it again.",
      },
      {
        name: "Arun Kumar",
        rating: 5,
        comment:
          "I am really happy with this purchase! It exceeded my expectations.",
      },
      {
        name: "Meera Reddy",
        rating: 4,
        comment: "Great product for the price. It's been very useful for me.",
      },
      {
        name: "Vikram Singh",
        rating: 5,
        comment: "Excellent service and product quality. I'm impressed!",
      },
    ],
  },
  {
    id: 17,
    name: "Bookshelf Ladder",
    price: 199.99,
    description: "Stylish bookshelf ladder with multiple shelves",
    category: "Furniture",
    currentDiscount: 15,
    brand: "SmartStorage",
    stock: 10,
    rating: 4.6,
    images: [
      "/assets/images/bookshelf-ladder-1.jpg",
      "/assets/images/bookshelf-ladder-2.jpg",
      "/assets/images/bookshelf-ladder-3.jpg",
      "/assets/images/bookshelf-ladder-4.jpg",
      "/assets/images/bookshelf-ladder-5.jpg",
    ],
    weight: 15,
    sku: "SS-BL-017",
    reviews: [
      {
        name: "Emily Thompson",
        rating: 5,
        comment:
          "This product exceeded my expectations! It's exactly what I needed.",
      },
      {
        name: "Priya Patel",
        rating: 5,
        comment: "यह उत्कृष्ट उत्पाद है! मैं इसे अपने दोस्तों को भी सुझाएंगी।",
      },
      {
        name: "Michael Smith",
        rating: 4,
        comment:
          "Very good quality and fast delivery. Impressed with the service!",
      },
      {
        name: "Sophia Lee",
        rating: 5,
        comment:
          "I love this product! It's made a huge difference in my daily routine.",
      },
      {
        name: "David Johnson",
        rating: 4,
        comment: "Great value for the price. I would definitely buy it again.",
      },
      {
        name: "Arun Kumar",
        rating: 5,
        comment:
          "I am really happy with this purchase! It exceeded my expectations.",
      },
      {
        name: "Meera Reddy",
        rating: 4,
        comment: "Great product for the price. It's been very useful for me.",
      },
      {
        name: "Vikram Singh",
        rating: 5,
        comment: "Excellent service and product quality. I'm impressed!",
      },
    ],
  },
  {
    id: 18,
    name: "Floor Lamp",
    price: 99.99,
    description: "Tall floor lamp with a sleek design",
    category: "Lighting",
    currentDiscount: 20,
    brand: "LightUp",
    stock: 25,
    rating: 4.4,
    images: [
      "/assets/images/floor-lamp-1.jpg",
      "/assets/images/floor-lamp-2.jpg",
      "/assets/images/floor-lamp-3.jpg",
      "/assets/images/floor-lamp-4.jpg",
      "/assets/images/floor-lamp-5.jpg",
    ],
    weight: 4,
    sku: "LU-FL-018",
    reviews: [
      {
        name: "Emily Thompson",
        rating: 5,
        comment:
          "This product exceeded my expectations! It's exactly what I needed.",
      },
      {
        name: "Priya Patel",
        rating: 5,
        comment: "यह उत्कृष्ट उत्पाद है! मैं इसे अपने दोस्तों को भी सुझाएंगी।",
      },
      {
        name: "Michael Smith",
        rating: 4,
        comment:
          "Very good quality and fast delivery. Impressed with the service!",
      },
      {
        name: "Sophia Lee",
        rating: 5,
        comment:
          "I love this product! It's made a huge difference in my daily routine.",
      },
      {
        name: "David Johnson",
        rating: 4,
        comment: "Great value for the price. I would definitely buy it again.",
      },
      {
        name: "Arun Kumar",
        rating: 5,
        comment:
          "I am really happy with this purchase! It exceeded my expectations.",
      },
      {
        name: "Meera Reddy",
        rating: 4,
        comment: "Great product for the price. It's been very useful for me.",
      },
      {
        name: "Vikram Singh",
        rating: 5,
        comment: "Excellent service and product quality. I'm impressed!",
      },
    ],
  },
  {
    id: 19,
    name: "Kitchen Island",
    price: 399.99,
    description: "Versatile kitchen island with storage space",
    category: "Furniture",
    currentDiscount: 10,
    brand: "KitchenPro",
    stock: 8,
    rating: 4.5,
    images: [
      "/assets/images/kitchen-island-1.jpg",
      "/assets/images/kitchen-island-2.jpg",
      "/assets/images/kitchen-island-3.jpg",
      "/assets/images/kitchen-island-4.jpg",
      "/assets/images/kitchen-island-5.jpg",
    ],
    weight: 60,
    sku: "KP-KI-019",
    reviews: [
      {
        name: "Emily Thompson",
        rating: 5,
        comment:
          "This product exceeded my expectations! It's exactly what I needed.",
      },
      {
        name: "Priya Patel",
        rating: 5,
        comment: "यह उत्कृष्ट उत्पाद है! मैं इसे अपने दोस्तों को भी सुझाएंगी।",
      },
      {
        name: "Michael Smith",
        rating: 4,
        comment:
          "Very good quality and fast delivery. Impressed with the service!",
      },
      {
        name: "Sophia Lee",
        rating: 5,
        comment:
          "I love this product! It's made a huge difference in my daily routine.",
      },
      {
        name: "David Johnson",
        rating: 4,
        comment: "Great value for the price. I would definitely buy it again.",
      },
      {
        name: "Arun Kumar",
        rating: 5,
        comment:
          "I am really happy with this purchase! It exceeded my expectations.",
      },
      {
        name: "Meera Reddy",
        rating: 4,
        comment: "Great product for the price. It's been very useful for me.",
      },
      {
        name: "Vikram Singh",
        rating: 5,
        comment: "Excellent service and product quality. I'm impressed!",
      },
    ],
  },
  {
    id: 20,
    name: "Lounge Chair",
    price: 349.99,
    description: "Comfortable lounge chair with a modern design",
    category: "Furniture",
    currentDiscount: 25,
    brand: "RelaxSeating",
    stock: 15,
    rating: 4.8,
    images: [
      "/assets/images/lounge-chair-1.jpg",
      "/assets/images/lounge-chair-2.jpg",
      "/assets/images/lounge-chair-3.jpg",
      "/assets/images/lounge-chair-4.jpg",
    ],
    weight: 18,
    sku: "RS-LC-020",
    reviews: [
      {
        name: "Emily Thompson",
        rating: 5,
        comment:
          "This product exceeded my expectations! It's exactly what I needed.",
      },
      {
        name: "Priya Patel",
        rating: 5,
        comment: "यह उत्कृष्ट उत्पाद है! मैं इसे अपने दोस्तों को भी सुझाएंगी।",
      },
      {
        name: "Michael Smith",
        rating: 4,
        comment:
          "Very good quality and fast delivery. Impressed with the service!",
      },
      {
        name: "Sophia Lee",
        rating: 5,
        comment:
          "I love this product! It's made a huge difference in my daily routine.",
      },
      {
        name: "David Johnson",
        rating: 4,
        comment: "Great value for the price. I would definitely buy it again.",
      },
      {
        name: "Arun Kumar",
        rating: 5,
        comment:
          "I am really happy with this purchase! It exceeded my expectations.",
      },
      {
        name: "Meera Reddy",
        rating: 4,
        comment: "Great product for the price. It's been very useful for me.",
      },
      {
        name: "Vikram Singh",
        rating: 5,
        comment: "Excellent service and product quality. I'm impressed!",
      },
    ],
  },
];
