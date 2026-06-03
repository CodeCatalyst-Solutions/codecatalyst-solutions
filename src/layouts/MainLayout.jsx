import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BottomNav from "../components/layout/BottomNav";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="bg-[#080c14] text-white min-h-screen transition-colors duration-300">
      <Navbar />
      <main className="pt-24 pb-20 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}