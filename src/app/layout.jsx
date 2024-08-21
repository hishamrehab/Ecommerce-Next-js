import { Inter } from "next/font/google";
import "./globals.css";
import NavItems from "./components/NavItems";
import AuthProvider from "./context/AuthProvider";
import Footer from "./components/Footer";
// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// fonts and icons
import "././assets/css/icofont.min.css";
import "././assets/css/animate.css";
import "././assets/css/style.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hisham Rehab Ecommerce Website",
  description: "Developed a feature-rich ecommerce platform, 'ShopEase,' incorporating a seamless user interface with advanced search and filtering options. The website supports secure payment gateways, dynamic product listings, user reviews, and a personalized recommendation system. Integrated responsive design ensures optimal performance across devices. Implemented robust analytics tools to track user behavior and sales trends, driving data-informed decision-making. Enhanced customer experience with an efficient order management system and real-time inventory updates",
};

export default function RootLayout({
  children
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          <NavItems />
          {children}
          <Footer />
        </body>
      </AuthProvider>
    </html>
  );
}
