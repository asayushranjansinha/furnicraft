import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const calculateDiscountedPrice = (price: number, discount: number) => {
  return price * (1 - discount / 100);
};