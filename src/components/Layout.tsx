import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-void text-ink">
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:bg-viol focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-void"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1 overflow-clip" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
