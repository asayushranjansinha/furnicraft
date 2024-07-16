import { useState, useEffect } from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import "./offer-timer.css";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

function OfferTimer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="space-y-3 px-2"
      aria-labelledby="offer-timer-heading"
      role="timer"
    >
      <h3 id="offer-timer-heading" className="headline-7 text-center py-2">
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
      <Separator className="w-full" />
    </section>
  );
}

export default OfferTimer;
