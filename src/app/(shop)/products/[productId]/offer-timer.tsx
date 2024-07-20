import { Skeleton } from "@/components/ui/skeleton";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { useEffect, useState } from "react";
import "./offer-timer.css";

function OfferTimer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="mt-auto space-y-4"
      aria-labelledby="offer-timer-heading"
      role="timer"
      
    >
      <h3
        id="offer-timer-heading"
        className="text-center text-xl font-medium font-poppins md:font-semibold"
      >
        Offer expires in
      </h3>
      {mounted ? (
        <div className="flex justify-center">
          <FlipClockCountdown
            to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
            className="flip-clock"
            labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
            showLabels={true}
            showSeparators={true}
          />
        </div>
      ) : (
        <div className="flex justify-center space-x-3">
          <Skeleton className="h-16 w-16" />
          <Skeleton className="h-16 w-16" />
          <Skeleton className="h-16 w-16" />
          <Skeleton className="h-16 w-16" />
        </div>
      )}
    </div>
  );
}

export default OfferTimer;
