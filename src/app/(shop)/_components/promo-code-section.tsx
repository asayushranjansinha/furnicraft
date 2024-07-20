import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

export const PromoCodeSection: React.FC = () => {
  const [showPromoInput, setShowPromoInput] = useState(false);
  const [promoCode, setPromoCode] = useState("");

  const handleApplyPromo = () => {
    if (showPromoInput) {
      console.log("Applying promo code:", promoCode);
      setPromoCode("");
    } else {
      setShowPromoInput(true);
    }
  };

  return (
    <div className="h-10 relative">
      <AnimatePresence mode="wait">
        {!showPromoInput ? (
          <div
            key="promo-button"
            className="flex items-center justify-between text-sm absolute inset-0"
          >
            <span className="text-muted-foreground">Have a promo code?</span>
            <Button
              variant="link"
              size="sm"
              className="p-0 h-auto"
              onClick={() => setShowPromoInput(true)}
            >
              Apply
            </Button>
          </div>
        ) : (
          <motion.div
            key="promo-input"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex items-center space-x-2 absolute inset-0"
          >
            <Input
              type="text"
              placeholder="Enter promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="flex-grow"
            />
            <Button size="sm" onClick={handleApplyPromo}>
              Apply
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
