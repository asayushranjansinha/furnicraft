import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoveRight } from "lucide-react";
import Image from "next/image";

const NewsletterSection = () => {
  return (
    <section className="overflow-hidden bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 sm:py-6 lg:py-12">
        {/* Background for smaller screens */}
        <div className="absolute inset-0 z-0 lg:hidden">
          <Image
            src="/assets/images/newsletter-interior-1.jpg"
            alt="Stylish Interior"
            fill
            sizes="(max-width: 1023px) 100vw"
            quality={60}
            priority
            className="object-cover opacity-20"
          />
        </div>

        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left image for large screens */}
            <figure className="hidden lg:block w-1/4">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/assets/images/newsletter-interior-1.jpg"
                  alt="Stylish Interior"
                  fill
                  sizes="(min-width: 1024px) 25vw"
                  quality={85}
                  className="object-cover"
                />
              </div>
            </figure>

            {/* Newsletter subscription form */}
            <div className="w-full lg:w-2/4 text-center bg-white bg-opacity-90 p-8 rounded-3xl shadow-lg">
              <h2 className="text-2xl font-medium sm:text-3xl tracking-tight mb-4">
                Stay Ahead in Style: Exclusive Updates and Design Tips
              </h2>
              <p className="mb-6 text-gray-600 text-base">
                Subscribe to receive exclusive offers, design tips, and
                inspiration straight to your inbox!
              </p>
              <form>
                <div className="p-1">
                  <div className="bg-white p-3 flex items-center justify-between border rounded-3xl group transition-all duration-300 ease-in-out hover:shadow-md focus-within:ring-2 focus-within:ring-primary">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      aria-label="Email for newsletter"
                      className="flex-grow bg-transparent rounded-full ring-0 outline-none border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 px-4 text-base"
                    />
                    <Button
                      type="submit"
                      className="rounded-full aspect-square p-2 flex items-center justify-center group relative"
                    >
                      <span className="sr-only">Subscribe</span>
                      <MoveRight
                        size={20}
                        className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Button>
                  </div>
                </div>
              </form>
            </div>

            {/* Right image for large screens */}
            <figure className="hidden lg:block w-1/4">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/assets/images/newsletter-interior-2.jpg"
                  alt="Modern Furniture"
                  fill
                  sizes="(min-width: 1024px) 25vw"
                  quality={85}
                  className="object-cover"
                />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
