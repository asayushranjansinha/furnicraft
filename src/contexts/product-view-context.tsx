"use client";
import { ProductListViewNameEnum } from '@/types';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface ViewContextType {
  currentView: ProductListViewNameEnum;
  setCurrentView: (view: ProductListViewNameEnum) => void;
}

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export const ProductsViewProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [currentView, setCurrentView] = useState<ProductListViewNameEnum>(ProductListViewNameEnum.GridView);

  useEffect(() => {
    // This effect runs only on the client side
    const savedView = localStorage.getItem('currentView');
    if (savedView) {
      setCurrentView(JSON.parse(savedView));
    }
  }, []);

  useEffect(() => {
    // This effect also runs only on the client side
    localStorage.setItem('currentView', JSON.stringify(currentView));
  }, [currentView]);

  return (
    <ViewContext.Provider value={{ currentView, setCurrentView }}>
      {children}
    </ViewContext.Provider>
  );
};

export const useView = () => {
  const context = useContext(ViewContext);
  if (context === undefined) {
    throw new Error('useView must be used within a ViewProvider');
  }
  return context;
};