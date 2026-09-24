import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const SchoolFurniture = lazy(() => import("./pages/SchoolFurniture"));
const SportsSolutions = lazy(() => import("./pages/SportsSolutions"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const Quote = lazy(() => import("./pages/Quote"));
const NotFound = lazy(() => import("./pages/NotFound"));

const Privacy = lazy(() =>
  import("./pages/Legal").then((module) => ({
    default: module.Privacy,
  }))
);

const Terms = lazy(() =>
  import("./pages/Legal").then((module) => ({
    default: module.Terms,
  }))
);

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-paper">
      <div
        className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-lime"
        aria-label="Loading"
      />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <main className="min-h-screen overflow-x-clip">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            {/* School Furniture */}
            <Route
              path="/school-furniture"
              element={<SchoolFurniture />}
            />

            <Route
              path="/school-furniture/:slug"
              element={
                <ProductDetails category="School Furniture" />
              }
            />

            {/* Sports */}
            <Route
              path="/sports-solutions"
              element={<SportsSolutions />}
            />

            <Route
              path="/sports-solutions/:slug"
              element={
                <ProductDetails category="Sports Infrastructure" />
              }
            />

            {/* Projects / Contact */}
            <Route path="/gallery" element={<Gallery />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/get-quote" element={<Quote />} />

            {/* Legal */}
            <Route
              path="/privacy-policy"
              element={<Privacy />}
            />

            <Route
              path="/terms-and-conditions"
              element={<Terms />}
            />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </>
  );
}