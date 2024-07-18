"use client";
import { ProductListViewNameEnum } from "@/types";
import { useCallback, useEffect, useRef, useState } from "react";
import StickyBox from "react-sticky-box";
import ShopBanner from "../_components/banner";
import ProductList from "../_components/product-list";
import ProductListControls from "../_components/product-list-controls";

const CheckoutPage = () => {
  const [headerHeight, setHeaderHeight] = useState<number | null>(null);
  const [stickyState, setStickyState] = useState<
    "normal" | "sticky" | "hidden"
  >("normal");
  const lastScrollY = useRef<number>(0);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const rafId = useRef<number | null>(null);
  const [currentView, setCurrentView] = useState<ProductListViewNameEnum>(
    ProductListViewNameEnum.GridView
  );

  useEffect(() => {
    const header = document.getElementById("shop-header");
    if (header) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          setHeaderHeight(entry.contentRect.height);
        }
      });
      resizeObserver.observe(header);
      return () => resizeObserver.disconnect();
    }
  }, []);

  const handleScroll = useCallback(() => {
    if (!stickyRef.current || headerHeight === null) return;

    const currentScrollY = window.scrollY;
    const stickyTop = stickyRef.current.getBoundingClientRect().top;
    const isSticky = stickyTop <= headerHeight;

    if (isSticky) {
      if (currentScrollY < lastScrollY.current) {
        // Scrolling up
        setStickyState("sticky");
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setStickyState("hidden");
      }
    } else {
      setStickyState("normal");
    }

    lastScrollY.current = currentScrollY;
  }, [headerHeight]);

  useEffect(() => {
    const onScroll = () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
      rafId.current = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [handleScroll]);

  return (
    <div className="space-y-6">
      <ShopBanner />
      <StickyBox
        offsetTop={headerHeight ?? 100}
        className={`z-40 transition-all duration-300 ease-linear ${
          stickyState === "hidden" ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <section ref={stickyRef} className={`py-2 bg-white`}>
          <ProductListControls
            currentView={currentView}
            onChangeViewOption={setCurrentView}
          />
        </section>
      </StickyBox>
      <section>
        <ProductList viewOption={currentView} />
      </section>
    </div>
  );
};

export default CheckoutPage;
