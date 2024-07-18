"use client";
import Breadcrumbs from "@/components/breadcrumbs";
import Navbar from "@/components/shared/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Footer from "../_components/footer";

export default function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header id="shop-header" className="sticky top-0 left-0 right-0 z-50">
        <Navbar />
        <Breadcrumbs />
      </header>

      <main className="w-full flex-1 flex flex-col max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 !pt-0">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section>
            <Card className="rounded-lg shadow-md bg-white h-full">
              <CardHeader className="bg-indigo-50 rounded-t-lg">
                <CardTitle className="text-2xl font-semibold text-indigo-700">
                  Send us a message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your Name"
                      className="w-full border-indigo-200 focus:border-indigo-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your Email"
                      className="w-full border-indigo-200 focus:border-indigo-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-gray-700"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Subject"
                      className="w-full border-indigo-200 focus:border-indigo-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your Message"
                      rows={4}
                      className="w-full border-indigo-200 focus:border-indigo-400"
                    />
                  </div>
                  <Button
                    className="w-full rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-lg py-3"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="h-full w-full bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg shadow-md border-none">
              <CardHeader className="bg-indigo-100 rounded-t-lg">
                <CardTitle className="text-2xl font-semibold text-indigo-700">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-600">
                        123 Furniture Lane, Design City, DC 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">info@furnicraft.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Business Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9AM - 6PM
                      </p>
                      <p className="text-gray-600">Saturday: 10AM - 4PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    {/* Add social media icons or links here */}
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      Facebook
                    </a>
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      Twitter
                    </a>
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
