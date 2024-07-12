"use client";
import { useState, useRef, useEffect } from "react";
import { ArrowRight, TicketPercent, X } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";

const NotificationBar = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [height, setHeight] = useState<number | string>("auto");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  }, []);

  function handleNotificationClose() {
    setIsVisible(false);
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="notification-bar"
          className="sticky top-[64px] left-0 right-0 z-30"
          initial={{ height: "auto", opacity: 1 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ overflow: "hidden" }}
        >
          <div
            ref={ref}
            className="bg-secondary py-2 px-4"
            role="alert"
            aria-live="polite"
          >
            <div className="flex flex-row items-center justify-between gap-x-2">
              <div className="hidden lg:block" />
              <div className="flex items-center space-x-1 caption-2 lg:caption-1">
                <TicketPercent size={18} aria-hidden="true" />
                <div className="">
                  <span>30% off storewide — Limited time! </span>
                </div>
                <div className="hidden lg:block">
                  <Button
                    variant={"link"}
                    className="text-blue-500 underline p-1 flex items-center h-fit"
                    asChild
                  >
                    <Link
                      href="/sale"
                      className="h-fit flex items-center"
                      aria-label="Shop Now for 30% off storewide"
                    >
                      <span className="caption-2 lg:caption-1">Shop Now</span>
                      <ArrowRight
                        size={18}
                        className="ml-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </Button>
                </div>
              </div>
              <Button
                onClick={handleNotificationClose}
                className="p-1 flex items-center h-fit"
                variant={"ghost"}
                aria-label="Close notification"
              >
                <X size={18} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotificationBar;
