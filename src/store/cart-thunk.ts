// src/store/cartThunks.ts

import { removeFromCart } from '@/store/cart-slice';
import { RootState } from '@/store/store';
import { addToWishlist } from '@/store/wishlist-slice';
import { CartItem, WishlistItem } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const moveToWishlistThunk = createAsyncThunk(
    'cart/moveToWishlist',
    async (productId: number, { getState, dispatch }) => {
        const state = getState() as RootState;
        const cartItem = state.cart.items.find((item: CartItem) => item.id === productId);
        if (cartItem) {
            let additionalDetails: Omit<WishlistItem, 'addedAt'> = {
                id: cartItem.id,
                name: cartItem.name,
                price: cartItem.price,
                image: cartItem.image,
                category: "",
                brand: "",
                currentDiscount: 0
            };
            try {
                // additionalDetails = await fetchProductDetails(productId);
                additionalDetails = {
                    ...additionalDetails,
                    category: "mock category",
                    brand: "mock brand",
                    currentDiscount: 20
                };
            } catch (error) {
                console.log("Error in moving item from cart to wishlist");
                additionalDetails = {
                    ...additionalDetails,
                    category: "mock category",
                    brand: "mock brand",
                    currentDiscount: 20
                };
            }
            const itemToAdd: Omit<WishlistItem, 'addedAt'> = {
                ...additionalDetails,
                category: additionalDetails.category,
                brand: additionalDetails.brand,
                currentDiscount: additionalDetails.currentDiscount
            }

            // Add to cart
            dispatch(addToWishlist(itemToAdd));

            // Remove from wishlist
            dispatch(removeFromCart(productId));

        }


    }
);