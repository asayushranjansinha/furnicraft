import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { useDispatch } from 'react-redux';
import cartReducer from '@/store/cart-slice';
import wishlistReducer from '@/store/wishlist-slice';

let persistor;

const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
});

const makeConfiguredStore = (reducer: Reducer) =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

export const makeStore = () => {
  if (typeof window !== 'undefined') {
    const storage = require('redux-persist/lib/storage').default;
    const persistConfig = {
      key: 'root',
      storage,
      whitelist: ['cart','wishlist'], // Only persist cart
    };
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const store = makeConfiguredStore(persistedReducer);
    persistor = persistStore(store);
    return store;
  }
  return makeConfiguredStore(rootReducer);
};

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export { persistor };