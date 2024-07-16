import Image from "next/image";
import LinkButton from "./shared/link-button";

const Articles = () => {
  return (
    <section
      id="articles"
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8"
    >
      <div>
        <div className="flex justify-between items-end">
          <h2 className="headline-5  ">Articles</h2>
          <LinkButton href="#" title="More Articles" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-6 sm:py-8">
          <div className="col-span-1 space-y-4">
            <div className="relative h-[18rem]">
              <Image
                src="/assets/images/article-1.png"
                fill
                className="lg:hidden"
                alt="Article 1"
              />
              <Image
                src="/assets/images/article-1-lg.png"
                fill
                className="hidden lg:block"
                alt="Article 1"
              />
            </div>
            <h3 className="body-2-semibold">7 ways to decor your home</h3>
            <LinkButton title="Read More" href="#" />
          </div>
          <div className="col-span-1 space-y-4">
            <div className="relative h-[18rem]">
              <Image
                src="/assets/images/article-2.png"
                fill
                className="lg:hidden"
                alt="Article 2"
              />
              <Image
                src="/assets/images/article-2-lg.png"
                fill
                className="hidden lg:block"
                alt="Article 2"
              />
            </div>
            <h3 className="body-2-semibold">Kitchen organization</h3>
            <LinkButton title="Read More" href="#" />
          </div>
          <div className="col-span-1 space-y-4">
            <div className="relative h-[18rem]">
              <Image
                src="/assets/images/article-3.png"
                fill
                className="lg:hidden"
                alt="Article 3"
              />
              <Image
                src="/assets/images/article-3-lg.png"
                fill
                className="hidden lg:block"
                alt="Article 3"
              />
            </div>
            <h3 className="body-2-semibold">Decor your bedroom</h3>
            <LinkButton title="Read More" href="#" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Articles;
