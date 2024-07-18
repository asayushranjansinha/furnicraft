"use client";
import { ProductListViewNameEnum } from "@/types";
import { useEffect, useRef, useState, useCallback } from "react";
import ShopBanner from "../_components/banner";
import ProductList from "../_components/product-list";
import ProductListControls from "../_components/product-list-controls";

const ProductListing = () => {
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [isNavigationVisible, setIsNavigationVisible] = useState<boolean>(false);
  const triggerSectionRef = useRef<HTMLElement | null>(null);
  const [currentView, setCurrentView] = useState<ProductListViewNameEnum>(
    ProductListViewNameEnum.GridView
  );
  const lastScrollY = useRef<number>(0);

  const throttle = (func: Function, limit: number) => {
    let inThrottle: boolean;
    return function(this: any, ...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };

  const updateNavigationVisibility = useCallback(throttle(() => {
    const headerElement = document.getElementById("shop-header") as HTMLElement;
    const triggerSection = triggerSectionRef.current;

    if (!headerElement || !triggerSection) return;

    const headerBottom = headerElement.getBoundingClientRect().bottom;
    const triggerSectionTop = triggerSection.getBoundingClientRect().top;
    const currentScrollY = window.scrollY;

    if (triggerSectionTop <= headerBottom) {
      const isScrollingDown = currentScrollY > lastScrollY.current;
      setIsNavigationVisible(!isScrollingDown);
    } else {
      setIsNavigationVisible(false);
    }

    lastScrollY.current = currentScrollY;
  }, 100), []);

  useEffect(() => {
    const headerElement = document.getElementById("shop-header") as HTMLElement;
    if (!headerElement) return;

    const updateHeaderHeight = () => {
      const height = headerElement.offsetHeight;
      setHeaderHeight(height);
    };

    updateHeaderHeight();
    updateNavigationVisibility();

    window.addEventListener("scroll", updateNavigationVisibility);
    window.addEventListener("resize", () => {
      updateHeaderHeight();
      updateNavigationVisibility();
    });

    return () => {
      window.removeEventListener("scroll", updateNavigationVisibility);
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, [updateNavigationVisibility]);

  return (
    <div className="flex flex-col space-y-4">
      <ShopBanner />

      <section
        ref={triggerSectionRef}
        style={{ top: `${headerHeight}px` }}
        className={`
          bg-white py-2 z-40
          transition-all duration-300 ease-in-out
          ${isNavigationVisible ? "sticky left-0 right-0" : "static"}
        `}
      >
        <ProductListControls
          currentView={currentView}
          onChangeViewOption={setCurrentView}
        />
      </section>
      <section>
        <ProductList viewOption={currentView} />
      </section>
    </div>
  );
};

export default ProductListing;