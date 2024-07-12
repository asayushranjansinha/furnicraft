import { Lock, PhoneCallIcon, Ticket, TruckIcon } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-10 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="our-features-heading" className="headline-5">
          Our Features
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-6 sm:py-8">
          <div className="col-span-1 bg-secondary h-[200px] lg:h-60">
            <div className="space-y-4 px-4 py-8 lg:px-8 lg:py-12">
              <TruckIcon size={48} />
              <div className="">
                <h6 className="headline-7">Free Shipping</h6>
                <p className="font-poppins text-base leading-6 text-muted-foreground">
                  Order above $200
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 bg-secondary h-[200px] lg:h-60">
            <div className="space-y-4 px-4 py-8 lg:px-8 lg:py-12">
              <Ticket size={48} />
              <div className="">
                <h6 className="headline-7">Money-back</h6>
                <p className="font-poppins text-base leading-6 text-muted-foreground">
                  30 days guarantee
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 bg-secondary h-[200px] lg:h-60">
            <div className="space-y-4 px-4 py-8 lg:px-8 lg:py-12">
              <Lock size={48} />
              <div className="">
                <h6 className="headline-7">Secure Payments</h6>
                <p className="font-poppins text-base leading-6 text-muted-foreground">
                  Secured by Stripe
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 bg-secondary h-[200px] lg:h-60">
            <div className="space-y-4 px-4 py-8 lg:px-8 lg:py-12">
              <PhoneCallIcon size={48} />
              <div className="">
                <h6 className="headline-7">24/7 Support</h6>
                <p className="font-poppins text-base leading-6 text-muted-foreground">
                  Phone and Email support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
