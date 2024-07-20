import Breadcrumbs from "@/components/breadcrumbs";
import Navbar from "@/components/shared/navbar";
import { ReactNode } from "react";
import Footer from "../_components/footer";
import { ProductsViewProvider } from "@/contexts/product-view-context";

interface ShopGroupLayoutProps {
  children: ReactNode;
}
export default function ShopGroupLayout({ children }: ShopGroupLayoutProps) {
  return (
    <ProductsViewProvider>
      <div className="flex flex-col min-h-screen">
        <header id="shop-header" className="sticky top-0 left-0 right-0 z-50">
          <Navbar />
          <Breadcrumbs />
        </header>

        <main className="w-full flex-1 flex flex-col max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 !pt-0">
          {children}
        </main>
        <Footer />
      </div>
    </ProductsViewProvider>
  );
}
