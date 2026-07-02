import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo & About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-black flex items-center justify-center rounded">
                <span className="text-white text-xl font-bold">S</span>
              </div>

              <h2 className="text-xl font-bold text-black">
                ShopMart
              </h2>
            </div>

            <p className="text-gray-600 text-sm leading-6 mb-6">
              Your one-stop destination for technology, fashion and lifestyle
              products. Shop with confidence through quality products, fast
              shipping and excellent customer support.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span>October City, Giza, Egypt</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Phone size={18} />
                <span>(+20) 01102827825</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-600 break-all">
                <Mail size={18} />
                <span>support@shopmart.com</span>
              </div>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-black font-semibold mb-5">
              Shop
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/categories"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  Electronics
                </Link>
              </li>

              <li>
                <Link
                  href="/categories"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  Fashion
                </Link>
              </li>

              <li>
                <Link
                  href="/categories"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  Home & Living
                </Link>
              </li>

              <li>
                <Link
                  href="/categories"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  Sports
                </Link>
              </li>

              <li>
                <Link
                  href="/categories"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  Deals
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-black font-semibold mb-5">
              Customer Service
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  href="/help"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  Help Center
                </Link>
              </li>

              <li>
                <Link
                  href="/track-order"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  Track Your Order
                </Link>
              </li>

              <li>
                <Link
                  href="/returns"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  Returns & Exchanges
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-black font-semibold mb-5">
              About
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  About ShopMart
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms-of-service"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  Terms of Service
                </Link>
              </li>

              <li>
                <Link
                  href="/shipping-policy"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  Shipping Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/refund-policy"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}

        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">

          <p className="text-center md:text-left">
            © {new Date().getFullYear()} ShopMart. All rights reserved.
          </p>

            <p className="text-center md:text-right">
            Secure shopping powered by Next.js & Tailwind CSS
            </p>

        </div>
      </div>
    </footer>
  );
}