"use client";
import React from "react";
import { Button } from "@/components/ui/button";
interface PaymentProps {
  onNext: () => void;
  onBack: () => void;
}
const Payment: React.FC<PaymentProps> = ({ onNext, onBack }) => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
    {/* Add payment form and options here */}
    <div className="flex justify-between mt-4">
      <Button onClick={onBack} variant="outline">
        Back
      </Button>
      <Button onClick={onNext}>Complete Order</Button>
    </div>
  </div>
);

export default Payment;
