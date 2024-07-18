import Image from "next/image";

const ShopBanner = () => {
  return (
    <section aria-label="Product list banner">
      <div
        className="relative h-[30vh] min-h-[250px] max-h-[500px] bg-secondary"
        role="img"
        aria-label="Product list banner Image"
      >
        <Image
          src="/assets/images/banner-shop.png"
          alt="Product list banner image"
          fill
          priority
          className="lg:hidden"
          //   placeholder='blur'
        />
        <Image
          src="/assets/images/banner-shop-lg.png"
          alt="Product list banner image"
          fill
          priority
          className="hidden lg:block"
          //   placeholder='blur'
        />
      </div>
    </section>
  );
};

export default ShopBanner;
