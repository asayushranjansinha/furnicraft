import Link from "next/link";
import Logo from "./shared/logo";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="bg-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-6 space-y-4">
        <div className="flex flex-col items-center lg:flex-row gap-6 justify-between">
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <Logo className="text-white" />
            <Separator
              orientation="vertical"
              className="hidden lg:block h-6 ml-2 bg-neutral-700"
            />
            <h5 className="text-white">Furniture Store</h5>
          </div>

          {/* Navlinks */}
          <nav
            aria-label="Footer Navigation"
            className="flex flex-col lg:flex-row items-center gap-4 text-white"
          >
            <Link href="/" className="caption-1 hover:underline">
              Home
            </Link>
            <Link href="/shop" className="caption-1 hover:underline">
              Shop
            </Link>
            <Link href="/product" className="caption-1 hover:underline">
              Product
            </Link>
            <Link href="/blog" className="caption-1 hover:underline">
              Blog
            </Link>
            <Link href="/contact-us" className="caption-1 hover:underline">
              Contact Us
            </Link>
            <Link href="/privacy-policy" className="caption-1 hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="caption-1 hover:underline">
              Terms of Service
            </Link>
          </nav>
        </div>

        <Separator orientation="horizontal" className="bg-neutral-700" />

        <div className="text-center text-white text-sm">
          &copy; {new Date().getFullYear()} Furnicraft. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
