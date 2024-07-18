"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import StickyBox from "react-sticky-box";

const CheckoutPage = () => {
  const [headerHeight, setHeaderHeight] = useState<number | null>(null);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const lastScrollY = useRef<number>(0);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const header = document.getElementById("shop-header");
    if (header) {
      const resizeObserver = new ResizeObserver(entries => {
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
    const newIsSticky = stickyTop <= headerHeight;

    if (newIsSticky) {
      if (currentScrollY < lastScrollY.current) {
        // Scrolling up
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setIsVisible(false);
      }
    } else {
      setIsVisible(true);
    }

    setIsSticky(newIsSticky);
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
      <section className="flex justify-center items-center h-[500px] text-5xl border-2 border-black">
        Section One
      </section>
      <section className="flex justify-center items-center h-[500px] text-5xl border-2 border-black">
        Section Two
      </section>
      <StickyBox
        offsetTop={headerHeight ?? 100}
        className={`z-40 transition-all duration-300 ease-linear ${
          isSticky && !isVisible ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <section
          ref={stickyRef}
          className={`flex justify-center items-center text-5xl border-2 border-black ${
            isSticky ? "bg-red-500" : "bg-blue-500"
          }`}
        >
          {headerHeight}
        </section>
      </StickyBox>
      <section className="flex justify-center items-center h-[500px] text-5xl border-2 border-black">
        Section Four
      </section>
      <section className="flex justify-center items-center h-[500px] text-5xl border-2 border-black">
        Section Five
      </section>
    </div>
  );
};

export default CheckoutPage;