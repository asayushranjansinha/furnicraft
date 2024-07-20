"use client";
import { ProductListViewNameEnum } from '@/types';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface ProductsViewContextType {
  currentView: ProductListViewNameEnum;
  setCurrentView: (view: ProductListViewNameEnum) => void;
}

const ProductsViewContext = createContext<ProductsViewContextType | undefined>(undefined);

export const ProductsViewProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [currentView, setCurrentView] = useState<ProductListViewNameEnum>(() => {
    const savedView = localStorage.getItem('currentView');
    return savedView ? JSON.parse(savedView) : ProductListViewNameEnum.GridView;
  });

  useEffect(() => {
    localStorage.setItem('currentView', JSON.stringify(currentView));
  }, [currentView]);

  return (
    <ProductsViewContext.Provider value={{ currentView, setCurrentView }}>
      {children}
    </ProductsViewContext.Provider>
  );
};

export const useView = () => {
  const context = useContext(ProductsViewContext);
  if (context === undefined) {
    throw new Error('useView must be used within a ViewProvider');
  }
  return context;
};