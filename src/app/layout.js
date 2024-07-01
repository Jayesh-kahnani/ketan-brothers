import "@/../public/assets/vendor/bootstrap/css/bootstrap.min.css";
import "@/../public/assets/vendor/aos/aos.css";
import "@/../public/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "@/../public/assets/vendor/boxicons/css/boxicons.min.css";
import "@/../public/assets/vendor/glightbox/css/glightbox.min.css";
import "@/../public/assets/vendor/swiper/swiper-bundle.min.css";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Script from "next/script";
const openSans = Open_Sans({
  subsets: [
    "latin",
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "greek-ext",
    "hebrew",
    "latin",
    "latin-ext",
    "math",
    "symbols",
    "vietnamese",
  ],
});

export const metadata = {
  title: "Ketan-brothers",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={openSans.className}>
        {children}
        <Script src="assets/vendor/aos/aos.js"></Script>
        <Script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>
        <Script src="assets/vendor/glightbox/js/glightbox.min.js"></Script>
        <Script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></Script>
        <Script src="assets/vendor/swiper/swiper-bundle.min.js"></Script>

        {/* <!-- Template Main JS File --> */}
        <Script src="assets/js/main.js"></Script>
      </body>
    </html>
  );
}
