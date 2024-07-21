// src/store/wishlistThunks.ts

import { addToCart } from '@/store/cart-slice';
import { RootState } from '@/store/store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { removeFromWishlist } from './wishlist-slice';
import { WishlistItem } from '@/types';

export const moveToCartThunk = createAsyncThunk(
    'wishlist/moveToCart',
    async (productId: number, { getState, dispatch }) => {
        const state = getState() as RootState;
        const wishlistItem = state.wishlist.items.find((item: WishlistItem) => item.id === productId);

        if (wishlistItem) {
            // Create a Product object from the wishlist item
            const productToAdd = {
                id: wishlistItem.id,
                name: wishlistItem.name,
                price: wishlistItem.price,
                images: [wishlistItem.image],
            };

            // Add to cart
            dispatch(addToCart(productToAdd));

            // Remove from wishlist
            dispatch(removeFromWishlist(productId));
        }
    }
);