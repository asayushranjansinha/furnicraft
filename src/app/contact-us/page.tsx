"use client";
import Breadcrumbs from "@/components/breadcrumbs";
import Navbar from "@/components/shared/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, LucideIcon } from "lucide-react";
import Footer from "../_components/footer";
import React from "react";

export default function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header id="shop-header" className="sticky top-0 left-0 right-0 z-50 bg-white shadow-md">
        <Navbar />
        <Breadcrumbs />
      </header>

      <main className="flex-1 flex items-center justify-center py-8">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 bg-blue-400 text-white">
                <h1 className="text-3xl font-poppins font-semibold line-clamp-2 mb-6">Contact Information</h1>
                <div className="space-y-4">
                  <ContactInfoItem icon={MapPin} content="123 Furniture Lane, Design City, DC 12345" />
                  <ContactInfoItem icon={Phone} content="(+91) 8709415598" />
                  <ContactInfoItem icon={Mail} content="asayushranjansinha@gmail.com" />
                  <ContactInfoItem icon={Clock} content="Mon-Fri: 9AM-6PM, Sat: 10AM-4PM, Sun: Closed" />
                </div>
                <div className="mt-8">
                  <h4 className="text-2xl font-poppins font-medium mb-4">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <SocialLink href="#" icon={Facebook} />
                    <SocialLink href="#" icon={Twitter} />
                    <SocialLink href="#" icon={Instagram} />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-poppins font-medium mb-6">Send us a message</h4>
                <form className="space-y-4">
                  <Input placeholder="Your Name" className="rounded-full" />
                  <Input type="email" placeholder="Your Email" className="rounded-full" />
                  <Input placeholder="Subject" className="rounded-full" />
                  <Textarea placeholder="Your Message" rows={3} className="rounded-2xl" />
                  <Button className="w-full rounded-full text-lg py-4" size="lg">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

interface ContactInfoItemProps {
  icon: LucideIcon;
  content: string;
}

function ContactInfoItem({ icon: Icon, content }: ContactInfoItemProps) {
  return (
    <div className="flex items-center space-x-3">
      <div className="bg-blue-500 p-2 rounded-full">
        <Icon className="w-5 h-5" />
      </div>
      <p className="text-sm md:text-base">{content}</p>
    </div>
  );
}

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
}

function SocialLink({ href, icon: Icon }: SocialLinkProps) {
  return (
    <a href={href} className="bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition-colors">
      <Icon className="w-5 h-5" />
    </a>
  );
}