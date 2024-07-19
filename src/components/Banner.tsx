import Image from "next/image";
import LinkButton from "./shared/link-button";

const Banner: React.FC = () => {
  return (
    <section
      id="banner"
      className="bg-blue-50 py-4 sm:py-6 md:py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="group relative aspect-[4/3] lg:aspect-[16/9] w-full overflow-hidden">
            <Image
              src="/assets/images/livingroom-interior.jpg"
              alt="Stylish home interior"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="group flex flex-col justify-center space-y-6">
            <span className="uppercase text-xl font-semibold text-blue-500">
              SALE UP TO 35% OFF
            </span>
            <h1 className="text-3xl font-semibold font-poppins text-gray-900 lg:text-4xl">
              Elevate Your Home with Timeless Furniture
            </h1>
            <p className="font-poppins text-base text-gray-600 max-w-lg">
              Discover exquisite designs and premium quality furniture that
              transforms every room. Our latest collection brings you unmatched
              elegance and comfort at prices you'll love. Redefine your space
              with our stylish and affordable pieces.
            </p>
            <div className="pt-4">
              <LinkButton href="#" title="Shop Now" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
