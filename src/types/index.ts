export enum ProductListViewNameEnum {
    GridView = "Grid View",
    ListView = "List View",
    CompactView = "Compact View",
    DetailedView = "Detailed View",
}
export enum ProductCategoryValue {
    All = "all",
    LivingRoom = "livingRoom",
    Bedroom = "bedroom",
    Dining = "dining",
    Office = "office",
    Outdoor = "outdoor",
    Kitchen = "kitchen",
    Bathroom = "bathroom",
    Decor = "decor",
    Lighting = "lighting",
    Storage = "storage",
    Mattresses = "mattresses",
    Rugs = "rugs",
    Curtains = "curtains",
}

export enum SortOption {
    Newest = "newest",
    Oldest = "oldest",
    PriceLowToHigh = "price-low-to-high",
    PriceHighToLow = "price-high-to-low",
    Rating = "rating",
}

export type ProductListViewOptionType = {
    name: ProductListViewNameEnum;
    icon: JSX.Element;
}

export type ProductCategory = {
    value: ProductCategoryValue;
    label: string;
};

export interface Review {
    name: string;
    rating: number;
    comment: string;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    currentDiscount: number;
    brand: string;
    stock: number;
    rating: number;
    images: string[];
    weight: number;
    sku: string;
    reviews: Review[];
}
export type HeroCarouselItemTypes = {
    id: number;
    imageSrc: string;
    title: string;
    link: string;
}