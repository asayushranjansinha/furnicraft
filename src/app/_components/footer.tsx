import Logo from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/product", label: "Product" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
];

const socialLinks = [
  { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-slate-800 py-12 text-slate-200"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="space-y-6 max-w-sm">
            <Logo className="h-10" />
            <p className="text-sm leading-6">
              Elevating homes with timeless elegance and comfort since 1990.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map(({ Icon, href, label }) => (
                <Button key={label} variant="ghost" size="icon" asChild>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-x-12 gap-y-8">
            <div>
              <h3 className="text-sm font-semibold leading-6 mb-4">Shop</h3>
              <ul role="list" className="space-y-3">
                {footerLinks.slice(0, 3).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm leading-6 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 mb-4">Support</h3>
              <ul role="list" className="space-y-3">
                {footerLinks.slice(3).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm leading-6 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Separator className="my-8 bg-slate-700" />
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          <p className="text-xs leading-5 text-center md:text-left">
            &copy; {currentYear} Furnicraft. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Button variant="link" size="sm" asChild>
              <Link href="/privacy-policy" className="text-slate-200 hover:text-white">
                Privacy Policy
              </Link>
            </Button>
            <Button variant="link" size="sm" asChild>
              <Link href="/terms-of-service" className="text-slate-200 hover:text-white">
                Terms of Service
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;