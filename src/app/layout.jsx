import Navbar from "@/Components/navbar"; 
import Footer from "@/Components/footer";
import "./globals.css";

const Layout = ({ children }) => {
  return (
    <html lang="ru">
      <body className="bg-[#F5F5F0] text-[#6B5E4C] min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24 px-6 md:px-12">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}

export default Layout;