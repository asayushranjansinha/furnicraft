"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PROMOCODES } from "@/data/constants";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import React, { useState } from "react";

type Props = {
  onPromoCodeApplied: (discountRate: number, code: string) => void;
  onPromoCodeRemoved: () => void;
};

export const PromoCodeSection: React.FC<Props> = ({
  onPromoCodeApplied,
  onPromoCodeRemoved,
}) => {
  const [showPromoInput, setShowPromoInput] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromoCode, setAppliedPromoCode] = useState<string | null>(null);
  const [discountRate, setDiscountRate] = useState<number | null>(null);

  const handleApplyPromo = () => {
    const promo = PROMOCODES.find((promocode) => promocode.code === promoCode);
    if (promo) {
      setAppliedPromoCode(promo.code);
      setDiscountRate(promo.discountRate);
      onPromoCodeApplied(promo.discountRate, promo.code);
      setShowPromoInput(false);
    } else {
      alert("Invalid promo code");
    }
    setPromoCode("");
  };

  const handleRemovePromo = () => {
    setAppliedPromoCode(null);
    setDiscountRate(null);
    onPromoCodeRemoved();
    setShowPromoInput(false);
  };

  return (
    <div className="relative h-10">
      <AnimatePresence mode="wait">
        {!appliedPromoCode ? (
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
            key="promo-applied"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-between text-sm absolute inset-0"
          >
            <p className="text-muted-foreground text-emerald-500 font-semibold">
              Promo &quot;{appliedPromoCode}&quot; applied! ({discountRate}% off)
            </p>
            <Button size="sm" variant={"link"} onClick={handleRemovePromo}>
              <X size={20} />
            </Button>
          </motion.div>
        )}
        {showPromoInput && !appliedPromoCode && (
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
