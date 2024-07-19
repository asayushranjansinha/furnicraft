import Image from "next/image";
import LinkButton from "./shared/link-button";

const Banner: React.FC = () => {
  return (
    <section id="banner" className=" bg-gradient-to-r from-secondary to-sky-50 py-4 sm:py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[4/3] lg:aspect-[16/9] w-full overflow-hidden v ">
            <Image
              src="/assets/images/livingroom-interior.jpg"
              alt="Stylish home interior"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-6 ">
            <span className="uppercase hairline-1  text-blue-500">
              SALE UP TO 35% OFF
            </span>
            <h2 className="headline-5 lg:headline-4">
              HUNDREDS of New lower prices!
            </h2>
            <p className="body-2 lg:body-1 text-gray-600 max-w-lg">
              It&spos;s more affordable than ever to give every room in your home a
              stylish makeover. Discover our latest collection and transform
              your space.
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
