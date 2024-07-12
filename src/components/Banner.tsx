import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LinkButton from "./shared/link-button";

const Banner = () => {
  return (
    <section id="banner">
      <div className="py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-[360px] lg:h-[530px] w-full">
            <Image
              src={"/assets/images/banner2.png"}
              alt="Banner"
              fill
              className="lg:hidden object-cover"
            />
            <Image
              src={"/assets/images/banner2-lg.png"}
              alt="Banner"
              fill
              className="hidden lg:block object-cover"
            />
          </div>
          <div className="h-[360px] lg:h-[530px] w-full bg-secondary">
            <div className="h-full lg:w-2/3 flex flex-col justify-center space-y-6 px-8">
              <span className="uppercase hairline-1  text-blue-500">
                SALE UP TO 35% OFF
              </span>
              <h5 className="headline-5 lg:headline-4">
                HUNDREDS of New lower prices!
              </h5>

              <p className="body-2 lg:body-1 text-neutral-700">
                It&apos;s more affordable than ever to give every room in your
                home a stylish makeover
              </p>

              <div className="">
                <LinkButton href="#" title="Shop Now" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
