"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import ConfirmOrder from "../_components/confirm-order";
import Payment from "../_components/payment";
import OrderPlaced from "../_components/order-placed";

const stages = ["Confirm", "Payment", "Placed"];
type Stage = (typeof stages)[number];

export default function CheckoutPage() {
  const [currentStage, setCurrentStage] = useState(0);
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  useEffect(() => {
    if (currentStage > 0) {
      setCompletedStages((prev) => [...prev, currentStage - 1]);
    }
  }, [currentStage]);

  const getStageComponent = () => {
    switch (currentStage) {
      case 0:
        return <ConfirmOrder onNext={() => setCurrentStage(1)} />;
      case 1:
        return (
          <Payment
            onNext={() => setCurrentStage(2)}
            onBack={() => setCurrentStage(0)}
          />
        );
      case 2:
        return <OrderPlaced />;
      default:
        return null;
    }
  };

  return (
    <main className="flex-1">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Checkout
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-8 relative">
            {stages.map((stage, index) => (
              <div
                key={stage}
                className="flex flex-col items-center w-1/3 z-10"
              >
                <motion.div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                    completedStages.includes(index) || index === currentStage
                      ? "bg-green-500 border-green-500 text-white"
                      : "border-gray-300 text-gray-300"
                  }`}
                  initial={{ scale: 1 }}
                  animate={{
                    scale:
                      completedStages.includes(index) || index === currentStage
                        ? [1, 1.1, 1]
                        : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {completedStages.includes(index) ? (
                    <Check className="w-6 h-6" />
                  ) : (
                    index + 1
                  )}
                </motion.div>
                <div
                  className={`mt-2 text-sm ${
                    completedStages.includes(index) || index === currentStage
                      ? "text-gray-700"
                      : "text-gray-400"
                  }`}
                >
                  {stage}
                </div>
              </div>
            ))}
            <div className="absolute top-5 left-0 w-full h-1 bg-gray-200">
              <motion.div
                className="h-full bg-green-500"
                initial={{ width: "0%" }}
                animate={{
                  width: `${(currentStage / (stages.length - 1)) * 100}%`,
                }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <div className="mt-8">{getStageComponent()}</div>
        </CardContent>
      </Card>
    </main>
  );
}
