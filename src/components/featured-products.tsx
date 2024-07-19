import Image from "next/image";
import LinkButton from "./shared/link-button";

const FeaturedProducts = () => {
  return (
    <section
      id="featured-products"
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8"
    >
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Living Room Section */}
        <div className="relative h-[23rem] lg:h-[34rem] overflow-hidden group">
          <Image
            src="/assets/images/livingroom.jpg"
            alt="Stylish living room setup with a modern sofa"
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent group-hover:from-black/70">
            <div className="h-full p-8 flex flex-col justify-end">
              <h2 className="font-medium text-2xl sm:text-3xl lg:text-4xl text-white mb-4">
                Living Room
              </h2>
              <div>
                <LinkButton
                  href="/living-room"
                  title="Shop Now"
                  className="text-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bedroom and Kitchen Grid */}
        <div className="grid gap-6">
          {["Bedroom", "Kitchen"].map((room) => (
            <div
              key={room}
              className="relative h-[10.75rem] lg:h-[16.25rem] overflow-hidden group"
            >
              <Image
                src={`/assets/images/${room.toLowerCase()}.jpg`}
                alt={`${room} furniture and decor`}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent group-hover:from-black/70">
                <div className="h-full p-8 flex flex-col justify-end">
                  <h2 className="font-medium text-xl sm:text-2xl lg:text-3xl text-white mb-4">
                    {room}
                  </h2>
                  <div className="">
                    <LinkButton
                      href={`/${room.toLowerCase()}`}
                      title="Shop Now"
                      className="text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
