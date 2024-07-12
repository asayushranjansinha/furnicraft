import Image from "next/image";
import { Input } from "./ui/input";
import { Mail } from "lucide-react";
import { Button } from "./ui/button";

const NewsLetter = () => {
  return (
    <section id="newsletter" aria-labelledby="newsletter-heading" className="pt-10 sm:pt-12 lg:pt-16">
      <div className="relative h-[360px] bg-secondary flex flex-col space-y-8 items-center justify-center px-8">
        <Image
          src="/assets/images/background-lg.png"
          alt="Newsletter Background"
          fill
          className="hidden lg:block"
        />
        <div className="w-full flex flex-col items-center justify-center text-center">
          <h3 id="newsletter-heading" className="headline-6 relative z-10">
            Join Our Newsletter
          </h3>
          <h5 className="font-inter text-sm leading-[22px] relative z-10 w-2/3 mx-auto">
            Sign up for deals, new products and promotions
          </h5>
        </div>

        <form
          className="relative border-b-[1.5px] border-black flex items-center gap-x-0.5"
          aria-label="Newsletter Signup Form"
        >
          <Mail
            size={24}
            className="text-black"
            aria-hidden="true"
          />
          <label htmlFor="email" className="sr-only">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            className="bg-transparent border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 pl-6"
            placeholder="Your email address"
            required
            aria-describedby="email-description"
          />
          <span id="email-description" className="sr-only">
            Enter your email address to sign up for the newsletter
          </span>
          <Button
            variant={"ghost"}
            size={"sm"}
            className="ml-2"
            aria-label="Sign Up"
          >
            Signup
          </Button>
        </form>
      </div>
    </section>
  );
};
export default NewsLetter;
