"use client";
import React from 'react';
import { Button } from "@/components/ui/button";


interface ConfirmOrderProps {
    onNext: () => void;
  }
const ConfirmOrder:React.FC<ConfirmOrderProps> = ({ onNext }) => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Confirm Your Order</h2>
    {/* Add order summary and confirmation details here */}
    <Button onClick={onNext} className="mt-4">Proceed to Payment</Button>
  </div>
);

export default ConfirmOrder;