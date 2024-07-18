"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Section {
  id: string;
  content: string;
  height: string;
}

const CheckoutPage: React.FC = () => {
  const [isNavigationVisible, setIsNavigationVisible] = useState<boolean>(false);
  const triggerSectionRef = useRef<HTMLElement | null>(null);

  const sections: Section[] = [
    { id: "section-1", content: "Section 1", height: "500px" },
    { id: "section-2", content: "Section 2", height: "500px" },
    { id: "section-3", content: "Section 3", height: "200px" },
    { id: "section-4", content: "Section 4", height: "500px" },
    { id: "section-5", content: "Section 5", height: "500px" },
  ];

  useEffect(() => {
    const headerElement = document.getElementById('shop-header') as HTMLElement;
    const triggerSection = triggerSectionRef.current;

    if (!headerElement || !triggerSection) return;

    const updateNavigationVisibility = (): void => {
      const headerBottom = headerElement.getBoundingClientRect().bottom;
      const triggerSectionTop = triggerSection.getBoundingClientRect().top;
      setIsNavigationVisible(triggerSectionTop <= headerBottom);
    };

    // Initial check
    updateNavigationVisibility();

    // Add scroll event listener
    window.addEventListener('scroll', updateNavigationVisibility);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', updateNavigationVisibility);
    };
  }, []);

  return (
    <div className="space-y-6">
      <AnimatePresence>
        {isNavigationVisible && (
          <motion.nav
            id="navigation-bar"
            className="sticky top-[53px] p-6 bg-red-400 left-0 right-0 z-40"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            Navigation Bar
          </motion.nav>
        )}
      </AnimatePresence>
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          ref={index === 2 ? triggerSectionRef : undefined}
          className={`h-[${section.height}] border-2 flex items-center justify-center`}
        >
          {section.content}
        </section>
      ))}
    </div>
  );
};

export default CheckoutPage;