import { WishlistItem } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WishlistState {
    items: WishlistItem[];
}

const initialState: WishlistState = {
    items: [],
};

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist: (state, action: PayloadAction<Omit<WishlistItem, 'addedAt'>>) => {
            const product = action.payload;
            const existingItem = state.items.find(item => item.id === product.id);

            if (!existingItem) {
                const newWishlistItem: WishlistItem = {
                    ...product,
                    addedAt: new Date().toISOString()
                };
                state.items.push(newWishlistItem);
            }
        },
        removeFromWishlist: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearWishlist: (state) => {
            state.items = [];
        },
        moveToCart: (state, action: PayloadAction<number>) => {
            // This action doesn't modify the wishlist state
            // It will be used in a thunk to move an item to the cart
        },
    },
});

export const { addToWishlist, removeFromWishlist, clearWishlist, moveToCart } = wishlistSlice.actions;

export const selectWishlistItems = (state: { wishlist: WishlistState }) => state.wishlist.items;
export const selectWishlistItemCount = (state: { wishlist: WishlistState }) => state.wishlist.items.length;

export default wishlistSlice.reducer;