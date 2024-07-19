import Image from "next/image";
import LinkButton from "./shared/link-button";

const ArticleCard: React.FC<{ src: string; alt: string; title: string }> = ({ src, alt, title }) => (
  <div className="group">
    <div className="relative aspect-[16/9] overflow-hidden">
      <Image 
        src={src} 
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="mt-4">
      <h3 className="body-2-semibold line-clamp-2">{title}</h3>
      <LinkButton 
        title="Read More" 
        href="#" 
      />
    </div>
  </div>
);

const Articles: React.FC = () => {
  const articles = [
    { src: "/assets/images/home-decor.jpg", alt: "Home decor ideas", title: "7 ways to decor your home" },
    { src: "/assets/images/kitchen-organization.jpg", alt: "Kitchen organization tips", title: "Kitchen organization" },
    { src: "/assets/images/bedroom.jpg", alt: "Bedroom decoration ideas", title: "Decor your bedroom" },
  ];

  return (
    <section
      id="articles"
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8"
    >
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="headline-5">Articles</h2>
          <LinkButton 
            href="#" 
            title="More Articles" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className={index === 2 ? 'md:col-start-1 md:col-end-3 lg:col-start-auto lg:col-end-auto' : ''}>
              <div className={index === 2 ? 'md:w-1/2 md:mx-auto lg:w-full' : ''}>
                <ArticleCard {...article} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;