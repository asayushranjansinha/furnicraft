"use client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import type { StepItem } from "@/components/ui/stepper";
import { Step, Stepper, useStepper } from "@/components/ui/stepper";
import { CircleCheck, CreditCard, Package } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ConfirmOrder from "../_components/confirm-order";
import OrderPlaced from "../_components/order-placed";
import Payment from "../_components/payment";

const steps = [
  { label: "Confirm Order", icon: CircleCheck },
  { label: "Payment", icon: CreditCard },
  { label: "Order Placed", icon: Package },
] satisfies StepItem[];

export default function CheckoutPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex w-full flex-col gap-4">
      {isLoaded ? (
        <Stepper
          responsive={true}
          initialStep={0}
          steps={steps}
          // scrollTracking
        >
          {steps.map((stepProps, index) => {
            switch (index) {
              case 0:
                return (
                  <Step key={stepProps.label} {...stepProps}>
                    <ConfirmOrder />
                    <StepButtons />
                  </Step>
                );
              case 1:
                return (
                  <Step key={stepProps.label} {...stepProps}>
                    <Payment />
                    <StepButtons />
                  </Step>
                );
              case 2:
                return (
                  <Step key={stepProps.label} {...stepProps}>
                    <OrderPlaced />
                    <StepButtons />
                  </Step>
                );
              default:
                return null;
            }
          })}
        </Stepper>
      ) : (
        <StepperSkeleton />
      )}
    </div>
  );
}

function StepperSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="flex items-center space-x-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  );
}

function StepButtons() {
  const router = useRouter();

  const { nextStep, prevStep, isLastStep, activeStep } = useStepper();

  function handlePrevStep() {
    if (activeStep === 0) {
      router.push("/cart");
    } else {
      prevStep();
    }
  }
  function handleNextStep() {
    if (isLastStep) {
      nextStep();
      router.push("/");
    } else {
      nextStep();
    }
  }
  console.log(activeStep);
  return (
    <div className="mb-4 flex w-full gap-2">
      <Button
        disabled={activeStep === 2}
        onClick={handlePrevStep}
        size="sm"
        variant="secondary"
      >
        Back
      </Button>
      <Button size="sm" onClick={handleNextStep}>
        {isLastStep ? "Return Home" : "Continue"}
      </Button>
    </div>
  );
}
