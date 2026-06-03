import { Analytics } from "@vercel/analytics/react";
import AppRoutes from "./routes/AppRoutes";
import ScrollProgress from "./components/common/ScrollProgress";
import BackToTop from "./components/common/BackToTop";
import ScrollToTop from "./components/common/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <BackToTop />
      <AppRoutes />
      <Analytics />
    </>
  );
}