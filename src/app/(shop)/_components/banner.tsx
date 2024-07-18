import Image from "next/image";

const ShopBanner = () => {
  return (
    <section aria-label="Product list banner" className="relative w-full">
      <div className="relative aspect-[16/9] w-full max-h-[512px]">
        <Image
          src="/assets/images/banner-shop-lg.png"
          alt="Product list banner image"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          quality={90}
          placeholder="blur"
          blurDataURL="/assets/images/banner-shop-placeholder.jpg"
        />
      </div>
    </section>
  );
};

export default ShopBanner;
