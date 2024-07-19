"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";

interface QuantityControlProps {
  quantity: number;
  onChange: (newQuantity: number) => void;
}

export const QuantityControl: React.FC<QuantityControlProps> = ({
  quantity,
  onChange,
}) => (
  <div
    className="flex items-center space-x-2"
    role="group"
    aria-label="Quantity control"
  >
    <Button
      variant="outline"
      size="icon"
      onClick={() => onChange(Math.max(1, quantity - 1))}
      aria-label="Decrease quantity"
    >
      <Minus className="h-4 w-4" />
    </Button>
    <Input
      className="w-16 text-center"
      type="number"
      value={quantity}
      onChange={(e) => onChange(Math.max(1, parseInt(e.target.value) || 1))}
      min={1}
      aria-label="Quantity"
    />
    <Button
      variant="outline"
      size="icon"
      onClick={() => onChange(quantity + 1)}
      aria-label="Increase quantity"
    >
      <Plus className="h-4 w-4" />
    </Button>
  </div>
);